import { MOCK_PRODUCTS } from "@/lib/mockData";
import { Plus, Search, Edit, Trash2, Filter } from "lucide-react";
import Image from "next/image";

export default function AdminProducts() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Products</h1>
          <p className="text-gray-500 mt-1">Manage your storefront inventory and pricing.</p>
        </div>
        <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg font-medium flex items-center transition-colors">
          <Plus className="h-5 w-5 mr-2" />
          Add Product
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-100 flex gap-4">
          <div className="flex-1 flex items-center bg-gray-50 rounded-lg px-3 py-2 border border-gray-200">
            <Search className="h-4 w-4 text-gray-400 mr-2" />
            <input 
              type="text" 
              placeholder="Search products..." 
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
                <th className="px-6 py-4">Product</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Price</th>
                <th className="px-6 py-4">Stock</th>
                <th className="px-6 py-4">Rating</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {MOCK_PRODUCTS.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4 flex items-center gap-4">
                    <div className="h-12 w-12 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0 relative">
                      <Image 
                        src={product.image} 
                        alt={product.name}
                        fill
                        sizes="48px"
                        className="object-cover p-1"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 line-clamp-1">{product.name}</div>
                      <div className="text-xs text-gray-500">{product.unit}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 capitalize">
                      {product.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-900">NPR {product.price}</div>
                    {product.mrp && <div className="text-xs text-gray-400 line-through">NPR {product.mrp}</div>}
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                      In Stock
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center text-sm font-medium text-gray-900">
                      ⭐ {product.rating}
                    </div>
                    <div className="text-xs text-gray-500">{product.reviews} reviews</div>
                  </td>
                  <td className="px-6 py-4 text-right space-x-2">
                    <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
          <div>Showing 1 to {MOCK_PRODUCTS.length} of {MOCK_PRODUCTS.length} results</div>
          <div className="flex gap-1">
            <button className="px-3 py-1 border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50" disabled>Previous</button>
            <button className="px-3 py-1 border border-gray-200 rounded-md hover:bg-gray-50 disabled:opacity-50" disabled>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
