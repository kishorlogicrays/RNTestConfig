import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';
import {useNavigation} from '@react-navigation/native';

const Home = (props: any) => {
  const {navigation}: any = props;
  return (
    <View style={styles.container}>
      <Text style={styles.textStyles}>Components List</Text>
      <ScrollView>
        <CustomButton
          title={'Counter'}
          onPress={() => navigation?.navigate('Counter')}
        />
        <CustomButton
          title={'Login'}
          onPress={() => navigation?.navigate('Login')}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyles: {
    marginTop: 10,
    fontSize: 18,
    color: '#010101',
    marginHorizontal: 10,
    fontWeight: '500',
  },
});

export default Home;
