export const getFavoritesFromLocalStorage = () => {
    return JSON.parse(localStorage.getItem('favorites') ?? '{}');
};
