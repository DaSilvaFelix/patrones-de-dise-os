import { IItems } from "../interfaces/IItems";

export class InventoryWithSingleton {
  private static instance: InventoryWithSingleton;
  private items: IItems[] = [];

  private constructor() {}

  public static getInstance(): InventoryWithSingleton {
    if (!InventoryWithSingleton.instance) {
      InventoryWithSingleton.instance = new InventoryWithSingleton();
    }
    return InventoryWithSingleton.instance;
  }

  public addItem(item: IItems): void {
    this.items.push(item);
  }
  public getItems(): IItems[] {
    return this.items;
  }
}
