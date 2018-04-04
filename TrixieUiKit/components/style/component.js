import { StyleSheet, Dimensions } from 'react-native'

function vw(percentageWidth) {
  return Dimensions.get('window').width * (percentageWidth / 100)
}

const COLUMNS = 2
const MARGIN = vw(1)
const SPACING = (COLUMNS + 1) / COLUMNS * MARGIN
const backgroundPrimary = '#F2F6FE'
const primaryBlue = '#4990E2'
const borderColor = '#fff'
const primaryTextColor = '#444444'
const smallTextColor = '#B2C3DB'
const primaryRed = '#FF758C'
const { headerFontSize, buttonPrimaryTextPadding, buttonBorderedTextPadding } = global

export default StyleSheet.create({
  buttonPrimary: {
    width: 270,
    height: 50,
    backgroundColor: primaryRed,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: backgroundPrimary,
  },
  smallerButton: {
    width: 220,
  },
  buttonSecondary: {
    width: 270,
    height: 45,
    padding: 10,
    backgroundColor: borderColor,
    borderRadius: 10,
    marginTop: 10,
  },
  title: {
    fontSize: headerFontSize,
    marginBottom: 20,
    color: primaryBlue,
    textAlign: 'center',
  },
  buttonBordered: {
    width: 270,
    height: 45,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
    borderColor: primaryRed,
    borderWidth: 1,
    alignSelf: 'center',
  },
  buttonPrimaryText: {
    color: '#fafafa',
    textAlign: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    fontSize: 15,
    paddingTop: buttonPrimaryTextPadding,
  },
  buttonSecondaryText: {
    color: primaryBlue,
    textAlign: 'center',
    fontSize: 15,
  },
  buttonBorderedText: {
    color: primaryRed,
    textAlign: 'center',
    fontSize: 15,
    paddingTop: buttonBorderedTextPadding,
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center',
  },
  footerIcons: {
    height: 30,
    width: 30,
    marginLeft: 5,
    alignSelf: 'center',
  },
  footerText: {
    alignSelf: 'center',
    paddingBottom: 5,
    color: smallTextColor,
    fontSize: 10,
    marginLeft: 5,
  },
  footer: {
    flex: 0.3,
    paddingTop: 5,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: borderColor,
  },
  footerWrapper: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopColor: '#f1f1f1',
    borderTopWidth: 1,
  },
  selected: {
    color: primaryBlue,
    alignSelf: 'center',
    fontSize: 10,
    marginLeft: 5,
  },

  profileCard: {
    borderRadius: 10,
    shadowColor: '#444',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 1,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: 'white',
    marginTop: 20,
    paddingBottom: 20,
    paddingTop: 20,
  },
  profileCardInner: {
    flexDirection: 'row',
  },
  profileMetricsContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 2 * SPACING,
  },
  profileMetrics: {
    marginLeft: MARGIN,
    marginTop: MARGIN,
    borderRadius: 10,
    backgroundColor: 'white',
    width: vw(100) / COLUMNS - SPACING - 2 * SPACING,
  },
  profileIcon: {
    height: 32,
    width: 32,
    alignSelf: 'center',
  },
  profilePicContainer: {
    flex: 0.7,
    paddingLeft: 15,
  },
  profileDetailContainer: {
    paddingLeft: 10,
    alignSelf: 'center',
  },
  profilePic: {
    height: 64,
    width: 64,
    alignSelf: 'center',
    borderRadius: 32,
    marginTop: 5,
  },
  profileValues: {
    fontSize: 32,
    textAlign: 'center',
    marginTop: 10,
    color: primaryBlue,
  },
  profieText: {
    fontSize: 12,
    color: primaryBlue,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  textCenter: {
    textAlign: 'center',
  },
  alignCenter: {
    alignSelf: 'center',
  },
  padding20: {
    padding: 20,
  },
  padding10: {
    padding: 10,
  },
  mt20: {
    marginTop: 20,
  },
  mt10: {
    marginTop: 10,
  },
  mt100: {
    marginTop: 100,
  },
  mb20: {
    marginBottom: 20,
  },
  mb10: {
    marginBottom: 10,
  },
  smallText: {
    color: primaryTextColor,
    fontSize: 12,
    alignSelf: 'center',
    marginTop: 5,
  },
  small: {
    fontSize: 12,
    color: primaryTextColor,
  },
  lh2: {
    lineHeight: 20,
  },
  pills: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'white',
    borderColor: primaryRed,
    borderWidth: 1,
    marginTop: 5,
    marginRight: 5,
    width: 100,
  },
  pillText: {
    color: primaryRed,
    alignSelf: 'center',
  },
  shadow: {
    shadowColor: '#444',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 1,
  },
  conversationContainer: {
    maxWidth: 310,
    backgroundColor: 'white',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 10,
    padding: 10,
    marginTop: 10,
  },
  convRight: {
    alignSelf: 'flex-end',
    backgroundColor: primaryRed,
    height: 35,
    paddingTop: 5,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },
  convRightText: {
    color: 'white',
    alignSelf: 'center',
  },
  conversationText: {
    lineHeight: 20,
    alignSelf: 'flex-start',
  },
  actionButtonsContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    flexWrap: 'wrap',
  },
  actionButton: {
    backgroundColor: primaryRed,
    borderRadius: 30,
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
    width: 100,
  },
  actionButtonText: {
    color: 'white',
    fontSize: 12,
    alignSelf: 'center',
  },
  inputField: {
    backgroundColor: 'white',
    color: primaryBlue,
    height: 50,
    width: 270,
    marginTop: 10,
    padding: 4,
    paddingLeft: 10,
    fontSize: 18,
    borderRadius: 10,
    alignSelf: 'center',
  },
  loading: {
    height: 75,
    width: 75,
    alignSelf: 'center',
  },
  centreItems: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
