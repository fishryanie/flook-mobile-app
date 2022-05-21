import React from 'react'
import AppNavigator from './src/Navigators/AppNavigator'
import { View } from 'react-native';

import { Provider } from 'react-redux';
import { store, persistor } from './src/Store/index';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/lib/integration/react';


export default function App() {
  return (
    <Provider store={store}>
      <PersistGate // loading={<LoadingView />} 
        persistor={persistor}>
        <SafeAreaProvider>
          <AppNavigator />

        </SafeAreaProvider>
      </PersistGate>
    </Provider>
  );
}

