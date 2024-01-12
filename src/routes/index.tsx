import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Counter from '../screens/Counter';
import Login from '../screens/Login';
import VideoPlayer from '../screens/VideoPlayer';
import FlatList from '../screens/FlatList';
import FetchList from '../screens/FetchList';

export type TRootStack = {
  Home: undefined;
  Counter: undefined;
  Login: undefined;
  VideoPlayer: undefined;
  FlatList: undefined;
  FetchList: undefined;
};

export type NavigationProps = NativeStackNavigationProp<TRootStack>;

const Stack = createNativeStackNavigator<TRootStack>();

const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Dashboard'}}
        />
        <Stack.Screen name="Counter" component={Counter} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="VideoPlayer"
          component={VideoPlayer}
          options={{title: 'Video Player'}}
        />
        <Stack.Screen
          name="FlatList"
          component={FlatList}
          options={{title: 'User List'}}
        />
        <Stack.Screen
          name="FetchList"
          component={FetchList}
          options={{title: 'User List'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
