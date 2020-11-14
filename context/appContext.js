import React, { useState,useContext } from 'react';
import {Dimensions} from 'react-native';
import moment from 'moment';
const AppContext = React.createContext([{}, () => {}]);

const AppProvider = (props) => {
  const [state,setState] = useContext(AppContext);

    const [appState, setAppState] = useState({
    currentDate: moment().format('YYYY-MM-DD'),
    region: 'Stockholm',
    lastUpdated: moment().format('YYYY-MM-DD'),
    data: []
  });

  return (
    <AppContext.Provider value={[appState, setAppState]}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
