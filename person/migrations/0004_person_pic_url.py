# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-05-06 10:24
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('person', '0003_auto_20180325_0541'),
    ]

    operations = [
        migrations.AddField(
            model_name='person',
            name='pic_url',
            field=models.TextField(default=''),
        ),
    ]
