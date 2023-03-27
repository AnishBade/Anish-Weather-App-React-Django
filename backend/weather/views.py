from django.shortcuts import render


# viewsets class provides the implementation for CRUD operations by default, what we had to do was specify the serializer class and the query set.

from rest_framework import viewsets          # add this
from .serializer import WeatherSerializer      # add this
from .models import Weather                     # add this


class WeatherView(viewsets.ModelViewSet):       # add this
    serializer_class = WeatherSerializer          # add this
    queryset = Weather.objects.all()              # add this
