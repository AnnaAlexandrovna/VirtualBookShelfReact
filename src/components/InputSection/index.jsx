import './index.scss';
import { useState, useContext } from 'react';
import { languageContext } from '../../utils/providers/languageProvider';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import React from 'react';
import { searchQuery } from '../../containers/Search/reducers';
import { useSelector } from 'react-redux';
import { selectSearchQuery } from '../../selectors/selectSearchQuery';

const InputSection = React.memo(() => {
    const search = useSelector(selectSearchQuery);
    const [userInput, setUserInput] = useState(search);
    React.useEffect(() => {
        setUserInput(search);
    }, [search]);
    const { translate } = useContext(languageContext);
    const dispatch = useDispatch();
    const history = useHistory();
    const handleChange = (event) => {
        setUserInput(event.target.value);
    };
    const onClickSearch = () => {
        dispatch(searchQuery(userInput));
        history.push(`/search?search=${userInput}`);
    };
    const onEnterClick = event => {
        if(event.key === 'Enter') {
            onClickSearch();
        }
    };
    return <div className='search-section-nav'>
        <input
            className='search-section-nav__input'
            onChange={handleChange}
            onKeyDown={onEnterClick}
            value={userInput}
        />
        <div
            className='search-section-nav__button'
            onClick={onClickSearch}
        >
            {translate('navBar.search')}
        </div>
    </div>;

});

export default InputSection;
