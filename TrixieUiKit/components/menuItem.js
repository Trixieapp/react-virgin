import React, {
  PureComponent,
  PropTypes
} from 'react';

import ReactNative, {
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import componentStyle from './style/component'

export default class MenuItem extends PureComponent {
  propTypes: {
    image: PropTypes.number,
    onPress: PropTypes.func,
    selected: PropTypes.boolean,
    redirectLink: PropTypes.string,
    selectionImage: PropTypes.number,
    text: PropTypes.string,
  }
  onPress = () => {
    if (!this.props.selected) {
      this.props.onPress(this.props.redirectLink);
    }
  }
  render = () => {
    const { onPress, text, image, selected, selectionImage } = this.props;
    return <TouchableHighlight
      style={componentStyle.footer}
      onPress={this.onPress}
      underlayColor="#f1f1f1"
    >
      <View>
        <Image
          style={componentStyle.footerIcons}
          source={selected ? selectionImage : image}
        />
        <Text style={componentStyle.footerText}>
          {text}
        </Text>
      </View>
    </TouchableHighlight>
  }
}
