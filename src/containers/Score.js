import React, { Component } from 'react';
import {
  Platform,
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
                <Text>I'm the Score container</Text>
                <Button
                    raised
                    onPress={() => navigation.dispatch(resetAction)}
                    buttonStyle={{backgroundColor: 'skyblue', borderRadius: 10}}
                    textStyle={{textAlign: 'center'}}
                    title={`Welcome to\nReact Native Elements`}
                />
            </View>
        )
    }
}