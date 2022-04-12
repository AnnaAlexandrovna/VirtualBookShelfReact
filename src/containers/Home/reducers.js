import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    alerts: {}
};

const alertsToShowSlice = createSlice({
    name: 'alertsToShow',
    initialState,
    reducers: {
        showGreenAlert: (state, action) => {
            state.alerts[action.payload] = { message: action.payload, color: 'green' };
            return state;
        },
        showRedAlert: (state, action) => {
            state.alerts[action.payload] = { message: action.payload, color: 'red' };
            return state;
        },
        deleteAlert: (state, action) => {
            delete state.alerts[action.payload];
            return state;
        },
    }
});

export const alertsToShow = alertsToShowSlice.reducer;
export const { showGreenAlert, showRedAlert, deleteAlert } = alertsToShowSlice.actions;