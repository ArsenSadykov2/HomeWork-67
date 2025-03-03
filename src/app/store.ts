import { configureStore } from '@reduxjs/toolkit';
import {passwordReducer} from "../containers/Password/CounterSlice.ts";
import {calculatorReducer} from "../containers/Calculator/CalculatorSlice.ts";


export const store = configureStore({
    reducer: {
        password: passwordReducer,
        calculator: calculatorReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;