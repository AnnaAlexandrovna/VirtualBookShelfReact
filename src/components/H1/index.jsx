import React from 'react';
import './index.scss';

const H1 = React.memo(({ left, text }) =>
    left ?
        <h1 className='title-first title-first--left'>{text}</h1> :
        <h1 className='title-first title-first--center'>{text}</h1>);

export default H1;