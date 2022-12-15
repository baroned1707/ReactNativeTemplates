import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {router} from './map';
import {styles} from './style';

interface ModalProps {
  component: string | null;
  initProps?: object;
}

interface ModalContextProps {
  modal: ModalProps;
  setModal: Dispatch<SetStateAction<ModalProps>>;
}

export const ModalContext = createContext<ModalContextProps>({
  modal: {
    component: null,
    initProps: {},
  },
  setModal: () => {},
});

ModalContext.displayName = 'ModalProvider';

const ModalProvider = ({children}: any) => {
  const [modal, setModal] = useState<ModalProps>({
    component: null,
    initProps: {},
  });

  const mapView = () => {
    const ModalView: any =
      router.find(item => item.name === modal.component)?.Modal || null;

    return ModalView ? <ModalView {...modal.initProps} /> : <></>;
  };

  return (
    <ModalContext.Provider value={{modal: {...modal}, setModal}}>
      {children}
      {!!modal.component && (
        <SafeAreaView style={styles.modalContainer}>{mapView()}</SafeAreaView>
      )}
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);

export default ModalProvider;
