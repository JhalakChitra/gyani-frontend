import AuthLayout from "@/components/auth/AuthLayout";
import AuthCard from "@/components/auth/AuthCard";
import SignupForm from "@/components/auth/SignupForm";

export default function Page() {
  return (
    <AuthLayout>
      <AuthCard
        title="Create Account"
        description="Create your Gyani account"
      >
        <SignupForm />
      </AuthCard>
    </AuthLayout>
  );
}