import React, {
  Component
} from 'react';
import ReactNative, {
  Image,
  Text,
  View
} from 'react-native';

import componentStyle from './style/component';

class Loader extends Component {
  
  render = () => {
    return(
      <View style={componentStyle.container}>
        <Image style={componentStyle.loading} source={require('../Thumbnails/loading.gif')} />
        <Text style={[componentStyle.title]}>Your loading message</Text>
      </View>
    );
  }
}

export default Loader
