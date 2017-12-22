import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { connect } from 'react-redux'
import { Button, Card } from 'react-native-elements';
import styles from '../styles/Styles';
import { addLetter, resetWord } from '../actions';
import Letter from '../components/Letter'
let {width, height} = Dimensions.get('window')

const mapStateToProps = (state) => (
{
    word: state.word
})

const mapDispatchToProps = dispatch => ({
    addLetter: (letter) => {
        dispatch(addLetter(letter))},
    resetWord: () => {dispatch(resetWord())}
})

class Play extends Component {
    resetWord = () => {
        this.props.resetWord()
    }

    componentWillMount() {
        this.resetWord()
    }

    render() {
        const navigation = this.props.navigation
        return (
            <View style={styles.container}>
            <Card
                containerStyle={{ marginBottom: 20, width: width - 30}}
                title='The longest word'>
                <Text style={{marginBottom: 10, fontSize: 40, paddingVertical: 10 }}>
                    {this.props.word ? this.props.word : ' '}
                </Text>
            </Card>
                <Text></Text>
                <View style={styles.letters}>
                    <Letter word={this.props.word} setWord={this.props.addLetter}/>
                    <Letter word={this.props.word} setWord={this.props.addLetter}/>
                    <Letter word={this.props.word} setWord={this.props.addLetter}/>
                    <Letter word={this.props.word} setWord={this.props.addLetter}/>
                    <Letter word={this.props.word} setWord={this.props.addLetter}/>
                    <Letter word={this.props.word} setWord={this.props.addLetter}/>
                    <Letter word={this.props.word} setWord={this.props.addLetter}/>
                    <Letter word={this.props.word} setWord={this.props.addLetter}/>
                    <Letter word={this.props.word} setWord={this.props.addLetter}/>
                    <Letter word={this.props.word} setWord={this.props.addLetter}/>
                    <Letter word={this.props.word} setWord={this.props.addLetter}/>
                    <Letter word={this.props.word} setWord={this.props.addLetter}/>
                </View>
                <View style={{backgroundColor: 'transparent', marginTop: 10, flexDirection: 'row'}}>
                    <Button
                            raised
                            onPress={() => this.resetWord()}
                            buttonStyle={{backgroundColor: 'skyblue', borderRadius: 10}}
                            textStyle={{textAlign: 'center'}}
                            title={`Reset my word`}
                    />
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

export default connect(mapStateToProps, mapDispatchToProps)(Play)