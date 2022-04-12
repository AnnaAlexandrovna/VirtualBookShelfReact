import React from 'react';
import './index.scss';

const H2 = React.memo(({ left, text }) =>
    left ?
        <h2 className='title-second title-second--left'>{text}</h2> :
        <h2 className='title-second title-second--center'>{text}</h2>);

export default H2;