import { IObserverProduct } from "../interfaces/IObserverProduct";

export class Support implements IObserverProduct {
     notify(name: string, status: string): void {
          console.log(`Support notified: ${name} status changed to ${status}.`);
     }
}

export class Device {
     private observers: IObserverProduct[] = [];

     constructor(
          private name: string,
          private type: string,
          private status: string
     ) { }

     addObserver(observer: IObserverProduct): void {
          this.observers.push(observer);
     }

     changeStatus(newStatus: string): void {
          this.status = newStatus;
          this.notifyObservers();
     }

     private notifyObservers(): void {
          this.observers.forEach((observer) =>
               observer.notify(this.name, this.status)
          );
     }
}
