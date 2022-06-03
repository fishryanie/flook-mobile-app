import React from 'react'
import MainStack from './src/Routes/MainStack'
import { Provider } from 'react-redux';
// import { store, persistor } from './src/Store/Store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import { PersistGate } from 'redux-persist/lib/integration/react';

export default function App() {
  return (
    // <Provider store={store}>
      // <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <MainStack/>
        </SafeAreaProvider>
      // </PersistGate>
    // </Provider>
  );
}

