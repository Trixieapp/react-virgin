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
  static propTypes = {
    // text: React.PropTypes.string.isRequired,
  }
  render = () => {
    var text = this.props.text;
    return(
      <TouchableHighlight >
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