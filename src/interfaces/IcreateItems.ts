import { IItems } from "./IItems";
import { Product } from "./IProduct";

export interface GetProduct {
  details(): Product | IItems;
}
