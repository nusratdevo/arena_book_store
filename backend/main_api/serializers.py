from rest_framework import serializers
from main_api.models import Product, Category



class CategoryListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id","title", "details"]

class ProductListSerializer(serializers.ModelSerializer):
    # category_list = serializers.StringRelatedField(many=True, read_only=True)
    # image = serializers.Base64ImageField(max_length=None, use_url=True,)
    class Meta:
        model = Product
        fields = ["id","category","title", "details","price", "status","image"]
        
    # def __init__(self,  *args, **kwargs):
    #     super(ProductListSerializer, self).__init__(*args, **kwargs)
    #     self.Meta.depth =1
        

class ProductDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = ["id","category","title", "details","price", "status",'image']
        
    # def __init__(self,  *args, **kwargs):
    #     super(ProductDetailSerializer, self).__init__(*args, **kwargs)
    #     self.Meta.depth =1