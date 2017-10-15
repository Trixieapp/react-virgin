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

class ChatBubble extends Component {
  static propTypes = {
    // text: React.PropTypes.string.isRequired,
  }
  render = () => {
    var text = this.props.text;
    return(
      <View style={[globalStyle.conversationContainer,globalStyle.shadow]}>
       <Text style= {globalStyle.conversationText}>
        {text}
        </Text>
      </View>
    );
  }
}

export default ChatBubble