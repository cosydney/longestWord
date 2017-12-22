import { StyleSheet, } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
    letterTouch: {
        width: 75,
        height: 75,
        margin: 6,
        borderRadius: 10,
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    disabled: {
        width: 75,
        height: 75,
        margin: 6,
        backgroundColor: 'lightgreen',
        justifyContent: 'center',
        alignItems: 'center',
    },
    letters: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: 30,
    },
    letterText: {
        fontSize: 40,
    },
    playAgainButton: {
        backgroundColor: 'skyblue',
        borderRadius: 10,
        marginTop: 20
    }
  })
  ;
  
  export default styles