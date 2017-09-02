import React from 'react';
import glamorous from 'glamorous-native';

import { colors, flexPos, fontWeightScale } from '../../../config/themeConstants';

const RedButton = glamorous.touchableOpacity({
  padding: 10,
  backgroundColor: colors.red,
  margin: 5,
  elevation: 1,
});

const ButtonLabel = glamorous.text({
  color: colors.white,
  textAlign: 'center',
});

export default ({ label = 'button', handlePress = () => {} }) => (
  <RedButton activeOpacity={0.8} onPress={handlePress}>
    <ButtonLabel>{label}</ButtonLabel>
  </RedButton>
)
