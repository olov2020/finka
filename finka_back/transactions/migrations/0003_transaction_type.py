# Generated by Django 5.1.6 on 2025-03-09 21:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        (
            "transactions",
            "0002_alter_transaction_amount_alter_transaction_category_and_more",
        ),
    ]

    operations = [
        migrations.AddField(
            model_name="transaction",
            name="type",
            field=models.CharField(default="Доход", max_length=10),
        ),
    ]
