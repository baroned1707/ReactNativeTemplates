import * as React from 'react';
import {
  Alert,
  VStack,
  HStack,
  IconButton,
  CloseIcon,
  Box,
  Text,
} from 'native-base';
import {useNotifi} from '@components/notifi';
import {styles} from './style';

const NotifiAlert = () => {
  const {setNotifi, notifi} = useNotifi();

  const close = () => {
    setNotifi({
      component: null,
      initProps: {
        title: '',
        content: '',
      },
    });
  };

  //write UI your
  return (
    <Alert
      maxW="400"
      status="info"
      colorScheme="info"
      style={styles.notifiContainer}>
      <HStack alignItems="flex-start" justifyContent="center">
        <VStack space={2} flexShrink={1}>
          <HStack
            flexShrink={1}
            space={2}
            alignItems="center"
            justifyContent="space-between">
            <HStack flexShrink={1} space={2} alignItems="center">
              <Alert.Icon />
              <Text fontSize="md" fontWeight="medium" color="coolGray.800">
                {notifi.initProps?.title}
              </Text>
            </HStack>
          </HStack>
          <Box
            pl="6"
            _text={{
              color: 'coolGray.600',
            }}>
            {notifi.initProps?.content}
          </Box>
        </VStack>
        <IconButton
          onPress={close}
          variant="unstyled"
          _focus={{
            borderWidth: 0,
          }}
          icon={<CloseIcon size="3" />}
          _icon={{
            color: 'coolGray.600',
          }}
        />
      </HStack>
    </Alert>
  );
};

export default NotifiAlert;
