import Enzyme, { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import SearchSection from '../../../containers/Search/SearchSection';
import { languageContext } from '../../../utils/providers/languageProvider';
import { useDispatch, useSelector } from 'react-redux';
Enzyme.configure({ adapter: new Adapter() });

const initialSearchValue = 'SEARCH';
const eventChangeValue = { target: { value: 'CHANGE VALUE' } };
const eventClickEnter = { key: 'Enter' };
const eventClickA = { key: 'A' };
jest.mock('react-redux');
const mockReplace = jest.fn();
jest.mock('react-router-dom', () => ({
    useHistory: () => ({ replace : mockReplace}),
}));

describe('Render SearchSection', () => {
    let wrapper;
    let mockedDispatch;
    beforeEach(
        () => {
            mockedDispatch = jest.fn();
            useSelector.mockImplementation(() => initialSearchValue);
            useDispatch.mockReturnValue(mockedDispatch);
            const createComponent = () => mount(
                <languageContext.Provider value={{ translate: () => '' }}>
                    <SearchSection />
                </languageContext.Provider>
            );
            wrapper = createComponent();
        }
    );

    it('should have correct initial state', () => {
        expect(wrapper.find('.search-section__input').first().prop('value')).toBe(initialSearchValue);
    });

    it('should have correct value change', () => {
        wrapper.find('.search-section__input').first().simulate('change', eventChangeValue);
        expect(wrapper.find('.search-section__input').first().prop('value')).toBe(eventChangeValue.target.value);
    });

    it('should call dispatch and useHistory.replace on Enter click', () => {
        wrapper.find('.search-section__input').first().simulate('keyDown', eventClickEnter);
        expect(mockedDispatch).toHaveBeenCalledTimes(1);
        expect(mockReplace).toHaveBeenCalledTimes(1);
        expect(mockReplace).toBeCalledWith('/search?search=SEARCH');
    });

    it('should not call dispatch and useHistory.replace on A click', () => {
        wrapper.find('.search-section__input').first().simulate('keyDown', eventClickA);
        expect(mockedDispatch).not.toHaveBeenCalled();
        expect(mockReplace).not.toHaveBeenCalled();
    });

    it('should call dispatch and useHistory.replace on Search click', () => {
        wrapper.find('.search-section__button').first().simulate('click');
        expect(mockedDispatch).toHaveBeenCalledTimes(1);
        expect(mockReplace).toHaveBeenCalledTimes(1);
        expect(mockReplace).toBeCalledWith('/search?search=SEARCH');
    });

});