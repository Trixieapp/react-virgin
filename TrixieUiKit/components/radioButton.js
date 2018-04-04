import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'

import RadioForm from 'react-native-simple-radio-button'
import componentStyle from './style/component'

class RadioButtonRound extends Component {
  static defaultProps = {
    header: '',
    types: [],
    initialValue: '',
  }

  static propTypes = {
    header: PropTypes.string,
    types: PropTypes.arrayOf(PropTypes.shape),
    initialValue: PropTypes.number,
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  render = () => {
    const { header, types, initialValue } = this.props
    return (
      <View style={componentStyle.centreItems}>
        <Text> {header} </Text>
        <RadioForm
          radio_props={types}
          initial={initialValue}
          formHorizontal
          labelHorizontal={false}
          buttonColor="#2196f3"
          animation
          onPress={value => {
            console.log(value)
          }}
        />
      </View>
    )
  }
}

export default RadioButtonRound
