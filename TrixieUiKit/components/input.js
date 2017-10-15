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


import componentStyle from './style/component';

class InputField extends Component {
  propTypes: {
    placeholder: PropTypes.string
  }

  defaultProps: {
    placeholder: '',
  }
  render = () => {
    const { placeholder } = this.props;
    return(
      <TextInput
        underlineColorAndroid='rgba(0,0,0,0)'
        style={[componentStyle.inputField,componentStyle.shadow]}
        placeholder={placeholder}>
      </TextInput>
    );
  }
}

export default InputField