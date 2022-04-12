import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { showRedAlert } from '../containers/Home/reducers';
import { convertDataToPaginator } from '../utils/search/convertDataToPaginator';

export const searchApi = createApi({
    reducerPath: 'searchReqData',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/openlibrary/' }),
    endpoints: builder => ({
        getSearchData: builder.query({
            query: ({ userInput, limit = 10, offset = 1 }) => `search.json?q=${userInput}&limit=${limit}&offset=${offset}`,
            transformResponse: response => {
                response.docs = convertDataToPaginator(response.docs);
                return response;
            },
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch(err) {
                    dispatch(showRedAlert('Error get search data!'));
                }
            },
        }),
        modifySearchData: builder.mutation({
            query: ({ userInput, limit = 10, offset = 1 }) =>
                `search.json?q=${userInput}&limit=${limit}&offset=${offset}`,
            transformResponse: response => {
                response.docs = convertDataToPaginator(response.docs);
                return response;
            },
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch(err) {
                    dispatch(showRedAlert('Error get search data!'));
                }
            },
        }),
    }),
});

export const { useGetSearchDataQuery, useModifySearchDataMutation } = searchApi;