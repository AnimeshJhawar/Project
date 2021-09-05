/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

export interface LanguageContext {
  lang: "Hindi" | "English";
  setLanguage: (_arg: { lang: "Hindi" | "English" }) => void;
}
export const languageContext = React.createContext<LanguageContext>({
  lang: "English",
  setLanguage: () => {},
});

export const LocalStorageProvider: React.FC = ({ ...props }) => {
  const [localStorageState, setLocalStorageState] = useState<{
    lang: "Hindi" | "English";
  }>({ lang: "English" });
  const setLanguage = React.useCallback(
    (updatedLanguage: { lang: "Hindi" | "English" }): void => {
      setLocalStorageState(updatedLanguage);
      localStorage.setItem("resourceState", updatedLanguage?.lang || "English");
    },
    []
  );

  return (
    <languageContext.Provider
      value={{
        setLanguage,
        ...localStorageState,
      }}
    >
      {props.children}
    </languageContext.Provider>
  );
};

export default LocalStorageProvider;
