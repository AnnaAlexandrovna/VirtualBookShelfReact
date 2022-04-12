import Enzyme, { mount, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import BookList from '../../../components/BookList';
import { books } from '../../../data/books';
import { LanguageProvider } from '../../../utils/providers/languageProvider';
import { Provider } from 'react-redux';
import { configureStoreVB } from '../../../store';
import { BrowserRouter as Router } from 'react-router-dom';
Enzyme.configure({ adapter: new Adapter() });

const createComponent = props => shallow(<BookList books={props} />);

const store = configureStoreVB();
const getWrapperInProvider = language => mount(
    <Provider store={store}>
        <LanguageProvider languageInitial={language}>
            <Router>
                <BookList books={[]} />
            </Router>
        </LanguageProvider>
    </Provider>
);

describe('Render BookList', () => {
    let wrapper;

    it('should have correct count of books', () => {
        wrapper = createComponent(books);
        expect(wrapper).toMatchSnapshot();
    });

    it('should have correct text without books, with languageInitial "RU"', () => {
        wrapper = getWrapperInProvider('RU');
        expect(wrapper.children().find('.title-second.title-second--center').text()).toBe('К сожалению, по вашему запросу не найдено данных');
    });

    it('should have correct text without books, without languageInitial', () => {
        wrapper = getWrapperInProvider();
        expect(wrapper.children().find('.title-second.title-second--center').text()).toBe('К сожалению, по вашему запросу не найдено данных');
    });

    it('should have correct text without books, with languageInitial "EN"', () => {
        wrapper = getWrapperInProvider('EN');
        expect(wrapper.children().find('.title-second.title-second--center').text()).toBe('Sorry, no data was found for your request.');
    });

});