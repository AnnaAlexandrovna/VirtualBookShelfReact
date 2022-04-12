import React from 'react';
import './index.scss';

const H3 = React.memo(({ bold, text }) =>
    bold ?
        <h3 className='title-third title-third--bold'>{text}</h3> :
        <h3 className='title-third title-third--normal'>{text}</h3>);

export default H3;