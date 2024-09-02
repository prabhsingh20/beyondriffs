from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager,PermissionsMixin
from django.utils import timezone   
from datetime import timedelta
from django.contrib.auth.hashers import make_password
import datetime


class CustomUserManager(BaseUserManager):
    def create_user(self,phone_number,password=None,**extra_fields):
        if not phone_number:
            raise ValueError('the phone number must be set')
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_tutor', False)
        extra_fields.setdefault('is_student', False)
        #if not phone_number:
         #   raise ValueError('the phone number must be set')      
        user = self.model(phone_number=phone_number,**extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self,phone_number, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active',True)
        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_active') is not True:
            raise ValueError('Superuser must have is_active=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(phone_number=phone_number, password=password, **extra_fields)
    
class GenderChoices(models.TextChoices):
    MALE = 'MALE', 'Male'
    FEMALE = 'FEMALE', 'Female'
    I_DONT_TELL = 'I DONT TELL', 'I don\'t tell'
    
class CustomUser(AbstractBaseUser,PermissionsMixin):
    first_name = models.CharField(max_length=50,null=True,blank=True)
    email= models.EmailField(unique=True,null=True,blank=True)
    phone_number = models.IntegerField(unique=True,null=True,blank=True)
    gender = models.CharField(
        max_length=20,
        choices=GenderChoices.choices,
        default=GenderChoices.I_DONT_TELL,
    )
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_tutor = models.BooleanField(default=False)
    is_student = models.BooleanField(default=False)
    otp = models.CharField(max_length=6,null=True,blank=True)
    otp_created_at = models.DateTimeField(null=True, blank=True)  # Track when the OTP was created
    
    
    objects = CustomUserManager()
    USERNAME_FIELD = 'phone_number'

    
    def validate_otp(self, otp):
        """Validates the OTP and checks if it is still valid."""
        # Check if OTP is correct
        if self.otp != otp:
            return False
        
        # Check if OTP is expired (e.g., valid for 5 minutes)
        
        #if (datetime.datetime.now() - self.otp_created_at).total_seconds() > 300:
         #   return False

        # OTP is valid
        return True
    
    def clear_otp(self):
        """Clears the OTP after successful validation."""
        self.otp = None
        self.otp_created_at = None
        self.save()
    
    def __str__(self):
        return self.email or str(self.phone_number)

