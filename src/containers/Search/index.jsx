import NavBar from '../../components/NavBar/index.jsx';
import SearchSection from './SearchSection';
import BookList from '../../components/BookList';
import Paginator from '../../components/Paginator';
import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useQuery } from '../../hooks/useQuery';
import { searchQuery } from './reducers.js';
import { useGetSearchDataQuery, useModifySearchDataMutation } from '../../api/searchApi.js';
import { displayLoader, removeLoader } from '../Alert/reducer.js';


const Search = () => {
    const query = useQuery();
    const searchId = query.get('search');
    const dispatch = useDispatch();
    let { data, isLoading } = useGetSearchDataQuery({ userInput: searchId });
    const [modifySearchData, { isLoading: isUpdating }] = useModifySearchDataMutation();
    const [collectionData, setCollectionData] = useState({ data });
    const useGetData = async (limit = 10, offset = 1) => {
        data = await modifySearchData({ userInput: searchId, limit, offset });
        if(data.data.docs) {
            setCollectionData(data);
        }
    };
    useEffect(() => {
        if(isLoading || isUpdating){
            dispatch(displayLoader());
        } else {
            dispatch(removeLoader());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading, isUpdating]);
    
    useEffect(() => {
        if(data?.docs) {
            setCollectionData({ data });
        }
    }, [data]);

    useEffect(() => {
        dispatch(searchQuery(searchId));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchId]);
    return <>
        <NavBar />
        <SearchSection />
        <BookList books={collectionData?.data?.docs ?? []} />
        <Paginator collectionId={'__SEARCH_COLLECTION'} getData={useGetData} count={data?.numFound} searchId={searchId}/>
    </>;
};

export default Search;
