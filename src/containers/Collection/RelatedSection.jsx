import './RelatedSection.scss';
import ButtonLight from '../../components/ButtonLight';
import React from 'react';

const RelatedSection = React.memo(({ items, title }) => <>
    {
        items?.length > 0 &&
        <div className='related-section'>
            <h2 className='related-section__title'>
                {title}
            </h2>
            <div className='related-section__buttons-container'>
                {
                    items.map(element =>
                        <ButtonLight
                            key={element.key}
                            title={element.name}
                            value={element.key}
                        />
                    )
                }
            </div>
        </div>
    }
</>
);

export default RelatedSection;