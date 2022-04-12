import { createContext, useState } from 'react';
import * as english from '../../assets/translations/en.json';
import * as russian from '../../assets/translations/ru.json';
import _ from 'lodash';

export const languageContext = createContext({});
export const Language = { EN: 'EN', RU: 'RU' };
const translations = {
    [Language.EN]: english.default,
    [Language.RU]: russian.default
};
export const LanguageProvider = ({ children , languageInitial = 'RU'}) => {
    const [language, setLanguage] = useState(languageInitial);
    const changeLanguage = language => {
        setLanguage(language);
    };
    const translate = key => _.get(translations[language], key) ?? key;
    return (
        <languageContext.Provider value={{ language, changeLanguage, translate }}>
            {children}
        </languageContext.Provider>
    );
};
