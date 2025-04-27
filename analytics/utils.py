from django.db.models import Sum
from django.db.models.functions import TruncMonth
from django.utils import timezone
from dateutil.relativedelta import relativedelta

from spendings.models import Spending

def predict_next_month_sum(user, months=12):
    today = timezone.localdate()
    start = today.replace(day=1) - relativedelta(months=months)

    qs = (Spending.objects.filter(user=user, date__gte=start).annotate(month=TruncMonth('date')).values('month').annotate(total=Sum('price')).order_by('month'))
    totals = [r['total'] for r in qs if r['total'] and r['total'] > 0]
    if not totals:
        return 0.0
    return sum(totals) / len(totals)