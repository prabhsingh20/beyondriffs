from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager,PermissionsMixin
from django.utils import timezone

class CustomUserManager(BaseUserManager):
    def create_user(self,email,phone_number,password=None,**extra_fields):
        if not email:
            raise ValueError('the email must be set')
        #if not phone_number:
         #   raise ValueError('the phone number must be set')
        email=self.normalize_email(email)
        user = self.model(email=email,phone_number=phone_number,**extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user
    
    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        extra_fields.setdefault('is_active',True)
        if extra_fields.get('is_staff') is not True:
            raise ValueError('Superuser must have is_staff=True.')
        if extra_fields.get('is_active') is not True:
            raise ValueError('Superuser must have is_active=True.')
        if extra_fields.get('is_superuser') is not True:
            raise ValueError('Superuser must have is_superuser=True.')

        return self.create_user(email, None, password,**extra_fields)
    
class CustomUser(AbstractBaseUser,PermissionsMixin):
    email= models.EmailField(unique=True)
    phone_number = models.IntegerField(null=True)
    is_staff = models.BooleanField()
    is_tutor = models.BooleanField(default=False)
    is_student = models.BooleanField(default=False)
    date_joined = models.DateTimeField(default=timezone.now)

    objects = CustomUserManager()
    USERNAME_FIELD = 'email'

    def __str__(self):
        return self.email