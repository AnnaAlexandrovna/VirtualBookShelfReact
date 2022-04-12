import React from 'react';
import './Dots.scss';

const Dots = React.memo(({ itemLength, onClick, slideIndex }) =>
    <>
        {
            Array.from({ length: itemLength }).map(
                (item, index) =>
                    <div
                        key={index}
                        id={index}
                        onClick={onClick}
                        className={slideIndex === index ?
                            'dot dot--active' :
                            'dot dot--normal'}
                    />
            )
        }
    </>
);

export default Dots;
