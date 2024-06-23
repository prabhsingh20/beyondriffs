from django.shortcuts import render
from .models import CustomUser
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UserSerializers
from django.http.response import JsonResponse


def ApiRoutes(request):
    routes = [ 
            '/user/',
            '/api/create_course/',
            '/api/delete_course/<str:pk>/',
            '/api/edit_course/<str:pk>/',]
    return JsonResponse (routes,safe=False)

@api_view(['GET','POST','UPDATE','DELETE'])
def UserRoute(request):
    custom_user = CustomUser.objects.all()
    serialzer = UserSerializers(custom_user,many=True)
    return Response(serialzer.data)
