import React, {
  Component,
  PropTypes
} from 'react';
import ReactNative, {
  Image,
  Text,
  TextInput,
  BackHandler,
  TouchableHighlight,
  View
} from 'react-native';


var componentStyle = require('./style/component');

class InputField extends Component {
  static propTypes = {
    // text: React.PropTypes.string.isRequired,
  }
  render = () => {
    var placeholder = this.props.placeholder;
    return(
      <TextInput
        underlineColorAndroid='rgba(0,0,0,0)'
        style={componentStyle.input}
        placeholder={placeholder}>
      </TextInput>
    );
  }
}

export default InputField