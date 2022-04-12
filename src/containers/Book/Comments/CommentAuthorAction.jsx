import '../CommentsSection.scss';
import React, { useContext } from 'react';
import { languageContext } from '../../../utils/providers/languageProvider';

const CommentAuthorAction = React.memo(({ editCommentOnClick, deleteCommentOnClick }) => {
    const { translate } = useContext(languageContext);
    return <div className='add-comments-section__container__sent-button-container'>
        <button
            className='add-comments-section__container__sent-button-container__button'
            onClick={editCommentOnClick}
        >{translate('book.modifyComment')}</button>
        <button
            className='add-comments-section__container__sent-button-container__button'
            onClick={deleteCommentOnClick}
        >{translate('book.deleteComment')}</button>
    </div>;
});

export default CommentAuthorAction;
