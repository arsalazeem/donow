import React, {useState} from 'react';
import {Context} from 'react';
const UniVersityContext = React.createContext();
const UniversityContextProvider = ({children}) => {
  const [uniName, SetuniName] = useState('');
  const handleUniName = currentUniName => {
    SetuniName(uniName);
  };
  <UniVersityContext.Provider value={{uniName,handleUniName}}>{children}</UniVersityContext.Provider>;
};

export {UniVersityContext,UniversityContextProvider};
