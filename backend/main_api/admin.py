from django.contrib import admin

# Register your models here.
from .models import Category, Product, Order
# Register your models here.

class CategoryAdmin(admin.ModelAdmin):
    list = ('title', 'details')

    admin.site.register(Category)
    
class ProductAdmin(admin.ModelAdmin):
    list = ('title', 'details', 'category', 'price', 'image', 'status')

    admin.site.register(Product)


class OrderAdmin(admin.ModelAdmin):
    list = ("id",'product',"price","qty", "image","total")

    admin.site.register(Order)