import { AuthLayout } from "@/components/auth/AuthLayout";
import { LoginForm } from "@/components/auth/LoginForm";
import { AUTH_IMAGES } from "@/constants/images";

export default function LoginPage() {
  return (
    <AuthLayout variant="login" imageSrc={AUTH_IMAGES.login} imageAlt="Hair salon login visual">
      <LoginForm />
    </AuthLayout>
  );
}
