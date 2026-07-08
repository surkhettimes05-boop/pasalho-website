import { apiClient } from './client';

export interface Product {
  id: string;
  skuCode: string;
  name: string;
  description: string;
  categoryId: string;
  brandId: string | null;
  defaultUnitId: string;
  barcode: string | null;
  isBatchTracked: boolean;
  isExpiryTracked: boolean;
  costPrice: number;
  mrp: number;
  sellingPrice: number;
  stock: number;
  imageUrl: string | null;
  storefrontCategory: string | null;
  isActive: boolean;
}

export interface ListProductsResponse {
  data: Product[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export const catalogApi = {
  getProducts: async (params?: { page?: number; limit?: number; search?: string; isActive?: boolean }) => {
    const response = await apiClient.get<ListProductsResponse>('/catalog/products', { params });
    return response.data;
  },

  getProduct: async (id: string) => {
    const response = await apiClient.get<Product>(`/catalog/products/${id}`);
    return response.data;
  },

  createProduct: async (data: Partial<Product>) => {
    const response = await apiClient.post<Product>('/catalog/products', data);
    return response.data;
  },

  updateProduct: async (id: string, data: Partial<Product>) => {
    const response = await apiClient.patch<Product>(`/catalog/products/${id}`, data);
    return response.data;
  },

  deleteProduct: async (id: string) => {
    const response = await apiClient.delete<{ success: boolean }>(`/catalog/products/${id}`);
    return response.data;
  },

  uploadImage: async (file: File) => {
    const formData = new FormData();
    formData.append('file', file);
    const response = await apiClient.post<{ imageUrl: string }>('/catalog/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  },

  getCategories: async () => {
    const response = await apiClient.get<{ data: { id: string; name: string }[] }>('/catalog/categories?limit=100');
    return response.data.data;
  },

  getUnits: async () => {
    const response = await apiClient.get<{ data: { id: string; name: string }[] }>('/catalog/units?limit=100');
    return response.data.data;
  },
};
