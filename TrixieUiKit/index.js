import React, {
  Component
} from 'react';
import { AppRegistry } from 'react-native';
import Home from './pages/home';
import Menu2 from './pages/menu2';
import Menu3 from './pages/menu3';
import Menu4 from './pages/menu4';
import { StackNavigator } from 'react-navigation';
class TrixieUiKit extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    const { navigation } = this.props;
    return (
      <Home navigation={ navigation }/>
    );
  }
}

const TrixieUiKitApp = StackNavigator({
  home: { screen: Home },
  menu2: {screen: Menu2},
  menu3: {screen: Menu3},
  menu4: {screen: Menu4}
});


AppRegistry.registerComponent('TrixieUiKit', () => TrixieUiKitApp);
