import React from 'react';
import styles from './index.module.css';
import type { Ingredient } from '@/types';

interface MenuItemProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  quantity: number;
  onQuantityChange?: (id: string, quantity: number) => void;
  ingredients?: Ingredient[];
}

export const MenuItem: React.FC<MenuItemProps> = ({
  id,
  name,
  description,
  price,
  imageUrl,
  quantity = 0,
  onQuantityChange,
}) => {
  const handleDecrease = () => {
    if (quantity > 0) {
      onQuantityChange?.(id, quantity - 1);
    }
  };

  const handleIncrease = () => {
    onQuantityChange?.(id, quantity + 1);
  };

  return (
    <div className={styles.menuItem}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={name} className={styles.image} />
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.bottom}>
          <span className={styles.price}>¥{price}</span>
          <div className={styles.quantity}>
            <button
              className={styles.quantityBtn}
              onClick={handleDecrease}
              disabled={quantity === 0}
            >
              -
            </button>
            <span className={styles.quantityNum}>{quantity}</span>
            <button className={styles.quantityBtn} onClick={handleIncrease}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
