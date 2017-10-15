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
  static propTypes = {
    // text: React.PropTypes.string.isRequired,
  }
  render = () => {
    var activeTab = this.props.activeTab;
    return(

      if(activeTab == "home"){

      }else if(activeTab == "Menu2"){

      }
      else if(activeTab == "Menu3"){

      }else if(activeTab == "Menu4"){
        
      }


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

export default BottomNav