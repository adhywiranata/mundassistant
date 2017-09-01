import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SplashScreen from './SplashScreen';

export default StackNavigator({
  Home: { screen: SplashScreen },
});
