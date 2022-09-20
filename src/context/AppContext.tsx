import React, { createContext, useState, useContext } from 'react';

interface IAppContext {
  faqStatus: boolean[];
  setFaqStatus?: any;
}

const defaultState = {
  faqStatus: [false, false, false, false, false, false],
};

export const AppContext = createContext<IAppContext>(defaultState);

const AppContextProvider = ( props: any ) => {
  const [faqStatus, setFaqStatus] = useState(defaultState.faqStatus);

  return (
    <AppContext.Provider 
      value={{ 
        faqStatus,
        setFaqStatus
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};


export default AppContextProvider;
export const useAppContext = () => useContext(AppContext);