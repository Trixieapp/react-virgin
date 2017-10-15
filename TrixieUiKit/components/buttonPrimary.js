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

class ButtonPrimary extends Component {
  static propTypes = {
    // text: React.PropTypes.string.isRequired,
  }
  render = () => {
    var text = this.props.text;
    return(
    <TouchableHighlight style={componentStyle.buttonPrimary} underlayColor='#f1f1f1'>
      <View >
        <Text style={componentStyle.buttonPrimaryText}> {text} </Text>
      </View>
    </TouchableHighlight>
    );
  }
}

export default ButtonPrimary