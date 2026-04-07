import PageBreadcrumb from "../components/common/PageBreadCrumb";
import Patients from "../components/patient/patients";
import PageMeta from "../components/common/PageMeta";

export default function PatientsPage() {
  return (
    <div>
      <PageMeta
        title="CMAE"
        description="HealthCare"
      />
      <PageBreadcrumb pageTitle="Patients" />
      <Patients />
    </div>
  );
}
