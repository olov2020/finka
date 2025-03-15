# Generated by Django 5.1.6 on 2025-03-10 18:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("transactions", "0003_transaction_type"),
    ]

    operations = [
        migrations.AddField(
            model_name="transaction",
            name="comment",
            field=models.TextField(blank=True),
        ),
        migrations.AlterField(
            model_name="transaction",
            name="type",
            field=models.CharField(
                choices=[("income", "Доход"), ("expense", "Расход")],
                default="income",
                max_length=10,
            ),
        ),
    ]
