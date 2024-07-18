function ButtonCustom({
  children,
  type,
  onClick,
  className,
  variant,
  disabled,
}) {
  const base = "rounded-2xl px-8 text-xl font-semibold text-white outline-none";

  const styles = {
    primary: base + "  py-5 border-[1px] border-border-5",
    secondary: base + " py-5 bg-grad-button shadow-button border-none",
    time: base + " py-[18px] border-[1px] border-border-5",
    timeActive: base + " py-[18px] bg-grad-button shadow-button border-none",
    gender:
      "rounded-2xl border-[1px] border-border-5 px-16 py-[18px] text-base font-semibold text-white outline-none",
    genderActive:
      "rounded-2xl border-none bg-grad-button px-16 py-[18px] text-base font-semibold text-white shadow-button outline-none",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${styles[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default ButtonCustom;
