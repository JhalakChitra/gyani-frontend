import Link from "next/link";
import Image from "next/image";

import AuthButton from "./AuthButton";
import AuthInput from "./AuthInput";

export default function ForgotPasswordForm() {
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
        Forgot
        <br />
        Password
      </h1>

      <p className="text-gray-500 mt-4 mb-6">
        Enter your email to reset password
      </p>

      {/* Input */}
      <div className="space-y-4">
        <AuthInput
          type="email"
          placeholder="Enter Email Address"
        />
      </div>

      {/* Button */}
      <div className="mt-6">
        <AuthButton title="Send Reset Link" />
      </div>

      {/* Footer */}
      <p className="text-gray-500 text-sm mt-6 text-center">
        Back to{" "}
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