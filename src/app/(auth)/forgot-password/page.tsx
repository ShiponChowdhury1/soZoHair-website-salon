import { AuthLayout } from "../../../components/auth/AuthLayout";
import ResetRequest from "../../../components/auth/ResetRequest";
import image from "../../../public/auth/forgot-bg.jpg";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout variant="login" imageSrc="/auth/forgot-bg.jpg" imageAlt="Salon" showImage={false}>
      <ResetRequest />
    </AuthLayout>
  );
}
