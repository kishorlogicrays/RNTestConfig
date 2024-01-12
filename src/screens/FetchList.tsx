import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';

const FetchList = () => {
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(false);
  const [isLoader, setIsLoader] = useState(false);

  const fetchUserList = async () => {
    setIsLoader(true);
    try {
      const {data} = await axios.get('https://dummyjson.com/users');
      setUserList(data?.users);
    } catch (error) {
      setError(true);
    } finally {
      setIsLoader(false);
    }
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  const Item = ({data}: any) => {
    return (
      <View
        key={data?.id}
        style={styles.listContainer}
        accessibilityLabel={`${data?.id}-user-container`}>
        {/* Image Container */}
        <View style={styles.imageContainer}>
          <Image source={{uri: data?.image}} style={styles.image} />
        </View>
        {/* User Details */}
        <View style={styles.detailContainer}>
          <Text style={styles.text}>
            {data.firstName} {data?.lastName}
          </Text>
          <Text style={styles.text}>{data?.email}</Text>
          <Text style={styles.text}>{data?.phone}</Text>
          <Text style={styles.text}>{data?.address?.address}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isLoader ? (
        <View style={styles.loading}>
          <ActivityIndicator
            size={'large'}
            color={'#000'}
            accessibilityLabel={'loader'}
          />
        </View>
      ) : error ? (
        <View style={styles.loading}>
          <Text style={styles.text} accessibilityLabel={'alert'}>
            User does't exist!
          </Text>
        </View>
      ) : (
        <FlatList
          accessibilityLabel="FlatData"
          data={userList}
          renderItem={({item}: any) => <Item data={item} />}
          keyExtractor={({item}: any) => item?.id?.toString()}
        />
      )}
    </View>
  );
};

export default FetchList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  listContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    marginTop: 5,
    borderRadius: 20,
    backgroundColor: '#E6E6E6',
  },
  imageContainer: {
    padding: 10,
    borderRadius: 68,
    marginLeft: 5,
    marginVertical: 3,
  },
  image: {
    height: 68,
    width: 68,
  },
  detailContainer: {
    flex: 1,
  },
  text: {
    fontSize: 15,
    marginLeft: 10,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
