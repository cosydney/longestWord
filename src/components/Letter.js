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
    }

    randomCharacter() {
        var chars = "ABCDEEEFGHIIIJKLMNOOOPQRSTUUUVWXYYYZ";
        return chars.substr( Math.floor(Math.random() * 36), 1);
    }

    componentWillMount() {
        this.setState({letter: this.randomCharacter()})
    }

    render() {
        return (
            <TouchableOpacity 
                style={[styles.letterTouch, this.props.disabled ? styles.disabled : null]}
                disabled={this.props.disabled}
                onPress={() => {
                    this.props.setWord(this.state.letter),
                    this.setState({disabled: true})
                    this.props.addId(this.props.id)
                    }
                }
                >
                <Text style={styles.letterText}> {this.state.letter} </Text>
            </TouchableOpacity>
        )
    }
}