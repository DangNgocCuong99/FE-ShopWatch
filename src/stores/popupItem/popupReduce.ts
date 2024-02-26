import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "/@/apis/productApi/types";

type IPopupState = {
    product?: IProduct
}

const initialState:IPopupState = {
    product: undefined,
};

export const popupStore = createSlice({
    name: "popupStore",
    initialState,
    reducers: {
        setProductPopup: (state, action: PayloadAction<any>) => {
            state.product = action.payload;
        },
    }
});

export const {
    setProductPopup
} = popupStore.actions;

export const selectProductPopup = (state:any) => state.popupReduce as IPopupState;

export default popupStore.reducer;