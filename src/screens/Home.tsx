import {Alert, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import CustomButton from '../components/CustomButton';

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
        <CustomButton
          title={'Alert Box'}
          onPress={() => Alert.alert('Notification', 'Alert pop-up is open')}
        />
        <CustomButton
          title={'Video Player'}
          onPress={() => navigation?.navigate('VideoPlayer')}
        />
        <CustomButton
          title={'FlatList'}
          onPress={() => navigation?.navigate('FlatList')}
        />
        <CustomButton
          title={'FetchList'}
          onPress={() => navigation?.navigate('FetchList')}
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
