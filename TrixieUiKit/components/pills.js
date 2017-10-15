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

class Pills extends Component {
  static propTypes = {
    // text: React.PropTypes.string.isRequired,
  }
  render = () => {
    var text = this.props.text;
    return(
      <TouchableHighlight >
        <View style={globalStyle.pills}>
          <Text style={globalStyle.pillText}>
            {text}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default Pills