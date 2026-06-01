import { ReactNode } from "react";
import AuthIllustration from "./AuthIllustration";

interface Props {
  children: ReactNode;
}

export default function AuthWrapper({ children }: Props) {
  return (
    <>
      <div className="flex items-center justify-center p-6 lg:p-12 overflow-y-auto">
        <div className="w-full max-w-md">
          {children}
        </div>
      </div>

      <AuthIllustration />
    </>
  );
}