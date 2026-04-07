export default function OrderHistory() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/3">
      <h2 className="mb-5 text-lg font-semibold text-gray-800 dark:text-white/90">
        Medication Order History
      </h2>
      {/* Timeline item: Order Placed */}
      <div className="relative pb-7 pl-11">
        <div className="absolute top-0 left-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-50 bg-white text-gray-700 ring ring-gray-200 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:ring-gray-800">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 7H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 2C8.13 2 5 5.13 5 9C5 13.25 9 17 12 22C15 17 19 13.25 19 9C19 5.13 15.87 2 12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="ml-4 flex justify-between">
          <div>
            <h4 className="font-medium text-gray-800 dark:text-white/90">Order Placed</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Order #MO-1103 — for John Doe</p>
          </div>

          <div>
            <span className="text-xs text-gray-500 dark:text-gray-400">09:12</span>
            <p className="text-xs text-gray-500 dark:text-gray-400">31 Mar 2026</p>
          </div>
        </div>

        <div className="absolute top-8 left-6 h-full w-px border border-dashed border-gray-300 dark:border-gray-700"></div>
      </div>

      {/* Timeline item: Prepared/Dispensed */}
      <div className="relative pb-7 pl-11">
        <div className="absolute top-0 left-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-50 bg-white text-gray-700 ring ring-gray-200 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:ring-gray-800">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 15V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 10L12 14L17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="ml-4 flex justify-between">
          <div>
            <h4 className="font-medium text-gray-800 dark:text-white/90">Prepared / Dispensed</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">3 items ready at Central Pharmacy</p>
          </div>

          <div>
            <span className="text-xs text-gray-500 dark:text-gray-400">10:03</span>
            <p className="text-xs text-gray-500 dark:text-gray-400">31 Mar 2026</p>
          </div>
        </div>

        <div className="absolute top-8 left-6 h-full w-px border border-dashed border-gray-300 dark:border-gray-700"></div>
      </div>

      {/* Timeline item: Picked Up / Delivered */}
      <div className="relative pl-11">
        <div className="absolute top-0 left-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-gray-50 bg-white text-gray-700 ring ring-gray-200 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:ring-gray-800">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 7L9 18L4 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className="ml-4 flex justify-between">
          <div>
            <h4 className="font-medium text-gray-800 dark:text-white/90">Picked Up</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Collected by patient at outpatient window</p>
          </div>

          <div>
            <span className="text-xs text-gray-500 dark:text-gray-400">11:20</span>
            <p className="text-xs text-gray-500 dark:text-gray-400">31 Mar 2026</p>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="mt-5 flex items-center justify-center gap-2">
        <button className="shadow-theme-xs rounded-md border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
          View Details
        </button>
        <button className="shadow-theme-xs rounded-md border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
          Print Receipt
        </button>
        <button className="shadow-theme-xs rounded-md border border-gray-300 px-3 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-100 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800">
          Mark As Returned
        </button>
      </div>
    </div>
  );
}
