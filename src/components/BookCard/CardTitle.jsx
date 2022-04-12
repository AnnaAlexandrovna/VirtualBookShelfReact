import { Link } from 'react-router-dom';
import './CardTitle.scss';
import H3 from '../H3/index';
import React from 'react';

const CardTitle = React.memo(({ titleLink, title, author }) =>
    <div className='book-card-title'>
        <Link to={titleLink} >
            <strong>{title}</strong>
        </Link>
        <br />
        <H3 text={author} />
    </div>
);

export default CardTitle;