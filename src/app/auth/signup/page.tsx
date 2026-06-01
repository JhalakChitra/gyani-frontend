import AuthWrapper from "@/components/auth/AuthWrapper";
import SignupForm from "@/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <AuthWrapper>
      <SignupForm />
    </AuthWrapper>
  );
}