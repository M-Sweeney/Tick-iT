from rest_framework import serializers
from .models import Venue, Event



class EventSerializer(serializers.HyperlinkedModelSerializer):
    venues = serializers.HyperlinkedRelatedField(
        view_name = 'venue_detail',
        read_only=True
    )

    class Meta:
        model = Event
        fields = ('id', 'name', 'price', 'description', 'date', 'is_sold_out', 'venues')


class VenueSerializer(serializers.HyperlinkedModelSerializer):
    events = EventSerializer(
        many=True,
        read_only=True
    )

    class Meta:
        model = Venue
        fields = ('id', 'name', 'location', 'capacity', 'photo_url', 'events')
