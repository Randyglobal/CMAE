import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import AddMedicationForm from "../../components/ecommerce/AddMedicationForm";

export default function AddMedication() {
  return (
    <>
      <PageMeta
        title="CMAE"
        description="HealthCare"
      />
      <PageBreadcrumb pageTitle="Add Medication" />
      <AddMedicationForm />
    </>
  );
}
