from django.shortcuts import render

# Create your views here.
from .models import Product, Category
from .serializers import ProductListSerializer,  ProductDetailSerializer
from rest_framework import viewsets

from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework import generics


class ProductListView(generics.ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductListSerializer 

    # def get_queryset(self):
    #     qs=super().get_queryset()
    #     category = self.request.GET['category']
    #     category = Category.objects.get(id=category)
    #     qs =qs.filter(category=category)
    #     return qs
    


class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductDetailSerializer 
