import React from "react";
import { useSetLang, useTranslate } from "./context";

const Screen = () => {
  const setLang = useSetLang();
  const hypertranslate = useTranslate();

  const onClickChangeLang = () => {
    setLang("es");
  };

  return (
    <>
      <h1>{hypertranslate("Hello")}</h1>
      <button onClick={onClickChangeLang}>{hypertranslate("Translate")}</button>
    </>
  );
};

export default Screen;
