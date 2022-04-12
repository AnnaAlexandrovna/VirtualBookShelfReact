import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { showRedAlert } from '../containers/Home/reducers';

export const bookDataApi = createApi({
  reducerPath: 'bookData',
  tagTypes: ['BookData'],
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/openlibrary/' }),
  endpoints: builder => ({
    getBookData: builder.query({
      async queryFn(arg, api, options, fetchWithBQ) {
        try {
          const bookData = await fetchWithBQ(`${arg.path}/${arg.bookId}.json`);
          if(bookData.error) throw bookData.error;
          const authObjects = bookData.data.authors ? await Promise.all(bookData.data.authors.map(item => fetchWithBQ(`${item.author.key}.json`))) : [];
          const authNameSet = new Set();
          authObjects.forEach(item => {
            if(item.data) {
              authNameSet.add(item.data?.name);
            }
          });
          bookData.data.authors = Array.from(authNameSet);
          return bookData.data ? { data: bookData.data } : { error: bookData.error };
        } catch(e) {
          return {
            error: { status: e.status, data: e.error },
          };
        }
      },
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
        } catch(err) {
          dispatch(showRedAlert('Error get book data!'));
        }
      },
    })
  }),
});


export const { useGetBookDataQuery } = bookDataApi;

