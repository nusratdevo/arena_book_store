from django.shortcuts import render

# Create your views here.
from .models import Order, Product, Category
from .serializers import ProductListSerializer,  ProductDetailSerializer, CategoryListSerializer, OrderListSerializer, AllProductViewSerializer, AllOrderViewSerializer
from rest_framework import viewsets

from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework import generics


# class ProductListView(generics.ListCreateAPIView):
#     queryset = Product.objects.all()
#     serializer_class = ProductListSerializer

    # def get_queryset(self):
    #     qs=super().get_queryset()
    #     category = self.request.GET['category']
    #     category = Category.objects.get(id=category)
    #     qs =qs.filter(category=category)
    #     return qs
    
class ProductListView(APIView):
    #  parser_classes = (MultiPartParser,)

    def get(self, request, *args, **kwargs):
        
        products = Product.objects.all()
        serializer = ProductListSerializer(products, many=True)
        return Response(serializer.data,status=status.HTTP_200_OK)
   
    # 2. Create
    def post(self, request, *args, **kwargs):
        
        data = {
            'title': request.data.get('title'), 
            'price': request.data.get('price'), 
            'details': request.data.get('details'),
            'category': request.data.get('category'),
            'status': request.data.get('status'),
            "image":  request.FILES.get('image')
        }
        serializer = ProductListSerializer(data=data)
        if serializer.is_valid():
            serializer.save()

            return Response({ 'msg':'Data Successfully save'}, status=status.HTTP_200_OK)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProductDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductDetailSerializer 

class CatListApiView(generics.ListCreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategoryListSerializer 

class OrderListApiView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderListSerializer 


class AllProductView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = AllProductViewSerializer 

class AllOrderView(generics.ListAPIView):
    queryset = Order.objects.all()
    serializer_class = AllOrderViewSerializer 