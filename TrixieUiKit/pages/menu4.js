
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
let globalStyle = require('./style/style');
class Menu4 extends Component {
  constructor(props){
    super(props);
    this.handleBack = this.handleBack.bind(this);
    this.state = {
    }
  }
  static navigationOptions = {
    header: null,
  };

  handleBack(){
    const { goBack } = this.props.navigation;
    goBack(this.props.navigation.state.key);
  }

  handleHardwareBackPress = () => {
    const { navigate } = this.props.navigation;
    exitApp()
    return true
  };

  redirect(routeName) {
    const { navigate } = this.props.navigation;
    navigate(routeName)
  }

  componentWillMount() {

  }

  render() {
      return(
        <View style={globalStyle.container}>
          <ScrollView style={globalStyle.scrollContainer}>
          <LinearGradient style={globalStyle.header} colors={['#6F86D6','#48C6EF']} start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}>
            <View style={globalStyle.titleContainer}>
              <Text style={globalStyle.title}> Header 4 </Text>
            </View>
          </LinearGradient>
          </ScrollView>
          <BottomNav activeTab = "Menu4" parentthis={this}/>
        </View>
      );
    }
}

export default Menu4
