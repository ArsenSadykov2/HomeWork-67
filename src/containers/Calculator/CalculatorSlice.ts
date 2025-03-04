import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface CalculatorState {
    value: string;
}

const initialState: CalculatorState = {
    value: '',
}

export const CalculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {
        addNumbers: (state, action: PayloadAction<number | string>) => {
            state.value += action.payload;
        },
        deleteNumbers: (state) => {
            state.value = '';
        },
        calculate: (state) => {
            state.value = String(eval(state.value));
        }
    },
});

export const calculatorReducer = CalculatorSlice.reducer;
export const {addNumbers, deleteNumbers, calculate} = CalculatorSlice.actions;