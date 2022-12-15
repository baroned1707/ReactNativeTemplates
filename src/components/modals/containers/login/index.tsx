import * as React from 'react';
import {Text, Pressable, View} from 'react-native';
import {styles} from './style';
import {useModal} from '@modals/index';

const ModalLogin = () => {
  const {setModal} = useModal();

  return (
    <View style={styles.modalView}>
      <Text style={styles.modalText}>Hello World!</Text>
      <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={() =>
          setModal({
            component: null,
            initProps: {},
          })
        }>
        <Text style={styles.textStyle}>Hide Modal</Text>
      </Pressable>
    </View>
  );
};

export default ModalLogin;
