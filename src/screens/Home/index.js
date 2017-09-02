import React from 'react';
import { View, Text } from 'react-native';

import { Container } from './styles';
import { colors } from '../../config/themeConstants';
import PrimaryButton from '../../components/core/buttons/Primary';

const HomeScreen = ({ navigation }) => (
  <Container style={{ justifyContent: 'center' }}>
    <PrimaryButton label={'Chat Me'} handlePress={() => navigation.navigate('Chat')} />
    <PrimaryButton label={'Manage Commands'} handlePress={() => navigation.navigate('ManageCommands')} />
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
