from django.urls import path
from .views import UserRoute , ApiRoutes
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)
from . import views 
from . import otp
urlpatterns = [
    path('api/refresh',TokenRefreshView.as_view(),name="tokenrefresh"),
    path('users/profile',views.getUserProfile,name="user-profile"), 
    path('users/register',views.registerUser, name='registeruser'),
    path('',ApiRoutes,name="apiroutes"),
    path('send/otp',otp.send_otp_request,name="otp"),
    path('user/',UserRoute,name="userroute"), 
    path('api/login/',views.LoginAPIView.as_view(),name="LGOIN")
]