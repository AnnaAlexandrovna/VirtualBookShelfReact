import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    books: {}
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addBookFavoriteBook: (state, action) => {
            state.books[action.payload.key] = action.payload;
            return state;
        },
        removeFavoriteBook: (state, action) => {
            delete state.books[action.payload];
            return state;
        },
        resetFavorites: () => {
            return { books: {} };
        }
    }
});

export const favorites = favoritesSlice.reducer;
export const { addBookFavoriteBook, removeFavoriteBook, resetFavorites } = favoritesSlice.actions;