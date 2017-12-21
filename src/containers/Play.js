import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { Button } from 'react-native-elements';
import styles from '../styles/Styles';

class Letter extends Component {
    state = {
        letter: '',
        disabled: false
    }

    random_character() {
        var chars = "ABCDEEFGHIIJKLMNOOPQRSTUUVWXYZ";
        return chars.substr( Math.floor(Math.random() * 30), 1);
    }

    componentWillMount() {
        this.setState({letter: this.random_character()})
    }

    render() {
        return (
            <TouchableOpacity 
                style={[styles.letterTouch, this.state.disabled ? styles.disabled : null]}
                disabled={this.state.disabled}
                onPress={() => {
                    this.props.setWord(this.state.letter),
                    this.setState({disabled: true})
                    }
                }
                >
                <Text style={styles.letterText}> {this.state.letter} </Text>
            </TouchableOpacity>
        )
    }
}

export default class Play extends Component {
    state = {
        word: ''
    }

    setWord = (letter) => {
        let word = this.state.word + letter
        this.setState({word})
    }

    render() {
        const navigation = this.props.navigation
        return (
            <View style={styles.container}>
                <Text>{this.state.word}</Text>
                <View style={styles.letters}>
                    <Letter setWord={this.setWord}/>
                    <Letter setWord={this.setWord}/>
                    <Letter setWord={this.setWord}/>
                    <Letter setWord={this.setWord}/>
                    <Letter setWord={this.setWord}/>
                    <Letter setWord={this.setWord}/>
                    <Letter setWord={this.setWord}/>
                    <Letter setWord={this.setWord}/>
                    <Letter setWord={this.setWord}/>
                    <Letter setWord={this.setWord}/>
                    <Letter setWord={this.setWord}/>
                    <Letter setWord={this.setWord}/>
                </View>
                <View style={{backgroundColor: 'transparent', marginTop: 10}}>
                    <Button
                        raised
                        onPress={() => navigation.navigate('Score')}
                        buttonStyle={{backgroundColor: 'skyblue', borderRadius: 10}}
                        textStyle={{textAlign: 'center'}}
                        title={`Validate my word`}
                    />
                </View>
             </View>
        )
    }
}
