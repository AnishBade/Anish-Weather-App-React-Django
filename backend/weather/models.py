from django.db import models


class Weather(models.Model):
    city_id=models.IntegerField(primary_key = True)
    city = models.CharField(max_length=120)
    Day0 = models.CharField(max_length=30)
    Day1 = models.CharField(max_length=30)
    Day2 = models.CharField(max_length=30)
    Day3 = models.CharField(max_length=30)
    Day4 = models.CharField(max_length=30)
    Day5 = models.CharField(max_length=30)
    Day6 = models.CharField(max_length=30)
    Day7 = models.CharField(max_length=30)
    

    def _str_(self):
        return self.title
