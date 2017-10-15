'use strict';
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
    const { title, value } = this.props;
    return(
      <View style={[componentStyle.profileMetrics,componentStyle.shadow]}>
        <Text  style = {componentStyle.profileValues}> {value} </Text>
        <Text style={[componentStyle.label,componentStyle.strong,componentStyle.smallText]}> {title}</Text>
      </View>
    );
  }
}

export default GridItem