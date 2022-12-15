import * as React from 'react';
import {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {router} from './map';

const Stack = createNativeStackNavigator();

const Router = () => {
  useEffect(() => {
    //Logic code before Splash Screen hide

    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {router.map((screen, index: number) => {
          return (
            <Stack.Screen
              name={screen.name}
              component={screen.CompileLayout}
              key={index}
            />
          );
        })}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
