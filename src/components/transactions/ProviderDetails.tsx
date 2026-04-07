export default function ProviderDetails() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/3">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="mb-1 text-lg font-semibold text-gray-800 dark:text-white/90">
            Provider Details
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">Primary contact and license information</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
            Edit
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg bg-brand-500 px-3 py-2 text-sm font-medium text-white hover:bg-brand-600">
            Contact
          </button>
        </div>
      </div>

      <ul className="mt-4 divide-y divide-gray-100 dark:divide-gray-800">
        <li className="flex items-start gap-5 py-3">
          <span className="w-1/3 text-sm text-gray-500 dark:text-gray-400">Name</span>
          <span className="w-2/3 text-sm text-gray-700 dark:text-gray-400">Dr. Aaron Blake</span>
        </li>
        <li className="flex items-start gap-5 py-3">
          <span className="w-1/3 text-sm text-gray-500 dark:text-gray-400">Provider ID</span>
          <span className="w-2/3 text-sm text-gray-700 dark:text-gray-400">D-110</span>
        </li>
        <li className="flex items-start gap-5 py-3">
          <span className="w-1/3 text-sm text-gray-500 dark:text-gray-400">Specialty</span>
          <span className="w-2/3 text-sm text-gray-700 dark:text-gray-400">Internal Medicine</span>
        </li>
        <li className="flex items-start gap-5 py-3">
          <span className="w-1/3 text-sm text-gray-500 dark:text-gray-400">License No.</span>
          <span className="w-2/3 text-sm text-gray-700 dark:text-gray-400">LIC-987654</span>
        </li>
        <li className="flex items-start gap-5 py-3">
          <span className="w-1/3 text-sm text-gray-500 dark:text-gray-400">Email</span>
          <span className="w-2/3 text-sm text-gray-700 dark:text-gray-400">aaron.blake@clinic.example</span>
        </li>
        <li className="flex items-start gap-5 py-3">
          <span className="w-1/3 text-sm text-gray-500 dark:text-gray-400">Phone</span>
          <span className="w-2/3 text-sm text-gray-700 dark:text-gray-400">+1 (555) 123-4567</span>
        </li>
        <li className="flex items-start gap-5 py-3">
          <span className="w-1/3 text-sm text-gray-500 dark:text-gray-400">Clinic</span>
          <span className="w-2/3 text-sm text-gray-700 dark:text-gray-400">Central Medical Centre</span>
        </li>
        <li className="flex items-start gap-5 py-3">
          <span className="w-1/3 text-sm text-gray-500 dark:text-gray-400">Address</span>
          <span className="w-2/3 text-sm text-gray-700 dark:text-gray-400">123 Health St, Suite 400, Springfield, IL 62704</span>
        </li>
      </ul>
    </div>
  );
}
