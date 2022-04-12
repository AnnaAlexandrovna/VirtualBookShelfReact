import React from 'react';
import './CardImage.scss';

const CardImage = React.memo(({ image, title }) =>
    <>
        {
            image ?
                <div className='book-card-image-container'>
                    <img
                        src={image}
                        alt='Book'
                        className='book-card-image-container__image'
                    />
                </div> :
                <div className='book-card-image-container book-card-image-container__moc'>
                    <strong className='book-card-image-container__moc__text'>{title}</strong>
                </div>
        }
    </>
);

export default CardImage;