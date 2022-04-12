import React from 'react';
import { Link } from 'react-router-dom';
import './NavBarItem.scss';

const NavBarItem = React.memo(({ to, title, onClick }) =>
    <div className='navbar-item' onClick={onClick} >
        <Link
            to={to}
            className='navbar-item'
        >
            {title}
        </Link>
    </div>
);

export default NavBarItem;