from django.db import models

# Create your models here.

class Venue(models.Model):
    name = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    capacity = models.CharField(max_length=100)
    photo_url = models.CharField(max_length=100)

    def __str__(self):
        return self.name



class Event(models.Model):
    venue = models.ForeignKey(Venue, on_delete=models.CASCADE, related_name='events')
    photo_url = models.URLField(null=True)
    name = models.CharField(max_length=100)
    price = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    date = models.CharField(max_length=100)
    is_sold_out = models.BooleanField()
    link = models.CharField(max_length=200, default="")



    def __str__(self):
        return self.name