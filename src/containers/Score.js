import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { NavigationActions } from 'react-navigation'
import { Button } from 'react-native-elements';

export default class Score extends Component {  
    render() {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [ NavigationActions.navigate({ routeName: 'App'})]
          })
        const navigation = this.props.navigation
        return (
            <View>
            <Button
                raised
                onPress={() => navigation.dispatch(resetAction)}
                buttonStyle={{backgroundColor: 'red', borderRadius: 10}}
                textStyle={{textAlign: 'center'}}
                title={`Welcome to\nReact Native Elements`}
             />

                <Text>I'm the Score container</Text>
            </View>
        )
    }
}