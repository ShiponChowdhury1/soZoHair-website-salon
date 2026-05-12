import { AuthLayout } from "../../../../components/auth/AuthLayout";
import ResetNewPassword from "../../../../components/auth/ResetNewPassword";

export default function ResetPage() {
  return (
    <AuthLayout variant="login" imageSrc="/auth/forgot-bg.jpg" imageAlt="Salon" showImage={false}>
      <ResetNewPassword />
    </AuthLayout>
  );
}
