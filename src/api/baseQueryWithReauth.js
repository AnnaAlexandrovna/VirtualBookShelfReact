import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { userAuth, userLogout } from '../containers/Login/reducer';
import { isTokenValid } from '../utils/auth/isTokenValid';

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://127.0.0.1:3000/',
    prepareHeaders: (headers, { getState }) => {
        const token = getState().userInfo?.user?.token;
        const valid = token ? isTokenValid(token) : false;
        if(token && valid) {
            headers.set('authorization', `Bearer ${token}`);
        }
        return headers;
    },
});

export const baseQueryWithReAuth = async (args, api, options) => {
    let result = await baseQuery(args, api, options);
    if(result?.error && result.error.status === 401) {
        const refreshResult = await baseQuery({
            url: '/token',
            method: 'POST',
            headers: {
                'X-Refresh-Token': api.getState().userInfo.user.refreshToken,
                authorization: `Bearer ${api.getState().userInfo.user.token}`
            }
        }, api, options);
        const {token, refreshToken} = refreshResult.data;
        if(refreshResult.data) {
            api.dispatch(userAuth({token, refreshToken}));
            result = await baseQuery(args, api, options);
        } else {
            api.dispatch(userLogout());
        }
    }
    return result;
};