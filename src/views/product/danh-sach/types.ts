export interface IProductInfo {
    name: string,
    id: string,
    images:string[],
    trademark:{
        images:string,
        name:string
    },
    originalPrice:string,
    discountedPrice:string
}