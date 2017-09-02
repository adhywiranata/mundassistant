import glamorous, {ThemeProvider} from 'glamorous-native';

import { colors, flexPos, fontWeightScale } from '../../config/themeConstants';

export const Container = glamorous.view({
  backgroundColor: colors.white,
  flex: 1,
});

export const ChatList = glamorous.scrollView({

});

export const ActionBar = glamorous.view({
  backgroundColor: colors.darkGray,
  height: 50,
  width: '100%',
});

export const Group = glamorous.view({
  padding: 3,
  alignItems: 'center',
  flexDirection: 'row',
}, ({ bot }) => ({
  alignSelf: bot ? 'flex-start' : 'flex-end',
  justifyContent: bot ? 'flex-start' : 'flex-end',
  width: bot ? '80%' : '70%',
}));

export const Avatar = glamorous.view({
  width: 30,
  height: 30,
  borderRadius: 15,
  backgroundColor: colors.gray,
  elevation: 1,
});

export const TimeStamp = glamorous.text({
  color: colors.white,
  fontSize: 10,
});

export const Bubble = glamorous.view({
  margin: 5,
  padding: 10,
  borderRadius: 5,
  elevation: 1,
}, ({ bot }) => ({
  backgroundColor: bot ? colors.red : colors.darkGray,
  alignItems: bot ? 'flex-start' : 'flex-end',
  maxWidth: bot ? '85%' : '100%',
}));

export const Message = glamorous.text({
  color: colors.white,
  marginTop: 5,
  marginBottom: 5,
}, ({ bot }) => ({
  textAlign: bot ? 'left' : 'right',
}));
