import React from 'react';
import H3 from '../../../components/H3';

const CommentAuthorAndDate =React.memo(({ text, date }) => {
    return <div className='add-comments-section__container__row'>
        <H3 text={text} bold='true' />
        <div className='add-comments-section__container__row__text'>
            <H3 text={new Date(date).toLocaleDateString('en-GB')} />
        </div>
    </div>;
});

export default CommentAuthorAndDate;