import './Dropdown.scss';
import React, { useContext, useState } from 'react';
import { languageContext } from '../../utils/providers/languageProvider';

const Dropdown = React.memo(({ languages }) => {
    const { language } = useContext(languageContext);
    const [show, setShow] = useState(false);
    return <div className='dropdown' onClick={() => setShow(!show)}>
        {language}
        <div className='dropdown__content'>
            <languageContext.Consumer>
                {({ changeLanguage }) => (
                    <>
                        {
                            languages.map(element =>
                                <div
                                    key={element}
                                    className={!show ? 'dropdown__content-items dropdown__content--not-active' : ' dropdown__content-items dropdown__content--active'}
                                    onClick={() => changeLanguage(element)}
                                >
                                    {element}
                                </div>
                            )
                        }
                    </>
                )}
            </languageContext.Consumer>
        </div>
    </div>;
});


export default Dropdown;
