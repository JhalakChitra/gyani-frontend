interface Props {
  title: string;
  loading?: boolean;
}

export default function AuthButton({
  title,
  loading,
}: Props) {
  return (
    <button
      type="submit"
      disabled={loading}
      className="
      w-full
      cursor-pointer
      h-10
      rounded-lg
      bg-[#1522AD]
      text-sm
      font-semibold
      text-white
      transition
      hover:bg-[#101A85]
      disabled:opacity-50
      "
    >
      {loading ? "Please wait..." : title}
    </button>
  );
}