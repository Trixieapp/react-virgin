import React, {
  Component,
  PropTypes,
} from 'react';
import {
  TextInput,
} from 'react-native';


import componentStyle from './style/component';

class InputField extends Component {
  static propTypes = {
    placeholder: PropTypes.string,
  }

  static defaultProps = {
    placeholder: '',
  }

  render = () => {
    const { placeholder } = this.props;
    return (
      <TextInput
        underlineColorAndroid="rgba(0,0,0,0)"
        style={[componentStyle.inputField, componentStyle.shadow]}
        placeholder={placeholder}
      />
    );
  }
}

export default InputField;
