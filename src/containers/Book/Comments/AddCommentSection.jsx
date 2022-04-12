import AddCommentTitle from './AddCommentTitle';
import CommentTextArea from './CommentTextArea';
import ModifyOrSentButtonsSection from './ModifyOrSentButtonsSection';
import NoAuthUserAddCommentsContainer from './NoAuthUserAddCommentsContainer';
import { useState } from 'react';
import { useAddCommentMutation } from '../../../api/commentsApi';
import { selectToken } from '../../../selectors/selectToken';
import { useSelector } from 'react-redux';

const AddComment = ({ bookId }) => {
    const authUser = useSelector(selectToken);
    const [userInput, setUserInput] = useState('');
    const handleChange = (event) => {
        setUserInput(event.target.value);
    };
    const [addComment] = useAddCommentMutation();
    const sendComment = () => {
        addComment({ bookId, comment: userInput });
        setUserInput('');
    };
    return authUser ?
        <div className='add-comments-section__container'>
            <AddCommentTitle />
            <CommentTextArea value={userInput} onChange={handleChange} />
            <ModifyOrSentButtonsSection onClick={sendComment} />
        </div> : <NoAuthUserAddCommentsContainer />;
};

export default AddComment;
