import PageMeta from "../../components/common/PageMeta";
import ComponentCard from "../../components/common/ComponentCard";
import TableDropdown from "../../components/common/TableDropdown";
import BottomSheet from "../../components/common/BottomSheet";
import { useEffect, useState } from "react";
import * as api from "../../services/api";

interface Category { id: number; name: string; description: string }

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selected, setSelected] = useState<Category | null>(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetch = async () => {
    setLoading(true);
    try {
      const res = await api.getCategories();
      setCategories(res?.data || res || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetch(); }, []);

  const viewMore = async (c: Category) => {
    try {
      const res = await api.getCategoryDetails(c.id);
      const data = res?.data || res || c;
      setSelected(data);
      setOpen(true);
    } catch (err) {
      console.error(err);
      setSelected(c);
      setOpen(true);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this category?")) return;
    try {
      await api.deleteCategory(id);
      setCategories((prev) => prev.filter((x) => x.id !== id));
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  return (
    <>
      <PageMeta title="CMAE" description="HealthCare" />
      <ComponentCard title="Medicine Categories">
        {loading ? (
          <div className="p-6">Loading...</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="px-5 py-3 text-left">Name</th>
                  <th className="px-5 py-3 text-left">Description</th>
                  <th className="px-5 py-3 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((c) => (
                  <tr key={c.id} className="border-b border-gray-100">
                    <td className="px-5 py-3">{c.name}</td>
                    <td className="px-5 py-3">{c.description}</td>
                    <td className="px-5 py-3">
                      <TableDropdown
                        dropdownButton={<button className="inline-flex items-center gap-2 rounded px-3 py-2 border">Actions</button>}
                        dropdownContent={<>
                          <button className="w-full text-left px-3 py-2 text-sm" onClick={()=>handleDelete(c.id)}>Delete</button>
                          <button className="w-full text-left px-3 py-2 text-sm" onClick={()=>viewMore(c)}>View More</button>
                          <button className="w-full text-left px-3 py-2 text-sm" onClick={()=>{/* TODO: archive */}}>Archive</button>
                        </>}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </ComponentCard>

      <BottomSheet isOpen={open} onClose={() => setOpen(false)} title={selected?.name || "Category Details"}>
        {selected && (
          <div>
            <h4 className="text-lg font-semibold mb-3">{selected.name}</h4>
            <p className="text-sm text-gray-600">{selected.description}</p>
            <div className="mt-6">
              <h5 className="font-medium">Sample Medicines</h5>
              <ul className="mt-3 list-disc list-inside text-sm text-gray-700">
                <li>Sample medicine A</li>
                <li>Sample medicine B</li>
                <li>Sample medicine C</li>
              </ul>
            </div>
          </div>
        )}
      </BottomSheet>
    </>
  );
}
