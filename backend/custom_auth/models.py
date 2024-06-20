from django.db import models
from django.contrib.auth.models import AbstractBaseUser,BaseUserManager,PermissionsMixin

class CustomUserManager(BaseUserManager):
    def manager(self,email,phone_number,password=None):
        if not email:
            raise ValueError('the email must be set')
        if not phone_number:
            raise ValueError('the phone number must be set')
        email=self.normalize_email(email)
        user = self.model(email=email,phone_number=phone_number)
        user.set_password(password)
        user.save(using=self.db)
        return user