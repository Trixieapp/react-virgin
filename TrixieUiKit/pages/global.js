import { Platform } from 'react-native'

if (Platform.OS === 'ios') {
  global.headerFontSize = 22
  global.extraMarginValue = 30
  global.buttonPrimaryTextPadding = 5
  global.buttonBorderedTextPadding = 5
} else {
  global.headerFontSize = 19
  global.extraMarginValue = 25
  global.buttonPrimaryTextPadding = 0
  global.buttonBorderedTextPadding = 3
}
