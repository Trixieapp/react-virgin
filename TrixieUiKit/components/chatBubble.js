import React, {
  Component,
  PropTypes,
} from 'react';
import {
  Text,
  View,
} from 'react-native';


import componentStyle from './style/component';

class ChatBubble extends Component {
  static propTypes = {
    text: PropTypes.string,
  }

  static defaultProps = {
    text: '',
  }

  render = () => {
    const { text } = this.props;
    return (
      <View style={[componentStyle.conversationContainer, componentStyle.shadow]}>
        <Text style={componentStyle.conversationText}>
          {text}
        </Text>
      </View>
    );
  }
}

export default ChatBubble;
