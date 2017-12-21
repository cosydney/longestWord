import React from 'react';
import { StackNavigator } from 'react-navigation';
import App from '../containers/App'
import Play from '../containers/Play'
import Score from '../containers/Score'

const RootNavigator = StackNavigator({
    App: {
        screen: App,
        navigationOptions: {
            headerTitle: 'App',
          },
    },
    Play: {
        screen: Play,
        navigationOptions: {
            headerTitle: 'Play',
          },
    },
    Score: {
        screen: Score,
        navigationOptions: {
            headerTitle: 'Score',
          },
    }
});

export default RootNavigator;