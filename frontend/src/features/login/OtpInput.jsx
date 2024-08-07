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
    // allow only one input
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);

    // submit trigger
    const combinedOtp = newOtp.join("");
    if (combinedOtp.length === length) onOtpSubmit(combinedOtp);

    // Move to next input if current field is filled
    if (value && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  }

  function handleClick(index) {
    inputRefs.current[index].setSelectionRange(1, 1);

    // optional
    if (index > 0 && !otp[index - 1]) {
      inputRefs.current[otp.indexOf("")].focus();
    }
  }

  function handleKeyDown(index, e) {
    if (
      e.key === "Backspace" &&
      !otp[index] &&
      index > 0 &&
      inputRefs.current[index - 1]
    ) {
      // Move focus to the previous input field on backspace
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
          <p className="mt-5">Type your 6 digit security code</p>
          <div className="flex justify-center">
            {otp.map((value, index) => {
              return (
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
              );
            })}
          </div>
          <ButtonCustom variant="secondary" className="mt-10">
            Login
          </ButtonCustom>
        </div>
      </div>
    </div>
  );
}

export default OtpInput;
