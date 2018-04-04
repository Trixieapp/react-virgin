import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableHighlight, View } from 'react-native'

import componentStyle from './style/component'

class ButtonBordered extends Component {
  static propTypes = {
    text: PropTypes.string,
  }

  static defaultProps = {
    text: '',
  }

  render = () => {
    const { text } = this.props
    return (
      <TouchableHighlight style={componentStyle.buttonBordered} underlayColor="#f1f1f1">
        <View>
          <Text style={componentStyle.buttonBorderedText}> {text} </Text>
        </View>
      </TouchableHighlight>
    )
  }
}

export default ButtonBordered
