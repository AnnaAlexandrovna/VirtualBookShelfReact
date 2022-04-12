import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    show: false
};

const showLoaderSlice = createSlice({
    name: 'showLoader',
    initialState,
    reducers: {
        displayLoader: () => ({ show : true}),
        removeLoader: () =>({ show : false}),
    },
});

export const showLoader = showLoaderSlice.reducer;
export const { displayLoader, removeLoader } = showLoaderSlice.actions;