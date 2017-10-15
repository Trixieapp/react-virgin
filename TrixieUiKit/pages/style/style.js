'use strict';

import ReactNative, {
  StyleSheet,
  Dimensions
} from 'react-native';

function vw(percentageWidth) {
  return Dimensions.get('window').width * (percentageWidth / 100);
}

function vh(percentageHeight) {
  return Dimensions.get('window').height * (percentageHeight / 100);
}

const COLUMNS = 2;
const MARGIN = vw(1);
const SPACING = (COLUMNS + 1) / COLUMNS * MARGIN;

const primaryBlue = '#4990E2';
const titleColor = '#ffffff'
const backgroundPrimary = '#F2F6FE';
const borderColor = '#fff';
const primaryTextColor = '#444444';
const secondoryTextColor = '#D9DAE8';
const smallTextColor = '#B2C3DB';
const primaryRed = '#FF758C'
const fontFamilyRegular = global.fontFamilyRegular;
const fontFamilyBold = global.fontFamilyBold;
const headerFontSize = global.headerFontSize;
const extraMarginValue = global.extraMarginValue;
const buttonPrimaryTextPadding = global.buttonPrimaryTextPadding;
const buttonBorderedTextPadding = global.buttonBorderedTextPadding;
const audioCountMarginTop = global.audioCountMarginTop;
const fbIconHeight = global.fbIconHeight;

module.exports = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: backgroundPrimary,
  },
  scrollContainer: {

  },
  marginTopValue: {
    marginTop: 80
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
    fontFamily: fontFamilyBold,
    fontSize: 25,
    marginTop: 20
  },
  slideDesc: {
    color: primaryTextColor,
    fontFamily: fontFamilyBold,
    fontSize: 15,
    marginTop: 20,
    lineHeight: 20,
    textAlign: 'center',
    marginRight: 20,
    marginLeft: 20
  },
  listItem: {
    borderColor: borderColor,
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
    marginLeft:15,
    marginRight: 15

  },
  listMenuItem: {
    padding: 25,
    color: primaryTextColor,
    fontSize: 15,
    flex: 0.8,
    textAlign: 'left',
    fontFamily: fontFamilyRegular
  },
  listItemRow:{
    flexDirection: 'row'
  },
  list_icon:{
    height: 35,
    width: 35,
    marginTop: 17,
    marginLeft: 20
  },
  title: {
    fontSize: headerFontSize,
    marginBottom: 20,
    color: titleColor,
    textAlign: 'center',
    fontFamily: fontFamilyBold,
  },
  subTitle: {
    fontSize: 14,
    color: titleColor,
    textAlign: 'center'
  },
  audioTitle: {
    fontSize: 23,
    marginTop: 35,
    marginBottom: 15,
    color: primaryBlue,
    textAlign: 'center',
    fontFamily: fontFamilyBold,
  },
  buttonTitle: {
    fontSize: 23,
    marginTop: 30,
    marginBottom: 15,
    color: titleColor,
    textAlign: 'left',
    flex: 0.6,
    fontFamily: fontFamilyBold,
  },
  text: {
    flex: 1,
    padding: 10,
    justifyContent: 'center'
  },
  textWhite:{
    color: primaryTextColor,
    fontSize: 16,
    fontFamily: fontFamilyRegular,
    padding: 10,
    alignSelf: 'center'
  },
  textSmall: {
    color: secondoryTextColor,
    fontSize: 13,
    fontFamily: fontFamilyRegular,
    padding: 10,
    textAlign: 'justify',
  },
  arrow: {
    flex: .1,
    alignSelf: 'center',
    marginRight: 20,
    height: 20,
  },
  playSmall: {
    alignSelf: 'center',
    marginRight: 20,
    height: 30,
    width: 30,
  },
  name: {
    color: primaryBlue,
    fontSize: 17,
    fontFamily: fontFamilyBold,
    textAlign: 'left',
    justifyContent: 'center'
  },
  nameLeft: {
    color: primaryTextColor,
    fontSize: 17,
    fontFamily: fontFamilyBold,
    marginTop: 19,
    textAlign: 'left',
    paddingLeft: 20
  },
  description: {
    color: primaryTextColor,
    fontSize: 15,
    fontFamily: fontFamilyBold,
    padding: 20,
    textAlign: 'justify',
    lineHeight: 30,
  },
  label: {
    color: primaryTextColor,
    fontSize: 15,
    fontFamily: fontFamilyRegular,
    textAlign: 'center',
    marginBottom: 5
  },
  audio_count: {
    color: smallTextColor,
    fontSize: 12,
    fontFamily: fontFamilyBold,
    textAlign: 'left',
    marginTop: audioCountMarginTop
  },
  row: {
    flexDirection: 'row'
  },
  titleContainer: {
    backgroundColor: 'transparent'
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
    justifyContent: 'center'
  },
  countValue: {
    fontSize: 50,
    fontFamily: fontFamilyRegular,
    textAlign: 'center',
    color: primaryBlue,
    marginTop: 30,
    marginBottom: 50
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
    justifyContent: 'center'
  },
  backButtonContainer: {
    marginRight: 10,
    width: 70,
    height: 70,
    position: 'absolute',
    top: 20,
    left: 10,
    zIndex: 9999,
    borderRadius: 50
  },
  backButtonWidth: {
    width: 40
  },
  startButton: {
    width: 270,
    height: 45,
    padding: 13,
    backgroundColor: primaryBlue,
    borderRadius: 5,
    marginTop: 100,
    alignSelf: 'center'
  },
  backButton: {
    marginTop: 30,
    marginLeft: 20,
    height: 30,
    width: 30,
  },
  close: {
    height: 40,
    width: 40,
    marginRight: 20,
  },
  button: {
    height: 128,
    width: 128,
    borderRadius: 128,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    marginTop: 10
  },
  closeButton: {
    height: 30,
    width: 30,
    borderRadius: 30,
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 10,
    top:30,
  },
  closeButtonLoader: {
    height: 30,
    width: 30,
    borderRadius: 30,
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 10,
    top:30
  },
  buttonPrimary: {
    width: 270,
    height: 50,
    backgroundColor: primaryRed,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center'
  },
  fbLoginIcon: {
    width: 270,
    height: fbIconHeight,
    padding: 10
  },
  smallerButton:{
    width: 220
  },
  buttonSecondary: {
    width: 270,
    height: 45,
    padding: 10,
    backgroundColor: borderColor,
    borderRadius: 10,
    marginTop: 10
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
    alignSelf: 'center'
  },
  buttonPrimaryText: {
    color: '#fafafa',
    textAlign: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    fontSize: 15,
    paddingTop: buttonPrimaryTextPadding,
    fontFamily: fontFamilyBold,
  },
  buttonSecondaryText: {
    color: primaryBlue,
    textAlign: 'center',
    fontSize: 15,
    fontFamily: fontFamilyBold,
  },
  buttonBorderedText: {
    color: primaryRed,
    textAlign: 'center',
    fontSize: 15,
    fontFamily: fontFamilyBold,
    paddingTop: buttonBorderedTextPadding
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center',
    fontFamily: fontFamilyRegular
  },
  flash: {
    height: 40,
    backgroundColor: '#00ff00',
    padding: 10,
    alignSelf: 'center',
  },
  loader: {
    marginTop: 20
  },
  thumb: {
    marginTop: 8,
    marginBottom: 8,
    width:90,
    height: 80,
    borderRadius: 10
  },
  recentlyPlayedThumb: {
    width:90,
    height: 80,
    borderRadius: 10
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
    fontFamily: fontFamilyBold,
    marginLeft: 5,
  },
  footer: {
    flex: .3,
    paddingTop:5,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: borderColor

  },
  footerWrapper: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 1,
    position: 'absolute',
    height: 50,
    left: 0,
    right: 0,
    bottom: 0,
    flexDirection:'row',
    justifyContent:'center',
    borderTopColor: '#f1f1f1',
    borderTopWidth: 1
  },
  fbShareContainer: {
    flex: .25,
    paddingTop:5,
    backgroundColor: backgroundPrimary,
  },
  socialStrip: {
    flex: .3,
    paddingTop:5,
  },
  loading: {
    height: 75,
    width: 75,
    alignSelf: 'center'
  },
  selected: {
    color: primaryBlue,
    alignSelf: 'center',
    fontSize: 10,
    marginLeft: 5,
    fontFamily: fontFamilyBold,
  },
  audioPlay: {
    height: 128,
    width: 128,
  },
  time_container: {
    marginTop: 50
  },
  time_remaining: {
    textAlign: 'center',
    color: primaryTextColor,
    fontSize: 18,
    fontFamily: fontFamilyRegular
  },
  breatheMessage: {
    textAlign: 'center',
    color: primaryTextColor,
    fontSize: 30,
    fontFamily: fontFamilyRegular,
    paddingTop: 50,
    marginBottom: 50
  },
  important: {
    padding: 25,
    color: primaryTextColor,
    fontSize: 15,
    fontFamily: fontFamilyBold,
    flex: 0.8,
  },
  center: {
    alignSelf: 'center'
  },
  right: {
    alignSelf: 'flex-end'
  },
  playButtonContainer: {
    alignSelf: 'center',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: 100
  },
  profileCard: {
    borderRadius: 10,
    shadowColor: '#444',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 1,
    marginLeft:15,
    marginRight: 15,
    backgroundColor: 'white',
    marginTop: 20,
    paddingBottom: 20,
    paddingTop: 20
  },
  profileCardInner:{
    flexDirection: 'row'
  },
  profileMetricsContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 2*SPACING
  },
  profileMetrics: {
    marginLeft: MARGIN,
    marginTop: MARGIN,
    borderRadius: 10,
    backgroundColor: 'white',
    width: (vw(100) / COLUMNS - SPACING) - (2*SPACING)
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
    height: 150
  },
  profileIcon: {
    height: 32,
    width: 32,
    alignSelf: 'center',
  },
  profilePicContainer: {
    flex: 0.7,
    paddingLeft:15
  },
  profileDetailContainer: {
    paddingLeft:10,
    alignSelf: 'center'
  },
  profilePic: {
    height: 64,
    width: 64,
    alignSelf: 'center',
    borderRadius: 32,
    marginTop: 5
  },
  profileValues: {
    fontSize: 32,
    textAlign: 'center',
    marginTop: 10,
    color: primaryBlue,
    fontFamily: fontFamilyRegular
  },
  profieText: {
    fontSize: 12,
    color: primaryBlue,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontFamily: fontFamilyRegular
  },
  badge: {
    height: 64,
    width: 64
  },
  fbShare: {
    flexDirection:'row',
    justifyContent:'center',
    borderTopColor: borderColor,
    borderBottomColor: borderColor,
    paddingTop: 20,
    paddingBottom: 20,
  },
  error: {
    color: '#EC644B',
    paddingTop: 10
  },
  errorBox: {
    backgroundColor: 'white',
    justifyContent: 'center',
    marginTop: 20,
    alignItems: 'center'
  },
  largeImage: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop:10,
    marginBottom:10
  },
  largeMarginTop: {
    marginTop: 100,
    borderTopColor: secondoryTextColor,
    borderTopWidth: 2
  },
  input: {
    backgroundColor: backgroundPrimary,
    color: primaryBlue,
    height: 50,
    width: 270,
    marginTop: 10,
    padding: 4,
    paddingLeft:10,
    fontSize: 18,
    fontFamily: fontFamilyRegular,
    borderRadius: 10,
    alignSelf: 'center'
  },
  inputView:{
    backgroundColor: backgroundPrimary,
    height: 50,
    width: 270,
    marginTop: 10,
    padding: 4,
    paddingLeft:10,
    borderRadius: 10,
    alignSelf: 'center'
  },
  inputFake:{
    backgroundColor: 'transparent',
    color: primaryBlue,
    height: 50,
    width: 270,
    marginTop: 10,
    padding: 4,
    paddingLeft:10,
    fontSize: 18,
    borderRadius:10,
    fontFamily: fontFamilyRegular,
    alignSelf: 'center'
  },
  tinyIcon: {
    height: 12,
    width: 12,
    marginRight: 5,
    marginTop: 3
  },
  timeContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  seperator: {
    borderBottomWidth: 1,
    borderColor: secondoryTextColor,
    marginTop: 20,
  },
  labelPricing: {
    textAlign: 'justify',
    color: primaryTextColor,
    fontSize: 15,
    marginBottom: 5,
    marginTop: 10,
    fontFamily: fontFamilyRegular
  },
  tagline: {
    fontSize: 15,
    marginBottom: 15,
    color: primaryTextColor,
    fontFamily: fontFamilyRegular
  },
  taglineHeader: {
    fontSize: 25,
    marginBottom: 15,
    color: primaryTextColor,
    fontFamily: fontFamilyBold
  },
  extraMargin: {
    marginTop: extraMarginValue
  },
  textCenter: {
    textAlign: 'center'
  },
  alignCenter: {
    alignSelf: 'center'
  },
  padding20: {
    padding: 20
  },
  padding10: {
    padding: 10
  },
  mt20:{
    marginTop: 20
  },
  mt10: {
    marginTop: 10
  },
  mt100: {
    marginTop: 100
  },
  mb20: {
    marginBottom: 20
  },
  mb10: {
    marginBottom: 10
  },
  paddingLeftValue: {
    paddingLeft: 10
  },
  strong: {
    fontFamily: fontFamilyBold
  },
  primaryBlue: {
    color: primaryBlue
  },
  alignLeft: {
    textAlign: 'left'
  },
  smallText:{
    color: primaryTextColor,
    fontSize: 12,
    alignSelf: 'center',
    marginTop: 5,
    fontFamily: fontFamilyRegular
  },
  small: {
    fontSize: 12,
    color: primaryTextColor,
    fontFamily: fontFamilyRegular
  },
  lh2: {
    lineHeight: 20
  },
  pills: {
    padding: 5,
    borderRadius: 5,
    backgroundColor: 'white',
    borderColor: primaryRed,
    borderWidth: 1,
    marginTop: 5,
    marginRight: 5,
    width: 100
  },
  pillText: {
    color: primaryRed,
    alignSelf: 'center',
    fontFamily: fontFamilyRegular
  },
  optionsContainer:{
    flex:1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  //common styles
  shadow: {
    shadowColor: '#444',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 1
  },
  paddingPseudo:{
    paddingBottom: 80
  },
  redText:{
    color: primaryRed,
    fontFamily: fontFamilyRegular
  },

  //styles for bot
  botIconContainer: {
    marginRight: 10,
    width: 50,
    height: 70,
    position: 'absolute',
    top: 40,
    right: 0,
    zIndex: 9999,
    borderRadius: 50
  },
  botIcon: {
    height: 40,
    width: 40
  },
  botWrapper: {
    padding: 10
  },
  conversationContainer:{
    maxWidth:310,
    backgroundColor: 'white',
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 10,
    padding: 10,
    marginTop: 10
  },
  convRight:{
    alignSelf:'flex-end',
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
    fontFamily: fontFamilyRegular
  },
  conversationText: {
    lineHeight: 20,
    alignSelf: 'flex-start',
    fontFamily: fontFamilyRegular
  },
  actionButtonsContainer:{
    flex:1,
    flexDirection: 'row',
    paddingTop: 10,
    flexWrap: 'wrap'

  },
  actionButton:{
    backgroundColor:primaryRed,
    borderRadius:30,
    padding: 10,
    marginRight: 10,
    marginBottom: 10,
    width: 100
  },
  actionButtonText:{
    color:'white',
    fontSize:12,
    alignSelf: 'center',
    fontFamily: fontFamilyRegular
  },
  chatPlayButtonWrapper: {
    height: 160,
    width: 160,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 10,
    backgroundColor: 'white',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  chatPlayIcon: {
    height: 130,
    width: 130,
    alignSelf: 'center',
  },
  link: {
    color: primaryBlue
  },
  centreItems: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  playControls:{
    height: 60,
    width: 60
  }



});
