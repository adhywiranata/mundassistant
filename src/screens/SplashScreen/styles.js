import glamorous, {ThemeProvider} from 'glamorous-native';

import { colors, flexPos, fontWeightScale } from '../../config/themeConstants';

export const Screen = glamorous.view({
  backgroundColor: colors.red,
  flex: 1,
  ...flexPos.center,
});

export const Logo = glamorous.text({
  color: colors.white,
  ...fontWeightScale.normal,
  fontSize: 36,
});

export const Line = glamorous.view({
  backgroundColor: colors.white,
  width: '70%',
  height: 0.5,
});

export const Tagline = glamorous.text({
  color: colors.white,
  ...fontWeightScale.normal,
  fontSize: 16,
});
