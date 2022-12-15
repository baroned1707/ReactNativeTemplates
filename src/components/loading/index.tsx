import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NameType, router} from './map';
import {styles} from './style';

interface LoadingProps {
  component: NameType;
  initProps?: object;
}

interface LoadingContextProps {
  loading: LoadingProps;
  setLoading: Dispatch<SetStateAction<LoadingProps>>;
}

export const LoadingContext = createContext<LoadingContextProps>({
  loading: {
    component: null,
    initProps: {},
  },
  setLoading: () => {},
});

LoadingContext.displayName = 'LoadingProvider';

const LoadingProvider = ({children}: any) => {
  const [loading, setLoading] = useState<LoadingProps>({
    component: null,
    initProps: {},
  });

  const mapView = () => {
    const LoadingView: any =
      router.find(item => item.name === loading.component)?.Component || null;

    return LoadingView ? <LoadingView {...loading.initProps} /> : <></>;
  };

  return (
    <LoadingContext.Provider value={{loading: {...loading}, setLoading}}>
      {children}
      {!!loading.component && (
        <SafeAreaView style={styles.loadingContainer}>{mapView()}</SafeAreaView>
      )}
    </LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);

export default LoadingProvider;
