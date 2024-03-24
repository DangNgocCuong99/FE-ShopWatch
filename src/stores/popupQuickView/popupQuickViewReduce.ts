import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "/@/apis/productApi/types";

type IPopupState = {
    product?: IProduct
}

const initialState:IPopupState = {
    product: undefined,
};

export const popupQuickViewStore = createSlice({
    name: "popupQuickViewStore",
    initialState,
    reducers: {
        setProductPopupQuickView: (state, action: PayloadAction<any>) => {
            state.product = action.payload;
        },
    }
});

export const {
    setProductPopupQuickView
} = popupQuickViewStore.actions;

export const selectProductPopupQuickView = (state:any) => state.popupQuickViewReduce as IPopupState;

export default popupQuickViewStore.reducer;