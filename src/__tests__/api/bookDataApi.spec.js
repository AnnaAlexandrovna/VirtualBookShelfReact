import fetchMock from 'jest-fetch-mock';
import { Provider } from 'react-redux';
import { bookDataApi, useGetBookDataQuery } from '../../api/bookDataApi';
import { setupApiStore } from '../../utils/test/testUtils';
import { renderHook } from '@testing-library/react-hooks';
import { bookExample } from '../../data/bookExample';
const path = 'works';
const bookId = 'OL972930W';
const bookInfo = { path, bookId };
const updateTimeout = 5000;

describe('BookDataApi test', () => {
    let storeRef;
    let wrapper;
    beforeEach(() => {
        wrapper = ({ children }) => <Provider store={storeRef.store}>{children}</Provider>;
        fetchMock.resetMocks();
        storeRef = setupApiStore(bookDataApi);
    });

    test('should call fetch 1 time', async () => {
        fetchMock.mockResponse(JSON.stringify({}));
        await storeRef.store.dispatch(bookDataApi.endpoints.getBookData.initiate(bookInfo));
        expect(fetchMock).toHaveBeenCalledTimes(1);
        const request = fetchMock.mock.calls[0][0];
        const { method, url } = request;
        expect(method).toBe('GET');
        expect(url).toBe(`http://localhost:3000/openlibrary/${path}/${bookId}.json`);
    });

    it('should have correct successful response', async () => {
        fetchMock.mockResponse(JSON.stringify({ data: 123, authors: [] }));
        const action = await storeRef.store.dispatch(bookDataApi.endpoints.getBookData.initiate(bookInfo));
        const { status, data, isSuccess } = action;
        expect(status).toBe('fulfilled');
        expect(isSuccess).toBe(true);
        expect(data).toStrictEqual({ data: 123, authors: [] });
    });

    it('should have correct unsuccessful response', async () => {
        fetchMock.mockReject(new Error('Internal Server Error'));
        const action = await storeRef.store.dispatch(bookDataApi.endpoints.getBookData.initiate(bookInfo));
        const { status, isError, error } = action;
        expect(status).toBe('rejected');
        expect(isError).toBe(true);
        expect(error.data).toBe('Error: Internal Server Error');
    });

    it('should have correct hook with successful response', async () => {
        fetchMock.mockResponse(JSON.stringify(bookExample));
        const { result, waitForNextUpdate } = renderHook(
            () => useGetBookDataQuery({ path, bookId }),
            { wrapper }
        );
        const initialResponse = result.current;
        expect(initialResponse.data).toBeUndefined();
        expect(initialResponse.isLoading).toBe(true);
        await waitForNextUpdate({ timeout: updateTimeout });
        const nextResponse = result.current;
        expect(nextResponse.data).not.toBeUndefined();
        expect(nextResponse.isLoading).toBe(false);
        expect(nextResponse.isSuccess).toBe(true);
    });

    it('should have correct hook work with unsuccessful response', async () => {
        fetchMock.mockReject(new Error('Internal Server Error'));
        const { result, waitForNextUpdate } = renderHook(
          () => useGetBookDataQuery(undefined),
          { wrapper }
        );
        const initialResponse = result.current;
        expect(initialResponse.data).toBeUndefined();
        expect(initialResponse.isLoading).toBe(true);
        await waitForNextUpdate({ timeout: updateTimeout });
        const nextResponse = result.current;
        expect(nextResponse.data).toBeUndefined();
        expect(nextResponse.isLoading).toBe(false);
        expect(nextResponse.isError).toBe(true);
      });

});