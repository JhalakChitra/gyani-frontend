import Link from "next/link";
import Image from "next/image";

import AuthButton from "./AuthButton";
import AuthInput from "./AuthInput";

export default function SignupForm() {
  return (
    <div>
      {/* Logo */}
      <div className="mb-6">
        <Image
          src="/logo/logo.png"
          alt="Gyani Logo"
          width={140}
          height={40}
          className="object-contain"
        />

        <p className="text-sm text-gray-500 mt-2">
          Next-Gen Accounting Platform
        </p>
      </div>

      {/* Heading */}
      <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
        Create
        <br />
        Account
      </h1>

      <p className="text-gray-500 mt-4 mb-6">
        Create your account to continue
      </p>

      {/* Form */}
      <div className="space-y-4">
        <AuthInput placeholder="Full Name" />

        <AuthInput
          type="email"
          placeholder="Email Address"
        />

        <AuthInput
          type="password"
          placeholder="Password"
        />

        <AuthInput
          type="password"
          placeholder="Confirm Password"
        />
      </div>

      {/* Button */}
      <div className="mt-6">
        <AuthButton title="Create Account" />
      </div>

      {/* Footer */}
      <p className="text-gray-500 text-sm mt-6 text-center">
        Already have an account?{" "}
        <Link
          href="/login"
          className="text-[#1522ad] font-semibold hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
}