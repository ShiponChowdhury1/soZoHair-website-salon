import { AuthLayout } from "@/components/auth/AuthLayout";
import { RegisterForm } from "@/components/auth/RegisterForm";
import { AUTH_IMAGES } from "@/constants/images";

export default function RegisterPage() {
  return (
    <AuthLayout
      variant="register"
      imageSrc={AUTH_IMAGES.register}
      imageAlt="Hair salon registration visual"
    >
      <RegisterForm />
    </AuthLayout>
  );
}
