import OtpForm from "../../components/auth/OtpForm";
import PageMeta from "../../components/common/PageMeta";
import AuthLayout from "./AuthPageLayout";

export default function TwoStepVerification() {
  return (
    <>
      <PageMeta
          title="CMAE"
          description="HealthCare"
      />
      <AuthLayout>
        <OtpForm />
      </AuthLayout>
    </>
  );
}
