import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    map: {},
    page: {}
};

const subjectsSlice = createSlice({
    name: 'subjects',
    initialState,
    reducers: {
        addSubjectData: (state, action) => {
            const { collectionId, people, places, subjects, times, workCount, name, works } = action.payload;
            state.map[collectionId] = {
                collectionId,
                people,
                places,
                subjects,
                times,
                workCount,
                name,
                data: works
            };
            return state;
        },
        setPaginatorPage: (state, action) => {
            const { id, page } = action.payload;
            state.page[id] = page;
            return state;
        },
    }
});

export const subjects = subjectsSlice.reducer;
export const { addSubjectData, setPaginatorPage } = subjectsSlice.actions;