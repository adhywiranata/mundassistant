import React from 'react';
import { View, Text } from 'react-native';

import { Container, ChatList, ActionBar, Group, TimeStamp, Avatar, Bubble, Message } from './styles';
import { colors, flexPos, fontWeightScale } from '../../config/themeConstants';

const HomeScreen = () => (
  <Container>
    <Text>Awesome</Text>
  </Container>
);

HomeScreen.navigationOptions = {
  title: 'Home',
  headerStyle: {
    backgroundColor: colors.red,
  },
  headerTitleStyle: {
    color: colors.white,
    alignSelf: 'center',
  },
};

export default HomeScreen;
