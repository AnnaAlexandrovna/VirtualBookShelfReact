import './alerts.scss';
import { selectAlerts } from '../../selectors/selectAlerts';
import { alertExpire } from '../../env';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAlert } from '../Home/reducers';

const Alerts = () => {
    const alerts = useSelector(selectAlerts);
    const dispatch = useDispatch();
    const deleteUserAlert = id => {
        dispatch(deleteAlert(id));
    };
    return <>
        {
            alerts.length > 0 &&
            <div className='alert'>
                <div className='alert__section'>
                    {
                        alerts.map(element => {
                            const colorClass = `alert__section__body alert__section__body--${element.color}`;
                            const message = element.message;
                            setTimeout(() => deleteUserAlert(message), alertExpire);
                            return <div className={colorClass} key={message}>
                                <div className='alert__section__body__message'>{message}</div>
                                <div className='alert__section__body__close'>
                                    <div onClick={() => deleteUserAlert(message)}>x</div>
                                </div>
                            </div>;
                        })
                    }
                </div>
            </div>
        }
    </>;
};

export default Alerts;
