import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type multipleTabState = {
    tabList: string[];
    keyTab: string;
    keyMenu: string
};

const initialState: multipleTabState = {
    tabList: [],
    keyTab:"",
    keyMenu:""
};

export const multipleTabStore = createSlice({
    name: "multipleTabStore",
    initialState,
    reducers: {
        setTabList: (state, action: PayloadAction<string[]>) => {
            state.tabList = action.payload;
        },
        setKeyTab : (state, action: PayloadAction<string>) => {
            state.keyTab = action.payload;
        },
        setKeyMenu : (state, action: PayloadAction<string>) => {
            state.keyMenu = action.payload;
        },
    }
});

export const {
    setTabList,setKeyTab,
    setKeyMenu
} = multipleTabStore.actions;

export const selectMultipleTab= (state:any) => state.multipleTab as multipleTabState;

export default multipleTabStore.reducer;