"use client";

import { Search, Filter, Eye } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { salesOrdersApi, SalesOrder } from "@/lib/api/sales-orders";
import { formatDistanceToNow } from "date-fns";

export default function AdminOrders() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['admin-orders'],
    queryFn: () => salesOrdersApi.getOrders(),
    // Note: Since this requires auth, in a real env it would fail until we login.
    // We handle the error gracefully for the UI test.
    retry: false
  });

  const orders = data?.items || [];

  const parseCustomerNotes = (notes: string | null) => {
    if (!notes) return { name: "Unknown", phone: "", address: "" };
    try {
      const parsed = JSON.parse(notes);
      return {
        name: parsed.name || "Unknown",
        phone: parsed.phone || "",
        address: parsed.address || ""
      };
    } catch {
      return { name: "Storefront Guest", phone: "", address: notes };
    }
  };

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
          {isLoading ? (
            <div className="p-8 text-center text-gray-500">Loading orders...</div>
          ) : error ? (
            <div className="p-8 text-center text-red-500">
              Failed to load orders. You may need to authenticate as an admin first.
              <br/>
              <span className="text-sm text-gray-400">({(error as any).message})</span>
            </div>
          ) : orders.length === 0 ? (
            <div className="p-8 text-center text-gray-500">No orders found.</div>
          ) : (
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-semibold">
                <tr>
                  <th className="px-6 py-4">Order ID</th>
                  <th className="px-6 py-4">Customer Info</th>
                  <th className="px-6 py-4">Items</th>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Total</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {orders.map((order: SalesOrder) => {
                  const customer = order.source === 'STOREFRONT' 
                    ? parseCustomerNotes(order.notes) 
                    : { name: order.retailer?.shopName || "Unknown", phone: order.retailer?.phone || "", address: "B2B Order" };
                  
                  return (
                    <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 font-bold text-gray-900">{order.orderNo}</td>
                      <td className="px-6 py-4">
                        <div className="font-medium text-gray-800">{customer.name}</div>
                        <div className="text-xs text-gray-500">{customer.phone}</div>
                      </td>
                      <td className="px-6 py-4">{order._count?.items || 0} items</td>
                      <td className="px-6 py-4 text-gray-500">
                        {formatDistanceToNow(new Date(order.createdAt), { addSuffix: true })}
                      </td>
                      <td className="px-6 py-4 font-bold text-gray-900">NPR {Number(order.grandTotal).toLocaleString()}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          order.status === 'DELIVERED' ? 'bg-emerald-100 text-emerald-700' : 
                          ['PLACED', 'PACKED', 'CONFIRMED'].includes(order.status) ? 'bg-orange-100 text-orange-700' :
                          order.status === 'CANCELLED' ? 'bg-red-100 text-red-700' :
                          'bg-gray-100 text-gray-700'
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
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
