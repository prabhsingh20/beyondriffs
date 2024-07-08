import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ButtonCustom from "../../ui/ButtonCustom";
import Input from "../../ui/Input";

function LoginInput({ handleComponentClick }) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isActive, setIsActive] = useState("male");
  const [category, setCategory] = useState("");

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

  function handleActive(gender) {
    setIsActive(gender);
  }

  return (
    <section
      onSubmit={handlePhoneSubmit}
      className="flex flex-col gap-10 px-44 py-12"
    >
      <div className="space-y-5 text-center">
        <h1 className="text-center text-5xl font-semibold">Choose the Role</h1>
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
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="" className="font-semibold">
          Student Name
        </label>
        <Input placeholder="Enter your name" />
      </div>

      <div className="space-y-2">
        <h6 className="font-semibold">Select gender</h6>
        <ul className="flex gap-4">
          <li>
            <button
              type="button"
              onClick={() => handleActive("male")}
              className={`${isActive === "male" ? "rounded-2xl border-none bg-grad-button px-16 py-[18px] text-base font-semibold text-white shadow-button outline-none" : "rounded-2xl border-[1px] border-border-5 px-16 py-[18px] text-base font-semibold text-white outline-none"}`}
            >
              Male
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleActive("female")}
              className={`${isActive === "female" ? "rounded-2xl border-none bg-grad-button px-16 py-[18px] text-base font-semibold text-white shadow-button outline-none" : "rounded-2xl border-[1px] border-border-5 px-16 py-[18px] text-base font-semibold text-white outline-none"}`}
            >
              Female
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => handleActive("other")}
              className={`${isActive === "other" ? "rounded-2xl border-none bg-grad-button px-16 py-[18px] text-base font-semibold text-white shadow-button outline-none" : "rounded-2xl border-[1px] border-border-5 px-16 py-[18px] text-base font-semibold text-white outline-none"}`}
            >
              I don’t to tell
            </button>
          </li>
        </ul>
      </div>

      <div className="relative flex flex-col gap-2">
        <label htmlFor="" className="font-semibold">
          Choose your category
        </label>
        <select
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="appearance-none rounded-xl px-6 py-4 text-xl font-medium text-secondary-500 outline-none"
        >
          <option value="" disabled hidden>
            Select an option
          </option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </select>
        <span className="material-symbols-outlined pointer-events-none absolute right-4 top-11 text-[44px] text-black">
          arrow_drop_down
        </span>
      </div>

      <ButtonCustom type="secondary" onClick={() => handleComponentClick(2)}>
        Select Date and Time
      </ButtonCustom>
    </section>
  );
}

export default LoginInput;
