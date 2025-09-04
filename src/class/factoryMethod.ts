import { IItems } from "../interfaces/IItems";
import { Product } from "../interfaces/IProduct";
import { GetProduct } from "../interfaces/IcreateItems";

class consumableProduct implements GetProduct {
     constructor(
          public name: string,
          public tipo: string,
          public status: "available" | "unavailable" | "under repair",
          public marker: string
     ) { }

     details(): IItems {
          return {
               name: this.name,
               type: this.tipo,
               status: this.status,
               marker: this.marker,
          };
     }
}

class electronicProduct implements GetProduct {
     constructor(
          public name: string,
          public tipo: string,
          public status: "available" | "unavailable" | "under repair",
          public marker: string,
          public ram: number,
          public storage: number,
          public processor: string
     ) { }

     details(): Product {
          return {
               name: this.name,
               type: this.tipo,
               status: this.status,
               marker: this.marker,
               ram: this.ram,
               storage: this.storage,
               processor: this.processor,
          };
     }
}

export class InventoryWithFactory {
     items: (IItems | Product)[] = [];
     public createItem(type: string, name: string,
          status: "available" | "unavailable" | "under repair",
          marker: string,
          ram?: number,
          storage?: number,
          processor?: string): GetProduct {

          if (type === "consumable") {
               return new consumableProduct(
                    name,
                    type,
                    status,
                    marker
               );
          } if (type === "electronic") {
               return new electronicProduct(
                    name,
                    type,
                    status,
                    marker,
                    ram!,
                    storage!,
                    processor!
               );
          }
          throw new Error("Invalid type");
     }

     public addItem(item: IItems | Product): void {
          this.items.push(item);
     }

     public getItems(): (IItems | Product)[] {
          return this.items;
     }
}
