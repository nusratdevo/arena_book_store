


from rest_framework.routers import DefaultRouter
from django.urls import path

from main_api.views import ProductListView,ProductDetailView

urlpatterns = [
    path('product/', ProductListView.as_view()),
    path('product/<int:pk>/', ProductDetailView.as_view()),

]