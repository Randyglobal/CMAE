import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import Button from "../ui/button/Button";
import TableDropdown from "../common/TableDropdown";
import BottomSheet from "../../components/common/BottomSheet";
import * as api from "../../services/api";

interface Product {
  id: number;
  name: string;
  image: string;
  sku: string;
  dose: string;
  price: string;
  stock: string;
  lastRestocked: string;
}

interface Sort {
  key: keyof Product;
  asc: boolean;
}

const FilterDropdown: React.FC<{
  showFilter: boolean;
  setShowFilter: (show: boolean) => void;
}> = ({ showFilter, setShowFilter }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowFilter(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [setShowFilter]);

  return (
    <div className="relative" ref={ref}>
      <button
        className="shadow-theme-xs flex h-11 w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 sm:w-auto sm:min-w-[100px] dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
        onClick={() => setShowFilter(!showFilter)}
        type="button"
      >
        Filter
      </button>
      {showFilter && (
        <div className="absolute right-0 z-10 mt-2 w-56 rounded-lg border border-gray-200 bg-white p-4 shadow-lg dark:border-gray-700 dark:bg-gray-800">
          <div className="mb-5">
            <label className="mb-2 block text-xs font-medium text-gray-700 dark:text-gray-300">
              Category
            </label>
            <input
              type="text"
              className="dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-10 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
              placeholder="Search category..."
            />
          </div>
          <div className="mb-5">
            <label className="mb-2 block text-xs font-medium text-gray-700 dark:text-gray-300">
              Customer
            </label>
            <input
              type="text"
              className="dark:bg-dark-900 shadow-theme-xs focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-10 w-full rounded-lg border border-gray-300 bg-transparent px-4 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-hidden dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30"
              placeholder="Search customer..."
            />
          </div>
          <button className="bg-brand-500 hover:bg-brand-600 h-10 w-full rounded-lg px-3 py-2 text-sm font-medium text-white">
            Apply
          </button>
        </div>
      )}
    </div>
  );
};

const StockListTable: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [sort, setSort] = useState<Sort>({ key: "name", asc: true });
  const [page, setPage] = useState(1);
  const [perPage] = useState(7);
  const [showFilter, setShowFilter] = useState(false);
  const [loading, setLoading] = useState(false);
  const [detailOpen, setDetailOpen] = useState(false);
  const [detailProduct, setDetailProduct] = useState<Product | null>(null);

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await api.getMedicines();
      const data = res?.data || res || [];
      const mapped = (data || []).map((m: any) => ({
        id: m.id,
        name: m.name,
        image: m.image || "/images/product/product-01.jpg",
        sku: m.sku || String(m.id),
        dose: m.dose || "",
        price: m.price ? `$${m.price}` : "",
        stock: m.stock_status || (m.in_stock ? "In Stock" : "Out of Stock") || "",
        lastRestocked: m.last_restocked || "",
      }));
      setProducts(mapped);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchProducts(); }, []);

  const sortedProducts = () => {
    return [...products].sort((a, b) => {
      let valA: any = a[sort.key];
      let valB: any = b[sort.key];
      if (sort.key === "price") {
        valA = parseFloat(String(valA).replace(/[^\d.]/g, "")) || 0;
        valB = parseFloat(String(valB).replace(/[^\d.]/g, "")) || 0;
      }
      if (valA < valB) return sort.asc ? -1 : 1;
      if (valA > valB) return sort.asc ? 1 : -1;
      return 0;
    });
  };

  const paginatedProducts = () => {
    const start = (page - 1) * perPage;
    return sortedProducts().slice(start, start + perPage);
  };

  const totalPages = () => Math.ceil(products.length / perPage);

  const goToPage = (n: number) => { if (n >= 1 && n <= totalPages()) setPage(n); };
  const prevPage = () => { if (page > 1) setPage(page - 1); };
  const nextPage = () => { if (page < totalPages()) setPage(page + 1); };

  const toggleSelect = (id: number) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  const toggleAll = () => {
    const ids = paginatedProducts().map((p) => p.id);
    setSelected((prev) => (isAllSelected() ? prev.filter((id) => !ids.includes(id)) : [...new Set([...prev, ...ids])]));
  };

  const isAllSelected = () => {
    const ids = paginatedProducts().map((p) => p.id);
    return ids.length > 0 && ids.every((id) => selected.includes(id));
  };

  const startItem = () => (products.length === 0 ? 0 : (page - 1) * perPage + 1);
  const endItem = () => Math.min(page * perPage, products.length);

  const sortBy = (key: keyof Product) => setSort((prev) => ({ key, asc: prev.key === key ? !prev.asc : true }));

  const viewMore = async (id: number) => {
    try {
      const res = await api.getMedicine(id);
      const m = res?.data || res;
      const product = {
        id: m.id,
        name: m.name,
        image: m.image || "/images/product/product-01.jpg",
        sku: m.sku || String(m.id),
        dose: m.dose || "",
        price: m.price ? `$${m.price}` : "",
        stock: m.stock_status || "",
        lastRestocked: m.last_restocked || "",
      };
      setDetailProduct(product);
      setDetailOpen(true);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: number) => {
    if (!confirm("Delete this medicine?")) return;
    try {
      await api.deleteMedicine(id);
      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="flex flex-col justify-between gap-5 border-b border-gray-200 px-5 py-4 sm:flex-row sm:items-center dark:border-gray-800">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">Medications Inventory</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Track medications, stock levels and pricing for the clinic.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">Export</Button>
          <Link to="/add-medication" className="bg-brand-500 shadow-sm hover inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-white transition hover:bg-brand-600">Add Medication</Link>
        </div>
      </div>

      <div className="border-b border-gray-200 px-5 py-4 dark:border-gray-800">
        <div className="flex gap-3 sm:justify-between">
          <div className="relative flex-1 sm:flex-auto">
            <input type="text" placeholder="Search..." className="shadow-sm focus:border-brand-300 focus:ring-brand-500/10 dark:focus:border-brand-800 h-11 w-full rounded-lg border border-gray-300 bg-transparent py-2.5 pr-4 pl-11 text-sm text-gray-800 placeholder:text-gray-400 focus:ring-3 focus:outline-none sm:w-[300px] sm:min-w-[300px] dark:border-gray-700 dark:bg-gray-900 dark:text-white/90 dark:placeholder:text-white/30" />
          </div>
          <FilterDropdown showFilter={showFilter} setShowFilter={setShowFilter} />
        </div>
      </div>

      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200 dark:divide-gray-800 dark:border-gray-800">
              <th className="lg:w-14 px-5 py-4 text-left whitespace-nowrap">
                <label className="cursor-pointer text-sm font-medium text-gray-700 select-none dark:text-gray-400">
                  <input type="checkbox" className="sr-only" onChange={toggleAll} checked={isAllSelected()} />
                  <span className={`flex h-4 w-4 items-center justify-center rounded-sm border-[1.25px] ${isAllSelected() ? "border-brand-500 bg-brand-500" : "bg-transparent border-gray-300 dark:border-gray-700"}`}>
                    <span className={isAllSelected() ? "" : "opacity-0"}>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.6666" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                  </span>
                </label>
              </th>
              <th onClick={() => sortBy("name")} className="cursor-pointer px-5 whitespace-nowrap py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Medication</th>
              <th onClick={() => sortBy("dose")} className="cursor-pointer px-5 py-4 whitespace-nowrap text-left text-xs font-medium text-gray-500 dark:text-gray-400">Dose</th>
              <th onClick={() => sortBy("price")} className="cursor-pointer px-5 whitespace-nowrap py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400">Price</th>
              <th className="px-5 py-4 text-left whitespace-nowrap text-xs font-medium text-gray-500 dark:text-gray-400">Stock</th>
              <th className="px-5 py-4 text-left whitespace-nowrap text-xs font-medium text-gray-500 dark:text-gray-400">Last Restocked</th>
              <th className="px-5 py-4 text-left whitespace-nowrap text-xs font-medium text-gray-500 dark:text-gray-400"><span className="sr-only">Action</span></th>
            </tr>
          </thead>
          <tbody className="divide-x divide-y divide-gray-200 dark:divide-gray-800">
            {paginatedProducts().map((product) => (
              <tr key={product.id} className="transition hover:bg-gray-50 dark:hover:bg-gray-900">
                <td className="lg:w-14 px-5 py-4 whitespace-nowrap">
                  <label className="cursor-pointer text-sm font-medium text-gray-700 select-none dark:text-gray-400">
                    <input type="checkbox" className="sr-only" checked={selected.includes(product.id)} onChange={() => toggleSelect(product.id)} />
                    <span className={`flex h-4 w-4 items-center justify-center rounded-sm border-[1.25px] ${selected.includes(product.id) ? "border-brand-500 bg-brand-500" : "bg-transparent border-gray-300 dark:border-gray-700"}`}>
                      <span className={selected.includes(product.id) ? "" : "opacity-0"}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L4.5 8.5L2 6" stroke="white" strokeWidth="1.6666" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </span>
                    </span>
                  </label>
                </td>

                <td className="px-5 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12"><img src={product.image} className="h-12 w-12 rounded-md" alt="" /></div>
                    <div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-400">{product.name}</span>
                      <p className="text-xs text-gray-500 dark:text-gray-400">SKU: {product.sku}</p>
                    </div>
                  </div>
                </td>

                <td className="px-5 py-4 whitespace-nowrap"><p className="text-sm text-gray-500 dark:text-gray-400">{product.dose}</p></td>
                <td className="px-5 py-4 whitespace-nowrap"><p className="text-sm text-gray-700 dark:text-gray-400">{product.price}</p></td>
                <td className="px-5 py-4 whitespace-nowrap"><span className={`text-xs rounded-full px-2 py-0.5 font-medium ${product.stock === "In Stock" ? "bg-green-50 dark:bg-green-500/15 text-green-700 dark:text-green-500" : "bg-red-50 dark:bg-red-500/15 text-red-700 dark:text-red-500"}`}>{product.stock}</span></td>
                <td className="px-5 py-4 whitespace-nowrap"><p className="text-sm text-gray-700 dark:text-gray-400">{product.lastRestocked}</p></td>
                <td className="px-5 py-4 whitespace-nowrap">
                  <div className="relative inline-block">
                    <TableDropdown
                      dropdownButton={<button className="text-gray-500 dark:text-gray-400 ">•••</button>}
                      dropdownContent={<>
                        <button className="text-xs flex w-full rounded-lg px-3 py-2 text-left font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700" onClick={()=>viewMore(product.id)}>View More</button>
                        <button className="text-xs flex w-full rounded-lg px-3 py-2 text-left font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700" onClick={()=>handleDelete(product.id)}>Delete</button>
                      </>}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center flex-col sm:flex-row justify-between border-t border-gray-200 px-5 py-4 dark:border-gray-800">
        <div className="pb-3 sm:pb-0">
          <span className="block text-sm font-medium text-gray-500 dark:text-gray-400">Showing <span className="text-gray-800 dark:text-white/90">{startItem()}</span> to <span className="text-gray-800 dark:text-white/90">{endItem()}</span> of <span className="text-gray-800 dark:text-white/90">{products.length}</span></span>
        </div>
        <div className="flex w-full items-center justify-between gap-2 rounded-lg bg-gray-50 p-4 sm:w-auto sm:justify-normal sm:rounded-none sm:bg-transparent sm:p-0 dark:bg-gray-900 dark:sm:bg-transparent">
          <button onClick={prevPage} disabled={page === 1} className="shadow-sm flex items-center gap-2 rounded-lg border border-gray-300 bg-white p-2 text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 sm:p-2.5">Prev</button>
          <span className="block text-sm font-medium text-gray-700 sm:hidden dark:text-gray-400">Page <span>{page}</span> of <span>{totalPages()}</span></span>
          <ul className="hidden items-center gap-0.5 sm:flex">{Array.from({ length: totalPages() }, (_, i) => i + 1).map((n) => (<li key={n}><a href="#" onClick={(e)=>{e.preventDefault(); goToPage(n);}} className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium ${page===n ? 'bg-brand-500 text-white' : 'text-gray-700 dark:text-gray-400'}`}>{n}</a></li>))}</ul>
          <button onClick={nextPage} disabled={page === totalPages()} className="shadow-sm flex items-center gap-2 rounded-lg border border-gray-300 bg-white p-2 text-gray-700 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-50 sm:p-2.5">Next</button>
        </div>
      </div>

      <BottomSheet isOpen={detailOpen} onClose={()=>setDetailOpen(false)} title={detailProduct?.name || 'Medicine Details'}>
        {detailProduct ? (
          <div>
            <h4 className="text-lg font-semibold mb-3">{detailProduct.name}</h4>
            <p>Dose: {detailProduct.dose}</p>
            <p>Price: {detailProduct.price}</p>
          </div>
        ) : null}
      </BottomSheet>
    </div>
  );
};

export default StockListTable;
