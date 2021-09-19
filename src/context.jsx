import React, { createContext, useContext, useState } from "react";

const LangContext = createContext();

const Lang = ({ children, defaultLang, translations }) => {
  const [lang, setLang] = useState(defaultLang);

  const hypertranslate = (text) => {
    if (lang === defaultLang) {
      return text;
    }
    return translations[lang][text];
  };

  console.log(lang);
  return (
    <LangContext.Provider value={{ setLang, hypertranslate }}>
      {children}
    </LangContext.Provider>
  );
};

export const useSetLang = () => {
  const { setLang } = useContext(LangContext);
  return setLang;
};

export const useTranslate = () => {
  const { hypertranslate } = useContext(LangContext);
  return hypertranslate;
};

export default Lang;
