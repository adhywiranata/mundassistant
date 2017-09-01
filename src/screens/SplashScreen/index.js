import React from 'react';
import { View, Text } from 'react-native';
import { Screen, Logo, Line, Tagline } from './styles';

const SplashScreen = () => (
  <Screen>
    <Logo>MundAssistant</Logo>
    <Line />
    <Tagline>Mundane things? Consider it done.</Tagline>
  </Screen>
);

SplashScreen.navigationOptions = {
  header: null,
};

export default SplashScreen;
