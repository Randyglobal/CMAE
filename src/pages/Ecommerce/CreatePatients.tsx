import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import Label from "../../components/form/Label";
import Input from "../../components/form/input/InputField";

import Button from "../../components/ui/button/Button";
import React, { useState } from "react";

export default function CreatePatients() {
  return (
    <>
      <PageMeta
        title="CMAE"
        description="HealthCare"
      />
      <PageBreadcrumb pageTitle="Create Patient" />
      <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-800">
          <h2 className="text-xl font-medium text-gray-800 dark:text-white">
            Create Patient
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Enter patient details below</p>
        </div>
        <div className="p-6 sm:p-8">
          <PatientForm />
        </div>
      </div>
    </>
  );
}

function PatientForm() {
  const [mrn, setMrn] = useState("");
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [lastVisit, setLastVisit] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"Stable"|"Critical"|"Discharged"|"Observation">("Stable");
  const [room, setRoom] = useState("");
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const handlePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setPhotoPreview(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = { mrn, name, dob, lastVisit, phone, status, room };
    // TODO: wire to API
    // eslint-disable-next-line no-console
    console.log("Create patient:", payload);
    alert("Patient saved (mock)");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="md:col-span-1 flex flex-col items-center gap-4">
          <div className="h-28 w-28 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
            {photoPreview ? (
              <img src={photoPreview} alt="preview" className="h-full w-full object-cover" />
            ) : (
              <span className="text-gray-500">No Photo</span>
            )}
          </div>
          <label className="flex cursor-pointer items-center gap-2 text-sm text-brand-500">
            <input type="file" accept="image/*" onChange={handlePhoto} className="hidden" />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4z" />
            </svg>
            Upload Photo
          </label>
        </div>

        <div className="md:col-span-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <Label>MRN</Label>
            <Input placeholder="MRN-0001" value={mrn} onChange={(e)=>setMrn(e.target.value)} />
          </div>
          <div>
            <Label>Full Name</Label>
            <Input placeholder="Lindsey Curtis" value={name} onChange={(e)=>setName(e.target.value)} />
          </div>
          <div>
            <Label>DOB</Label>
            <Input type="date" value={dob} onChange={(e)=>setDob(e.target.value)} />
          </div>
          <div>
            <Label>Last Visit</Label>
            <Input type="date" value={lastVisit} onChange={(e)=>setLastVisit(e.target.value)} />
          </div>
          <div>
            <Label>Phone</Label>
            <Input placeholder="(555) 123-4567" value={phone} onChange={(e)=>setPhone(e.target.value)} />
          </div>
          <div>
            <Label>Room</Label>
            <Input placeholder="101A" value={room} onChange={(e)=>setRoom(e.target.value)} />
          </div>
          <div className="sm:col-span-2">
            <Label>Status</Label>
            <select
              value={status}
              onChange={(e)=>setStatus(e.target.value as any)}
              className="h-11 w-full rounded-lg border border-gray-300 bg-transparent px-4 text-sm text-gray-800 shadow-theme-xs focus:outline-hidden focus:ring-3 dark:bg-gray-900 dark:text-white/90"
            >
              <option value="Stable">Stable</option>
              <option value="Observation">Observation</option>
              <option value="Critical">Critical</option>
              <option value="Discharged">Discharged</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit" variant="primary">Create Patient</Button>
      </div>
    </form>
  );
}
