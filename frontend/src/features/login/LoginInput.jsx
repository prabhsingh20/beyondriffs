import PhoneInput from "react-phone-input-2";
import React,{ useEffect, useState } from "react";
import OtpInput from "./OtpInput";
import ButtonCustom from "../../ui/ButtonCustom";
import { sendOtp, login } from '../../actions/userActions';
import { useDispatch, useSelector } from "react-redux";
import { Alert } from "react-bootstrap";


function LoginInput({ location, history }) {
  const [phone_number, setPhoneNumber] = useState("");
  const [otpVisible, setOtpVisible] = useState(false); // Rename for clarity
  const dispatch = useDispatch();

  //const redirect = location.search ? location.search.split('=')[1] : '/';

  // userLogin from the store
  const userLogin = useSelector(state => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  // Redirect if a user is already logged in
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo]);

  function handlePhoneNumber(value) {
    setPhoneNumber(value);
  }

  const handlePhoneSubmit = async (event) => {
    event.preventDefault();
    console.log('submitted');

    try {
        // Dispatch the sendOtp action and wait for it to complete
        const response = await dispatch(sendOtp(phone_number));
        console.log('Response from sendOtp:', response); 
        
        // Assuming 'data' is the response from the sendOtp action
        if (response.success == true) {
            setOtpVisible(true);
        } else {
            // Show OTP field after submitting phone number successfully
            setOtpVisible(false);
            alert("error",error.Message);
            return
        }
    } catch (error) {
        // Handle any errors that occurred during sendOtp
        console.error('Error sending OTP:', error);
        setOtpVisible(false);
    }
}
  
const onOtpSubmit = async (otpValue) => {
  //otpValue.preventDefault(); // Correct usage of preventDefault

  try {
      // Await the dispatch of the login action to get the response
      const response = await dispatch(login(phone_number, otpValue)); 
      
      console.log("Response from login:", response); // Log the response for debugging

      // Check the success flag in the response
      if (response.success === true) {
          alert("Login successful");
      } else {
          alert("Login failed: " + (response.message || "Unknown error"));
      }
  } catch (error) {
      // Catch any errors and log them
      console.error('Error during login:', error);
      alert("Login failed: " + (error.message || "An unexpected error occurred."));
  }
};

  //function onOtpSubmit(otpValue) {
   // dispatch(login(phone_number, otpValue));
    //console.log("Login Successful", otpValue);
  //}

  return (
    <>
      {!otpVisible ? (
        <form
          onSubmit={handlePhoneSubmit}
          className="login-form relative h-screen bg-login-bg bg-cover bg-no-repeat px-48 py-20"
        >
          <div className="relative text-white">
            <div className="flex flex-col gap-10 rounded-[40px] bg-grad-blur px-44 py-32 shadow-login">
              <h1 className="text-center text-[40px] font-semibold">
                Welcome Back
              </h1>
              <div className="flex flex-col gap-2">
                <label htmlFor="" className="text-xl font-medium">
                  Phone number
                </label>
                <PhoneInput
                  placeholder="Enter Phone Number"
                  country={"in"}
                  value={phone_number}
                  onChange={handlePhoneNumber}
                />
                <ButtonCustom
                  variant="secondary"
                  className="mt-10"
                  type="submit"
                >
                  Send Code
                </ButtonCustom>
              </div>
            </div>
          </div>
        </form>
      ) : (
        <OtpInput
          length={6}
          onOtpSubmit={onOtpSubmit}
          phoneNumber={phone_number}
        />
      )}
    </>
  );
}

export default LoginInput;