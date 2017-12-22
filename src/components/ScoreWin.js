import React, { Component } from 'react';
import {
  ActivityIndicator,
  View,
  Text,
} from 'react-native';
import { NavigationActions } from 'react-navigation'
import { Button } from 'react-native-elements';
import styles from '../styles/Styles';


const ScoreWin = ({state, navigation}) => {
    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [ NavigationActions.navigate({ routeName: 'App'})]
      })
    return  (
<View style={styles.container}>
    <Text>Congratulations this is a valid word</Text>
    <Text>"{state[0].senses[0].definition}"</Text>
    <View style={{backgroundColor: 'transparent'}}>
    <Button
        raised
        onPress={() => navigation.dispatch(resetAction)}
        buttonStyle={styles.playAgainButton}
        textStyle={{textAlign: 'center'}}
        title={`Play again`}
    />
    </View>
</View>
)}

export default ScoreWin