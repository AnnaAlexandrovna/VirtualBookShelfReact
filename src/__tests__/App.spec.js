import App from '../App';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

let wrapper;
const createComponent = () => shallow(< App />);

describe('Render App', () => {
    beforeAll(() => wrapper = createComponent());
    it('should contain ViewportProvider', () => {
        expect(wrapper.name()).toBe('ViewportProvider');
    });

    it('should contain Provider', () => {
        expect(wrapper.childAt(0).name()).toBe('Provider');
    });

    it('should have Provider with store', () => {
        expect(wrapper.childAt(0).prop('store') === null).toBeFalsy();
        expect(wrapper.childAt(0).prop('store') === undefined).toBeFalsy();
    });

    it('should have AddFavorites', () => {
        expect(wrapper.find('AddFavorites').length).toBe(1);
    });

    it('should have Alert', () => {
        expect(wrapper.find('Alert').length).toBe(1);
    });

    it('should have BrowserRouter', () => {
        expect(wrapper.find('BrowserRouter').length).toBe(1);
    });

    it('should have Switch', () => {
        expect(wrapper.find('Switch').length).toBe(1);
    });
    it('should have 9 Route', () => {
        expect(wrapper.find('Route').length).toBe(9);
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});