import SubjectCarouselContainer from './Container';
import React from 'react';
import { useGetSubjectDataQuery } from '../../../api/subjectsApi';

const SubjectCarousel = React.memo(({ id }) => {
    const { data } = useGetSubjectDataQuery({ collectionId: id });
    return <>
        {
            data?.works?.length > 0 &&
            <SubjectCarouselContainer allBooks={data.works} />
        }
    </>;
});
export default SubjectCarousel;

