import { configureStore } from '@reduxjs/toolkit';
import { createReducerArgs } from './reducers.js';
import { configureThunk } from './middlewares';
import { basePath } from './env';
import { bookDataApi } from './api/bookDataApi.js';
import { commentsApi } from './api/commentsApi.js';
import { subjectsApi } from './api/subjectsApi.js';
import { searchApi } from './api/searchApi.js';
import { favoritesApi } from './api/favoritesApi.js';
import { rtkQueryErrorLogger } from './api/rtkQueryErrorLogger.js';

const preloadedState = {
    userInfo: {
        user:{
            token: localStorage.getItem('token') ?? null,
            refreshToken: localStorage.getItem('refreshToken') ?? null
        },
        timestamp: new Date().getTime()
    },
};

export const configureStoreVB = () => configureStore({
    reducer: createReducerArgs(),
    middleware: getDefaultMiddleware => getDefaultMiddleware(configureThunk(basePath)).concat(
        rtkQueryErrorLogger,
        bookDataApi.middleware,
        commentsApi.middleware,
        subjectsApi.middleware,
        searchApi.middleware,
        favoritesApi.middleware
    ),
    preloadedState : { ...preloadedState}
});

