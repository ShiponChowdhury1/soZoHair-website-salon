import { AuthLayout } from "../../../../components/auth/AuthLayout";
import PasswordChanged from "../../../../components/auth/PasswordChanged";

export default function SuccessPage() {
  return (
    <AuthLayout variant="login" imageSrc="/auth/forgot-bg.jpg" imageAlt="Salon" showImage={false}>
      <PasswordChanged />
    </AuthLayout>
  );
}
