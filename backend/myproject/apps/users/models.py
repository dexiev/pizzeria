from django.db import models

# Create your models here.
class User(models.Model):
    class Meta(object):
        db_table="user"
    
    user_name=models.CharField(
        "username", blank= False, null=False, max_length=20, db_index=True
    )


    email=models.EmailField(
        "email", blank=False,null=False, max_length=200, db_index=True
    )


    password=models.CharField(
        "password", blank= False, null=False, max_length=20, db_index=True
    )


    token=models.CharField(
        "token", blank= False, null=False, max_length=300, db_index=True
    )

    token_expires_at=models.DateTimeField(
        "token expires at", blank= True, null=True
    )



    created_at=models.DateTimeField(
        "created at", blank= True, auto_now_add=True
    )


    updated_at=models.DateTimeField(
        "updated at", blank= True, auto_now=True
    )







  