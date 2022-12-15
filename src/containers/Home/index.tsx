import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import I18n from 'react-native-i18n';
import {useNotifi} from '@components/notifi';

const Home = ({}) => {
  const {setNotifi} = useNotifi();

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setNotifi({
            component: 'NOTIFIALERT',
            initProps: {
              title: 'First Alert',
              content: 'First Alert Content',
            },
          });
        }}>
        <Text>{I18n.t('greeting')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
