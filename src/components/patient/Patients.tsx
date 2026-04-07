import PatientsListTable from "./PatientsList";
import PatientsMetrics from "./PatientsMetrics";

export default function Patients() {
  return (
    <div className="h-full">
      <PatientsMetrics />
      <PatientsListTable />
    </div>
  );
}
