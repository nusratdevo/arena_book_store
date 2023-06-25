# Generated by Django 4.2.2 on 2023-06-25 10:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_api', '0002_product_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='user',
        ),
        migrations.AddField(
            model_name='order',
            name='price',
            field=models.DecimalField(decimal_places=2, default=0, max_digits=10),
        ),
        migrations.AddField(
            model_name='order',
            name='qty',
            field=models.IntegerField(default=1),
        ),
    ]