import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { showRedAlert } from '../containers/Home/reducers';

export const subjectsApi = createApi({
    reducerPath: 'subjects',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/openlibrary/subjects/' }),
    endpoints: builder => ({
        getSubjectData: builder.query({
            query: ({collectionId, details = true, limit = 10, offset = 1}) => 
            `${collectionId}.json?details=${details}&limit=${limit}&offset=${offset}`,
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch(err) {
                    dispatch(showRedAlert('Error get subject data!'));
                }
            },
        }),
        modifySubjectData: builder.mutation({
            query: ({collectionId, details = true, limit = 10, offset = 1}) => 
            `${collectionId}.json?details=${details}&limit=${limit}&offset=${offset}`,
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch(err) {
                    dispatch(showRedAlert('Error get subject data!'));
                }
            },
        }),
    }),
});

export const { useGetSubjectDataQuery, useModifySubjectDataMutation } = subjectsApi;