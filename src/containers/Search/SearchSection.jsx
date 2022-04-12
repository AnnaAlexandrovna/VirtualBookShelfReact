import './SearchSection.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { languageContext } from '../../utils/providers/languageProvider';
import { selectSearchQuery } from '../../selectors/selectSearchQuery';
import { searchQuery } from './reducers';

const SearchSection = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { translate } = useContext(languageContext);;
    const search = useSelector(selectSearchQuery);
    const [userInput, setUserInput] = useState(search);
    useEffect(() => {
        setUserInput(search);
    }, [search]);
    const onSearch = () => {
        dispatch(searchQuery(userInput));
        history.replace(`/search?search=${userInput}`);
    };
    const handleChange = ({ target }) => {
        setUserInput(target.value);
    };
    const onEnterClick = ({key}) => {
        if(key === 'Enter') {
            dispatch(searchQuery(userInput));
            history.replace(`/search?search=${userInput}`);
        }
    };
    return <div className='search-section'>
        <input
            className='search-section__input'
            onChange={handleChange}
            value={userInput}
            onKeyDown={onEnterClick}
        />
        <div
            onClick={onSearch}
            className='search-section__button'
        >
            {translate('navBar.search')}
        </div>
    </div>;
};

export default SearchSection;
