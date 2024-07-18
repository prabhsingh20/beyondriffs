import { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ButtonCustom from "../../ui/ButtonCustom";
import Input from "../../ui/Input";

function LoginInput({ handleComponentClick, onHandleData }) {
  const [role, setRole] = useState("student");
  const [phoneNumber, setPhoneNumber] = useState("911234567891");
  const [userName, setUserName] = useState("Unknown");
  const [userGender, setUserGender] = useState("male");
  const [category, setCategory] = useState(1);
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [role, phoneNumber, userName, userGender, category]);

  function handlePhoneNumber(value) {
    setPhoneNumber(value);
  }

  function handleActive(gender) {
    setUserGender(gender);
  }

  function handleActiveRole(role) {
    setRole(role);
  }

  function validateForm() {
    if (
      role &&
      phoneNumber.length >= 10 &&
      userName &&
      userGender &&
      category
    ) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }

  function handleSubmit() {
    const roleData = {
      role,
      phoneNumber,
      userName,
      userGender,
      category,
    };

    onHandleData(roleData);
    handleComponentClick(2);
  }

  return (
    <section className="flex flex-col gap-10 px-40 py-12">
      <div className="space-y-5 text-center">
        <h1 className="text-center text-5xl font-semibold">Choose the Role</h1>
        <p className="tracking-widest">
          Let us know who is attending the trial
        </p>
      </div>

      <ul className="flex justify-center gap-20 text-center">
        <li className="space-y-2">
          <img
            className={`${role === "student" ? "shadow-steps" : ""} cursor-pointer rounded-full bg-black p-1 pt-2`}
            src="/trial/studentImg.png"
            alt="student image"
            onClick={() => handleActiveRole("student")}
          />
          <p className="text-2xl">Student</p>
        </li>
        <li className="space-y-2">
          <img
            className={`${role === "tutor" ? "shadow-steps" : ""} cursor-pointer rounded-full bg-black p-1 pt-2`}
            src="/trial/tutorImg.png"
            alt="tutor image"
            onClick={() => handleActiveRole("tutor")}
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
        <Input
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <h6 className="font-semibold">Select gender</h6>
        <ul className="flex flex-wrap gap-6">
          <li>
            <ButtonCustom
              type="button"
              variant={`${userGender === "male" ? "genderActive" : "gender"}`}
              onClick={() => handleActive("male")}
            >
              Male
            </ButtonCustom>
          </li>
          <li>
            <ButtonCustom
              type="button"
              variant={`${userGender === "female" ? "genderActive" : "gender"}`}
              onClick={() => handleActive("female")}
            >
              Female
            </ButtonCustom>
          </li>
          <li>
            <ButtonCustom
              type="button"
              variant={`${userGender === "other" ? "genderActive" : "gender"}`}
              onClick={() => handleActive("other")}
            >
              I don’t to tell
            </ButtonCustom>
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

      <ButtonCustom
        variant="secondary"
        onClick={handleSubmit}
        disabled={!isFormValid}
        className={`${!isFormValid ? "cursor-not-allowed" : ""}`}
      >
        Select Date and Time
      </ButtonCustom>
    </section>
  );
}

export default LoginInput;
