import React, {
  Component
} from 'react';

import ReactNative, {
  Text,
  View,
  ScrollView,
  Image,
  ListView,
  TouchableHighlight
} from 'react-native';

import backAndroid, {
  hardwareBackPress,
  exitApp
} from 'react-native-back-android';

import LinearGradient from 'react-native-linear-gradient';

import globalStyle from './style/style';
import { BottomNav } from '../components';

const createEllipses = (str) => str.length > 14 ? `${str.substring(0,11)}...` : str;

class Home extends Component {
  constructor(props){
    super(props);
    const dsVertical = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dsHorizonatl = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.handleBack = this.handleBack.bind(this);
    this.state = {
      dataSourceVertical: dsVertical.cloneWithRows(["Item 1","Item 2","Item 3"]),
      dataSourceHorizontal: dsHorizonatl.cloneWithRows(["Item 4","Item 5","Item 6"])
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

  redirect = (routeName) => {
    const { navigate } = this.props.navigation;
    navigate(routeName)
  }

  showHorizontalList() {
    return(
      <View  style={globalStyle.recentlyPlayed}>
        <Text style={[globalStyle.name,globalStyle.paddingLeftValue]}>Horizontal List</Text>
        <ListView
          horizontal={true}
          removeClippedSubviews={false}
          style={{flex:1}}
          dataSource={this.state.dataSourceHorizontal}
          renderRow={(rowData, sectionID, rowID)=> this.renderListRow(rowData, sectionID, rowID)}
        />
      </View>
    );
  }

  showVerticalList() {
    return(
      <ListView
        dataSource={this.state.dataSourceVertical}
        removeClippedSubviews={false}
        renderRow={(rowData, sectionID, rowID)=> this.renderRow(rowData, sectionID, rowID)}
      />
    );
  }

  renderRow(rowData: string, sectionID: number, rowID: number) {
    let name = rowData;
    return (
      <TouchableHighlight style={globalStyle.listItem} underlayColor='#f1f1f1'>
        <View>
          <View style={globalStyle.row}>
            <Image style={globalStyle.thumb} source={require('../Thumbnails/logo.png')}/>
            <View style={globalStyle.text}>
              <Text style={[globalStyle.name]}>
                {name}
              </Text>
            </View>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  renderListRow(rowData: string, sectionID: number, rowID: number) {
    let name = rowData;
    return (
      <TouchableHighlight underlayColor='#f1f1f1'>
          <View style={globalStyle.padding10}>
            <Image style={globalStyle.recentlyPlayedThumb} source={require('../Thumbnails/logo.png')}/>
            <Text
              style={[globalStyle.smallText,globalStyle.strong]}>
              { createEllipses(name) }
            </Text>
          </View>
      </TouchableHighlight>
    );
  }

  render() {
      return(
        <View style={globalStyle.container}>
          <ScrollView style={globalStyle.scrollContainer}>
            <LinearGradient style={globalStyle.header} colors={['#6F86D6','#48C6EF']} start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}}>
              <View style={globalStyle.titleContainer}>
                <Text style={globalStyle.title}> List Views </Text>
              </View>
            </LinearGradient>
            <View style={globalStyle.marginTopValue}>
              {this.showHorizontalList()}
              <Text style={globalStyle.nameLeft}>Vertical List</Text>
              {this.showVerticalList()}
            </View>
          </ScrollView>
          <BottomNav activeTab = "home" onTabPress={this.redirect}/>
        </View>
      );
    }
}

export default Home
