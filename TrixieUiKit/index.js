import React, {
  Component,
} from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { AppRegistry, Image } from 'react-native';

import Home from './pages/home';
import Menu2 from './pages/menu2';
import Menu3 from './pages/menu3';
import Menu4 from './pages/menu4';
import componentStyle from './components/style/component';
import { BottomNav } from './components';

/* eslint-disable global-require */
const tabList = [
  {
    text: ' Menu1 ',
    redirectLink: 'home',
    id: 'home',
    image: require('./Thumbnails/play-button-small.png'),
    selectionImage: require('./Thumbnails/play-button-selected.png'),
  },
  {
    text: ' Menu2 ',
    redirectLink: 'menu2',
    id: 'Menu2',
    image: require('./Thumbnails/settings.png'),
    selectionImage: require('./Thumbnails/settings-selected.png'),
  },
  {
    text: ' Menu3 ',
    redirectLink: 'menu3',
    id: 'Menu3',
    image: require('./Thumbnails/user.png'),
    selectionImage: require('./Thumbnails/user-selected.png'),
  },
  {
    text: ' Menu4 ',
    redirectLink: 'menu4',
    id: 'Menu4',
    image: require('./Thumbnails/settings.png'),
    selectionImage: require('./Thumbnails/settings-selected.png'),
  },
];

const HomeStack = StackNavigator({
  Home: {
    screen: Home,
  },
});

const Menu2Stack = StackNavigator({
  Menu2: {
    screen: Menu2,
  },
});

const Menu3Stack = StackNavigator({
  Menu3: {
    screen: Menu3,
  },
});

const Menu4Stack = StackNavigator({
  Menu4: {
    screen: Menu4,
  },
});

const tabBarConfiguration = {
  tabBarOptions: {
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 1,
    },
  },
  tabBarPosition: 'bottom',
  tabBarComponent: BottomNav
};

const TrixieUiKitApp = TabNavigator({
  home: {
    screen: HomeStack,
    navigationOptions: {
      tabBarLabel: tabList[0].text,
      tabBarIcon: ({ focused, tintColor }) => (
        <Image
          style={componentStyle.footerIcons}
          source={focused ? tabList[0].selectionImage : tabList[0].image}
        />
      )
    }
  },
  menu2: {
    screen: Menu2Stack,
    navigationOptions: {
      tabBarLabel: tabList[1].text,
      tabBarIcon: ({ focused, tintColor }) => (
        <Image
          style={componentStyle.footerIcons}
          source={focused ? tabList[1].selectionImage : tabList[1].image}
        />
      )
    }
  },
  menu3: {
    screen: Menu3Stack,
    navigationOptions: {
      tabBarLabel: tabList[2].text,
      tabBarIcon: ({ focused, tintColor }) => (
        <Image
          style={componentStyle.footerIcons}
          source={focused ? tabList[2].selectionImage : tabList[2].image}
        />
      )
    }
  },
  menu4: {
    screen: Menu4Stack,
    navigationOptions: {
      tabBarLabel: tabList[3].text,
      tabBarIcon: ({ focused, tintColor }) => (
        <Image
          style={componentStyle.footerIcons}
          source={focused ? tabList[3].selectionImage : tabList[3].image}
        />
      )
    }
  }
}, tabBarConfiguration);

AppRegistry.registerComponent('TrixieUiKit', () => TrixieUiKitApp);
