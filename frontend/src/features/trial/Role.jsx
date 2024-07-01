import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import ButtonCustom from "../../ui/ButtonCustom";

function LoginInput() {
  const [phoneNumber, setPhoneNumber] = useState("");

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
  }

  return (
    <form
      onSubmit={handlePhoneSubmit}
      className="login-form bg-no-repea relative flex h-[180vh] items-center justify-center bg-trial-bg bg-cover"
    >
      <div className="relative text-white">
        <div className="flex flex-col gap-10 rounded-[40px] bg-gradient-login px-44 py-10 shadow-login">
          <div className="space-y-5 text-center">
            <h1 className="text-center text-5xl font-semibold">
              Choose the Role
            </h1>
            <p className="tracking-widest">
              Let us know who is attending the trial
            </p>
          </div>

          <ul className="flex justify-center gap-20 text-center">
            <li className="space-y-2">
              <img
                className="rounded-full bg-black p-1 pt-2"
                src="/trial/studentImg.png"
                alt="student image"
              />
              <p className="text-2xl">Student</p>
            </li>
            <li className="space-y-2">
              <img
                className="rounded-full bg-black p-1 pt-2"
                src="/trial/tutorImg.png"
                alt="tutor image"
              />
              <p className="text-2xl">Tutor</p>
            </li>
          </ul>

          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              Phone number
            </label>
            <PhoneInput
              placeholder="Enter Phone Number"
              country={"in"}
              value={phoneNumber}
              onChange={handlePhoneNumber}
              className="react-tel-input form-control"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              Student Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              className="placeholder:text-placeHolder rounded-xl border-[1px] px-[50px] py-3 text-[25px] text-xl font-medium text-black outline-none placeholder:text-lg placeholder:font-normal"
            />
          </div>

          <div className="space-y-2">
            <h6 className="font-semibold">Select gender</h6>
            <ul className="flex gap-4">
              <li>
                <button
                  type="button"
                  className="border-border-4 rounded-2xl border-[1px] px-16 py-[18px] text-base font-semibold"
                >
                  Male
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="border-border-4 rounded-2xl border-[1px] px-16 py-[18px] text-base font-semibold"
                >
                  Female
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="border-border-4 rounded-2xl border-[1px] px-16 py-[18px] text-base font-semibold"
                >
                  I don’t to tell
                </button>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="" className="font-semibold">
              Choose your category
            </label>
            <select
              type="text"
              placeholder="Enter your name"
              className="placeholder:text-placeHolder rounded-xl border-[1px] px-[50px] py-3 text-[25px] text-xl font-medium text-black outline-none placeholder:text-lg placeholder:font-normal"
            />
          </div>
          <ButtonCustom>Select Date and Time</ButtonCustom>
        </div>
      </div>
    </form>
  );
}

export default LoginInput;
