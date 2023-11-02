export default function TextField({
  className,
  type = "text",
  label,
  value,
  name,
  onChange,
  placeholder = "",
}) {
  return (
    <div className="">
      <span>{label}</span>
      <input
        className={`border border-red-200 focus:border-red-700 focus:bg-red-100 outline-none py-1 px-2 text-right w-full ${className}`}
        value={value}
        onChange={onChange}
        type={type}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
}
