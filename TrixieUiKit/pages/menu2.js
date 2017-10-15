
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
import ButtonBordered from '../components/buttonBordered';
import ButtonPrimary from '../components/buttonPrimary';
import Pills from '../components/pills';
import PillPrimary from '../components/pillPrimary';
import ChatBubble from '../components/chatBubble';
import GridItem from '../components/gridItem';
import BottomNav from '../components/bottomNav';
import globalStyle from './style/style';
import InputField from '../components/input';
class Menu2 extends Component {
  constructor(props){
    super(props);
    this.handleBack = this.handleBack.bind(this);
    this.state = {
    }
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

  render = () => {

      return(
        <View style={globalStyle.container}>
          <ScrollView style={globalStyle.scrollContainer}>
          <LinearGradient style={globalStyle.header} colors={['#6F86D6','#48C6EF']} start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}>
            <View style={globalStyle.titleContainer}>
              <Text style={globalStyle.title}> Components </Text>
            </View>
          </LinearGradient>
           <View style={[globalStyle.marginTopValue]}>

             <View style={[globalStyle.profileCard,globalStyle.padding20]}>
                <Text style={[globalStyle.label]}> List of all componenets used </Text>
              </View>


                <Text style={globalStyle.nameLeft}>Buttons</Text>

               <ButtonBordered text = "Secondary Button"/>
               <ButtonPrimary text="Primary Button"/>

              <Text style={globalStyle.nameLeft}>Small buttons</Text>
              <View style={globalStyle.centreItems} >
                <Pills text="Pill button"/>
                <PillPrimary text="Pill button"/>


              </View>
                <Text style={globalStyle.nameLeft}>Conversation</Text>
                <View style={globalStyle.centreItems} >
                  <ChatBubble text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam fermentum, leo sed pharetra convallis, arcu elit tristique sem, quis ultrices nibh velit sed ante" />
                </View>

               <Text style={globalStyle.nameLeft}>Input</Text>
               <InputField placeholder="placeholder text" />

              <Text style={globalStyle.nameLeft}>Grid</Text>


              <View style={globalStyle.profileMetricsContainer}>
                 <GridItem value="25" title = "Title" />
                 <GridItem value="35" title = "Title" />
                 <GridItem value="45" title = "Title" />
                 <GridItem value="55" title = "Title" />
              </View>

            </View>
          </ScrollView>
           <BottomNav activeTab = "Menu2" onTabPress={this.redirect}/>
        </View>
      );
    }
}

export default Menu2
