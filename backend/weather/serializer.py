'''Here we specify the model to work with and the fields we want to be converted to JSON.'''

from rest_framework import serializers
from .models import Weather


class WeatherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Weather
        fields = ('city', 'Day0', 'Day1', 'Day2', 'Day3', 'Day4', 'Day5', 'Day6', 'Day7')
