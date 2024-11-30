import imgColaChickenWings from '@/assets/food/cola-chicken-wings.jpg';
import imgScallionTofu from '@/assets/food/scallion-tofu.jpg';
import imgLemonSpicyShrimp from '@/assets/food/lemon-spicy-shrimp.jpg';
import imgMincedPepperBeef from '@/assets/food/minced-pepper-beef.jpg';
import imgLoofahMeatballSoup from '@/assets/food/loofah-meatball-soup.jpg';
import imgDoublePepperBeef from '@/assets/food/double-pepper-beef.jpg';
import imgCuminPotatoBeef from '@/assets/food/cumin-potato-beef.jpg';
import imgFriedChickenWings from '@/assets/food/fried-chicken-wings.jpg';
import { Ingredient } from '@/types';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  ingredients?: Ingredient[];
}

export const MENU_LIST: MenuItem[] = [
  {
    id: 'cola-chicken-wings',
    name: '可乐鸡翅',
    description: '经典可乐鸡翅,咸甜适中,鸡翅鲜嫩多汁',
    price: 28,
    imageUrl: imgColaChickenWings,
    ingredients: [
      { name: '鸡翅', amount: 2, unit: '个' },
      { name: '可乐', amount: 1, unit: '瓶' },
    ],
  },
  {
    id: 'scallion-tofu',
    name: '葱烧豆腐',
    description: '嫩滑豆腐配以葱香,营养美味',
    price: 18,
    imageUrl: imgScallionTofu,
    ingredients: [
      { name: '豆腐', amount: 1, unit: '块' },
      { name: '大葱', amount: 2, unit: '根' },
    ],
  },
  {
    id: 'lemon-spicy-shrimp',
    name: '柠檬酸辣虾滑',
    description: '新鲜虾滑搭配柠檬的清爽与微辣,开胃爽口',
    price: 42,
    imageUrl: imgLemonSpicyShrimp,
    ingredients: [
      { name: '虾滑', amount: 1, unit: '盒' },
      { name: '柠檬', amount: 1, unit: '个' },
    ],
  },
  {
    id: 'minced-pepper-beef',
    name: '碎碎椒牛肉粒',
    description: '嫩滑牛肉配以香辣椒粒,口感丰富',
    price: 46,
    imageUrl: imgMincedPepperBeef,
    ingredients: [
      { name: '牛肉', amount: 1, unit: '盒' },
      { name: '辣椒', amount: 2, unit: '根' },
    ],
  },
  {
    id: 'loofah-meatball-soup',
    name: '丝瓜肉丸汤',
    description: '清淡爽口的丝瓜配上鲜美肉丸,营养美味',
    price: 32,
    imageUrl: imgLoofahMeatballSoup,
    ingredients: [
      { name: '丝瓜', amount: 1, unit: '根' },
      { name: '肉丸', amount: 1, unit: '盒' },
    ],
  },
  {
    id: 'double-pepper-beef',
    name: '双椒牛柳',
    description: '嫩滑牛柳配以青红椒,营养美味',
    price: 48,
    imageUrl: imgDoublePepperBeef,
    ingredients: [
      { name: '牛柳', amount: 1, unit: '盒' },
      { name: '青椒', amount: 2, unit: '根' },
      { name: '红椒', amount: 2, unit: '根' },
    ],
  },
  {
    id: 'cumin-potato-beef',
    name: '孜然土豆牛肉粒',
    description: '香浓孜然味配以土豆和牛肉,美味可口',
    price: 42,
    imageUrl: imgCuminPotatoBeef,
    ingredients: [
      { name: '牛肉', amount: 1, unit: '盒' },
      { name: '土豆', amount: 1, unit: '个' },
      { name: '孜然', amount: 1, unit: '袋' },
    ],
  },
  {
    id: 'fried-chicken-wings',
    name: '小炒鸡翅',
    description: '香辣可口的炒鸡翅,鸡肉鲜嫩',
    price: 36,
    imageUrl: imgFriedChickenWings,
    ingredients: [
      { name: '鸡翅', amount: 2, unit: '个' },
      { name: '辣椒', amount: 2, unit: '根' },
    ],
  },
];
