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
import { addLetter, resetWord, correctWord } from '../actions';
import Letter from '../components/Letter'
let {width, height} = Dimensions.get('window')

const mapStateToProps = (state) => (
{
    word: state.word
})

const mapDispatchToProps = dispatch => ({
    addLetter: (letter) => { dispatch(addLetter(letter))},
    correctWord: () => { dispatch(correctWord())},    
    resetWord: () => {dispatch(resetWord())}
})

class Play extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timeLeft: 15
        };
    
        // setInterval(() => {
        //   this.setState(previousState => {
        //     return { timeLeft: previousState.timeLeft - 1 };
        //   });
        // }, 1000);
      }

    resetWord = () => {
        this.props.resetWord()
    }

    correctWord = () => {
        this.props.correctWord()
        // str = str.substring(0, str.length - 1);
    } 
    
    componentWillMount() {
        this.resetWord()
    }

    render() {
        const navigation = this.props.navigation
        if (this.state.timeLeft == 0) {
            navigation.navigate('Score')
        }
        return (
            <View style={styles.container}>
            <Text>Timer: {this.state.timeLeft}</Text>
            <Card
                containerStyle={{ marginBottom: 20, width: width - 30}}
                title='The longest word'>
                <Text style={{marginBottom: 10, fontSize: 40, paddingVertical: 10 }}>
                    {this.props.word ? this.props.word : ' '}
                </Text>
                <View style={{backgroundColor: 'transparent', margin: 10, position: 'absolute', top: 50, right: -30}}>
                    <Button
                        raised
                        onPress={() => this.correctWord()}
                        buttonStyle={{backgroundColor: 'skyblue', borderRadius: 10}}
                        textStyle={{textAlign: 'center'}}
                        title={`<`}
                    />
                </View>
            </Card>
                <View style={styles.letters}>
                    <Letter id={1} word={this.props.word} setWord={this.props.addLetter}/>
                    <Letter id={2} word={this.props.word} setWord={this.props.addLetter}/>
                    <Letter id={3} word={this.props.word} setWord={this.props.addLetter}/>
                    <Letter id={4} word={this.props.word} setWord={this.props.addLetter}/>
                    <Letter id={5} word={this.props.word} setWord={this.props.addLetter}/>
                    <Letter id={6} word={this.props.word} setWord={this.props.addLetter}/>
                    <Letter id={7} word={this.props.word} setWord={this.props.addLetter}/>
                    <Letter id={8} word={this.props.word} setWord={this.props.addLetter}/>
                    <Letter id={9} word={this.props.word} setWord={this.props.addLetter}/>
                    <Letter id={10} word={this.props.word} setWord={this.props.addLetter}/>
                    <Letter id={11} word={this.props.word} setWord={this.props.addLetter}/>
                    <Letter id={12} word={this.props.word} setWord={this.props.addLetter}/>
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