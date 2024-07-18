import { useState } from "react";
import { step } from "../data/trail";
import Role from "../features/trial/Role";
import Time from "../features/trial/Time";
import Contact from "../features/trial/Contact";
import { useNavigate } from "react-router-dom";

function Trial() {
  const [activeStep, setActiveStep] = useState(1);
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  function handleComponentClick(step) {
    setActiveStep(step);
  }

  function handleData(newData) {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }));
    if (activeStep === step.length) {
      console.log(formData); // Logging here won't reflect the updated state immediately due to closure
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <section
      className="login-form relative bg-trial-bg bg-cover bg-no-repeat px-[11.5rem] py-20"
      onSubmit={handleSubmit}
    >
      <div className="relative text-white">
        <div className="rounded-[40px] bg-grad-blur py-20 shadow-login">
          <ul className="flex items-center justify-center gap-28 text-center">
            {step.map((step) => (
              <li key={step.index} className="flex flex-col items-center gap-5">
                <span
                  className={`${activeStep >= Number(step.index) ? "bg-white text-primary-300" : "bg-primary-300 text-white"} flex h-[46px] w-[46px] items-center justify-center rounded-full border-[0.72px] border-border-4 text-[18.69px] font-medium shadow-steps`}
                >
                  {step.index}
                </span>
                <p
                  className={`${activeStep >= Number(step.index) ? "font-bold text-primary-200" : "font-medium text-secondary-600"} text-[18.69px] tracking-wide`}
                >
                  {step.component}
                </p>
              </li>
            ))}
          </ul>

          <form>
            {activeStep === 1 && (
              <Role
                handleComponentClick={handleComponentClick}
                onHandleData={handleData}
              />
            )}
            {activeStep === 2 && (
              <Time
                handleComponentClick={handleComponentClick}
                onHandleData={handleData}
              />
            )}
            {activeStep === 3 && (
              <Contact
                handleComponentClick={handleComponentClick}
                onHandleData={handleData}
              />
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Trial;
