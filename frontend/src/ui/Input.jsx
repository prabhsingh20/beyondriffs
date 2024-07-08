function Input({ placeholder, children, value, onChange }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      autoComplete="true"
      value={value}
      onChange={onChange}
      className="rounded-xl px-6 py-4 text-xl font-medium text-black outline-none placeholder:tracking-widest placeholder:text-secondary-500"
    >
      {children}
    </input>
  );
}

export default Input;
