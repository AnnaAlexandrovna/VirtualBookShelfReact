import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { selectLoaderShow } from '../../selectors/selectLoaderShow';
import './spinner.scss';

const Spinner = () => {
    const showLoader = useSelector(selectLoaderShow);
    return <div className='loader'>
        <Loader
            visible={showLoader}
            type='Hearts'
            color='#F4681E'
            height={150}
            width={150}
        />
    </div>;
};

export default Spinner;
