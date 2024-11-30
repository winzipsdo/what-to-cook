import { MenuItem as MenuItemType } from '@/constants/menu';
import styles from './CheckoutModal.module.css';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: { id: string; quantity: number }[];
  menuList: MenuItemType[];
}

export function CheckoutModal({
  isOpen,
  onClose,
  cartItems,
  menuList,
}: CheckoutModalProps) {
  if (!isOpen) return null;

  const orderedItems = cartItems
    .filter((item) => item.quantity > 0)
    .map((item) => ({
      ...menuList.find((menu) => menu.id === item.id)!,
      quantity: item.quantity,
    }));
  const allIngredients = orderedItems.flatMap(
    (item) =>
      item.ingredients?.map((ing) => ({
        name: ing.name,
        quantity: item.quantity,
      })) ?? []
  );

  const consolidatedIngredients = allIngredients.reduce(
    (acc, curr) => {
      const existing = acc.find(
        (item) => item.name.toString() === curr.name.toString()
      );
      if (existing) {
        existing.quantity += curr.quantity;
      } else {
        acc.push({ name: curr.name, quantity: curr.quantity });
      }
      return acc;
    },
    [] as { name: string; quantity: number }[]
  );

  console.log('consolidatedIngredients', consolidatedIngredients);
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>订单详情</h2>

        <div className={styles.section}>
          <h3>已选菜品</h3>
          {orderedItems.map((item) => (
            <div key={item.id} className={styles.item}>
              <span>{item.name}</span>
              <span>x{item.quantity}</span>
            </div>
          ))}
        </div>

        <div className={styles.section}>
          <h3>所需食材</h3>
          {consolidatedIngredients.map((ing, index) => (
            <div key={index} className={styles.item}>
              <span>{ing.name}</span>
              <span>x{ing.quantity}</span>
            </div>
          ))}
        </div>

        <button className={styles.closeButton} onClick={onClose}>
          确认
        </button>
      </div>
    </div>
  );
}
