"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useEffect, useState } from "react";
import { catalogApi, Product } from "@/lib/api/catalog";
import toast from "react-hot-toast";
import { X } from "lucide-react";
import Image from "next/image";

const productSchema = z.object({
  name: z.string().min(1, "Name is required"),
  skuCode: z.string().min(1, "SKU is required"),
  barcode: z.string().optional(),
  categoryId: z.string().min(1, "Category is required"),
  brandId: z.string().optional().nullable(),
  defaultUnitId: z.string().min(1, "Unit is required"),
  costPrice: z.coerce.number().min(0),
  mrp: z.coerce.number().min(0),
  sellingPrice: z.coerce.number().min(0),
  stock: z.coerce.number().int().min(0),
  description: z.string().optional(),
  isActive: z.boolean().default(true),
  isBatchTracked: z.boolean().default(true),
  isExpiryTracked: z.boolean().default(false),
});

export type ProductFormData = z.infer<typeof productSchema>;

interface ProductFormProps {
  initialData?: Product;
  onClose: () => void;
  onSuccess: () => void;
}

export function ProductForm({ initialData, onClose, onSuccess }: ProductFormProps) {
  const [categories, setCategories] = useState<{ id: string; name: string }[]>([]);
  const [units, setUnits] = useState<{ id: string; name: string }[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(initialData?.imageUrl || null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: initialData
      ? {
          name: initialData.name,
          skuCode: initialData.skuCode,
          barcode: initialData.barcode || "",
          categoryId: initialData.categoryId,
          brandId: initialData.brandId || "",
          defaultUnitId: initialData.defaultUnitId,
          costPrice: initialData.costPrice,
          mrp: initialData.mrp,
          sellingPrice: initialData.sellingPrice,
          stock: initialData.stock,
          description: initialData.description || "",
          isActive: initialData.isActive,
          isBatchTracked: initialData.isBatchTracked,
          isExpiryTracked: initialData.isExpiryTracked,
        }
      : {
          name: "",
          skuCode: "",
          barcode: "",
          categoryId: "",
          brandId: "",
          defaultUnitId: "",
          costPrice: 0,
          mrp: 0,
          sellingPrice: 0,
          stock: 0,
          description: "",
          isActive: true,
          isBatchTracked: true,
          isExpiryTracked: false,
        },
  });

  useEffect(() => {
    // Fetch categories and units
    catalogApi.getCategories().then(setCategories).catch(() => {});
    catalogApi.getUnits().then(setUnits).catch(() => {});
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    try {
      const res = await catalogApi.uploadImage(file);
      // Wait, the API returns a relative path like `/uploads/123.jpg`, we need to append baseURL if using an external API,
      // but if the backend is on port 3000, we need full URL or next.config rewrite.
      // Let's store the relative URL in DB and prepend process.env.NEXT_PUBLIC_API_URL when displaying.
      // Actually we can just store whatever the backend returns.
      setImageUrl(res.imageUrl);
      toast.success("Image uploaded successfully");
    } catch (error) {
      toast.error("Image upload failed");
    } finally {
      setIsUploading(false);
    }
  };

  const onSubmit = async (data: ProductFormData) => {
    setIsSubmitting(true);
    try {
      const payload = { ...data, imageUrl };
      
      // Fix empty string optional values
      if (!payload.brandId) payload.brandId = null;
      if (!payload.barcode) payload.barcode = null;

      if (initialData) {
        await catalogApi.updateProduct(initialData.id, payload);
        toast.success("Product updated successfully");
      } else {
        await catalogApi.createProduct(payload);
        toast.success("Product created successfully");
      }
      onSuccess();
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to save product");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center overflow-y-auto py-10">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-xl">
        <div className="flex justify-between items-center p-6 border-b border-gray-100 sticky top-0 bg-white rounded-t-2xl z-10">
          <h2 className="text-xl font-bold">{initialData ? "Edit Product" : "Add Product"}</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Product Image</label>
              <div className="flex items-center gap-4">
                <div className="w-24 h-24 bg-gray-100 border border-gray-200 rounded-lg overflow-hidden flex items-center justify-center relative">
                  {imageUrl ? (
                    <Image src={`http://localhost:3000${imageUrl}`} alt="Product" fill className="object-cover" />
                  ) : (
                    <span className="text-gray-400 text-xs">No image</span>
                  )}
                </div>
                <div>
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="imageUpload" />
                  <label htmlFor="imageUpload" className="cursor-pointer bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                    {isUploading ? "Uploading..." : "Upload Image"}
                  </label>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {/* Basic Info */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Product Name *</label>
                  <input {...form.register("name")} className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-orange-500" />
                  {form.formState.errors.name && <p className="text-red-500 text-xs mt-1">{form.formState.errors.name.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">SKU *</label>
                  <input {...form.register("skuCode")} className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-orange-500" />
                  {form.formState.errors.skuCode && <p className="text-red-500 text-xs mt-1">{form.formState.errors.skuCode.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Barcode</label>
                  <input {...form.register("barcode")} className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-orange-500" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea {...form.register("description")} rows={3} className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-orange-500"></textarea>
                </div>
              </div>

              {/* Pricing & Config */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category *</label>
                  <select {...form.register("categoryId")} className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-orange-500 bg-white">
                    <option value="">Select Category</option>
                    {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                  </select>
                  {form.formState.errors.categoryId && <p className="text-red-500 text-xs mt-1">{form.formState.errors.categoryId.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Unit *</label>
                  <select {...form.register("defaultUnitId")} className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-orange-500 bg-white">
                    <option value="">Select Unit</option>
                    {units.map(u => <option key={u.id} value={u.id}>{u.name}</option>)}
                  </select>
                  {form.formState.errors.defaultUnitId && <p className="text-red-500 text-xs mt-1">{form.formState.errors.defaultUnitId.message}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cost Price *</label>
                    <input type="number" step="0.01" {...form.register("costPrice")} className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-orange-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Selling Price *</label>
                    <input type="number" step="0.01" {...form.register("sellingPrice")} className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-orange-500" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">MRP *</label>
                    <input type="number" step="0.01" {...form.register("mrp")} className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-orange-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Stock</label>
                    <input type="number" {...form.register("stock")} className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:border-orange-500" />
                  </div>
                </div>
                
                <div className="flex items-center gap-2 mt-4">
                  <input type="checkbox" id="isActive" {...form.register("isActive")} className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500" />
                  <label htmlFor="isActive" className="text-sm font-medium text-gray-700">Active Status</label>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 pt-6 border-t border-gray-100">
              <button type="button" onClick={onClose} className="px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                Cancel
              </button>
              <button type="submit" disabled={isSubmitting} className="px-4 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors disabled:opacity-50">
                {isSubmitting ? "Saving..." : "Save Product"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
