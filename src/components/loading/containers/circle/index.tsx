import * as React from 'react';
import {ActivityIndicator} from 'react-native';
// import {styles} from './style';
// import {useLoading} from 'components/loading';
import {useTheme} from '@theme/index';

const CircleLoading = () => {
  // const {setLoading} = useLoading();
  const {theme} = useTheme();

  return <ActivityIndicator size="large" color={theme.primary} />;
};

export default CircleLoading;
