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

class PillPrimary extends Component {
  static propTypes = {
    // text: React.PropTypes.string.isRequired,
  }
  render = () => {
    const { text } = this.props;
    return(
      <TouchableHighlight style={[componentStyle.actionButton,componentStyle.mt10]} underlayColor='#f1f1f1'>
        <View>
          <Text style= {componentStyle.actionButtonText}>{text}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}

export default PillPrimary