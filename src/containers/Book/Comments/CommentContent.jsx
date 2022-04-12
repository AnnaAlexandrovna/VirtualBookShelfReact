import React from 'react';
import H3 from '../../../components/H3';

const CommentContent = React.memo(({ text }) => {
    return <div className='add-comments-section__container__row'>
        <H3 text={text} />
    </div>;
});

export default CommentContent;
