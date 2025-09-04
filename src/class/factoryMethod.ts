import { IItems } from "../interfaces/IItems";
import { Product } from "../interfaces/IProduct";
import { IDevice } from "../interfaces/IDevice";

class Notebook implements IDevice {
     constructor(
          private name: string,
          private ram: string,
          private processor: string
     ) { }

     getDetails(): string {
          return `Type: Notebook, Name: ${this.name}, RAM: ${this.ram}, Processor: ${this.processor}`;
     }
}

class Desktop implements IDevice {
     constructor(
          private name: string,
          private ram: string,
          private processor: string
     ) { }

     getDetails(): string {
          return `Type: Desktop, Name: ${this.name}, RAM: ${this.ram}, Processor: ${this.processor}`;
     }
}

class Server implements IDevice {
     constructor(
          private name: string,
          private ram: string,
          private processor: string
     ) { }

     getDetails(): string {
          return `Type: Server, Name: ${this.name}, RAM: ${this.ram}, Processor: ${this.processor}`;
     }
}


export class DeviceFactory {
     createDevice(
          type: "Notebook" | "Desktop" | "Server",
          name: string,
          ram: string,
          processor: string
     ): IDevice {
          switch (type) {
               case "Notebook":
                    return new Notebook(name, ram, processor);
               case "Desktop":
                    return new Desktop(name, ram, processor);
               case "Server":
                    return new Server(name, ram, processor);
               default:
                    throw new Error(`Unsupported device type: ${type}`);
          }
     }
}

