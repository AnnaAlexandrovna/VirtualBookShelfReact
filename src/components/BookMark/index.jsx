import './index.scss';
import React, { useCallback } from 'react';
import { useAddFavoritesMutation, useDeleteFavoriteMutation } from '../../api/favoritesApi';
import { useSelector } from 'react-redux';
import { selectToken } from '../../selectors/selectToken';

const Bookmark = React.memo(({ active = true, bookId, bookData }) => {
    const [deleteFavorite] = useDeleteFavoriteMutation();
    const [addFavorites] = useAddFavoritesMutation();
    const isAuth = useSelector(selectToken);
    const onClick = useCallback(
        () => {
            if(active) {
                deleteFavorite(bookId);
            } else {
                addFavorites(bookData);
            }
        },// eslint-disable-next-line react-hooks/exhaustive-deps
        [active, isAuth]
    );
    return <div className='book-mark-chosen-container' onClick={onClick}>
        <div className={active ? 'book-mark-chosen-container__square--active' : 'book-mark-chosen-container__square--not-active'}></div>
        <div className={active ? 'book-mark-chosen-container__arrow--active' : 'book-mark-chosen-container__arrow--not-active'}></div>
    </div>;
});

export default Bookmark;
