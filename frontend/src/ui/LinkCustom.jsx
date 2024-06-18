import { Link } from "react-router-dom";

function LinkCustom({ children, className }) {
  return (
    <Link
      to="/trial"
      className={`rounded-2xl border-[0.5px] border-border-trial bg-gradient-trial px-8 py-[18px] font-semibold text-white shadow-custom outline-none ${className}`}
    >
      {children}
    </Link>
  );
}

export default LinkCustom;
