function ButtonCustom({ children, type, onCLick, className }) {
  const base =
    "rounded-2xl px-8  text-xl font-semibold text-white outline-none";

  const styles = {
    primary: base + "  py-5 border-[1px] border-border-5",
    secondary: base + " py-5 bg-grad-button shadow-button border-none",
    time: base + " py-[18px] border-[1px] border-border-5",
  };

  return (
    <button
      type={type}
      onClick={onCLick}
      className={`${styles[type]} ${className}`}
    >
      {children}
    </button>
  );
}

export default ButtonCustom;
