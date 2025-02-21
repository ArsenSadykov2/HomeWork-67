import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ICounterState {
    value: string ;
    info: string;
    status: string;
}

const initialState: ICounterState = {
    value: '',
    info: '',
    status: '',
};

const rightPin = '4444';

export const passwordSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addPassword: (state, action: PayloadAction) => {
            if(Number(state.value.length) < 4) {
                state.value += action.payload;
            }
        },
        checkPassword: (state,) => {
            if (state.value === rightPin) {
                state.info = 'Pin Granted';
                state.status = 'Granted';
            } else {
                state.info = 'Pin Denied';
                state.status = 'Denied';
            }
        },
        deletePassword: (state) => {
            state.value = state.value.slice(0, -1);
        },
    },
});

export const passwordReducer = passwordSlice.reducer;
export const {addPassword, checkPassword, deletePassword} = passwordSlice.actions;