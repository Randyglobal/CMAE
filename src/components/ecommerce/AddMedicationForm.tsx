import React, { useState } from "react";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Select from "../form/Select";
import TextArea from "../form/input/TextArea";
import Button from "../ui/button/Button";

export default function AddMedicationForm() {
  const availability = [
    { value: "in", label: "In Stock" },
    { value: "out", label: "Out of Stock" },
  ];

  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [dose, setDose] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState<number>(0);
  const [status, setStatus] = useState(availability[0].value);
  const [lastRestocked, setLastRestocked] = useState("");
  const [description, setDescription] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImagePreview(String(reader.result));
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload = {
      name,
      sku,
      dose,
      price,
      quantity,
      status,
      lastRestocked,
      description,
    };
    console.log("Add medication:", payload);
    alert("Medication saved (mock)");
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">
            Products Description
          </h2>
        </div>
        <div className="p-4 sm:p-6 dark:border-gray-800">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <Label>Medication Name</Label>
                <Input
                  placeholder="Enter medication name"
                  value={name}
                  onChange={(e) => setName((e.target as HTMLInputElement).value)}
                />
              </div>
              <div>
                <Label>SKU</Label>
                <Input
                  placeholder="e.g. AMX-500"
                  value={sku}
                  onChange={(e) => setSku((e.target as HTMLInputElement).value)}
                />
              </div>
              <div>
                <Label>Dose</Label>
                <Input
                  placeholder="e.g. 500 mg"
                  value={dose}
                  onChange={(e) => setDose((e.target as HTMLInputElement).value)}
                />
              </div>
              <div>
                <Label>Price</Label>
                <Input
                  placeholder="$0.00"
                  value={price}
                  onChange={(e) => setPrice((e.target as HTMLInputElement).value)}
                />
              </div>
              <div>
                <Label>Quantity</Label>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => Math.max(0, q - 1))}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="h-10 w-24 rounded-lg border border-gray-300 px-3 text-center text-sm dark:border-gray-700 dark:bg-gray-900"
                    value={quantity}
                    onChange={(e) => setQuantity(Number((e.target as HTMLInputElement).value))}
                  />
                  <button
                    type="button"
                    onClick={() => setQuantity((q) => q + 1)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800"
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <Label>Availability Status</Label>
                <Select
                  options={availability}
                  placeholder="Select availability"
                  onChange={(v: string) => setStatus(v)}
                  defaultValue={status}
                />
              </div>
              <div>
                <Label>Last Restocked</Label>
                <Input
                  type="date"
                  value={lastRestocked}
                  onChange={(e) => setLastRestocked((e.target as HTMLInputElement).value)}
                />
              </div>
              <div className="col-span-full">
                <Label>Description</Label>
                <TextArea
                  rows={5}
                  placeholder="Optional notes (e.g. storage instructions)"
                  value={description}
                  onChange={(e) => setDescription((e.target as HTMLTextAreaElement).value)}
                />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <Button variant="outline" type="button" onClick={() => alert('Saved draft (mock)')}>Save Draft</Button>
              <Button variant="primary" type="submit">Add Medication</Button>
            </div>
          </form>
        </div>
      </div>
      <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        {/* Pricing & availability section merged into medication details above */}
      </div>
      <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
        <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-800">
          <h2 className="text-lg font-medium text-gray-800 dark:text-white">
            Medication Image
          </h2>
        </div>
        <div className="p-4 sm:p-6">
          <label
            htmlFor="product-image"
            className="shadow-theme-xs group hover:border-brand-500 block cursor-pointer rounded-lg border-2 border-dashed border-gray-300 transition dark:hover:border-brand-400 dark:border-gray-800"
          >
            <div className="flex justify-center p-6">
              <div className="flex max-w-[240px] flex-col items-center gap-4">
                {imagePreview ? (
                  <img src={imagePreview} className="max-h-40 rounded-md" alt="preview" />
                ) : (
                  <div className="inline-flex h-13 w-13 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition dark:border-gray-800 dark:text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20.0004 16V18.5C20.0004 19.3284 19.3288 20 18.5004 20H5.49951C4.67108 20 3.99951 19.3284 3.99951 18.5V16M12.0015 4L12.0015 16M7.37454 8.6246L11.9994 4.00269L16.6245 8.6246"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-medium text-gray-800 dark:text-white/90">Click to upload</span>
                  or drag and drop SVG, PNG, JPG or GIF (MAX. 800x400px)
                </p>
              </div>
            </div>
            <input type="file" id="product-image" className="hidden" onChange={handleImageChange} />
          </label>
        </div>
      </div>
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
        <Button variant="outline">Draft</Button>
        <Button variant="primary">Publish Product</Button>
      </div>
    </div>
  );
}
