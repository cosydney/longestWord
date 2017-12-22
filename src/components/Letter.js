import React, { Component } from 'react';
import {
    Platform,
    Text,
    TouchableOpacity,
  } from 'react-native';
import styles from '../styles/Styles';

export default class Letter extends Component {
    state = {
        letter: '',
        disabled: false
    }

    random_character() {
        var chars = "ABCDEEFGHIIJKLMNOOPQRSTUUVWXYYZ";
        return chars.substr( Math.floor(Math.random() * 31), 1);
    }

    componentWillMount() {
        this.setState({letter: this.random_character()})
    }

    componentDidUpdate() {
        if (this.props.word == '') {
            if (this.state.disabled) {
                this.setState({disabled: false})
            }
        }
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