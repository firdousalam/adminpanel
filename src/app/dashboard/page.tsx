export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded">Users: 120</div>
        <div className="bg-white p-4 shadow rounded">Sales: ₹25,000</div>
        <div className="bg-white p-4 shadow rounded">Growth: 12%</div>
      </div>
    </div>
  );
}
