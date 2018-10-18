import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './Home.screen.style';
import TextArea from '../../components/TextArea/TextArea.component';

class Home extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text> Please enter your note here</Text>
        <TextArea />
      </View>
    );
  }
}

export default Home;