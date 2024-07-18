import PhoneInput from "react-phone-input-2";
import { useState } from "react";
import OtpInput from "./OtpInput";
import ButtonCustom from "../../ui/ButtonCustom";

function LoginInput() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);

  function handlePhoneNumber(value) {
    setPhoneNumber(value);
  }

  function handlePhoneSubmit(event) {
    event.preventDefault();

    // Phone validation
    if (phoneNumber.length < 10) {
      alert("Invalid Phone Number");
      return;
    }

    // Call BE API
    // Show OTP field
    setShowOtpInput(true);
  }

  function onOtpSubmit(otp) {
    console.log("Login Successful", otp);
  }

  return (
    <>
      {!showOtpInput ? (
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
                  value={phoneNumber}
                  onChange={handlePhoneNumber}
                />
                <ButtonCustom variant="secondary" className="mt-10">
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
          phoneNumber={phoneNumber}
        />
      )}
    </>
  );
}

export default LoginInput;
