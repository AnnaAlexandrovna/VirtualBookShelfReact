import { createSelector } from 'reselect';

export const selectChosenBooksKeys = state => state?.favorites?.books ? Object.keys(state.favorites.books) : [];;

export const selectIsBookInFavorites = bookId => createSelector(
    [selectChosenBooksKeys],
    state => {
        return state.includes(bookId);
    }
);
