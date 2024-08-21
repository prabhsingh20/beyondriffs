from django.shortcuts import render
from .models import CustomUser
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import UserSerializers , UserSerializerWithToken
from django.http.response import JsonResponse

from django.contrib.auth.hashers import make_password
from rest_framework import status
from rest_framework import serializers
from rest_framework_simplejwt.tokens import AccessToken

from rest_framework_simplejwt.tokens import RefreshToken 
from rest_framework.views import APIView
from django.core.exceptions import ObjectDoesNotExist




class LoginAPIView(APIView):
    """ 
        This API is used for login user
    """
    
    def post(self, request, format=None):
        try:
            data = request.data
            phone_number = data.get('phone_number', None)
            otp = data.get('otp', None)

            # Fetch the user based on the phone number
            try:
                user = CustomUser.objects.get(phone_number=phone_number)
            except ObjectDoesNotExist:
                return Response({'status': False, 'message': 'User not found'}, status=404)

            # Assuming you have a method to validate the OTP
            if user and user.validate_otp(otp):
                    user.clear_otp()
                    refresh = RefreshToken.for_user(user)
                    return Response({
                        'status': True,
                        'refresh': str(refresh),
                        "access": str(refresh.access_token)
                })
            
            
            return Response({'status': False, 'message': 'Invalid OTP'}, status=400)

        except Exception as val_err:
            return Response({'status': False, 'message': str(val_err)}, status=500)
        

def ApiRoutes(request):
    routes = [ 
            '/users/profile',
            '/user/',
            '/api/users/token',
             'users/register',
            '/api/create_course/',
            '/api/delete_course/<str:pk>/',
            '/api/edit_course/<str:pk>/',]
    return JsonResponse (routes,safe=False)

@api_view(['GET'])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializers(user,many = False)
    return Response(serializer.data)

@api_view(['GET','POST','UPDATE','DELETE'])
def UserRoute(request):
    custom_user = CustomUser.objects.all()
    serialzer = UserSerializers(custom_user,many=True)
    return Response(serialzer.data)

@api_view(['POST'])
def registerUser(request):
    data = request.data
    
    # Input validation (basic example, consider more robust validation as needed)
    required_fields = ['first_name', 'phone_number', 'email']
    if any(field not in data for field in required_fields):
        return Response({'detail': 'Missing required fields.'}, status=status.HTTP_400_BAD_REQUEST)
    
    # Check if user with this email already exists
    if CustomUser.objects.filter(email=data['email']).exists():
        return Response({'detail': 'User with this email already exists.'}, status=status.HTTP_400_BAD_REQUEST)
    
    try:
        user = CustomUser.objects.create(
            first_name=data['first_name'],
            phone_number=data['phone_number'],
            email=data['email'],
           # password=make_password(data['password'])
        )
        
        serializer = UserSerializerWithToken(user, many=False)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    except Exception as e:
        # Log the exception (e.g., with logging module) if needed
        return Response({'detail': str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)