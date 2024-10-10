import { LanguageCollection } from "../lang/LanguageCollection";

import { createContext, useState } from "react";


export const LanguageContext = createContext(null);

const Languages = [
    { code: "en", name: "English" },
    { code: "ru", name: "Русский" },
    { code: "az", name: "Azərbaycan" },
];

const LanguageProvider = ({ children }) => {
    const [currentLanguage, setCurrentLanguge] = useState('en');



    const changeLanguage = (lang = "en") => {
        if (Languages.some(language => language.code === lang))
            setCurrentLanguge(lang);
        else
        setCurrentLanguge("en");
    }

    // const changeLanguage = (lang) => {
    //     setCurrentLanguge(lang)
    // }


    const getTranslate = (key) => {
        return LanguageCollection?.[key ?? "default"]?.[currentLanguage]
    }
    // const getTranslate = (key) => {
    //     const translation = LanguageCollection[key]
    //     if(translation && translation[currentLanguage]){
    //       return translation[currentLanguage]
    //     }
    //     else {
    //         console.warn(`Translation for key "${key}" not found for language "${currentLanguage}"`);
    //         return key; 
    //     }

    // else{
    //     return key
    // }


    return (
        <LanguageContext.Provider value={{ changeLanguage, getTranslate,Languages }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageProvider;
