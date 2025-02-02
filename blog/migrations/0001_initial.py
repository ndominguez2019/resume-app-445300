# Generated by Django 5.1.4 on 2025-01-11 16:48

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255)),
                ('content', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=255)),
                ('last_name', models.CharField(max_length=255)),
                ('headline', models.CharField(max_length=255)),
                ('location', models.CharField(max_length=255)),
                ('about', models.TextField(blank=True)),
                ('email', models.EmailField(blank=True, max_length=255)),
                ('phone_number', models.CharField(blank=True, max_length=20)),
                ('linkedin_url', models.URLField(blank=True, max_length=255)),
                ('profile_picture', models.ImageField(blank=True, upload_to='profile_pictures/')),
            ],
        ),
        migrations.CreateModel(
            name='Experience',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('company', models.CharField(max_length=255)),
                ('position', models.CharField(max_length=255)),
                ('start_date', models.DateField()),
                ('end_date', models.DateField(blank=True, null=True)),
                ('description', models.TextField(blank=True)),
                ('profile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='blog.profile')),
            ],
        ),
        migrations.CreateModel(
            name='Education',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('institution', models.CharField(max_length=255)),
                ('degree', models.CharField(max_length=255)),
                ('start_date', models.DateField()),
                ('end_date', models.DateField(blank=True, null=True)),
                ('description', models.TextField(blank=True)),
                ('profile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='blog.profile')),
            ],
        ),
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('level', models.CharField(blank=True, max_length=255)),
                ('profile', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='blog.profile')),
            ],
        ),
    ]
