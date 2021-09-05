/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

export interface LanguageContext {
  lang: "Hindi" | "English";
  setLanguage: (_arg: "Hindi" | "English") => void;
}
export const languageContext = React.createContext<LanguageContext>({
  lang: "English",
  setLanguage: () => {},
});

export const LocalStorageProvider: React.FC = ({ ...props }) => {
  const [lang, setLang] = useState<"Hindi" | "English">("English");
  const setLanguage = React.useCallback(
    (updatedLanguage: "Hindi" | "English"): void => {
      setLang(updatedLanguage);
      localStorage.setItem("resourceState", updatedLanguage || "English");
    },
    []
  );

  return (
    <languageContext.Provider
      value={{
        setLanguage,
        lang,
      }}
    >
      {props.children}
    </languageContext.Provider>
  );
};

export default LocalStorageProvider;
