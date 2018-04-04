import React, { Component } from 'react'
import { exitApp } from 'react-native-back-android'

import { Loader } from '../components'

class Menu4 extends Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props)
    this.handleBack = this.handleBack.bind(this)
    this.state = {}
  }

  handleBack = () => {
    const { goBack } = this.props.navigation
    goBack(this.props.navigation.state.key)
  }

  handleHardwareBackPress = () => {
    exitApp()
    return true
  }

  redirect = routeName => {
    const { navigate } = this.props.navigation
    navigate(routeName)
  }

  render() {
    return <Loader />
  }
}

export default Menu4
