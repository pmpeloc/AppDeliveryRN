import React from 'react';
import { Button, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParamList } from '../../../../../App';
import useViewModel from './ViewModel';

interface Props
  extends StackScreenProps<RootStackParamList, 'ProfileInfoScreen'> {}

export const ProfileInfoScreen = ({ navigation }: Props) => {
  const { deleteSession } = useViewModel();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button
        title='Cerrar Sesión'
        onPress={() => {
          deleteSession();
          navigation.navigate('HomeScreen');
        }}
      />
    </View>
  );
};
