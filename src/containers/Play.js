import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button } from 'react-native-elements';

export default class Play extends Component {
    render() {
        const navigation = this.props.navigation
        return (
            <View>
             <Text>I'm the play container</Text>
             <Button
                raised
                onPress={() => navigation.navigate('Score')}
                buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
                textStyle={{textAlign: 'center'}}
                title={`Welcome to\nReact Native Elements`}
             />
             </View>
        )
    }
}