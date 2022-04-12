import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {
        token: null,
        refreshToken: null
    },
    timestamp: null
};

const userSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        userAuth: (state, action) => {
            const {token, refreshToken} = action.payload;
            localStorage.setItem('token', token);
            localStorage.setItem('refreshToken', refreshToken);
            state.user = { token, refreshToken };
            return state;
        },
        userLogout: state => {
            state.user = {token: null, refreshToken:null};
            localStorage.removeItem('token');
            localStorage.removeItem('refreshToken');
            return state;
        },
        refresh: state => {
            state.timestamp = new Date().getTime();
            return state;
        }
    }
});

export const userInfo = userSlice.reducer;
export const { userAuth, userLogout, refresh } = userSlice.actions;