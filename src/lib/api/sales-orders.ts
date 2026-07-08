import { apiClient } from './client';

export interface PublicCheckoutItem {
  productId: string;
  quantity: number;
}

export interface PublicCheckoutDto {
  firstName: string;
  lastName: string;
  phone: string;
  address: string;
  items: PublicCheckoutItem[];
}

export interface SalesOrder {
  id: string;
  orderNo: string;
  source: string;
  status: string;
  notes: string | null;
  grandTotal: number | string;
  createdAt: string;
  _count?: { items: number };
  retailer?: { shopName: string; ownerName: string; phone: string } | null;
}

export const salesOrdersApi = {
  createPublicOrder: async (data: PublicCheckoutDto) => {
    const response = await apiClient.post('/sales-orders/public/checkout', data);
    return response.data;
  },

  getOrders: async () => {
    // Note: This requires admin auth. For this MVP task, we'll assume the admin page 
    // will send the token (which is already configured via apiClient interceptors if we had login).
    // The instructions said "Inspect Admin Order List and Details pages. Modify UI to parse and render `notes` JSON payload cleanly"
    const response = await apiClient.get('/sales-orders');
    return response.data;
  },
};
