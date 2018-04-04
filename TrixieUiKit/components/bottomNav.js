/* eslint-disable global-require */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, TouchableHighlight, Text } from 'react-native'

import componentStyle from './style/component'

class BottomNav extends Component {
  static propTypes = {
    navigation: PropTypes.shape({}),
    getOnPress: PropTypes.func,
    getLabel: PropTypes.func,
    renderIcon: PropTypes.func,
    jumpToIndex: PropTypes.func,
  }

  static defaultProps = {
    navigation: {},
    getOnPress: () => {},
    getLabel: () => {},
    renderIcon: () => {},
    jumpToIndex: () => {},
  }

  render = () => {
    const { navigation, getOnPress, getLabel, renderIcon, jumpToIndex } = this.props
    const { routes } = navigation.state
    const tabList = routes.map((route, index) => {
      const focused = index === navigation.state.index
      const scene = { route, index, focused }
      const label = getLabel({ ...scene })
      const icon = renderIcon({ ...scene })
      const onPress = getOnPress(scene)
      /* eslint-disable arrow-body-style */
      return (
        <TouchableHighlight
          style={componentStyle.footer}
          onPress={() => {
            return onPress ? onPress(scene, jumpToIndex) : jumpToIndex(index)
          }}
          key={`tab-${route.key}`}
          underlayColor="#f1f1f1"
        >
          <View>
            {icon}
            <Text style={componentStyle.footerText}>{label}</Text>
          </View>
        </TouchableHighlight>
      )
    })
    return <View style={componentStyle.footerWrapper}>{tabList}</View>
  }
}

export default BottomNav
