from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Category(models.Model):
    title = models.CharField(max_length=70, blank=False, default='')
    details = models.TextField(max_length=200,blank=False, default='', null=True)

    def __str__(self):
        return self.title
    

class Product(models.Model):
    category= models.ForeignKey(Category, on_delete = models.SET_NULL, blank = True, null = True)
    title = models.CharField(max_length=70, blank=False, default='')
    details = models.TextField(max_length=200,blank=False, default='', null=True)
    price = models.FloatField()
    image = models.ImageField( null=True, blank=True)
    status = models.BooleanField(default = False, blank = True)

    def __str__(self):
        return self.title
    

class Order(models.Model):
    user= models.ForeignKey(User, on_delete = models.CASCADE)
    product= models.ForeignKey(Product, on_delete = models.CASCADE)
    timestamp = models.DateTimeField(auto_now_add = True, auto_now = False, blank = True)


    def __str__(self):
        return self.product.title
    