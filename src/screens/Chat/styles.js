import glamorous, { ThemeProvider } from 'glamorous-native';

import { colors, flexPos, fontWeightScale } from '../../config/themeConstants';

export const Container = glamorous.view({
  backgroundColor: colors.gray,
  flex: 1,
});

export const ChatList = glamorous.flatList({

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
  backgroundColor: colors.darkGray,
  elevation: 1,
});

export const TimeStamp = glamorous.text({
  color: colors.white,
  fontSize: 10,
});

export const Bubble = glamorous.view({
  margin: 5,
  marginBottom: 0,
  padding: 20,
  paddingTop: 5,
  paddingBottom: 10,
  borderRadius: 20,
  elevation: 1,
}, ({ bot }) => ({
  backgroundColor: bot ? colors.darkGray : colors.red,
  alignItems: bot ? 'flex-start' : 'flex-end',
  maxWidth: bot ? '85%' : '100%',
  borderBottomLeftRadius: bot ? 0 : 20,
  borderBottomRightRadius: bot ? 20 : 0,
}));

export const Message = glamorous.text({
  color: colors.white,
  marginTop: 5,
  marginBottom: 5,
}, ({ bot }) => ({
  textAlign: bot ? 'left' : 'right',
}));

export const LoadingDots = glamorous.text({
  color: colors.white,
  fontSize: 60,
  alignSelf: 'center',
  marginTop: -30,
});

export const ActionBar = glamorous.view({
  backgroundColor: colors.white,
  height: 45,
  width: '100%',
  flexDirection: 'row',
});

export const InputWrapper = glamorous.view({
  flex: 1,
  backgroundColor: colors.white,
  justifyContent: 'center',
  alignItems: 'center',
});

export const MessageInput = glamorous.textInput({
  width: '90%',
  fontSize: 16,
});

export const SendMessageButton = glamorous.touchableOpacity({
  height: '100%',
  width: 45,
  justifyContent: 'center',
  alignItems: 'center',
}, ({ sendDisabled }) => ({
  backgroundColor: sendDisabled ? colors.darkGray : colors.red,
}));

export const ButtonLabel = glamorous.text({
  color: colors.white,
  fontWeight: 'bold',
});

export const QuickReplySection = glamorous.view({
  width: '100%',
  height: 60,
  backgroundColor: 'rgba(0,0,0, 0.6)',
  position: 'absolute',
  bottom: 45,
  alignItems: 'center',
  justifyContent: 'center',
});

export const QuickReplyBubble = glamorous.touchableOpacity({
  margin: 10,
  marginLeft: 5,
  marginRight: 5,
  padding: 10,
  paddingLeft: 15,
  paddingRight: 15,
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  borderColor: colors.white,
  borderRadius: 30,
  borderBottomRightRadius: 10,
});

export const QuickReplyMessage = glamorous.text({
  color: colors.white,
  ...fontWeightScale.bold,
});
