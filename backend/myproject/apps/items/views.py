from django.shortcuts import render
from rest_framework import generics
from .serializers import ItemSerializer
from django.http import JsonResponse
from .models import Item
# Create your views here.


class ItemList(generics.ListAPIView):
    queryset=Item.objects.all()