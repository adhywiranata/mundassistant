import React from 'react';
import { View, Text } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { lifecycle } from 'recompose';

import { Screen, Logo, Line, Tagline } from './styles';

const SplashScreen = () => (
  <Screen>
    <Logo>MundAssistant</Logo>
    <Line />
    <Tagline>Mundane things? Consider it done.</Tagline>
  </Screen>
);

const SplashScreenWithLifeCycle = lifecycle({
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Home');
    }, 1000);
  },
})(SplashScreen)

SplashScreenWithLifeCycle.navigationOptions = {
  header: null,
};

export default SplashScreenWithLifeCycle;
