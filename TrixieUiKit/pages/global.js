import ReactNative, {
  Platform
} from 'react-native';
if(Platform.OS === 'ios') {
  global.fontFamilyRegular = "Lato-Light";
  global.fontFamilyBold = "Lato-Bold";
  global.headerFontSize = 22;
  global.extraMarginValue = 30;
  global.buttonPrimaryTextPadding = 5;
  global.buttonBorderedTextPadding = 5;
  global.audioCountMarginTop = 5;
  global.fbIconHeight = 50;
} else {
  global.fontFamilyRegular = "Lato-Light";
  global.fontFamilyBold = "Lato-Bold";
  global.headerFontSize = 19;
  global.extraMarginValue = 25;
  global.buttonPrimaryTextPadding = 0;
  global.buttonBorderedTextPadding = 3;
  global.audioCountMarginTop = 2;
  global.fbIconHeight = 30;
}
