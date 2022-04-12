import NavBar from '../../components/NavBar/index.jsx';
import { useParams } from 'react-router-dom';
import CollectionTitle from './CollectionTitle';
import RelatedSection from './RelatedSection';
import React, { useContext, useMemo, useState, useEffect } from 'react';
import { languageContext } from '../../utils/providers/languageProvider';
import * as subjectConfig from '../../constants/subjectConfiguration.json';
import BookList from '../../components/BookList';
import Paginator from '../../components/Paginator';
import { useGetSubjectDataQuery, useModifySubjectDataMutation } from '../../api/subjectsApi.js';
import { useDispatch } from 'react-redux';
import { displayLoader, removeLoader } from '../Alert/reducer.js';

const Collection = () => {
    const collectionId = useParams().collectionId;
    const { translate } = useContext(languageContext);
    const partOfConfig = useMemo(() => subjectConfig.default.subjects.collections.find(item => item.collectionContent.includes(collectionId)), [collectionId]);
    const { data, isLoading } = useGetSubjectDataQuery({ collectionId });
    const dispatch = useDispatch();
    const [modifySubjectData, { isLoading: isUpdating }] = useModifySubjectDataMutation();
    const [collectionData, setCollectionData] = useState({ data: data });
    useEffect(() => {
        if(data) {
            setCollectionData({ data });
        }
    }, [data]);
    useEffect(() => {
        if(isLoading || isUpdating){
            dispatch(displayLoader());
        } else {
            dispatch(removeLoader());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoading, isUpdating]);
    const getData = async (limit, offset) => {
        if(collectionId !== '__SEARCH_COLLECTION') {
            const result = await modifySubjectData({ collectionId, details: true, limit, offset });
            setCollectionData(result);
        }
    };
    return <>
        <NavBar />
        {collectionData.data &&
            <>
                <CollectionTitle
                    title={
                        translate(partOfConfig?.collectionContentLanguage[partOfConfig?.collectionContent.indexOf(collectionId)]) ?? collectionData.data.name}
                    count={collectionData.data?.workCount} />
                <RelatedSection
                    items={collectionData.data?.subjects?.map(element => ({ key: element.key.replace('/subjects/', ''), name: element.name })) ?? []}
                    title={translate('collection.text1')}
                />
                <div>
                    <BookList books={collectionData?.data?.works ?? []} />
                    <Paginator collectionId={collectionId} getData={getData} count={data?.work_count} />
                </div>
                <RelatedSection
                    items={collectionData.data?.people?.map(element => ({ key: element.key.replace('/subjects/', ''), name: element.name })) ?? []}
                    title={translate('collection.text2')}
                />
                <RelatedSection
                    items={collectionData.data?.times?.map(element => ({ key: element.key.replace('/subjects/', ''), name: element.name })) ?? []}
                    title={translate('collection.text3')}
                />
                <RelatedSection
                    items={collectionData.data?.places?.map(element => ({ key: element.key.replace('/subjects/', ''), name: element.name })) ?? []}
                    title={translate('collection.text4')}
                />
            </>
        }
    </>;
};
export default Collection;