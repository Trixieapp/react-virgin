import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Image, Text, View } from 'react-native'

import componentStyle from './style/component'

const loadingIcon = require('../Thumbnails/loading.gif')

class Loader extends Component {
  static propTypes = {
    message: PropTypes.string,
  }

  static defaultProps = {
    message: 'Your loading message',
  }

  render = () => (
    <View style={componentStyle.container}>
      <Image style={componentStyle.loading} source={loadingIcon} />
      <Text style={[componentStyle.title]}>{this.props.message}</Text>
    </View>
  )
}

export default Loader
