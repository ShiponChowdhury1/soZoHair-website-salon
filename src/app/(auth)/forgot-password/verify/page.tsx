import { AuthLayout } from "../../../../components/auth/AuthLayout";
import VerifyOtp from "../../../../components/auth/VerifyOtp";

export default function VerifyPage() {
  return (
    <AuthLayout variant="login" imageSrc="/auth/forgot-bg.jpg" imageAlt="Salon" showImage={false}>
      <VerifyOtp />
    </AuthLayout>
  );
}
