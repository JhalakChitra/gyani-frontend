interface Props
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function AuthInput({
  label,
  ...props
}: Props) {
  return (
    <div className="mb-3">
      <label className="block mb-2 text-[11px] font-semibold uppercase tracking-wider text-gray-300">
        {label}
      </label>

      <input
        {...props}
        className="
        w-full
        h-10
        rounded-lg
        border
        border-[#1C2D58]
        bg-[#020B24]
        px-3
        text-sm
        text-white
        outline-none
        placeholder:text-gray-500
        focus:border-[#1522AD]
        "
      />
    </div>
  );
}