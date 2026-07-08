import { Search, Filter, Eye } from "lucide-react";

export default function AdminOrders() {
  const recentOrders = [
    { id: "ORD-7392", customer: "Sita Sharma", items: 3, date: "2 mins ago", total: "NPR 1,250", status: "Processing" },
    { id: "ORD-7391", customer: "Ram Kumar", items: 8, date: "15 mins ago", total: "NPR 4,500", status: "Delivered" },
    { id: "ORD-7390", customer: "Gita Thapa", items: 1, date: "1 hour ago", total: "NPR 850", status: "Processing" },
    { id: "ORD-7389", customer: "Hari Prasad", items: 15, date: "3 hours ago", total: "NPR 12,400", status: "Delivered" },
    { id: "ORD-7388", customer: "Sunil Shrestha", items: 4, date: "5 hours ago", total: "NPR 2,100", status: "Cancelled" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Orders</h1>
          <p className="text-gray-500 mt-1">Manage and track customer orders.</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-100 flex gap-4">
          <div className="flex-1 flex items-center bg-gray-50 rounded-lg px-3 py-2 border border-gray-200">
            <Search className="h-4 w-4 text-gray-400 mr-2" />
            <input 
              type="text" 
              placeholder="Search by order ID or customer..." 
              className="bg-transparent border-none outline-none text-sm w-full"
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-gray-600 font-medium hover:bg-gray-50 transition-colors">
            <Filter className="h-4 w-4" />
            Filter
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-600">
            <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-semibold">
              <tr>
                <th className="px-6 py-4">Order ID</th>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Items</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Total</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentOrders.map((order, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-bold text-gray-900">{order.id}</td>
                  <td className="px-6 py-4 font-medium text-gray-800">{order.customer}</td>
                  <td className="px-6 py-4">{order.items} items</td>
                  <td className="px-6 py-4 text-gray-500">{order.date}</td>
                  <td className="px-6 py-4 font-bold text-gray-900">{order.total}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Delivered' ? 'bg-emerald-100 text-emerald-700' : 
                      order.status === 'Processing' ? 'bg-orange-100 text-orange-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Eye className="h-4 w-4" />
                    </button>
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
