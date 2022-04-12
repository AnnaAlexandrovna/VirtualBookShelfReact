export const convertDataToPaginator = (data) => {
    const convertData = data.map(item => {
        const { key, cover_i: cover_id, title } = item;
        const search = { authors: [], key, cover_id, title };
        search.authors = ((item?.author_name)?.map((authorName, index) => ({ name: authorName, key: item.author_key[index] })) ?? []);
        return search;
    });
    return convertData;
};