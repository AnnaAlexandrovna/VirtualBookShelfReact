import CommentAuthorAction from './CommentAuthorAction';
import CommentAuthorAndDate from './CommentAuthorAndDate';
import CommentContent from './CommentContent';
import CommentTextArea from './CommentTextArea';
import ModifyOrSentButtonsSection from './ModifyOrSentButtonsSection';
import NoCommentsContainer from './NoCommentsContainer';
import { getUserIdFromToken } from '../../../utils/auth/getUserIdFromToken';
import { useState } from 'react';
import { useDeleteCommentMutation, useGetCommentsQuery, useModifyCommentMutation } from '../../../api/commentsApi';
import { useSelector } from 'react-redux';
import { selectToken } from '../../../selectors/selectToken';

const AllCommentsSection = ({ bookId }) => {
    const token = useSelector(selectToken);
    const { data: comments } = useGetCommentsQuery(bookId);
    const [deleteComment] = useDeleteCommentMutation();
    const [modifyComment] = useModifyCommentMutation();
    let userId = '';
    if(token) {
        userId = getUserIdFromToken(token);
    }
    const [editedCommentId, setEditedCommentId] = useState('');
    const [modifyCommentInput, setModifyCommentInput] = useState('');
    const editComment = (commentId, comment) => {
        setEditedCommentId(commentId);
        setModifyCommentInput(comment);
    };
    const handleChangeModifyComment = (event) => {
        setModifyCommentInput(event.target.value);
    };
    const modifyComments = commentId => {
        modifyComment({ commentId, comment: modifyCommentInput });
        setEditedCommentId('');
    };

    return comments?.length > 0 ?
        [...comments].reverse().map(element =>

            <div className='add-comments-section__container' key={element._id}>
                <CommentAuthorAndDate text={element.userId} date={element.createdAt} />
                {
                    editedCommentId !== element._id &&
                    <CommentContent text={element.data} />
                }
                {
                    editedCommentId === element._id &&
                    <CommentTextArea value={modifyCommentInput} onChange={handleChangeModifyComment} />
                }
                {
                    token && editedCommentId !== element._id && userId === element.userId &&
                    <CommentAuthorAction
                        editCommentOnClick={() => editComment(element._id, element.data)}
                        deleteCommentOnClick={() => deleteComment(element._id)}
                    />
                }
                {
                    token && editedCommentId === element._id && userId === element.userId &&
                    <ModifyOrSentButtonsSection onClick={() => modifyComments(element._id)} />
                }
            </div>) : <NoCommentsContainer />;
};

export default AllCommentsSection;
