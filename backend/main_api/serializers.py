from rest_framework import serializers
from main_api.models import Product



class ProductListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ["id","category","title", "details","price", "status",'image']
        
    def __init__(self,  *args, **kwargs):
        super(ProductListSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth =1
        

class ProductDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ["id","category","title", "details","price", "status",'image']
        
    def __init__(self,  *args, **kwargs):
        super(ProductDetailSerializer, self).__init__(*args, **kwargs)
        self.Meta.depth =1