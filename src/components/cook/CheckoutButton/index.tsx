interface CheckoutButtonProps {
  cartItems: Array<{ id: string; quantity: number }>;
  menuList: Array<{ id: string; price: number }>;
  onCheckout: () => void;
  onReset: () => void;
}

export function CheckoutButton({
  cartItems,
  onCheckout,
  onReset,
}: CheckoutButtonProps) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '16px',
        background: '#fff',
        boxShadow: '0 -2px 8px rgba(0,0,0,0.1)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <button
          style={{
            background: '#ff4d4f',
            color: '#fff',
            border: 'none',
            padding: '8px 24px',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
            marginRight: '8px',
          }}
          onClick={onReset}
        >
          重置
        </button>
        <button
          style={{
            background: '#1677ff',
            color: '#fff',
            border: 'none',
            padding: '8px 24px',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
          onClick={() => {
            if (cartItems.length === 0) {
              alert('请先选择菜品');
              return;
            }
            onCheckout();
          }}
        >
          结算
        </button>
      </div>
    </div>
  );
}
