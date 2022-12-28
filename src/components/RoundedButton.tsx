import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
  text: string;
}

export const RoundedButton = ({ text }: Props) => {
  return (
    <TouchableOpacity style={styles.roundedButton} onPress={() => {}}>
      <Text style={styles.textButton}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  roundedButton: {
    width: '100%',
    height: 50,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  textButton: {
    color: '#fff',
  },
});
