import '../CommentsSection.scss';
import H3 from '../../../components/H3';
import React, { useContext } from 'react';
import { languageContext } from '../../../utils/providers/languageProvider';

const NoAuthUserAddCommentsContainer = React.memo(() => {
    const { translate } = useContext(languageContext);
    return <div className='add-comments-section__container'>
        <div className='add-comments-section__container__row'>
            <H3 text={translate('book.authToAddComment')} bold='true' />
        </div>
    </div>;
});

export default NoAuthUserAddCommentsContainer;
