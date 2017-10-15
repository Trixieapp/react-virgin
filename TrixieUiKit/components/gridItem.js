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


var globalStyle = require('./style/style');

class GridItem extends Component {
  static propTypes = {
    // text: React.PropTypes.string.isRequired,
  }
  render = () => {
    var value = this.props.value;
    var title = this.props.title;
    return(
      <View style={[globalStyle.profileMetrics,globalStyle.shadow]}>
        <Text  style = {globalStyle.profileValues}> {value} </Text>
        <Text style={[globalStyle.label,globalStyle.strong,globalStyle.smallText]}> {title}</Text>
      </View>
    );
  }
}

export default GridItem