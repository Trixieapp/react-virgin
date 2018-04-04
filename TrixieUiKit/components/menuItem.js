import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Image, Text, TouchableHighlight, View } from 'react-native'

import componentStyle from './style/component'

export default class MenuItem extends PureComponent {
  static propTypes = {
    image: PropTypes.number,
    onPress: PropTypes.func,
    selected: PropTypes.bool,
    redirectLink: PropTypes.string,
    selectionImage: PropTypes.number,
    text: PropTypes.string,
  }

  static defaultProps = {
    image: 0,
    onPress: () => {},
    selected: false,
    redirectLink: '',
    selectionImage: 0,
    text: '',
  }

  onPress = () => {
    if (!this.props.selected) {
      this.props.onPress(this.props.redirectLink)
    }
  }
  render = () => {
    const { text, image, selected, selectionImage } = this.props
    return (
      <TouchableHighlight
        style={componentStyle.footer}
        onPress={this.onPress}
        underlayColor="#f1f1f1"
      >
        <View>
          <Image style={componentStyle.footerIcons} source={selected ? selectionImage : image} />
          <Text style={componentStyle.footerText}>{text}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}
