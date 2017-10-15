'use strict';
import React, {
  Component,
  PropTypes
} from 'react';
import ReactNative, {
  Image,
  Text,
  BackHandler,
  TouchableHighlight,
  View
} from 'react-native';


var globalStyle = require('./style/style');

class BottomNav extends Component {

  constructor(props){
    super(props);
    this.handleBack = this.handleBack.bind(this);
    this.state = {
    }
  }
  static propTypes = {
    // text: React.PropTypes.string.isRequired,
  }

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
  render = () => {
    var activeTab = this.props.activeTab;


      if(activeTab == "home"){
         return(
          <View style={globalStyle.footerWrapper}>
            <TouchableHighlight style={globalStyle.footer} onPress={() => { this.redirect('home');}} underlayColor='#f1f1f1'>
              <View>
                <Image style={globalStyle.footerIcons} source={require('../Thumbnails/play-button-small.png')}/>
                <Text style={globalStyle.footerText} > Menu1 </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={globalStyle.footer} underlayColor='#f1f1f1'>
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
        );
      }else if(activeTab == "Menu2"){
         return(
           <View style={globalStyle.footerWrapper}>
            <TouchableHighlight style={globalStyle.footer} onPress={() => { this.redirect('home');}} underlayColor='#f1f1f1'>
              <View>
                <Image style={globalStyle.footerIcons} source={require('../Thumbnails/play-button-small.png')}/>
                <Text style={globalStyle.footerText} > Menu1 </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={globalStyle.footer} underlayColor='#f1f1f1'>
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
        );
      }
      else if(activeTab == "Menu3"){
         return(
          <View style={globalStyle.footerWrapper}>
            <TouchableHighlight style={globalStyle.footer} onPress={() => { this.redirect('home');}} underlayColor='#f1f1f1'>
              <View>
                <Image style={globalStyle.footerIcons} source={require('../Thumbnails/play-button-small.png')}/>
                <Text style={globalStyle.footerText} > Menu1 </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={globalStyle.footer} underlayColor='#f1f1f1'>
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
        );
      }else if(activeTab == "Menu4"){
         return(
          <View style={globalStyle.footerWrapper}>
            <TouchableHighlight style={globalStyle.footer} onPress={() => { this.redirect('home');}} underlayColor='#f1f1f1'>
              <View>
                <Image style={globalStyle.footerIcons} source={require('../Thumbnails/play-button-small.png')}/>
                <Text style={globalStyle.footerText} > Menu1 </Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={globalStyle.footer} underlayColor='#f1f1f1'>
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
        );
      }
    
  }
}

export default BottomNav