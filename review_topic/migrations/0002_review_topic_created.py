# -*- coding: utf-8 -*-
# Generated by Django 1.11.6 on 2018-04-03 11:26
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('review_topic', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='review_topic',
            name='created',
            field=models.DateTimeField(auto_now_add=True, default=django.utils.timezone.now),
            preserve_default=False,
        ),
    ]
