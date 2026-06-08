import { ReactNode } from "react";

export default function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#f3f3f3] flex items-center justify-center ">
      <div className="w-full  bg-white  shadow-xl overflow-hidden ">
        {children}
      </div>
    </div>
  );
}