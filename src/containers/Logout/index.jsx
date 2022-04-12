import { Redirect } from 'react-router';
import { useDispatch } from 'react-redux';
import { useEffect, useContext } from 'react';
import { languageContext } from '../../utils/providers/languageProvider';
import { showGreenAlert } from '../Home/reducers';
import { refresh, userLogout } from '../Login/reducer';

const Logout = () => {
    const { translate } = useContext(languageContext);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showGreenAlert(translate('auth.logout')));;
        dispatch(userLogout());
        dispatch(refresh());
    }
        // eslint-disable-next-line react-hooks/exhaustive-deps
        , []);
    return <Redirect to='/home' />;
};

export default Logout;