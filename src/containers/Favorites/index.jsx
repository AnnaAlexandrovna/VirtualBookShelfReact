import NavBar from '../../components/NavBar/index.jsx';
import H1 from '../../components/H1';
import BookCard from '../../components/BookCard';
import { Routers } from '../../constants/routes';
import './index.scss';
import React, { useContext } from 'react';
import { languageContext } from '../../utils/providers/languageProvider';
import { coverUrl } from '../../constants/urls.js';
import { useSelector } from 'react-redux';
import { selectFavoritesBooks } from '../../selectors/selectFavoritesBooks';

const Favorites = () => {
    const { translate } = useContext(languageContext);
    const books = useSelector(selectFavoritesBooks);
    return <>
        <NavBar />
        <H1 text={translate('favorites.h1Text')} />
        <div className='favorite-container'>
            {books &&
                books.map(element =>
                    <BookCard
                        chosen={false}
                        key={element.key}
                        title={element.title}
                        author={element.authors?.map(item => item.name ? item?.name : '')?.join(', ')}
                        image={element.cover_id > 0 ? coverUrl(element.cover_id) : ''}
                        authorLink={`${Routers.collectionWithoutId}${element?.authors?.[0]?.name}`}
                        bookId={element.key}
                        bookData={element}
                    />
                )
            }
            {
                books?.length === 0 &&
                <div>{translate('favorites.h2Text')}</div>
            }
        </div>
    </>;
};

export default Favorites;