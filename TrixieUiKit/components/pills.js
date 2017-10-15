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

class Pills extends Component {
  propTypes: {
    text: PropTypes.string,
    onPress: PropTypes.func,
  }
  defaultProps: {
    text: '',
    onPress: () => {}
  }
  render = () => {
    const { text, onPress } = this.props;
    return(
      <TouchableHighlight onPress={onPress}>
        <View style={componentStyle.pills}>
          <Text style={componentStyle.pillText}>
            {text}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default Pills
