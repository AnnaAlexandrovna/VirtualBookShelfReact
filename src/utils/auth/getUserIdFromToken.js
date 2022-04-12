import jwt_decode from 'jwt-decode';

export const getUserIdFromToken = (token) => {
    try {
        return jwt_decode(token)?.name;
    }
    catch(e) {
        return '';
    }
};