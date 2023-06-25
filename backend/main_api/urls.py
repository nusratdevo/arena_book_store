


from rest_framework.routers import DefaultRouter
from django.urls import path

from main_api.views import ProductListView,ProductDetailView, CatListApiView, OrderListApiView 

urlpatterns = [
    path('product/', ProductListView.as_view()),
    path('product/cat', CatListApiView.as_view()),
    path('product/<int:pk>/', ProductDetailView.as_view()),

    
    path('product/orderItem/', OrderListApiView.as_view()),
    # //path('product/order/<int:pk>/', OrderDetailView.as_view()),
]