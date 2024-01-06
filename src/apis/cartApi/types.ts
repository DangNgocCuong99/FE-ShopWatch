import { BaseInfo } from "../types";

export interface ICart {
    _id: string,
    images: string[],
    name: string,
    originalPrice:number,
    discountedPrice:number,
    quantity:number
}