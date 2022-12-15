import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Auth = (props: any) => {
  const {params, child: Component} = props.route;
  const {initParam} = params;

  return (
    <SafeAreaView>
      <Component {...initParam} />
    </SafeAreaView>
  );
};

export default Auth;
