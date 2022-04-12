import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    query: ''
};

const searchDataSlice = createSlice({
    name: 'searchData',
    initialState,
    reducers: {
        searchQuery: (state, action) => {
            return { query: action.payload };
        }
    }
});

export const searchData = searchDataSlice.reducer;
export const { searchQuery } = searchDataSlice.actions;