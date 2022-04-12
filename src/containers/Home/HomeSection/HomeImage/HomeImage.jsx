import React from 'react';
import './HomeImage.scss';

const HomeImage = React.memo(({ src, alt }) =>
    <img
        src={src}
        alt={alt}
        className='home-page-section-image'
    />
);

export default HomeImage;