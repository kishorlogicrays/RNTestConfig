import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const CustomButton = (props: any) => {
  const {title, onPress}: any = props;
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#add268',
    padding: 5,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textStyles: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default CustomButton;
