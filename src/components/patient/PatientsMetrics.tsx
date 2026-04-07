import { Link } from "react-router";

export default function PatientsMetrics() {
  return (
    <div className="mb-6 rounded-2xl border border-gray-200 bg-white p-4 sm:p-6 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="font-semibold text-gray-800 dark:text-white/90">Patients Metrics</h2>
          <p className="text-xs text-gray-400 dark:text-gray-500">Today's snapshot</p>
        </div>
        <div>
          <Link
            to="/create-patient"
            className="bg-brand-500 shadow-theme-xs hover:bg-brand-600 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-medium text-white transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            New Record
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-white/5">
            {/* patient icon */}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" stroke="#0f766e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M4 20c0-3.314 2.686-6 6-6h4c3.314 0 6 2.686 6 6" stroke="#0f766e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Patients Today</p>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white/90">128</h3>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600 dark:bg-white/5">
            {/* appointment icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 7V3M16 7V3M3 11h18M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z" stroke="#4338ca" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Appointments</p>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white/90">42</h3>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-50 text-yellow-600 dark:bg-white/5">
            {/* cart / medication icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6h15l-1.5 9h-12L6 6z" stroke="#b45309" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" stroke="#b45309" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Medicines Dispensed</p>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white/90">74</h3>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-lg border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-50 text-red-600 dark:bg-white/5">
            {/* alert icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 9v4" stroke="#b91c1c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 17h.01" stroke="#b91c1c" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" stroke="#b91c1c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Critical Alerts</p>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white/90">3</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
