import '../CommentsSection.scss';
import { useContext } from 'react';
import { languageContext } from '../../../utils/providers/languageProvider';
import React from 'react';

const ModifyOrSentButtonsSection = React.memo(({ onClick }) => {
    const { translate } = useContext(languageContext);
    return <div className='add-comments-section__container__sent-button-container'>
        <button
            className='add-comments-section__container__sent-button-container__button'
            onClick={onClick}
        >
            {translate('book.commentButtonTitle')}
        </button>
    </div>;
});

export default ModifyOrSentButtonsSection;
