import '../CommentsSection.scss';
import H3 from '../../../components/H3';
import React, { useContext } from 'react';
import { languageContext } from '../../../utils/providers/languageProvider';

const AddCommentTitle = React.memo(() => {
    const { translate } = useContext(languageContext);
    return <div className='add-comments-section__container__row'>
        <H3
            text={translate('book.addComment')}
            bold={true}
        />
    </div>;
});

export default AddCommentTitle;