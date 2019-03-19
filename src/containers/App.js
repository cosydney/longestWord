import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';
import { Button } from 'react-native-elements';
import styles from '../styles/Styles';

export default class App extends Component {
  render() {
    const navigation = this.props.navigation
    console.disableYellowBox = true;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the longest word game!
        </Text>
        <Text style={styles.instructions}>
        - Find the longest word as possible to gain points 
        </Text>
        <Text style={styles.instructions}>
        - 12 random letters will be given to you
        </Text>
        <Text style={styles.instructions}>
        - You have 60 seconds to find the longest word
        </Text>
        <View style={{marginTop: 20, backgroundColor: 'transparent'}}>
          <Button
            raised
            onPress={() => navigation.navigate('Play')}
            icon={{name: 'games', size: 32}}
            buttonStyle={{backgroundColor: 'skyblue', borderRadius: 10, marginTop: 20}}
            textStyle={{textAlign: 'center'}}
            title={`Play`}
          />
        </View>
      </View>
    );
  }
}
