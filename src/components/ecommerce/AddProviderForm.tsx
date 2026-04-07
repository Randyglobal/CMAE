import React, { useState } from "react";
import * as api from "../../services/api";

interface ProviderPayload {
  name: string;
  contact_name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  tax_id: string;
  notes: string;
}

export default function AddProviderForm({onSubmit}:{onSubmit?:(payload:ProviderPayload)=>void}){
  const [form, setForm] = useState<ProviderPayload>({
    name: "",
    contact_name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    tax_id: "",
    notes: "",
  });

  const handleChange = (k: keyof ProviderPayload, v: string) => setForm(prev=>({...prev, [k]: v}));

  const submit = (e:React.FormEvent) =>{
    e.preventDefault();
    (async () => {
      try {
        const res = await api.addSupplier(form as any);
        if (onSubmit) onSubmit(res);
        alert("Provider added");
      } catch (err) {
        console.error(err);
        alert("Failed to add provider");
      }
    })();
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="text-sm">Name</label>
          <input value={form.name} onChange={e=>handleChange('name', e.target.value)} className="mt-1 w-full rounded border px-3 py-2" />
        </div>
        <div>
          <label className="text-sm">Contact Name</label>
          <input value={form.contact_name} onChange={e=>handleChange('contact_name', e.target.value)} className="mt-1 w-full rounded border px-3 py-2" />
        </div>
        <div>
          <label className="text-sm">Email</label>
          <input type="email" value={form.email} onChange={e=>handleChange('email', e.target.value)} className="mt-1 w-full rounded border px-3 py-2" />
        </div>
        <div>
          <label className="text-sm">Phone</label>
          <input value={form.phone} onChange={e=>handleChange('phone', e.target.value)} className="mt-1 w-full rounded border px-3 py-2" />
        </div>
        <div>
          <label className="text-sm">Address</label>
          <input value={form.address} onChange={e=>handleChange('address', e.target.value)} className="mt-1 w-full rounded border px-3 py-2" />
        </div>
        <div>
          <label className="text-sm">City</label>
          <input value={form.city} onChange={e=>handleChange('city', e.target.value)} className="mt-1 w-full rounded border px-3 py-2" />
        </div>
        <div>
          <label className="text-sm">Country</label>
          <input value={form.country} onChange={e=>handleChange('country', e.target.value)} className="mt-1 w-full rounded border px-3 py-2" />
        </div>
        <div>
          <label className="text-sm">Tax ID</label>
          <input value={form.tax_id} onChange={e=>handleChange('tax_id', e.target.value)} className="mt-1 w-full rounded border px-3 py-2" />
        </div>
      </div>
      <div>
        <label className="text-sm">Notes</label>
        <textarea value={form.notes} onChange={e=>handleChange('notes', e.target.value)} className="mt-1 w-full rounded border px-3 py-2" />
      </div>
      <div className="flex justify-end">
        <button type="submit" className="bg-brand-500 text-white px-4 py-2 rounded">Add Provider</button>
      </div>
    </form>
  )
}
