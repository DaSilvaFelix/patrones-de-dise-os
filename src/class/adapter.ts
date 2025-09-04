import { Product } from "../interfaces/IProduct";
export class OldInventory {
     private records: Product[] = [];

     addItem(name: string,
          type: string,
          status: "available" | "unavailable" | "under repair",
          marker: string,
          ram: number,
          storage: number,
          processor: string
     ): void {
          this.records.push({ name, type, status, marker, ram, storage, processor });
     }

     getRecords(): any[] {
          return this.records;
     }
}

export class InventoryAdapter {
     constructor(private oldInventory: OldInventory) { }

     addDevice(
          name: string,
          type: string,
          status: "available" | "unavailable" | "under repair",
          marker: string,
          ram: number,
          storage: number,
          processor: string
     ): void {
          this.oldInventory.addItem(
               name,
               type,
               status,
               marker,
               ram,
               storage,
               processor
          );
     }

     listDevices(): Product[] {
          return this.oldInventory.getRecords();
     }
}
