import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class AboutToolbar extends React.Component {

    constructor() {
        super();
        this.state = {

            status: false
        }
    }

    searchTexbox = () => {
        this.state.status === false ?
            this.setState({ status: true })
            :
            this.setState({ status: false })
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={{ flex: 2 }}>

                        <Icon name="angle-left" size={30} color="#900" onPress={() => this.props.navigation.push('Home')} />

                    </View>

                    <View style={{ flex: 5 }}>
                        <Text>{this.props.heading}</Text>
                    </View>

                    <View style={{ flex: 1, paddingRight: 15 }}>

                        <Icon name="search" size={30} color="#900" onPress={() => this.searchTexbox()} />
                    </View>

                    <View style={{ flex: 1 }}>

                        <Icon name="bell" size={30} color="#900" />
                    </View>

                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 65,
        backgroundColor: '#EDEFF1',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 5,
        borderBottomColor: 'grey',
    }
})