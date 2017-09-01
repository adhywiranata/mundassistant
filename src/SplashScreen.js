import React from 'react';
import { View, Text } from 'react-native';
import glamorous, {ThemeProvider} from 'glamorous-native';

import { colors, flexPos, fontWeightScale } from './config/themeConstants';

const Screen = glamorous.view({
  backgroundColor: colors.red,
  flex: 1,
  ...flexPos.center,
});

const Logo = glamorous.text({
  color: colors.white,
  ...fontWeightScale.normal,
  fontSize: 36,
});

const Line = glamorous.view({
  backgroundColor: colors.white,
  width: '70%',
  height: 0.5,
});

const Tagline = glamorous.text({
  color: colors.white,
  ...fontWeightScale.normal,
  fontSize: 16,
});

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
