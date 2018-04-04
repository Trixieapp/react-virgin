import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { exitApp } from 'react-native-back-android'
import LinearGradient from 'react-native-linear-gradient'

import globalStyle from './style/style'

class Menu3 extends Component {
  static navigationOptions = {
    header: null,
  }
  constructor(props) {
    super(props)
    this.handleBack = this.handleBack.bind(this)
    this.state = {}
  }

  handleBack() {
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
    return (
      <View style={globalStyle.container}>
        <ScrollView style={globalStyle.scrollContainer}>
          <LinearGradient
            style={globalStyle.header}
            colors={['#6F86D6', '#48C6EF']}
            start={{ x: 0.0, y: 0.25 }}
            end={{ x: 0.5, y: 1.0 }}
          >
            <View style={globalStyle.titleContainer}>
              <Text style={globalStyle.title}> Header 3 </Text>
            </View>
          </LinearGradient>
        </ScrollView>
      </View>
    )
  }
}

export default Menu3
