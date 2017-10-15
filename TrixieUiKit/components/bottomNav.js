'use strict';
import React, {
  Component,
  PropTypes
} from 'react';
import ReactNative, {
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';


var componentStyle = require('./style/component');

class BottomNav extends Component {

  render = () => {
    var activeTab = this.props.activeTab;
    var parentthis = this.props.parentthis;
    let tab1 = [
     <TouchableHighlight style={componentStyle.footer} onPress={() => { parentthis.redirect('home');}} underlayColor='#f1f1f1'>
            <View>
              <Image style={componentStyle.footerIcons} source={require('../Thumbnails/play-button-small.png')}/>
              <Text style={componentStyle.footerText} > Menu1 </Text>
            </View>
          </TouchableHighlight>
    ]
    let tab1Selected = [
          <TouchableHighlight style={componentStyle.footer} underlayColor='#f1f1f1'>
            <View>
              <Image style={componentStyle.footerIcons} source={require('../Thumbnails/play-button-selected.png')}/>
              <Text style={[componentStyle.footerText,componentStyle.selected]} > Menu1 </Text>
            </View>
          </TouchableHighlight>
          ]
    let tab2 = [
    <TouchableHighlight style={componentStyle.footer} onPress={() => { parentthis.redirect('menu2');}} underlayColor='#f1f1f1'>
            <View>
              <Image style={componentStyle.footerIcons} source={require('../Thumbnails/settings.png')} />
              <Text style={componentStyle.footerText} > Menu2 </Text>
            </View>
          </TouchableHighlight>
    ]
    let tab2Selected = [
      <TouchableHighlight style={componentStyle.footer} underlayColor='#f1f1f1'>
            <View>
              <Image style={componentStyle.footerIcons} source={require('../Thumbnails/settings-selected.png')} />
              <Text style={[componentStyle.footerText,componentStyle.selected]} > Menu2 </Text>
            </View>
          </TouchableHighlight>
    ]
    let tab3 = [
     <TouchableHighlight style={componentStyle.footer} onPress={() => { parentthis.redirect('menu3');}} underlayColor='#f1f1f1'>
            <View>
              <Image style={componentStyle.footerIcons} source={require('../Thumbnails/user.png')} />
              <Text style={componentStyle.footerText} > Menu3 </Text>
            </View>
          </TouchableHighlight>
    ]
    let tab3Selected = [
       <TouchableHighlight style={componentStyle.footer} underlayColor='#f1f1f1'>
            <View>
              <Image style={componentStyle.footerIcons} source={require('../Thumbnails/user-selected.png')} />
              <Text style={[componentStyle.footerText,componentStyle.selected]} > Menu3 </Text>
            </View>
          </TouchableHighlight>
    ]
    let tab4 = [
       <TouchableHighlight style={componentStyle.footer} onPress={() => { parentthis.redirect('menu4');}} underlayColor='#f1f1f1'>
            <View>
              <Image style={componentStyle.footerIcons} source={require('../Thumbnails/settings.png')} />
              <Text style={componentStyle.footerText} > Menu4 </Text>
            </View>
          </TouchableHighlight>
    ]
    let tab4Selected = [
        <TouchableHighlight style={componentStyle.footer} underlayColor='#f1f1f1'>
            <View>
              <Image style={componentStyle.footerIcons} source={require('../Thumbnails/settings-selected.png')} />
              <Text style={[componentStyle.footerText,componentStyle.selected]} > Menu4 </Text>
            </View>
          </TouchableHighlight>
    
          ]

    if(activeTab == "home"){
       return(
        <View style={componentStyle.footerWrapper}>
          {tab1Selected}
          {tab2}
          {tab3}
          {tab4}
       </View>
      );
    } else if(activeTab == "Menu2"){
       return(
         <View style={componentStyle.footerWrapper}>
          {tab1}
          {tab2Selected}
          {tab3}
          {tab4}
         </View>
      );
    } else if(activeTab == "Menu3"){
       return(
        <View style={componentStyle.footerWrapper}>
          {tab1}
          {tab2}
          {tab3Selected}
          {tab4}
        </View>
      );
    } else if(activeTab == "Menu4"){
       return(
        <View style={componentStyle.footerWrapper}>
          {tab1}
          {tab2}
          {tab3}
          {tab4Selected}
        </View>
      );
   }
  }
}

export default BottomNav
