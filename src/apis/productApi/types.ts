import { BaseInfo } from "../types";

export interface IProduct {
    _id: string,
    images: string[],
    name: string,
    originalPrice:number,
    discountedPrice:number,
    trademark:{
        name:string,
        images: string[],
        _id:string
    }
}