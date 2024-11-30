import { MENU_LIST } from '@/constants/menu';
import { MenuItem } from '@/components/cook/MenuItem';

import { create } from 'zustand';
import { CheckoutButton } from '@/components/cook/CheckoutButton';
import { CheckoutModal } from '@/components/cook/CheckoutModal';
import { useState } from 'react';

interface CartItem {
  id: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  addToCart: (id: string, quantity: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

const useCartStore = create<CartStore>((set) => ({
  items: [],
  addToCart: (id, quantity) =>
    set((state) => {
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        return {
          items: state.items.map((item) =>
            item.id === id ? { ...item, quantity } : item
          ),
        };
      }
      return {
        items: [...state.items, { id, quantity }],
      };
    }),
  removeFromCart: (id) =>
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    })),
  clearCart: () => set({ items: [] }),
}));

export function HomePage() {
  const cartItems = useCartStore((state) => state.items);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div style={{ paddingBottom: '80px' }}>
      {MENU_LIST.map((item) => {
        const cartItem = cartItems.find((i) => i.id === item.id);
        return (
          <MenuItem
            key={item.id}
            {...item}
            quantity={cartItem?.quantity || 0}
            onQuantityChange={(id, quantity) => {
              useCartStore.getState().addToCart(id, quantity);
            }}
          />
        );
      })}
      <CheckoutButton
        cartItems={cartItems}
        menuList={MENU_LIST}
        onCheckout={() => {
          setIsModalOpen(true);
        }}
        onReset={() => {
          useCartStore.getState().clearCart();
        }}
      />

      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cartItems={cartItems}
        menuList={MENU_LIST}
      />
    </div>
  );
}
