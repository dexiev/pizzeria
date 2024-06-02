
from django.db import models
from cloudinary.models import CloudinaryField
from myproject.constants import *
# Create your models here.


class Item(models.Model):
    class Meta(object):
        db_table='item'




    status=models.CharField(
        'status', blank=False, default=" inactive", max_length=15, db_index=True, choices=STATUS
        )
    
    name=models.CharField(
        'name', blank=False, null= False, max_length=200, db_index=True, default='Anonymous'
    )

    message=models.CharField(
        'message', blank=False, null= False, max_length=200, db_index=True, default="Anonymous"
    )


    price=models.DecimalField(
        'price', blank=False, null=False, max_digits=14, decimal_places=2
    )


    image=CloudinaryField(
        'image', blank=False, null=False
    )


    created_at=models.DateTimeField(
        'Created at', blank=True, auto_now_add=True
    )

    updated_at=models.DateTimeField(
        'Updated at', blank=True, auto_now=True
    )


    def __str__(self):
        return self.name