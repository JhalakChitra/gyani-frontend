import StatCard from "./StatCard";

export default function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500">
          Welcome to Gyani
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <StatCard
          title="Revenue"
          value="₹4,25,000"
        />

        <StatCard
          title="Sales"
          value="1,250"
        />

        <StatCard
          title="Customers"
          value="320"
        />

        <StatCard
          title="Products"
          value="540"
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl border p-6">
          Revenue Chart
        </div>

        <div className="bg-white rounded-2xl border p-6">
          Recent Transactions
        </div>
      </div>
    </div>
  );
}