import Link from "next/link";
import AuthButton from "./AuthButton";
import AuthInput from "./AuthInput";

export default function SignupForm() {
  return (
    <>
      <AuthInput
        label="Full Name"
        placeholder="John Doe"
      />

      <AuthInput
        label="Email Address"
        type="email"
      />

      <AuthInput
        label="Password"
        type="password"
      />

      <AuthInput
        label="Confirm Password"
        type="password"
      />

      <AuthButton title="Create Account" />

      <p className="mt-4 text-center text-sm text-gray-400">
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className="font-medium text-[#4F7EFF]"
        >
          Login
        </Link>
      </p>
    </>
  );
}