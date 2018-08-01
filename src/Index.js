/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    StatusBar
} from 'react-native';

import Drawer from './routes/stackNavigation';

const STATUSBAR = Platform === 'ios' ? null : 20;
export default class App extends Component {
    render() {
        return (

            <View style={{ flex: 1 }}>
                <StatusBar
                    backgroundColor='red'
                />
                <Drawer />
            </View >
        );
    }
}
