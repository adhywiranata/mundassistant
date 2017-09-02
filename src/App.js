import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store/configureStore';

import SplashScreen from './screens/Splash';
import HomeScreen from './screens/Home';
import ChatScreen from './screens/Chat';

const MainNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
  Splash: { screen: SplashScreen },
});

export default () => (
  <Provider store={store}>
    <MainNavigator />
  </Provider>
);
