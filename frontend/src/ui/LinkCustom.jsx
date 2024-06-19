import { Link } from "react-router-dom";

const style =
  " rounded-2xl border-[0.5px] border-border-1  px-8 py-[18px] font-semibold text-white outline-none";

function LinkCustom({ children, className, to }) {
  return (
    <Link
      to={to}
      className={`${to === "/trial" ? `shadow-button bg-gradient-trial ${style} ${className}` : style + className} `}
    >
      {children}
    </Link>
  );
}

export default LinkCustom;
