import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import TransactionList from "../../components/ecommerce/ReportList";

export default function Reports() {
  return (
    <>
      <PageMeta
        title="CMAE"
        description="HealthCare"
      />
      <PageBreadcrumb pageTitle="Reports" />
      <TransactionList />
    </>
  );
}
