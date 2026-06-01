interface Props {
  title: string;
}

export default function AuthButton({ title }: Props) {
  return (
    <button
      className="
      w-full
      bg-[#1522ad]
      hover:bg-[#101a85]
      text-white
      py-3
      rounded-xl
      font-semibold
      transition
      shadow-md
      cursor-pointer"
    >
      {title}
    </button>
  );
}