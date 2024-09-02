import { useEffect, useRef, useState } from "react";
import ButtonCustom from "../../ui/ButtonCustom";

function OtpInput({ length = 6, onOtpSubmit = () => {}, phoneNumber }) {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  function handleChange(index, e) {
    const value = e.target.value;
    if (isNaN(value)) return;

    const newOtp = [...otp];
    // Allow only one character input per field
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // Move to the next input if the current field is filled
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }

    // Check if all fields are filled and submit the OTP
    if (newOtp.every((digit) => digit !== "")) {
      onOtpSubmit(newOtp.join(""));
    }
  }

  function handleClick(index) {
    inputRefs.current[index].setSelectionRange(1, 1);
  }

  function handleKeyDown(index, e) {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      inputRefs.current[index - 1].focus();
    }
  }

  const numStr = phoneNumber.toString();
  const maskedPart = "*".repeat(numStr.length - 3);
  const lastThreeDigits = numStr.slice(-3);
  const hiddenNumber = maskedPart + lastThreeDigits;

  return (
    <div className="login-form relative bg-otp-bg bg-cover bg-no-repeat">
      <div className="relative flex h-screen items-center justify-center text-secondary-300">
        <div className="flex flex-col rounded-[40px] bg-grad-blur px-24 py-14 shadow-login">
          <h1 className="text-center text-[40px] font-semibold text-primary-50">
            Enter OTP
          </h1>
          <p className="mt-6 w-[550px]">
            We sent a verification code to your registered Mobile number
          </p>
          <span className="mt-5 tracking-widest">{hiddenNumber}</span>
          <p className="mt-5">Type your 6-digit security code</p>
          <div className="flex justify-center">
            {otp.map((value, index) => (
              <input
                key={index}
                type="text"
                ref={(input) => (inputRefs.current[index] = input)}
                value={value}
                onChange={(e) => handleChange(index, e)}
                onClick={() => handleClick(index)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                className="mx-2 my-5 h-12 w-14 rounded-md text-center text-xl font-semibold text-black"
              />
            ))}
          </div>
          <ButtonCustom
            variant="secondary"
            className="mt-10"
            onClick={() => onOtpSubmit(otp.join(""))}
          >
            Login
          </ButtonCustom>
        </div>
      </div>
    </div>
  );
}

export default OtpInput;