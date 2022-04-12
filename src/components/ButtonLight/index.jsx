import './index.scss';
import { Routers } from '../../constants/routes';
import { Link } from 'react-router-dom';
import React from 'react';

const ButtonLight = React.memo(({ value, title }) =>
    <Link
        to={`${Routers.collectionWithoutId}${value}`} >
        <button
            title={title}
            className='button-light'
        >
            {title}
        </button>
    </Link>
);
export default ButtonLight;