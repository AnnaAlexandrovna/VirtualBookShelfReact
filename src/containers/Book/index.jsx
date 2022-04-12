import './index.scss';
import NavBar from '../../components/NavBar/index.jsx';
import { useParams } from 'react-router-dom';
import H1 from '../../components/H1';
import ImageSection from './ImageSection';
import InformationSection from './InformationSection';
import AddCommentSection from './CommentsSection';
import { useGetBookDataQuery } from '../../api/bookDataApi';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { displayLoader, removeLoader } from '../Alert/reducer';

const BookPage = () => {
    const { path, bookId } = useParams();
    const { data, isLoading } = useGetBookDataQuery({path, bookId});
    const dispatch = useDispatch();

    useEffect(() => {
        if(isLoading){
            dispatch(displayLoader());
        } else {
            dispatch(removeLoader());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading]);
    
    return <div>
        <NavBar />
        {
            !isLoading &&
            data?.key &&
            <>
                <div className='book-page-container__title'>
                    <H1 className='book-page-container__row' text={data?.title} />
                </div>
                <div className='book-page-container'>
                    <div className='book-page-container__row'>
                        <div className='book-page-container__col-3'>
                            <ImageSection book={data} />
                        </div>
                        <div className='book-page-container__col-9'>
                            <InformationSection book={data} />
                        </div>
                        <div className='book-page-container__col-3'>
                        </div>
                        <div className='book-page-container__col-9'>
                            <AddCommentSection bookId={`/${path}/${bookId}`} />
                        </div>
                    </div>
                </div>
            </>
        }
    </div>;
};

export default BookPage;
