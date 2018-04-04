import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { exitApp } from 'react-native-back-android'
import LinearGradient from 'react-native-linear-gradient'

import globalStyle from './style/style'
import {
  ButtonBordered,
  ButtonPrimary,
  ChatBubble,
  GridItem,
  InputField,
  PillPrimary,
  Pills,
  RadioButtonRound,
} from '../components'

class Menu2 extends Component {
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

  render = () => {
    const types = [{ label: 'Label1', value: 0 }, { label: 'Label2', value: 1 }]
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
              <Text style={globalStyle.title}> Components </Text>
            </View>
          </LinearGradient>
          <View style={[globalStyle.marginTopValue]}>
            <View style={[globalStyle.profileCard, globalStyle.padding20]}>
              <Text style={[globalStyle.label]}> List of all components used </Text>
            </View>

            <Text style={globalStyle.nameLeft}>Buttons</Text>

            <ButtonBordered text="Secondary Button" />
            <ButtonPrimary text="Primary Button" />

            <Text style={globalStyle.nameLeft}>Small buttons</Text>
            <View style={globalStyle.centreItems}>
              <Pills text="Pill button" />
              <PillPrimary text="Pill button" />
            </View>
            <Text style={globalStyle.nameLeft}>Conversation</Text>
            <View style={globalStyle.centreItems}>
              <ChatBubble text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum, leo sed pharetra convallis, arcu elit tristique sem, quis ultrices nibh velit sed ante" />
            </View>

            <Text style={globalStyle.nameLeft}>Input</Text>
            <InputField placeholder="placeholder text" />

            <Text style={globalStyle.nameLeft}>Grid</Text>

            <View style={globalStyle.profileMetricsContainer}>
              <GridItem value="25" title="Title" />
              <GridItem value="35" title="Title" />
              <GridItem value="45" title="Title" />
              <GridItem value="55" title="Title" />
            </View>
            <View>
              <RadioButtonRound header="Radio button header" types={types} initialValue={0} />
            </View>
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default Menu2
