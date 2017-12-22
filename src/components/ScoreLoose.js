import React, { Component } from 'react';
import {
  ActivityIndicator,
  View,
  Text,
} from 'react-native';
import { NavigationActions } from 'react-navigation'
import { Button } from 'react-native-elements';
import styles from '../styles/Styles';

const ScoreLoose = ({navigation}) => {
    const resetAction = NavigationActions.reset({
        index: 0,
        actions: [ NavigationActions.navigate({ routeName: 'App'})]
      })
    return  (
    <View style={styles.container}>
        <Text>Looser your word is not a real one</Text>
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

export default ScoreLoose