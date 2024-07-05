import { Link } from "react-router-dom";

function LinkCustom({ children, to, type }) {
  const base =
    "rounded-2xl px-8 py-5 text-xl font-semibold text-white outline-none";

  const styles = {
    primary: base + "  border-[1px] border-border-5",
    secondary: base + "  bg-grad-button shadow-button",
  };

  return (
    <Link to={to} className={styles[type]}>
      {children}
    </Link>
  );
}

export default LinkCustom;
