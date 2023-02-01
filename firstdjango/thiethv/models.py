from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    avatar = models.ImageField(upload_to='upload/%Y/%m')


# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100, null=False, unique=True)


class Course(models.Model):
    subject = models.CharField(max_length=255, null=False)
    discription = models.CharField(null=True, blank=True, max_length=400)
    created_date = models.DateField(auto_now_add=True)
    updated_date = models.DateField(auto_now=True)
    active = models.BooleanField(default=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)
