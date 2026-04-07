import Badge from "../ui/badge/Badge";

const transactions = [
  {
    id: "AP-1001",
    date: "2026-03-30",
    patient: "John Doe",
    doctor: "Dr. Smith",
    time: "09:30 AM",
    status: "Booked" as const,
  },
  {
    id: "AP-1002",
    date: "2026-03-30",
    patient: "Jane Roe",
    doctor: "Dr. Lee",
    time: "11:00 AM",
    status: "Completed" as const,
  },
  {
    id: "AP-1003",
    date: "2026-03-29",
    patient: "Mark Smith",
    doctor: "Dr. Patel",
    time: "02:00 PM",
    status: "Booked" as const,
  },
  {
    id: "AP-1004",
    date: "2026-03-28",
    patient: "Alice Brown",
    doctor: "Dr. Green",
    time: "10:15 AM",
    status: "Cancelled" as const,
  },
  {
    id: "AP-1005",
    date: "2026-03-27",
    patient: "Bob Martin",
    doctor: "Dr. Khan",
    time: "03:45 PM",
    status: "Completed" as const,
  },
];

export default function SaasInvoiceTable() {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Recent Appointments
        </h3>
      </div>
      <div className="custom-scrollbar overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-900">
              <th className="px-6 py-4 text-left text-sm font-medium whitespace-nowrap text-gray-500 dark:text-gray-400">
                Appointment ID
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium whitespace-nowrap text-gray-500 dark:text-gray-400">
                Date
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium whitespace-nowrap text-gray-500 dark:text-gray-400">
                Patient
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium whitespace-nowrap text-gray-500 dark:text-gray-400">
                Doctor
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium whitespace-nowrap text-gray-500 dark:text-gray-400">
                Time
              </th>
              <th className="px-6 py-4 text-left text-sm font-medium whitespace-nowrap text-gray-500 dark:text-gray-400">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
            {/* <tr>
              <td className="px-6 py-4 text-left text-sm whitespace-nowrap text-gray-700 dark:text-gray-400">
                #DF429
              </td>
              <td className="px-6 py-4 text-left text-sm whitespace-nowrap text-gray-700 dark:text-gray-400">
                April 28, 2016
              </td>
              <td className="px-6 py-4 text-left text-sm whitespace-nowrap text-gray-700 dark:text-gray-400">
                Jenny Wilson
              </td>
              <td className="px-6 py-4 text-left text-sm whitespace-nowrap text-gray-700 dark:text-gray-400">
                $473.85
              </td>
              <td className="px-6 py-4 text-left">
                <span className="bg-success-50 text-theme-xs text-success-600 dark:bg-success-500/15 dark:text-success-500 rounded-full px-2 py-0.5 font-medium">
                  Complete
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-left text-sm whitespace-nowrap text-gray-700 dark:text-gray-400">
                #HTY274
              </td>
              <td className="px-6 py-4 text-left text-sm whitespace-nowrap text-gray-700 dark:text-gray-400">
                October 30, 2017
              </td>
              <td className="px-6 py-4 text-left text-sm whitespace-nowrap text-gray-700 dark:text-gray-400">
                Wade Warren
              </td>
              <td className="px-6 py-4 text-left text-sm whitespace-nowrap text-gray-700 dark:text-gray-400">
                $293.01
              </td>
              <td className="px-6 py-4 text-left text-sm whitespace-nowrap text-gray-700 dark:text-gray-400">
                <span className="bg-success-50 text-theme-xs text-success-600 dark:bg-success-500/15 dark:text-success-500 rounded-full px-2 py-0.5 font-medium">
                  Complete
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-left text-sm whitespace-nowrap text-gray-700 dark:text-gray-400">
                #LKE600
              </td>
              <td className="px-6 py-4 text-left text-sm whitespace-nowrap text-gray-700 dark:text-gray-400">
                May 29, 2017
              </td>
              <td className="px-6 py-4 text-left text-sm whitespace-nowrap text-gray-700 dark:text-gray-400">
                Darlene Robertson
              </td>
              <td className="px-6 py-4 text-left text-sm whitespace-nowrap text-gray-700 dark:text-gray-400">
                $782.01
              </td>
              <td className="px-6 py-4 text-left text-sm whitespace-nowrap text-gray-700 dark:text-gray-400">
                <span className="bg-warning-50 text-theme-xs text-warning-600 dark:bg-warning-500/15 dark:text-warning-500 rounded-full px-2 py-0.5 font-medium">
                  Pending
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-left text-sm whitespace-nowrap text-gray-700 dark:text-gray-400">
                #HRP447
              </td>
              <td className="px-6 py-4 text-left text-sm whitespace-nowrap text-gray-700 dark:text-gray-400">
                May 20, 2015
              </td>
              <td className="px-6 py-4 text-left text-sm whitespace-nowrap text-gray-700 dark:text-gray-400">
                Arlene McCoy
              </td>
              <td className="px-6 py-4 text-left text-sm whitespace-nowrap text-gray-700 dark:text-gray-400">
                $202.87
              </td>
              <td className="px-6 py-4 text-left text-sm whitespace-nowrap text-gray-700 dark:text-gray-400">
                <span className="bg-error-50 text-theme-xs text-error-600 dark:bg-error-500/15 dark:text-error-500 rounded-full px-2 py-0.5 font-medium">
                  Cancelled
                </span>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 text-left text-sm whitespace-nowrap text-gray-700 dark:text-gray-400">
                #WRH647
              </td>
              <td className="px-6 py-4 text-left text-sm whitespace-nowrap text-gray-700 dark:text-gray-400">
                March 13, 2014
              </td>
              <td className="px-6 py-4 text-left text-sm whitespace-nowrap text-gray-700 dark:text-gray-400">
                Bessie Cooper
              </td>
              <td className="px-6 py-4 text-left text-sm whitespace-nowrap text-gray-700 dark:text-gray-400">
                $490.51
              </td>
              <td className="px-6 py-4 text-left text-sm whitespace-nowrap text-gray-700 dark:text-gray-400">
                <span className="bg-success-50 text-theme-xs text-success-600 dark:bg-success-500/15 dark:text-success-500 rounded-full px-2 py-0.5 font-medium">
                  Complete
                </span>
              </td>
            </tr> */}
            {transactions.map((t) => (
              <tr key={t.id} className="hover:bg-gray-50 dark:hover:bg-gray-900">
                <td className="px-6 py-4 text-left text-sm whitespace-nowrap text-gray-700 dark:text-gray-400">
                  {t.id}
                </td>
                <td className="px-6 py-4 text-left text-sm whitespace-nowrap text-gray-700 dark:text-gray-400">
                  {t.date}
                </td>
                <td className="px-6 py-4 text-left text-sm whitespace-nowrap text-gray-700 dark:text-gray-400">
                  {t.patient}
                </td>
                <td className="px-6 py-4 text-left text-sm whitespace-nowrap text-gray-700 dark:text-gray-400">
                  {t.doctor}
                </td>
                <td className="px-6 py-4 text-left text-sm whitespace-nowrap text-gray-700 dark:text-gray-400">
                  {t.time}
                </td>
                <td className="px-6 py-4 text-left">
                  <Badge
                    size="sm"
                    color={
                      t.status === "Completed"
                        ? "success"
                        : t.status === "Booked"
                        ? "primary"
                        : "error"
                    }
                  >
                    {t.status}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
