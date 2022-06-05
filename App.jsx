import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { NavigationContainer } from '@react-navigation/native'
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { Provider, useSelector } from 'react-redux';
import { store, persistor } from './src/Store';
import MainStack from './src/Routes/MainStack'
import Toast from 'react-native-toast-message';

const RenderApp = () => {
  const isLoading = useSelector(state => state.AppReducer.isLoading)

  return (
    <PersistGate loading={<Loading/>} persistor={persistor}>
      <NavigationContainer>
        <SafeAreaProvider>
          <MainStack/>
          <Toast position='top' topOffset={100}/>
          {isLoading && <Loading/>}
        </SafeAreaProvider>
      </NavigationContainer>
    </PersistGate>
  )
}

const Loading = () => {
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color="#ffffff"/>
    </View>
  )
}

const styles = StyleSheet.create({
  loading: {
    flex: 1, 
    top: 0, 
    left: 0, 
    zIndex: 999,
    width: '100%', 
    height: '100%', 
    position:'absolute', 
    alignItems: 'center', 
    justifyContent: 'center', 
    backgroundColor: 'rgba(0,0,0,0.5)', 
  }
})

export default App = () => <Provider store={store}><RenderApp/></Provider>


