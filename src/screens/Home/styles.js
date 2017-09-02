import glamorous, {ThemeProvider} from 'glamorous-native';

import { colors, flexPos, fontWeightScale } from '../../config/themeConstants';

export const Container = glamorous.view({
  backgroundColor: colors.white,
  flex: 1,
});
