import { useState } from "react";
import ButtonCustom from "../../ui/ButtonCustom";
import Input from "../../ui/Input";

function Contact({ handleComponentClick }) {
  const [ageGroup, setAgeGroup] = useState("18");
  const [gmail, setGmail] = useState("");

  return (
    <section className="flex flex-col gap-8 px-44 py-16">
      <div className="space-y-5 text-center">
        <h1 className="text-center text-5xl font-semibold">Contact details</h1>
        <p className="tracking-widest">Enter all fields</p>
      </div>

      <div className="relative flex flex-col gap-2">
        <label htmlFor="" className="font-semibold">
          Student age group
        </label>
        <select
          name="ageGroup"
          id="ageGroup"
          value={ageGroup}
          onChange={(e) => setAgeGroup(e.target.value)}
          className="appearance-none rounded-xl px-6 py-4 text-xl font-medium text-black outline-none"
        >
          <option value="18">18+ Years</option>
          <option value="20">20+ Years</option>
          <option value="24">24+ Years</option>
        </select>

        <span className="material-symbols-outlined pointer-events-none absolute right-4 top-11 text-[44px] text-black">
          arrow_drop_down
        </span>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="" className="font-semibold">
          Email Address
        </label>
        <Input
          placeholder="Johndoe123@gmail.com"
          value={gmail}
          onChange={(e) => setGmail(e.target.value)}
        />
      </div>

      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          className="h-5 w-5 border-[1px] border-border-5"
        />
        <p>
          I agree to the{" "}
          <span className="font-semibold">Terms & Conditions</span>
        </p>
      </div>

      <div className="mt-4 flex justify-between">
        <ButtonCustom type="primary" onClick={() => handleComponentClick(2)}>
          Previous
        </ButtonCustom>
        <ButtonCustom type="secondary">Submit</ButtonCustom>
      </div>
    </section>
  );
}

export default Contact;
