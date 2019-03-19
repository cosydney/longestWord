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
            timeLeft: 60,
            id: []
        };
      }

    resetWord = () => {
        this.props.resetWord()
        this.setState({id: []})
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
        setInterval(() => {
            this.setState(previousState => {
              return { timeLeft: previousState.timeLeft - 1 };
            });
          }, 1000);
    }

    isDisabled = (id) => {
        let disabled
        this.state.id.includes(id) ? disabled = true : disabled = false;
        return disabled
    }

    render() {
        console.disableYellowBox = true;
        data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
        const navigation = this.props.navigation
        if (this.state.timeLeft == 0) {
            navigation.navigate('Score')
        }
        const props = this.props
        return (
            <View style={[styles.container, {paddingTop: 10}]}>
            <Text>Timer: {this.state.timeLeft}</Text>
            <Card
                containerStyle={{ marginBottom: 20, width: width - 30}}
                title='The longest word'>
                <Text style={{position: 'relative', top: -48, right: -250, color:'grey'}}>Timer: {this.state.timeLeft}</Text>            
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
                {data.map((element, index) => {
                    return (
                    <Letter 
                    key={index} 
                    id={index} 
                    disabled={this.isDisabled(index)} 
                    addId={this.addId} 
                    word={props.word} 
                    setWord={props.addLetter}/>
                    )
                })}                    
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