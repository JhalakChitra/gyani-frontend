import Image from "next/image";

export default function AuthIllustration() {
  return (
    <div className="hidden lg:flex relative bg-gradient-to-br from-violet-500 to-purple-500 items-center justify-center overflow-hidden">
      <Image
        src="/auth/auth-image.png"
        alt="Auth"
        width={700}
        height={700}
        className="object-contain w-full h-full"
      />
    </div>
  );
}