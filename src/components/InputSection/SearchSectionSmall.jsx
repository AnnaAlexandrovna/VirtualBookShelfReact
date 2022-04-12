import './SearchSectionSmall.scss';
import searchImg from '../../assets/images/search.svg';
import { useHistory } from 'react-router-dom';
import React from 'react';

const SearchSectionSmall = React.memo(() => {
    const history = useHistory();
    const onClickSearch = () => {
        history.push('/search?search=');
    };
    return <div className='search-section-small' onClick={onClickSearch}>
        <img
            src={searchImg}
            className='search-section-small__img'
            alt='search'
        />
    </div>;
});


export default SearchSectionSmall;
