import React from 'react';
import { View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

import SplashScreen from './screens/Splash';

export default StackNavigator({
  Splash: { screen: SplashScreen },
});
