import { TrendingUp, DollarSign, ShoppingBag, Users, ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function AdminDashboard() {
  const metrics = [
    { label: "Total Revenue", value: "NPR 45,231", trend: "+12.5%", positive: true, icon: DollarSign, color: "text-emerald-600", bg: "bg-emerald-100" },
    { label: "Active Orders", value: "34", trend: "+5.2%", positive: true, icon: ShoppingBag, color: "text-orange-600", bg: "bg-orange-100" },
    { label: "Total Customers", value: "1,204", trend: "-2.1%", positive: false, icon: Users, color: "text-blue-600", bg: "bg-blue-100" },
    { label: "Conversion Rate", value: "3.24%", trend: "+1.1%", positive: true, icon: TrendingUp, color: "text-purple-600", bg: "bg-purple-100" },
  ];

  const recentOrders = [
    { id: "ORD-7392", customer: "Sita Sharma", date: "2 mins ago", total: "NPR 1,250", status: "Processing" },
    { id: "ORD-7391", customer: "Ram Kumar", date: "15 mins ago", total: "NPR 4,500", status: "Delivered" },
    { id: "ORD-7390", customer: "Gita Thapa", date: "1 hour ago", total: "NPR 850", status: "Processing" },
    { id: "ORD-7389", customer: "Hari Prasad", date: "3 hours ago", total: "NPR 12,400", status: "Delivered" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
          <p className="text-gray-500 mt-1">Welcome back, Admin. Here is what&apos;s happening today.</p>
        </div>
        <div className="flex gap-2">
          <select className="bg-white border border-gray-200 text-gray-700 text-sm rounded-lg px-3 py-2 outline-none">
            <option>Today</option>
            <option>Last 7 Days</option>
            <option>This Month</option>
          </select>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {metrics.map((metric, idx) => (
          <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${metric.bg}`}>
                <metric.icon className={`h-6 w-6 ${metric.color}`} />
              </div>
              <div className={`flex items-center text-sm font-medium ${metric.positive ? 'text-emerald-600' : 'text-red-600'}`}>
                {metric.trend}
                {metric.positive ? <ArrowUpRight className="h-4 w-4 ml-1" /> : <ArrowDownRight className="h-4 w-4 ml-1" />}
              </div>
            </div>
            <h3 className="text-gray-500 text-sm font-medium">{metric.label}</h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-gray-900">Recent Orders</h2>
          <button className="text-sm font-semibold text-orange-600 hover:text-orange-700">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-4">Order ID</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Total</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentOrders.map((order, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{order.id}</td>
                  <td className="px-6 py-4">{order.customer}</td>
                  <td className="px-6 py-4 text-gray-500">{order.date}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900">{order.total}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Delivered' ? 'bg-emerald-100 text-emerald-700' : 'bg-orange-100 text-orange-700'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
