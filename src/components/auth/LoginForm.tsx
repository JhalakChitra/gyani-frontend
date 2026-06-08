import Link from "next/link";
import AuthButton from "./AuthButton";
import AuthInput from "./AuthInput";

export default function LoginForm() {
  return (
    <>
      <AuthInput
        label="Email Address"
        type="email"
        placeholder="name@company.com"
      />

      <AuthInput
        label="Password"
        type="password"
        placeholder="••••••••"
      />

      <div className="mb-4 text-right">
        <Link
          href="/auth/forgot-password"
          className="text-sm text-[#4F7EFF]"
        >
          Forgot Password?
        </Link>
      </div>

      <AuthButton title="Sign In" />

      <p className="mt-4 text-center text-sm text-gray-400">
        Don't have an account?{" "}
        <Link
          href="/auth/signup"
          className="font-medium text-[#4F7EFF]"
        >
          Create Account
        </Link>
      </p>
    </>
  );
}