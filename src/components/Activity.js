import React, { Component } from 'react';
import {
  ActivityIndicator,
  View,
} from 'react-native';
import styles from '../styles/Styles';

const Activity = () => (
    <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="skyblue" />
    </View>
)

export default Activity