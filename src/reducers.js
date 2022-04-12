import { favorites } from './containers/Favorites/reducers';
import { searchData } from './containers/Search/reducers';
import { alertsToShow } from './containers/Home/reducers';
import { showLoader } from './containers/Alert/reducer';
import { bookDataApi } from './api/bookDataApi';
import { commentsApi } from './api/commentsApi';
import { subjectsApi } from './api/subjectsApi';
import { searchApi } from './api/searchApi';
import { favoritesApi } from './api/favoritesApi';
import { userInfo } from './containers/Login/reducer';

export const createReducerArgs = () => {
    const rootReducer = {
        searchData,
        favorites,
        alertsToShow,
        showLoader,
        userInfo,
        [bookDataApi.reducerPath]: bookDataApi.reducer,
        [commentsApi.reducerPath]: commentsApi.reducer,
        [subjectsApi.reducerPath]: subjectsApi.reducer,
        [searchApi.reducerPath]: searchApi.reducer,
        [favoritesApi.reducerPath]: favoritesApi.reducer,
    };
    return rootReducer;
};