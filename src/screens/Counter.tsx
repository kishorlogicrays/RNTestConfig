import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.countButton}
        onPress={() => setCount(count + 1)}>
        <Text style={styles.button}>Increment</Text>
      </TouchableOpacity>
      <Text style={styles.countStyles} testID="countValue">
        {count}
      </Text>
      <TouchableOpacity
        style={styles.countButton}
        disabled={count == 0}
        onPress={() => count != 0 && setCount(count - 1)}>
        <Text style={styles.button}>Decrement</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
  },
  countButton: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#add268',
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  countStyles: {
    alignSelf: 'center',
    fontSize: 30,
    padding: 20,
    fontWeight: 'bold',
  },
  button: {
    fontSize: 15,
  },
});

export default Counter;
