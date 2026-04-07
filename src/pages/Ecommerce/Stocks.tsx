import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ProductListTable from "../../components/ecommerce/StockListTable";

export default function Stocks() {
  return (
    <>
      <PageMeta
        title="CMAE"
        description="HealthCare"
      />
      <PageBreadcrumb pageTitle="Stocks" />
      <ProductListTable />
    </>
  );
}
