import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons';


export default class LikeCount extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row' }}>
                <View style={styles.container}>
                    <Text style={{ fontSize: 20, color: 'red' }}>
                        {this.props.countheart}
                    </Text>
                </View>
            </View >
        )
    }
}
const styles = {
    container: {
        height: 55,
        backgroundColor: 'white',
        // alignItems: 'center',
        padding: 15,
        justifyContent: 'flex-start',
        flex: 1
    }
}