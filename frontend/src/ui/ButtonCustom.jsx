function ButtonCustom({ children, type }) {
  return (
    <button
      type={type}
      className="shadow-button mt-6 rounded-2xl border-[0.5px] border-border-1 bg-gradient-trial px-8 py-4 font-semibold text-white outline-none"
    >
      {children}
    </button>
  );
}

export default ButtonCustom;
