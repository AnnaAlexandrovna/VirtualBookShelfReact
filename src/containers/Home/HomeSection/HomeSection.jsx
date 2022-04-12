import './HomeSection.scss';
import HomeImage from './HomeImage/HomeImage.jsx';
import HomeText from './HomeText/HomeText.jsx';
import React from 'react';

const HomeSection = React.memo(({ src, order, text, alt }) =>
    <div >
        {
            order === 'imageFirst' &&
            <div className='home-page-section home-page-section__first'>
                <HomeText content={text} />
                <HomeImage src={src} alt={alt} />
            </div>
        }
        {
            order !== 'imageFirst' &&
            <div className='home-page-section home-page-section__second'>
                <HomeText content={text} />
                <HomeImage src={src} alt={alt} />
            </div>
        }
    </div>);

export default HomeSection;