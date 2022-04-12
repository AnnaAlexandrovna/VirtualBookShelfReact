import Spinner from './spinner';
import Alerts from './alerts';

const Alert = ({ children }) => {
    return <div>
        <Spinner />
        <Alerts />
        {children}
    </div>;

};

export default Alert;
