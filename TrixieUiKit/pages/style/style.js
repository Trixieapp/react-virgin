import { StyleSheet, Dimensions } from 'react-native'

function vw(percentageWidth) {
  return Dimensions.get('window').width * (percentageWidth / 100)
}

const COLUMNS = 2
const MARGIN = vw(1)
const SPACING = (COLUMNS + 1) / COLUMNS * MARGIN

const primaryBlue = '#4990E2'
const titleColor = '#ffffff'
const backgroundPrimary = '#F2F6FE'
const borderColor = '#fff'
const primaryTextColor = '#444444'
const secondoryTextColor = '#D9DAE8'
const primaryRed = '#FF758C'

const { headerFontSize, extraMarginValue } = global

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: backgroundPrimary,
  },
  marginTopValue: {
    marginTop: 80,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
  },
  slideTite: {
    color: primaryTextColor,
    fontSize: 25,
    marginTop: 20,
  },
  slideDesc: {
    color: primaryTextColor,
    fontSize: 15,
    marginTop: 20,
    lineHeight: 20,
    textAlign: 'center',
    marginRight: 20,
    marginLeft: 20,
  },
  listItem: {
    borderColor,
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingTop: 2,
    paddingBottom: 2,
    marginTop: 15,
    borderRadius: 10,
    shadowColor: '#444',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  listMenuItem: {
    padding: 25,
    color: primaryTextColor,
    fontSize: 15,
    flex: 0.8,
    textAlign: 'left',
  },
  listItemRow: {
    flexDirection: 'row',
  },
  list_icon: {
    height: 35,
    width: 35,
    marginTop: 17,
    marginLeft: 20,
  },
  title: {
    fontSize: headerFontSize,
    marginBottom: 20,
    color: titleColor,
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 14,
    color: titleColor,
    textAlign: 'center',
  },
  audioTitle: {
    fontSize: 23,
    marginTop: 35,
    marginBottom: 15,
    color: primaryBlue,
    textAlign: 'center',
  },
  buttonTitle: {
    fontSize: 23,
    marginTop: 30,
    marginBottom: 15,
    color: titleColor,
    textAlign: 'left',
    flex: 0.6,
  },
  text: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  textWhite: {
    color: primaryTextColor,
    fontSize: 16,
    padding: 10,
    alignSelf: 'center',
  },
  textSmall: {
    color: secondoryTextColor,
    fontSize: 13,
    padding: 10,
    textAlign: 'justify',
  },
  arrow: {
    flex: 0.1,
    alignSelf: 'center',
    marginRight: 20,
    height: 20,
  },
  name: {
    color: primaryBlue,
    fontSize: 17,
    textAlign: 'left',
    justifyContent: 'center',
  },
  nameLeft: {
    color: primaryTextColor,
    fontSize: 17,
    marginTop: 19,
    textAlign: 'left',
    paddingLeft: 20,
  },
  description: {
    color: primaryTextColor,
    fontSize: 15,
    padding: 20,
    textAlign: 'justify',
    lineHeight: 30,
  },
  label: {
    color: primaryTextColor,
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 5,
  },
  row: {
    flexDirection: 'row',
  },
  titleContainer: {
    backgroundColor: 'transparent',
  },
  header: {
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: borderColor,
    height: 155,
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  countValue: {
    fontSize: 50,
    textAlign: 'center',
    color: primaryBlue,
    marginTop: 30,
    marginBottom: 50,
  },
  buttonHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: borderColor,
    height: 155,
    backgroundColor: '#4990E2',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    flex: 1,
    justifyContent: 'center',
  },
  flash: {
    height: 40,
    backgroundColor: '#00ff00',
    padding: 10,
    alignSelf: 'center',
  },
  loader: {
    marginTop: 20,
  },
  thumb: {
    marginTop: 8,
    marginBottom: 8,
    width: 90,
    height: 80,
    borderRadius: 10,
  },
  recentlyPlayedThumb: {
    width: 90,
    height: 80,
    borderRadius: 10,
  },
  center: {
    alignSelf: 'center',
  },
  right: {
    alignSelf: 'flex-end',
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
  recentlyPlayed: {
    margin: 10,
    borderRadius: 10,
    shadowColor: '#444',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 1,
    paddingLeft: 10,
    paddingTop: 10,
    padding: 5,
    backgroundColor: 'white',
    height: 150,
  },
  error: {
    color: '#EC644B',
    paddingTop: 10,
  },
  errorBox: {
    backgroundColor: 'white',
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center',
  },
  largeImage: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  largeMarginTop: {
    marginTop: 100,
    borderTopColor: secondoryTextColor,
    borderTopWidth: 2,
  },
  seperator: {
    borderBottomWidth: 1,
    borderColor: secondoryTextColor,
    marginTop: 20,
  },
  tagline: {
    fontSize: 15,
    marginBottom: 15,
    color: primaryTextColor,
  },
  taglineHeader: {
    fontSize: 25,
    marginBottom: 15,
    color: primaryTextColor,
  },
  extraMargin: {
    marginTop: extraMarginValue,
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
  paddingLeftValue: {
    paddingLeft: 10,
  },
  strong: {},
  primaryBlue: {
    color: primaryBlue,
  },
  alignLeft: {
    textAlign: 'left',
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
  shadow: {
    shadowColor: '#444',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 1,
  },
  paddingPseudo: {
    paddingBottom: 80,
  },
  redText: {
    color: primaryRed,
  },
  centreItems: {
    justifyContent: 'center',
    alignItems: 'center',
  },
})
