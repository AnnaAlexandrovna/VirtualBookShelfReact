import { getFavoritesFromLocalStorage } from './getFavoritesFromLocalStorage';
export const removeBookFromFavoritesLocal = id => {
    const favorite = getFavoritesFromLocalStorage();
    delete favorite[id];
    localStorage.setItem('favorites', JSON.stringify(favorite));
};