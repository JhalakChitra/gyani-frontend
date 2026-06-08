import Image from "next/image";

interface Props {
  title: string;
  description: string;
  children: React.ReactNode;
}

export default function AuthCard({
  title,
  description,
  children,
}: Props) {
  return (
    <div className="w-full max-w-[400px] rounded-2xl border border-[#1C2D58] bg-[#071633] p-5 md:p-6 shadow-xl">
      <div className="text-center mb-5">
        <Image
          src="/logo/logo1.png"
          alt="Gyani"
          width={48}
          height={48}
          className="mx-auto mb-3"
        />

        <h1 className="text-xl md:text-2xl font-bold text-white">
          {title}
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          {description}
        </p>
      </div>

      {children}
    </div>
  );
}