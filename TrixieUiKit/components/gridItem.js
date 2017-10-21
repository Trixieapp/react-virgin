import React, {
  Component,
  PropTypes,
} from 'react';
import {
  Text,
  View,
} from 'react-native';


import componentStyle from './style/component';

class GridItem extends Component {
  static propTypes = {
    value: PropTypes.string,
    title: PropTypes.string,
  }

  static defaultProps = {
    value: '',
    title: '',
  }
  render = () => {
    const { value, title } = this.props;
    return (
      <View style={[componentStyle.profileMetrics, componentStyle.shadow]}>
        <Text style={componentStyle.profileValues}> {value} </Text>
        <Text style={[componentStyle.label, componentStyle.strong, componentStyle.smallText]}>
          {title}
        </Text>
      </View>
    );
  }
}

export default GridItem;
