import './ArrowButton.scss';
import rightArrow from '../../../assets/images/arrow_right.png';
import leftArrow from '../../../assets/images/arrow_left.png';
import React from 'react';

const ArrowButton = React.memo(({ onClick, direction }) =>
        <button className='subject-container-arrow-button' onClick={onClick}>
                <img
                        className='subject-container-arrow-button__img'
                        src={
                                direction === 'next' ?
                                        rightArrow :
                                        leftArrow
                        }
                        alt='arrow'
                />
        </button>
);

export default ArrowButton;
