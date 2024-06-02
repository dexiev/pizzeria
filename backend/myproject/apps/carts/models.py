from django.db import models
from apps.users.models import User
from apps.items.models import Item
# Create your models here.



class Cart(models.Model):
    class Meta():
        db_table='cart'

    user=models.ForeignKey(
        User, on_delete=models.CASCADE, db_index=True
    )

    
    item= models.ForeignKey(
        Item, on_delete=models.CASCADE, db_index= True
    )


    message=models.CharField(
        'message', blank=False, null=False, max_length=200, db_index=True, default='Anonymous'
    )


    quantity=models.IntegerField(
        'quantity', blank=False, null=False, db_index=True
    )


    created_at=models.DateTimeField(
        'created at', blank=True, auto_now_add=True
    )


    updated_at=models.DateTimeField(
        'updated at', blank=True, auto_now=True
    )