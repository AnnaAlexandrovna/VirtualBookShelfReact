import { createApi } from '@reduxjs/toolkit/query/react';
import { addBookFavoriteBook, removeFavoriteBook, resetFavorites } from '../containers/Favorites/reducers';
import { showRedAlert } from '../containers/Home/reducers';
import { addBookToFavoritesLocal } from '../utils/favorites/addBookToFavoritesLocal';
import { getFavoritesFromLocalStorage } from '../utils/favorites/getFavoritesFromLocalStorage';
import { removeBookFromFavoritesLocal } from '../utils/favorites/removeBookFromFavoritesLocal';
import { baseQueryWithReAuth } from './baseQueryWithReauth';

export const favoritesApi = createApi({
    reducerPath: 'favorite',
    baseQuery: baseQueryWithReAuth,
    tagTypes: ['Favorites'],
    endpoints: (builder) => ({
        getFavorites: builder.query({
            async queryFn(arg, api, options, fetchWithBQ) {
                api.dispatch(resetFavorites());
                let favorites;
                if(api.getState().userInfo.user.token) {
                    favorites = (await fetchWithBQ('users/favorites'))?.data;
                    favorites?.forEach(element => {
                        api.dispatch(addBookFavoriteBook(element.data));
                    });
                } else {
                    favorites = getFavoritesFromLocalStorage();
                    for(let key in favorites) {
                        api.dispatch(addBookFavoriteBook(favorites[key]));
                    }
                    favorites = Array.from(Object.values(favorites));
                }
                return { data: favorites };
            },
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch(err) {
                    dispatch(showRedAlert('Error get Favorites!'));
                }
            },
            providesTags: result => result ? [...result.map(({ key }) => ({ type: 'Favorites', id: key })), { type: 'Favorites', id: 'LIST' }] : [{ type: 'Favorites', id: 'LIST' }],
        }),
        addFavorites: builder.mutation({
            async queryFn(arg, api, options, fetchWithBQ) {
                if(api.getState().userInfo.user.token) {
                    await fetchWithBQ({ url: 'users/favorites', method: 'POST', body: { ...arg } });
                } else {
                    addBookToFavoritesLocal({ ...arg });
                }
                api.dispatch(addBookFavoriteBook({ ...arg }));
                return { data: null };
            },
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch(err) {
                    dispatch(showRedAlert('Error add favorites!'));
                }
            },
            invalidatesTags: [{ type: 'Favorites', id: 'LIST' }],
        }),
        deleteFavorite: builder.mutation({
            async queryFn(arg, api, options, fetchWithBQ) {
                if(api.getState().userInfo.user.token) {
                    await fetchWithBQ({ url: `users/favorites?bookId=${arg}`, method: 'DELETE' });
                } else {
                    removeBookFromFavoritesLocal(arg);
                }
                api.dispatch(removeFavoriteBook(arg));
                return { data: null };
            },
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch(err) {
                    dispatch(showRedAlert('Error delete favorites!'));
                }
            },
            invalidatesTags: [{ type: 'Favorites', id: 'LIST' }],
        }),
    }),
});

export const { useGetFavoritesQuery, useAddFavoritesMutation, useDeleteFavoriteMutation } = favoritesApi;