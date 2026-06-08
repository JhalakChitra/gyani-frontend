import Link from "next/link";
import AuthButton from "./AuthButton";
import AuthInput from "./AuthInput";

export default function ForgotPasswordForm() {
  return (
    <>
      <AuthInput
        label="Email Address"
        type="email"
        placeholder="name@company.com"
      />

      <AuthButton title="Send Reset Link" />

      <p className="mt-4 text-center text-sm">
        <Link
          href="/auth/login"
          className="font-medium text-[#4F7EFF]"
        >
          Back to Login
        </Link>
      </p>
    </>
  );
}