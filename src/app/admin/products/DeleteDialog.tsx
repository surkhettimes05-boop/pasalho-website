"use client";

import { useState } from "react";
import { X, AlertTriangle } from "lucide-react";
import { catalogApi } from "@/lib/api/catalog";
import toast from "react-hot-toast";

interface DeleteDialogProps {
  productId: string;
  productName: string;
  onClose: () => void;
  onSuccess: () => void;
}

export function DeleteDialog({ productId, productName, onClose, onSuccess }: DeleteDialogProps) {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await catalogApi.deleteProduct(productId);
      toast.success("Product deleted successfully");
      onSuccess();
    } catch (error) {
      toast.error("Failed to delete product");
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors">
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center mt-4">
          <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-4">
            <AlertTriangle className="w-6 h-6" />
          </div>
          <h2 className="text-xl font-bold mb-2">Delete Product</h2>
          <p className="text-gray-500 mb-6">
            Are you sure you want to delete <span className="font-semibold text-gray-900">{productName}</span>? This action cannot be undone.
          </p>

          <div className="flex gap-3 w-full">
            <button 
              onClick={onClose} 
              className="flex-1 py-2.5 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button 
              onClick={handleDelete} 
              disabled={isDeleting}
              className="flex-1 py-2.5 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors disabled:opacity-50"
            >
              {isDeleting ? "Deleting..." : "Delete"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
