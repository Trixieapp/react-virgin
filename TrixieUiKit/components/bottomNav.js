/* eslint-disable global-require */
import React, {
  Component,
} from 'react';
import PropTypes from 'prop-types';
import {
  View,
} from 'react-native';
import MenuItem from './menuItem';

import componentStyle from './style/component';

const tabList = [
  {
    text: ' Menu1 ',
    redirectLink: 'home',
    id: 'home',
    image: require('../Thumbnails/play-button-small.png'),
    selectionImage: require('../Thumbnails/play-button-selected.png'),
  },
  {
    text: ' Menu2 ',
    redirectLink: 'menu2',
    id: 'Menu2',
    image: require('../Thumbnails/settings.png'),
    selectionImage: require('../Thumbnails/settings-selected.png'),
  },
  {
    text: ' Menu3 ',
    redirectLink: 'menu3',
    id: 'Menu3',
    image: require('../Thumbnails/user.png'),
    selectionImage: require('../Thumbnails/user-selected.png'),
  },
  {
    text: ' Menu4 ',
    redirectLink: 'menu4',
    id: 'Menu4',
    image: require('../Thumbnails/settings.png'),
    selectionImage: require('../Thumbnails/settings-selected.png'),
  },
];

class BottomNav extends Component {
  static propTypes = {
    activeTab: PropTypes.string,
    onTabPress: PropTypes.func,
  }

  static defaultProps = {
    activeTab: 'home',
    onTabPress: () => {},
  }

  renderTabs = (tab) => {
    const { activeTab, onTabPress } = this.props;
    return (
      <MenuItem
        text={tab.text}
        selected={tab.id === activeTab}
        selectionImage={tab.selectionImage}
        image={tab.image}
        redirectLink={tab.redirectLink}
        onPress={onTabPress}
        key={tab.id}
      />
    );
  }
  render = () => (
    <View style={componentStyle.footerWrapper}>
      {tabList.map(this.renderTabs)}
    </View>
  )
}

export default BottomNav;
