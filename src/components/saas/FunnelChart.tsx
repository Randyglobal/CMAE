import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";
export default function FunnelChart() {
  // Represent overall app users across months: Visitors -> Signups -> Active -> Appointments
  const series = [
    { name: "Visitors", data: [1200, 1500, 1350, 1600, 1700, 1800, 1750, 1900] },
    { name: "Signups", data: [320, 410, 380, 420, 480, 500, 490, 530] },
    { name: "Active Users", data: [210, 260, 240, 300, 320, 350, 340, 380] },
    { name: "Appointments", data: [45, 60, 55, 70, 75, 82, 78, 90] },
  ];

  const options: ApexOptions = {
    colors: ["#0066FF", "#00BFA6", "#FFB020", "#FF5A5F"],
    chart: {
      fontFamily: "Outfit, sans-serif",
      type: "bar",
      stacked: true,
      height: 320,
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "45%",
        borderRadius: 8,
      },
    },
    dataLabels: { enabled: false },
    xaxis: {
      categories: ["Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar"],
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    legend: {
      show: true,
      position: "top",
      horizontalAlign: "left",
      fontFamily: "Outfit",
      fontSize: "13px",
      markers: { size: 6, shape: "circle" },
      itemMargin: { horizontal: 10 },
    },
    yaxis: {
      title: { text: "Users" },
    },
    grid: { yaxis: { lines: { show: true } } },
    fill: { opacity: 1 },
    tooltip: {
      x: { show: true },
      y: { formatter: (val: number) => `${val} users` },
    },
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="mb-6 flex justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Overall App Users
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Overview of visitors, signups, active users and appointments</p>
        </div>
      </div>
      <div className="overflow-x-auto custom-scrollbar pl-2">
        <Chart
          className="-ml-5 min-w-[700px] xl:min-w-full"
          options={options}
          series={series}
          type="bar"
          height={320}
        />
      </div>
    </div>
  );
}
