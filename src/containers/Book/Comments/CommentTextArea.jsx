import React from 'react';
import '../CommentsSection.scss';

const CommentTextArea = React.memo(({ value, onChange }) => {
    return <div className='add-comments-section__container__content-section'>
        <textarea
            rows='3'
            cols='45'
            name='text'
            className='add-comments-section__container__input'
            value={value}
            onChange={onChange}
        ></textarea>
    </div>;
});

export default CommentTextArea;
