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

class GridItem extends Component {
  static propTypes = {
    // text: React.PropTypes.string.isRequired,
  }
  render = () => {
    var value = this.props.value;
    var title = this.props.title;
    return(
      <View style={[componentStyle.profileMetrics,componentStyle.shadow]}>
        <Text  style = {componentStyle.profileValues}> {value} </Text>
        <Text style={[componentStyle.label,componentStyle.strong,componentStyle.smallText]}> {title}</Text>
      </View>
    );
  }
}

export default GridItem