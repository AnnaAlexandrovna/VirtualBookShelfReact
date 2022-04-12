import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ButtonLight from '../../../components/ButtonLight';

Enzyme.configure({ adapter: new Adapter() });
let wrapper;
const createComponent = props => shallow(<ButtonLight {...props} />);
const propsInitial = { value: '123', title: '12334' };

describe('Render ButtonLight', () => {
    beforeAll(() => wrapper = createComponent(propsInitial));

    it('should have name "Link"', () => {
        expect(wrapper.name()).toBe('Link');
    });

    it('should have correct prop "to"', () => {
        expect(wrapper.props().to).toBe(`/collection/${propsInitial.value}`);
    });

    it('should have child with name "button"', () => {
        expect(wrapper.children().name()).toBe('button');
    });

    it('should have child with className "button-light"', () => {
        expect(wrapper.children().props().className).toBe('button-light');
    });

    it('should have child with title from props', () => {
        expect(wrapper.children().props().title).toBe(propsInitial.title);
    });

    it('should have child with value from props', () => {
        expect(wrapper.children().children().text()).toBe(propsInitial.title);
    });

    it('should render without props', () => {
        const wrapper = createComponent({});
        expect(wrapper.children().props().title).toBe(undefined);
        expect(wrapper.props().to).toBe('/collection/undefined');
        expect(wrapper.children().props().children).toBe(undefined);
    });

    it('should match snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});