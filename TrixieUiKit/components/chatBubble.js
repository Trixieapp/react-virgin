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


import componentStyle from './style/component';

class ChatBubble extends Component {
  propTypes: {
    text: PropTypes.string,
  }

  defaultProps: {
    text: ''
  }

  render = () => {
    const { text } = this.props;
    return (
      <View style={[componentStyle.conversationContainer,componentStyle.shadow]}>
       <Text style= {componentStyle.conversationText}>
        {text}
        </Text>
      </View>
    );
  }
}

export default ChatBubble
