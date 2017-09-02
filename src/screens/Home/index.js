import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { Container } from './styles';
import { colors } from '../../config/themeConstants';
import PrimaryButton from '../../components/core/buttons/Primary';

const HomeScreen = ({ navigation, command }) => (
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

const mapStateToProps = state => ({
  command: state.command,
});

export default connect(
  mapStateToProps,
  null
)(HomeScreen);
