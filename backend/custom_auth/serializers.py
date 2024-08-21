from rest_framework import serializers
from .models import CustomUser
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import AnonymousUser

class UserSerializers(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only = True)
    IsAdmin = serializers.SerializerMethodField(read_only = True)
    class Meta:
        model = CustomUser
        fields = ['id','email','phone_number','name','IsAdmin']

    def get_IsAdmin(self,obj):
        IsAdmin = obj.is_staff
        return IsAdmin
    
    def get_name(self, obj):
        if isinstance(obj, AnonymousUser):
            return "Anonymous"
        name = obj.first_name
        if not name:
            name = obj.email
        return name
    
class UserSerializerWithToken(UserSerializers):
    token = serializers.SerializerMethodField(read_only =True)
    IsAdmin = serializers.SerializerMethodField(read_only = True)

    class Meta:
        model = CustomUser
        fields = ['id','email','phone_number','token']
    
    def get_token(self,obj):
        token = RefreshToken.for_user(obj)
        return str(token)
