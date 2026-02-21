import { create } from 'zustand';
import { Product, CartItem } from '../types';

interface Coupon {
  code: string;
  type: 'percent' | 'fixed';
  value: number;
}

const COUPONS: Coupon[] = [
  { code: 'AGMART10', type: 'percent', value: 10 },
  { code: 'EGYPT2026', type: 'fixed', value: 250 },
];

interface CartState {
  items: CartItem[];
  isOpen: boolean;
  couponCode: string | null;
  discountAmount: number;

  addItem: (product: Product) => void;
  removeItem: (productId: string) => void;
  toggleCart: () => void;
  clearCart: () => void;
  
  applyCoupon: (code: string) => { success: boolean; message: string };
  removeCoupon: () => void;
  
  subtotal: () => number;
  total: () => number;
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,
  couponCode: null,
  discountAmount: 0,

  addItem: (product) => {
    set((state) => {
      const existing = state.items.find((item) => item.id === product.id);
      let newItems;
      if (existing) {
        newItems = state.items.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        newItems = [...state.items, { ...product, quantity: 1 }];
      }
      return { items: newItems, isOpen: true };
    });
    // Re-apply coupon if exists to update discount amount
    const { couponCode, applyCoupon } = get();
    if (couponCode) applyCoupon(couponCode);
  },

  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== productId),
    }));
    // Re-apply coupon or clear if empty
    const { couponCode, applyCoupon, items } = get();
    if (items.length === 0) {
      set({ couponCode: null, discountAmount: 0 });
    } else if (couponCode) {
      applyCoupon(couponCode);
    }
  },

  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),
  
  clearCart: () => set({ items: [], couponCode: null, discountAmount: 0 }),

  subtotal: () => {
    const { items } = get();
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  },

  applyCoupon: (code) => {
    const subtotal = get().subtotal();
    const coupon = COUPONS.find(c => c.code === code.toUpperCase().trim());
    
    if (!coupon) {
      return { success: false, message: 'كود الخصم غير صحيح أو منتهي الصلاحية' };
    }

    let discount = 0;
    if (coupon.type === 'percent') {
      discount = subtotal * (coupon.value / 100);
    } else {
      discount = coupon.value;
    }

    // Cap discount
    if (discount > subtotal) discount = subtotal;

    set({ couponCode: code.toUpperCase().trim(), discountAmount: discount });
    return { success: true, message: `تم تفعيل خصم ${coupon.type === 'percent' ? coupon.value + '%' : coupon.value + ' EGP'}` };
  },

  removeCoupon: () => set({ couponCode: null, discountAmount: 0 }),

  total: () => {
    const sub = get().subtotal();
    const disc = get().discountAmount;
    return Math.max(0, sub - disc);
  },
}));