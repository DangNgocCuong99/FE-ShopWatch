import { configureStore } from '@reduxjs/toolkit';

import businessReduce from './storeBusiness/businessReduce'
import systemStore from './multipleTab/multipleTabReduce';
import cartReduce from './cart/cartReduce';

export const store = configureStore({
    reducer: {
        counter: businessReduce,
        multipleTab: systemStore,
        cartReduce:cartReduce
    },
});

