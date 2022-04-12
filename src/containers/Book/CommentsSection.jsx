import './CommentsSection.scss';
import CommentsTitle from './Comments/CommentsTitle';
import AddComment from './Comments/AddCommentSection';
import AllCommentsSection from './Comments/AllCommentsSection';

const AddCommentSection = ({ bookId }) => {
    return <div className='add-comments-section'>
        <AddComment bookId={bookId} />
        <CommentsTitle />
        <AllCommentsSection bookId={bookId} />
    </div>;
};

export default AddCommentSection;
