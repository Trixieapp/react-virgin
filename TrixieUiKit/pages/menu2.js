'use strict';
import React, {
  Component
} from 'react';
import ReactNative, {
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight
} from 'react-native';
import backAndroid, {
  hardwareBackPress,
  exitApp
} from 'react-native-back-android';
import LinearGradient from 'react-native-linear-gradient';
var globalStyle = require('./style/style');
class Menu2 extends Component {
  constructor(props){
    super(props);
    this.handleBack = this.handleBack.bind(this);
    this.state = {
    }
  }
  static navigationOptions = {
    header: null,
  };

  handleBack(){
    const { goBack } = this.props.navigation;
    goBack(this.props.navigation.state.key);
  }

  handleHardwareBackPress = () => {
    const { navigate } = this.props.navigation;
    exitApp()
    return true
  };

  redirect(routeName) {
    const { navigate } = this.props.navigation;
    navigate(routeName)
  }

  componentWillMount() {

  }

  render() {
      return(
        <View style={globalStyle.container}>
          <ScrollView style={globalStyle.scrollContainer}>
          <LinearGradient style={globalStyle.header} colors={['#6F86D6','#48C6EF']} start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}>
            <View style={globalStyle.titleContainer}>
              <Text style={globalStyle.title}> Components </Text>
            </View>
          </LinearGradient>
           <View style={[globalStyle.marginTopValue,globalStyle.padding20]}>
              
             <View style={[globalStyle.profileCard,globalStyle.padding20]}>
                <Text style={[globalStyle.label]}> List of all componenets used </Text>
                 
              </View>
                <Text style={globalStyle.nameLeft}>Buttons</Text>

                <TouchableHighlight style={globalStyle.buttonBordered} onPress={() => {this.monthlyPayment();}} underlayColor='#f1f1f1'>
                  <View >
                    <Text style={globalStyle.buttonBorderedText}> Bordered button </Text>
                  </View>
                </TouchableHighlight>


                <TouchableHighlight style={globalStyle.buttonPrimary} onPress={() => {this.yearlyPayment();}} underlayColor='#f1f1f1'>
                <View >
                  <Text style={globalStyle.buttonPrimaryText}> Button primary </Text>
                </View>
              </TouchableHighlight>

              <TouchableHighlight >
                <View style={globalStyle.pills}>
                  <Text style={globalStyle.pillText}>
                    Small Button
                  </Text>
                </View>
              </TouchableHighlight>

               <TouchableHighlight style={[globalStyle.actionButton,globalStyle.mt10]} underlayColor='#f1f1f1'>
                <View>
                  <Text style= {globalStyle.actionButtonText}>Small button</Text>
                </View>
                </TouchableHighlight>

                <Text style={globalStyle.nameLeft}>Conversation</Text>

              <View style={[globalStyle.conversationContainer,globalStyle.shadow]}>
               <Text style= {globalStyle.conversationText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum, leo sed pharetra convallis, arcu elit tristique sem, quis ultrices nibh velit sed ante.
                </Text>
              </View>


             
             
            </View>
          </ScrollView>
          <View style={globalStyle.footerWrapper}>
            <TouchableHighlight style={globalStyle.footer} underlayColor='#f1f1f1'>
              <View>
                <Image style={globalStyle.footerIcons} source={require('../Thumbnails/play-button-small.png')}/>
                <Text style={globalStyle.footerText} > Menu1 </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={globalStyle.footer} onPress={() => { this.redirect('menu2');}} underlayColor='#f1f1f1'>
              <View>
                <Image style={globalStyle.footerIcons} source={require('../Thumbnails/settings-selected.png')} />
                <Text style={[globalStyle.footerText,globalStyle.selected]} > Menu2 </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={globalStyle.footer} onPress={() => { this.redirect('menu3');}} underlayColor='#f1f1f1'>
              <View>
                <Image style={globalStyle.footerIcons} source={require('../Thumbnails/user.png')} />
                <Text style={globalStyle.footerText} > Menu3 </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={globalStyle.footer} onPress={() => { this.redirect('menu4');}} underlayColor='#f1f1f1'>
              <View>
                <Image style={globalStyle.footerIcons} source={require('../Thumbnails/settings.png')} />
                <Text style={globalStyle.footerText} > Menu4 </Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      );
    }
}

export default Menu2
