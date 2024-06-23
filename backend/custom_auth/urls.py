from django.urls import path
from .views import UserRoute , ApiRoutes

urlpatterns = [
    path('',ApiRoutes,name="apiroutes"),
    path('user/',UserRoute,name="userroute"), 
]