import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { Button } from 'react-native-elements';
import styles from '../styles/Styles';

const mapStateToProps = (state) => (
{
    word: state.word
})

const apiLink = 'http://api.pearson.com/v2/dictionaries/ldoce5/entries?search='

class Score extends Component {  
    state ={
        isLoading: true
    }

    componentWillMount() {
        // console.log(apiLink + this.props.word);
        // return fetch(apiLink + this.props.word)
        // .then((response) => {
        //     response.json();
        //     console.log('====================================');
        //     console.log(response.json);
        //     console.log('====================================');
        // })
        // .then((responseJson) => {
        //   return responseJson;
        // })
        // .catch((error) => {
        //   console.error(error);
        // });
    }

    render() {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [ NavigationActions.navigate({ routeName: 'App'})]
          })
        const navigation = this.props.navigation
        return (
            <View style={styles.container}>
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

export default connect(mapStateToProps)(Score)