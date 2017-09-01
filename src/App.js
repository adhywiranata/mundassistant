import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SplashScreen from './screens/Splash';
import ChatScreen from './screens/Chat';

export default StackNavigator({
  Chat: { screen: ChatScreen },
  Splash: { screen: SplashScreen },
});
