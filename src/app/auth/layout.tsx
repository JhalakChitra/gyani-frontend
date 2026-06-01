import { ReactNode } from "react";

export default function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f3f3f3] flex items-center justify-center p-5">
      <div className="w-full max-w-6xl bg-white rounded-[30px] shadow-xl overflow-hidden grid lg:grid-cols-2">
        {children}
      </div>
    </div>
  );
}