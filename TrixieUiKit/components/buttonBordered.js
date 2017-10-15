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

class ButtonBordered extends Component {
  propTypes: {
    text: PropTypes.string,
  }

  defaultProps: {
    text: ''
  }

  render = () => {
    const { text } = this.props;
    return (
      <TouchableHighlight
        style={componentStyle.buttonBordered}
        underlayColor='#f1f1f1'
      >
        <View>
          <Text style={componentStyle.buttonBorderedText}> {text} </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default ButtonBordered
