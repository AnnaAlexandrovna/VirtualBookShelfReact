import { useQuery } from '../../hooks/useQuery';
import { Redirect } from 'react-router';
import { useDispatch } from 'react-redux';
import { useEffect, useContext } from 'react';
import { languageContext } from '../../utils/providers/languageProvider';
import { showGreenAlert } from '../Home/reducers';
import { refresh, userAuth } from './reducer';

const Login = () => {
    const query = useQuery();
    const dispatch = useDispatch();
    const { translate } = useContext(languageContext);
    const token = query.get('token');
    const refreshToken = query.get('refreshToken');
    useEffect(() => {
        dispatch(userAuth({token, refreshToken}));
        dispatch(refresh());
        dispatch(showGreenAlert(translate('auth.login')));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return <Redirect to='/subject'/>;
};

export default Login; 
