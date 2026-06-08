import AuthLayout from "@/components/auth/AuthLayout";
import AuthCard from "@/components/auth/AuthCard";
import ForgotPasswordForm from "@/components/auth/ForgotPasswordForm";

export default function Page() {
  return (
    <AuthLayout>
      <AuthCard
        title="Forgot Password"
        description="Enter your email to reset password"
      >
        <ForgotPasswordForm />
      </AuthCard>
    </AuthLayout>
  );
}