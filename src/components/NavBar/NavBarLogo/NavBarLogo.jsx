import logo from '../../../assets/images/logo.png';
import logoBig from '../../../assets/images/logoBig.png';
import './NavBarLogo.scss';
import { Link } from 'react-router-dom';
import { Routers } from '../../../constants/routes';
import useViewport from '../../../hooks/useViewPort';
import breakPoints from '../../../constants/breakPoints';
import React from 'react';

const NavBarLogo = React.memo(() => {
    const width = useViewport();
    return <Link to={Routers.home} >
        <img
            src={breakPoints.breakpointForBigPhone < width ? logoBig : logo}
            alt='Logo'
            className={breakPoints.breakpointForBigPhone < width ? 'navbar-logo navbar-logo-long' : 'navbar-logo navbar-logo-short'} />
    </Link>;
});

export default NavBarLogo;