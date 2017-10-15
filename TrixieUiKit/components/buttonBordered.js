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

class ButtonBordered extends Component {
  static propTypes = {
    // text: React.PropTypes.string.isRequired,
  }
  render = () => {
    var text = this.props.text;
    return(
    <TouchableHighlight style={globalStyle.buttonBordered} underlayColor='#f1f1f1'>
      <View >
        <Text style={globalStyle.buttonBorderedText}> {text} </Text>
      </View>
    </TouchableHighlight>
    );
  }
}

export default ButtonBordered