import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { favoritesApi } from '../../api/favoritesApi';

const AddFavorites = () => {
    const dispatch = useDispatch();
    const timestamp = useSelector(state => state.userInfo.timestamp);
    useEffect(() => {
        dispatch(favoritesApi.endpoints.getFavorites.initiate({ timestamp }));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
     [timestamp]);
    return <></>;
};
export default AddFavorites;
 