import React from 'react';
import NavBar from '../../components/NavBar';
import AuthorizationContainer from './AuthorizationContainer';

export const Authorization = React.memo(() =>
    <div>
        <NavBar />
        <AuthorizationContainer />
    </div>
);

