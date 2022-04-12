import './ImageSection.scss';
import Bookmark from '../../components/BookMark';
import bookImg from '../../assets/images/book.png';
import { useState } from 'react';
import breakPoints from '../../constants/breakPoints';
import useViewport from '../../hooks/useViewPort';
import { coverUrl } from '../../constants/urls';
import { selectIsBookInFavorites } from '../../selectors/selectChosenBooksKeys';
import { useSelector } from 'react-redux';

const ImageSection = ({ book }) => {
    const [activeBookMark, setActiveBookMark] = useState(false);
    let showBook = false;
    const width = useViewport();
    if(width <= breakPoints.breakpointForBigPhone) {
        showBook = true;
    };
    const handleMouseOver = () => {
        setActiveBookMark(true);
    };
    const handleMouseOut = () => {
        setActiveBookMark(false);
    };
    if(width > breakPoints.breakpointForBigPhone) {
        if(activeBookMark) {
            showBook = true;
        }
        else {
            showBook = false;
        }
    };
    const bookId = book.key;
    const chosen = useSelector(selectIsBookInFavorites(bookId));
    const bookDataConvert = {
        title: book?.title ?? '',
        cover_id: book?.covers?.[0] ?? '',
        authors: book?.authors?.map((item, index) => ({ key: index, name: item })) ?? [],
        key: book?.key
    };
    return <div className='book-page-image-section'
        onMouseEnter={handleMouseOver}
        onMouseLeave={handleMouseOut}>
        {
            showBook &&
            <div >
                <Bookmark active={chosen} bookId={bookId} bookData={bookDataConvert} />
            </div>
        }
        {
            chosen &&
            <div >
                <Bookmark active={chosen} bookId={bookId} bookData={bookDataConvert} />
            </div>
        }
        <img
            className='book-page-image-section__image'
            src={book?.covers?.[0] > 0 ? coverUrl(book?.covers[0]) : bookImg}
            alt='Cover'
        />
    </div>;
};

export default ImageSection;
