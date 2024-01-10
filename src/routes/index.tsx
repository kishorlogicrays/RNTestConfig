import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Counter from '../screens/Counter';
import Login from '../screens/Login';

export type TRootStack = {
  Home: undefined;
  Counter: undefined;
  Login: undefined;
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
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default index;
