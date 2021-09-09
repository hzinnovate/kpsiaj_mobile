import React from 'react';
import AppNavigatior from './routing';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store';


export default App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigatior />
      </PersistGate>
    </Provider>
  );
};

