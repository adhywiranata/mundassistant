import React from 'react';
import { View, Text } from 'react-native';
import glamorous, {ThemeProvider} from 'glamorous-native';

const Screen = glamorous.view({
  backgroundColor: '#E74C3C',
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
});

const Logo = glamorous.text({
  color: 'white',
  fontWeight: 'normal',
  fontSize: 36,
});

const Line = glamorous.view({
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  width: '70%',
  height: 0.5,
});

const Tagline = glamorous.text({
  color: 'white',
  fontWeight: 'normal',
  fontSize: 16,
});

export default () => (
  <Screen>
    <Logo>MundAssistant</Logo>
    <Line />
    <Tagline>Mundane things? Consider it done.</Tagline>
  </Screen>
);
