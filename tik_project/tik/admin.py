from django.contrib import admin
from .models import Venue, Event
# Register your models here.

admin.site.register(Venue)
admin.site.register(Event)