interface Props {
  type?: string;
  placeholder: string;
}

export default function AuthInput({
  type = "text",
  placeholder,
}: Props) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="
      w-full
      border
      border-gray-300
      rounded-xl
      px-4
      py-3
      outline-none
      focus:ring-2
      focus:ring-[#1522ad]
      transition
      "
    />
  );
}