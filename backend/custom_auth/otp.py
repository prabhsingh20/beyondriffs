import random
from twilio.rest import Client
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import CustomUser 

def generate_random_otp(length=6):
    otp = ''.join([str(random.randint(0, 9)) for _ in range(length)])
    return otp

def send_otp_via_sms(phone_number, otp):
    account_sid = 'AC8f517ad51a433c80db8d6d1454688a2b'
    auth_token = '27362ba111104cbc161be9621ce42b3c'
    
    client = Client(account_sid, auth_token)
    
    message = client.messages.create(
        body=f"Your OTP is {otp}",
        from_='+919819267994',  # Your Twilio number
        to=phone_number
    )
    
    return message.sid

@api_view(['POST'])
def send_otp_request(request):
    phone_number = request.data.get('phone_number')

    try:
        user = CustomUser.objects.get(phone_number=phone_number)
    except CustomUser.DoesNotExist:
        return Response({'error': 'User with this phone number does not exist.'}, status=status.HTTP_400_BAD_REQUEST)

    # Generate a random OTP
    otp = generate_random_otp()
    print(otp)
    # Update the user with the new OTP (assuming you have an OTP field in the user model)
    user.otp = otp
    user.save()

    # Send the OTP via SMS (you would need to implement this function)
    # send_otp_via_sms(user.phone_number, otp)
    
    return Response({'message': 'OTP sent successfully to ' + phone_number}, status=status.HTTP_200_OK)