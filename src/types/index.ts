export interface Ingredient {
  /** 食材名称 */
  name: string;
  /** 食材数量 */
  amount: number;
  /** 计量单位(如:克、个、片等) */
  unit: string;
  /** 可选的备注说明 */
  note?: string;
}
