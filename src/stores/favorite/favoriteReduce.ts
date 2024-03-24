import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type IFavorite = {
    quantily: number
}

const initialState:IFavorite = {
    quantily: 0,
};

export const favoriteStore = createSlice({
    name: "favoriteStore",
    initialState,
    reducers: {
        setTotalFavorite: (state, action: PayloadAction<number>) => {
            state.quantily = action.payload;
        },
    }
});

export const {
    setTotalFavorite
} = favoriteStore.actions;

export const selectFavorite = (state:any) => state.favoriteReduce as IFavorite;

export default favoriteStore.reducer;