import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import ButtonCustom from "../../ui/ButtonCustom";
import Time from "./Time";

function LoginInput() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isOpen, setIsOpen] = useState(true);

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

  function handleIsOpen() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      {isOpen ? (
        <form
          onSubmit={handlePhoneSubmit}
          className="login-form relative bg-trial-bg bg-cover bg-no-repeat px-[11.5rem] py-20"
        >
          <div className="relative text-white">
            <div className="bg-grad-blur flex flex-col gap-10 rounded-[40px] px-44 py-12 shadow-login">
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
                  className="rounded-xl border-[1px] px-[50px] py-3 text-[25px] text-xl font-medium text-black outline-none placeholder:text-lg placeholder:font-normal placeholder:text-placeHolder"
                />
              </div>

              <div className="space-y-2">
                <h6 className="font-semibold">Select gender</h6>
                <ul className="flex gap-4">
                  <li>
                    <button
                      type="button"
                      className="rounded-2xl border-[1px] border-border-5 px-16 py-[18px] text-base font-semibold text-white outline-none"
                    >
                      Male
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="rounded-2xl border-[1px] border-border-5 px-16 py-[18px] text-base font-semibold text-white outline-none"
                    >
                      Female
                    </button>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="rounded-2xl border-[1px] border-border-5 px-16 py-[18px] text-base font-semibold text-white outline-none"
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
                  className="rounded-xl border-[1px] px-[50px] py-3 text-[25px] text-xl font-medium text-black outline-none placeholder:text-lg placeholder:font-normal placeholder:text-placeHolder"
                />
              </div>
              <ButtonCustom type="secondary" onCLick={handleIsOpen}>
                Select Date and Time
              </ButtonCustom>
            </div>
          </div>
        </form>
      ) : (
        <Time handleIsOpen={handleIsOpen} />
      )}
    </>
  );
}

export default LoginInput;
