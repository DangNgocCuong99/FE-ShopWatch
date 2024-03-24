import { configureStore } from '@reduxjs/toolkit';

import businessReduce from './storeBusiness/businessReduce'
import systemStore from './multipleTab/multipleTabReduce';
import cartReduce from './cart/cartReduce';
import popupReduce from './popupItem/popupReduce';
import popupQuickViewReduce from './popupQuickView/popupQuickViewReduce';

export const store = configureStore({
    reducer: {
        counter: businessReduce,
        multipleTab: systemStore,
        cartReduce:cartReduce,
        popupReduce:popupReduce,
        popupQuickViewReduce:popupQuickViewReduce
    },
});

