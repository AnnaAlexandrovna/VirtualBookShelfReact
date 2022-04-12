import React from 'react';
import './HomeText.scss';

const HomeText = React.memo(({ content }) =>
    <div className='home-page-text'>{content}</div>
);

export default HomeText;