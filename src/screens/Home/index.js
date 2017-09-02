import React from 'react';
import { View, Text } from 'react-native';

import { Container, ChatList, ActionBar, Group, TimeStamp, Avatar, Bubble, Message } from './styles';
import { colors, flexPos, fontWeightScale } from '../../config/themeConstants';
import PrimaryButton from '../../components/core/buttons/Primary';

const HomeScreen = ({ navigation }) => (
  <Container>
    <Text>Awesome</Text>
    <PrimaryButton label={'Chat Me'} handlePress={() => navigation.navigate('Chat')} />
    <PrimaryButton label={'Manage Commands'} />
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
