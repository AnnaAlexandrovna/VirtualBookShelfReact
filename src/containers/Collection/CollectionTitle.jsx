import './CollectionTitle.scss';
import H1 from '../../components/H1';
import React from 'react';

const CollectionTitle = React.memo(({ title }) =>
    <div className='collection-title'>
        <H1 text={title} />
    </div>
);

export default CollectionTitle;
