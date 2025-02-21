import { configureStore } from '@reduxjs/toolkit';
import {passwordReducer} from "../containers/CounterSlice.ts";


export const store = configureStore({
    reducer: {
        password: passwordReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;