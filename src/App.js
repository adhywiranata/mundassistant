import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SplashScreen from './screens/Splash';
import HomeScreen from './screens/Home';
import ChatScreen from './screens/Chat';

export default StackNavigator({
  Home: { screen: HomeScreen },
  Splash: { screen: SplashScreen },
  Chat: { screen: ChatScreen },
});
