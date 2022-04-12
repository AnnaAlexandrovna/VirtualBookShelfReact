import { createApi } from '@reduxjs/toolkit/query/react';
import { encode as base64_encode } from 'base-64';
import { showRedAlert } from '../containers/Home/reducers';
import { baseQueryWithReAuth } from './baseQueryWithReauth';

export const commentsApi = createApi({
    reducerPath: 'comments',
    baseQuery: baseQueryWithReAuth,
    tagTypes: ['Comments'],
    endpoints: (builder) => ({
        getComments: builder.query({
            query: bookId => {
                const id = base64_encode(bookId);
                return `books/${id}/comments`;
            },
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch(err) {
                    dispatch(showRedAlert('Error get comments!'));
                }
            },
            providesTags: result =>
                result ? [...result.map(({ _id }) => ({ type: 'Comments', id: _id })), { type: 'Comments', id: 'Comments' }] : [{ type: 'Comments', id: 'Comments' }],
        }),
        addComment: builder.mutation({
            query: ({ bookId, comment }) => {
                const id = base64_encode(bookId);
                return {
                    url: `books/${id}/comments`,
                    method: 'POST',
                    body: { comment }
                };
            },
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch(err) {
                    dispatch(showRedAlert('Error add comment!'));
                }
            },
            invalidatesTags: [{ type: 'Comments', id: 'Comments' }],
        }),
        deleteComment: builder.mutation({
            query: commentId => {
                return {
                    url: `books/comments/${commentId}`,
                    method: 'DELETE',
                };
            },
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch(err) {
                    dispatch(showRedAlert('Error delete comment!'));
                }
            },
            invalidatesTags: [{ type: 'Comments', id: 'Comments' }],
        }),
        modifyComment: builder.mutation({
            query: ({ commentId, comment }) => {
                return {
                    url: `books/comments/${commentId}`,
                    method: 'PUT',
                    body: { comment }
                };
            },
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    await queryFulfilled;
                } catch(err) {
                    dispatch(showRedAlert('Error modify comment!'));
                }
            },
            invalidatesTags: [{ type: 'Comments', id: 'Comments' }],
        }),
    }),
});



export const { useGetCommentsQuery, useAddCommentMutation, useDeleteCommentMutation, useModifyCommentMutation } = commentsApi;