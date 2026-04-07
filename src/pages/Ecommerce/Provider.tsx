import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import OrderHistory from "../../components/transactions/OrderHistory";
import OrderDetailsTable from "../../components/transactions/OrderDetailsTable";
import ProviderHeader from "../../components/transactions/ProviderHeader";
import ProviderDetails from "../../components/transactions/ProviderDetails";
import { useModal } from "../../hooks/useModal";
import { Modal } from "../../components/ui/modal";
import AddProviderForm from "../../components/ecommerce/AddProviderForm";

export default function Provider() {
  const { isOpen, openModal, closeModal } = useModal();

  const handleAdd = (payload: any) => {
    // TODO: call API to create provider
    console.log("Create provider", payload);
    closeModal();
  };

  return (
    <>
      <PageMeta title="CMAE" description="HealthCare" />
      <PageBreadcrumb pageTitle="Provider" />
      <div className="space-y-6">
        <div className="flex justify-end">
          <button onClick={openModal} className="bg-brand-500 text-white px-4 py-2 rounded">Add Provider</button>
        </div>
        <ProviderHeader />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8 2xl:col-span-9">
            <OrderDetailsTable />
          </div>
          <div className="space-y-6 lg:col-span-4 2xl:col-span-3">
            <ProviderDetails />
            <OrderHistory />
          </div>
        </div>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} className="max-w-2xl">
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-4">Add Provider</h3>
          <AddProviderForm onSubmit={handleAdd} />
        </div>
      </Modal>
    </>
  );
}
