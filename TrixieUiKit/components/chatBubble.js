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


var componentStyle = require('./style/component');

class ChatBubble extends Component {
  static propTypes = {
    // text: React.PropTypes.string.isRequired,
  }
  render = () => {
    var text = this.props.text;
    return(
      <View style={[componentStyle.conversationContainer,componentStyle.shadow]}>
       <Text style= {componentStyle.conversationText}>
        {text}
        </Text>
      </View>
    );
  }
}

export default ChatBubble