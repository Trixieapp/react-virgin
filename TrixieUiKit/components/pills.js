import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableHighlight, View } from 'react-native'

const componentStyle = require('./style/component')

class Pills extends Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
  }
  static defaultProps = {
    text: '',
    onPress: () => {},
  }

  render = () => {
    const { text, onPress } = this.props
    return (
      <TouchableHighlight onPress={onPress}>
        <View style={componentStyle.pills}>
          <Text style={componentStyle.pillText}>{text}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

export default Pills
