from django.contrib import admin

from .models import Weather  # add this


class WeatherAdmin(admin.ModelAdmin):  # add this
    list_display = ('city', 'Day0', 'Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7')  # add this


# Register your models here.
admin.site.register(Weather, WeatherAdmin)  # add this
