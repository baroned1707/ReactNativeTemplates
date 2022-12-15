import React from 'react';
import Router from '@navigators/index';
import {LogBox} from 'react-native';
import {persistor, store} from '@store/index';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {NativeBaseProvider} from 'native-base';
import ThemeProvider from '@theme/index';
import ModalProvider from '@modals/index';
import LoadingProvider from '@components/loading';
import NotifiProvider from '@components/notifi';
import '@i18n/index';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NativeBaseProvider>
          <ModalProvider>
            <ThemeProvider>
              <LoadingProvider>
                <NotifiProvider>
                  <Router />
                </NotifiProvider>
              </LoadingProvider>
            </ThemeProvider>
          </ModalProvider>
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
