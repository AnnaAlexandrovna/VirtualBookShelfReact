import { getFavoritesFromLocalStorage } from './getFavoritesFromLocalStorage';

export const addBookToFavoritesLocal = data => {
    const favorite = getFavoritesFromLocalStorage();
    favorite[data.key] = data;
    localStorage.setItem('favorites', JSON.stringify(favorite));
};
