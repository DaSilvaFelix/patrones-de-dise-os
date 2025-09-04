import { Product } from "../interfaces/IProduct";
import { ObserverProduct } from "../interfaces/IObserverProduct";

export class electronicProduct implements ObserverProduct {
     constructor(
          public name: string,
          public tipo: string,
          public status: "available" | "unavailable" | "under repair",
          public marker: string,
          public ram: number,
          public storage: number,
          public processor: string
     ) { }

     update(
          name: string,
          status: "available" | "unavailable" | "under repair"
     ): void {
          if (this.name === name) {
               this.status = status;
               console.log(
                    `El estado del producto ${this.name} ha sido actualizado a ${this.status}`
               );
          }
     }
}

export class InventoryWithObserver {

     private items: electronicProduct[] = [];

     updateStatus(name: string, status: "available" | "unavailable" | "under repair"): void {
          const item = this.items.find((item) => item.name === name);
          if (item) {
               item.status = status;
               this.notify(name, status);
          }
     }
     addObserver(product: electronicProduct): void {
          this.items.push(product);
     }
     private notify(name: string, status: "available" | "unavailable" | "under repair"): void {
          this.items.forEach((observer) => observer.update(name, status));
     }
     getItems(): electronicProduct[] {
          return this.items;
     }
}
