import jwt_decode from 'jwt-decode';
import { tokenExpToDate } from '../../env';

export const isTokenValid = (token) => {
    return jwt_decode(token)?.exp * tokenExpToDate >= Date.now();
};