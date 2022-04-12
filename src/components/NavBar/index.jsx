import NavBarItem from './NavBarItem/NavBarItem.jsx';
import { Routers } from '../../constants/routes';
import NavBarLogo from './NavBarLogo/NavBarLogo.jsx';
import './index.scss';
import { languageContext } from '../../utils/providers/languageProvider';
import React, { useContext, useCallback } from 'react';
import InputSection from '../InputSection';
import Dropdown from '../Dropdown/Dropdown.jsx';
import SearchSectionSmall from '../../components/InputSection/SearchSectionSmall';
import useViewport from '../../hooks/useViewPort';
import breakPoints from '../../constants/breakPoints';
import { useHistory } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { useSelector } from 'react-redux';
import { selectToken } from '../../selectors/selectToken.js';

const NavBar = React.memo(() => {
    const width = useViewport();
    const { translate } = useContext(languageContext);
    let loginButtonName = 'login';
    const history = useHistory();
    const logoutOnClick = useCallback(
        () => {
            history.push('/logout');
        },// eslint-disable-next-line react-hooks/exhaustive-deps
        []
    );
    const token = useSelector(selectToken);
    if(token) {
        loginButtonName = 'logout';
    }
    return <div className='navbar-container'>
        <div className='navbar-container__left-section'>
            <NavBarLogo />
            <NavBarItem
                title={translate('navBar.title1')}
                to={Routers.subject}
            />
            <NavBarItem
                title={translate('navBar.title2')}
                to={Routers.favorites}
            />
        </div>

        <div className='navbar-container__right-section'>
            {
                token && breakPoints.desktop < width &&
                <div className='navbar-container__login'>{jwtDecode(token)?.name}</div>
            }
            {
                breakPoints.breakpointForBigPhone < width ?
                    <InputSection /> :
                    <SearchSectionSmall />
            }
            <Dropdown languages={['EN', 'RU']} />
            {loginButtonName === 'login' &&
                <NavBarItem
                    title={translate(`navBar.${loginButtonName}`)}
                    to={Routers.authorization}
                />
            }
            {loginButtonName === 'logout' &&
                <NavBarItem
                    title={translate(`navBar.${loginButtonName}`)}
                    to={Routers.home}
                    onClick={logoutOnClick}
                />
            }
        </div>
    </div>;
});

export default NavBar;