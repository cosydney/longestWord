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
            timeLeft: 15,
            id: []
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

    addId = (id) => {
        arr = this.state.id
        arr.push(id)
        this.setState({id: arr})
    }

    deleteId = () => {
        arr = this.state.id
        arr.pop()
        this.setState({id: arr
        })
    }

    correctWord = () => {
        this.props.correctWord()
        this.deleteId()
    } 
    
    componentWillMount() {
        this.resetWord()
    }

    isDisabled = (id) => {
        if (this.state.id.includes(id)) {
            return true
        } else {
            return false
        }
    }

    render() {
        const navigation = this.props.navigation
        if (this.state.timeLeft == 0) {
            navigation.navigate('Score')
        }
        const props = this.props
        return (
            <View style={styles.container}>
            <Text>Timer: {this.state.timeLeft}</Text>
            <Card
                containerStyle={{ marginBottom: 20, width: width - 30}}
                title='The longest word'>
                <Text style={styles.wordInput}>
                    {this.props.word ? this.props.word : ' '}
                </Text>
                <View style={styles.correctButton}>
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
                    <Letter id={1} disabled={this.isDisabled(1)} addId={this.addId} word={props.word} setWord={props.addLetter}/>
                    <Letter id={2} disabled={this.isDisabled(2)} addId={this.addId} word={props.word} setWord={props.addLetter}/>
                    <Letter id={3} disabled={this.isDisabled(3)} addId={this.addId} word={props.word} setWord={props.addLetter}/>
                    <Letter id={4} disabled={this.isDisabled(4)} addId={this.addId} word={props.word} setWord={props.addLetter}/>
                    <Letter id={5} disabled={this.isDisabled(5)} addId={this.addId} word={props.word} setWord={props.addLetter}/>
                    <Letter id={6} disabled={this.isDisabled(6)} addId={this.addId} word={props.word} setWord={props.addLetter}/>
                    <Letter id={7} disabled={this.isDisabled(7)} addId={this.addId} word={props.word} setWord={props.addLetter}/>
                    <Letter id={8} disabled={this.isDisabled(8)} addId={this.addId} word={props.word} setWord={props.addLetter}/>
                    <Letter id={9} disabled={this.isDisabled(9)} addId={this.addId} word={props.word} setWord={props.addLetter}/>
                    <Letter id={10} disabled={this.isDisabled(10)} addId={this.addId} word={props.word} setWord={props.addLetter}/>
                    <Letter id={11} disabled={this.isDisabled(11)} addId={this.addId} word={props.word} setWord={props.addLetter}/>
                    <Letter id={12} disabled={this.isDisabled(12)} addId={this.addId} word={props.word} setWord={props.addLetter}/>
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