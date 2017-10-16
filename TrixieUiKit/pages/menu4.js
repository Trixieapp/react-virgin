
import React, {
  Component
} from 'react';
import ReactNative, {
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight
} from 'react-native';
import backAndroid, {
  hardwareBackPress,
  exitApp
} from 'react-native-back-android';
import LinearGradient from 'react-native-linear-gradient';

import BottomNav from '../components/bottomNav';
import Loader from '../components/loader';
import globalStyle from './style/style';

class Menu4 extends Component {
  constructor(props){
    super(props);
    this.handleBack = this.handleBack.bind(this);
    this.state = {};
  }
  static navigationOptions = {
    header: null,
  };

  handleBack = () => {
    const { goBack } = this.props.navigation;
    goBack(this.props.navigation.state.key);
  }

  handleHardwareBackPress = () => {
    const { navigate } = this.props.navigation;
    exitApp()
    return true
  };

  redirect = (routeName) => {
    const { navigate } = this.props.navigation;
    navigate(routeName)
  }

  render() {
      return(
        <Loader/>
      );
    }
}

export default Menu4
