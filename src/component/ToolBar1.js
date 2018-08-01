import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';




export default class ToolBar1 extends React.Component {
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <View style={{ flex: 2 }}>
                        <Image

                            source={{ uri: this.props.image }}
                            style={styles.roundedImage}
                        />
                    </View>

                    <View style={{ flex: 12 }}>
                        <Text>{this.props.heading}</Text>
                    </View>

                    <View style={{ flex: 1 }}>

                        <Icon name="ellipsis-v" size={24} color="grey" />
                    </View>

                </View>
                <View>

                </View>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 55,
        backgroundColor: '#EDEFF1',
        alignItems: 'center',
        padding: 5,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#EDEFF1',
    },
    roundedImage: {
        width: 30, height: 40, borderTopLeftRadius: 10,
        borderRadius: 20,
        borderTopLeftRadius: 20,
        overflow: 'hidden',

    }
})