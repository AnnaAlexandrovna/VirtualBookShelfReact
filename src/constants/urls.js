import { serverUrl } from '../env';
export const coverUrl = cover_id => `https://covers.openlibrary.org/b/id/${cover_id}-M.jpg`;
export const gitHubUrl = `${serverUrl}/auth/github`;
export const favoritesUrl = `${serverUrl}/users/favorites`;