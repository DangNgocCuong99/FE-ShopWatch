import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICart } from "/@/apis/cartApi/types";

type ICartState = {
    listProduct: ICart[]
}
const initialState:ICartState = {
    listProduct: [],
};

export const cartStore = createSlice({
    name: "cartStore",
    initialState,
    reducers: {
        setListProduct: (state, action: PayloadAction<any[]>) => {
            state.listProduct = action.payload;
        },
    }
});

export const {
    setListProduct
} = cartStore.actions;

export const selectCart= (state:any) => state.cartReduce as ICartState;

export default cartStore.reducer;