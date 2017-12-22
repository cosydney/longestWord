import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux'
import { Button } from 'react-native-elements';
import styles from '../styles/Styles';
import Activity from '../components/Activity';
import ScoreWin from '../components/ScoreWin';
import ScoreLoose from '../components/ScoreLoose';

const apiLink = 'http://api.pearson.com/v2/dictionaries/ldoce5/entries?search='

class Score extends Component {  
    state ={
        isLoading: true,
        result: []
    }

    componentWillMount() {
        return fetch(apiLink + this.props.word)
        .then((response) => {
            return response.json();
        })
        .then((responseJson) => {
            this.setState({result: responseJson.results, isLoading: false})
            return responseJson;
        })
        .catch((error) => {
            console.error(error);
        });
    }

    render() {
    if (this.state.isLoading) {
        return ( <Activity /> )
    } else {
        if (this.state.result.length > 0) {
            return (
                <ScoreWin 
                state={this.state.result}
                navigation={this.props.navigation}/>
            )
        }
        else {
            return (
                <ScoreLoose 
                navigation={this.props.navigation} />
            )
            }
        }    
    }
}

const mapStateToProps = (state) => ({
    word: state.word
})

export default connect(mapStateToProps)(Score)