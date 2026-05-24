import { AuthLayout } from "../../../components/auth/AuthLayout";
import ResetRequest from "../../../components/auth/ResetRequest";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout variant="login" imageSrc="/auth/forgot-bg.jpg" imageAlt="Salon" showImage={false}>
      <ResetRequest />
    </AuthLayout>
  );
}
