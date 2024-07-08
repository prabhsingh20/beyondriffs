import { useState } from "react";
import Role from "../features/trial/Role";
import Time from "../features/trial/Time";
import Contact from "../features/trial/Contact";
import { step } from "../data/trail";

function Trial() {
  const [activeStep, setActiveStep] = useState(1);

  const handleComponentClick = (step) => {
    setActiveStep(step);
  };

  return (
    <section className="login-form relative bg-trial-bg bg-cover bg-no-repeat px-[11.5rem] py-20">
      <div className="relative text-white">
        <div className="rounded-[40px] bg-grad-blur py-20 shadow-login">
          <ul className="flex items-center justify-center gap-28 text-center">
            {step.map((step) => (
              <li key={step.index} className="flex flex-col items-center gap-5">
                <span
                  className={`${activeStep >= Number(step.index) ? "text-primary-300 bg-white" : "bg-primary-300 text-white"} shadow-steps flex h-[46px] w-[46px] items-center justify-center rounded-full border-[0.72px] border-border-4 text-[18.69px] font-medium`}
                >
                  {step.index}
                </span>
                <p
                  className={`${activeStep >= Number(step.index) ? "text-primary-200 font-bold" : "text-secondary-600 font-medium"} text-[18.69px] tracking-wide`}
                >
                  {step.component}
                </p>
              </li>
            ))}
          </ul>

          <form>
            {activeStep === 1 && (
              <Role handleComponentClick={handleComponentClick} />
            )}
            {activeStep === 2 && (
              <Time handleComponentClick={handleComponentClick} />
            )}
            {activeStep === 3 && (
              <Contact handleComponentClick={handleComponentClick} />
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Trial;
