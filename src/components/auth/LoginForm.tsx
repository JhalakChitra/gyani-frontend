import Link from "next/link";
import Image from "next/image";

import AuthButton from "./AuthButton";
import AuthInput from "./AuthInput";

export default function LoginForm() {
  return (
    <div>
      <div className="mb-6">
        <Image
          src="/logo/logo.png"
          alt="Gyani Logo"
          width={140}
          height={40}
          className="object-contain"
        />
      </div>

      <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
        Welcome,
        <br />
        Back to Gyani
      </h1>

      <p className="text-gray-500 mt-4 mb-6">
        Sign in to access your finances, inventory, GST, and business insights—all in one place.
      </p>

      <div className="space-y-4">
        <AuthInput
          type="email"
          placeholder="Enter email"
        />

        <AuthInput
          type="password"
          placeholder="Enter password"
        />
      </div>

      <div className="flex items-center justify-between mt-5 text-sm">
        <label className="flex items-center gap-2 text-gray-500">
          <input type="checkbox" />
          Remember me
        </label>

        <Link
          href="/forgot-password"
          className="text-gray-500 hover:text-[#1522ad]"
        >
          Forgot Password?
        </Link>
      </div>

      <div className="mt-6">
        <AuthButton title="Sign In" />
      </div>

      <p className="text-gray-500 text-sm mt-6 text-center">
        Don&apos;t have an account?{" "}
        <Link
          href="/signup"
          className="text-[#1522ad] font-semibold"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
}