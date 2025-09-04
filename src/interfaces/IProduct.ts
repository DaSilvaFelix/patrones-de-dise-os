import { IItems } from "./IItems";

export interface Product extends IItems {
     ram: number;
     storage: number;
     processor: string;
}