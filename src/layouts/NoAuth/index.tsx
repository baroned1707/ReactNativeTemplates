import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './styles';

const NoAuth = (props: any) => {
  const {children} = props;

  return <SafeAreaView style={styles.layoutContainer}>{children}</SafeAreaView>;
};

export default NoAuth;
