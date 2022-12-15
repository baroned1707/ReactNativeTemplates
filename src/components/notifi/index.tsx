import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {PresenceTransition} from 'native-base';
import {NameType, router} from './map';
import {styles} from './style';

interface Props {
  title: string;
  content: string;
  onPress?(): void;
  onCancel?(): void;
}

interface NotifiProps {
  component: NameType;
  initProps?: Props;
}

interface NotifiContextProps {
  notifi: NotifiProps;
  setNotifi: Dispatch<SetStateAction<NotifiProps>>;
}

export const NotifiContext = createContext<NotifiContextProps>({
  notifi: {
    component: null,
    initProps: {
      title: '',
      content: '',
    },
  },
  setNotifi: () => {},
});

NotifiContext.displayName = 'NotifiProvider';

const NotifiProvider = ({children}: any) => {
  const [notifi, setNotifi] = useState<NotifiProps>({
    component: null,
    initProps: {title: '', content: ''},
  });

  const mapView = () => {
    const NotifiView: any =
      router.find(item => item.name === notifi.component)?.Component || null;

    return NotifiView ? <NotifiView {...notifi.initProps} /> : <></>;
  };

  return (
    <NotifiContext.Provider value={{notifi: {...notifi}, setNotifi}}>
      {children}
      {!!notifi.component && (
        <SafeAreaView style={styles.notifiContainer}>
          <PresenceTransition
            visible={!!notifi.component}
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 250,
              },
            }}>
            {mapView()}
          </PresenceTransition>
        </SafeAreaView>
      )}
    </NotifiContext.Provider>
  );
};

export const useNotifi = () => useContext(NotifiContext);

export default NotifiProvider;
