import AuthLayout from "@/components/auth/AuthLayout";
import AuthCard from "@/components/auth/AuthCard";
import LoginForm from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout>
      <AuthCard
        title="Gyani Portal"
        description="Sign in to manage your accounting business."
      >
        <LoginForm />
      </AuthCard>
    </AuthLayout>
  );
}