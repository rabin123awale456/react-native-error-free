import React from 'react';
import { View, Text } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import LikeCount from './LikeCount';

export default class LoveToolbar extends React.Component {
    constructor() {
        super();
        this.state = {
            color: 'grey',
            count: 0
        }
    }

    onPressheart = () => {
        this.state.color === 'grey' ?
            this.setState({
                color: 'red'
            })
            :

            this.setState({
                color: 'grey'
            }),
            this.state.color === 'grey' ?
                this.setState({ count: this.state.count + 1 }) :
                this.setState({ count: this.state.count - 1 })



    }


    render() {
        return (
            <View style={{ flex: 1 }}  >
                <View style={{ flexDirection: 'column' }}>
                    <View style={styles.container} >

                        <View style={{ flex: 1.5 }}>
                            <Text>
                                <Icon name="heart" size={30} color={this.state.color} onPress={() => this.onPressheart()} />
                            </Text>
                        </View>

                        <View style={{ flex: 1.5 }}>
                            <Text>
                                <Icon name="comment" size={30} color="#900" />
                            </Text>
                        </View>

                        <View style={{ flex: 7 }}>
                            <Text>
                                <Icon name="paper-plane" size={30} color="#900" />
                            </Text>
                        </View>

                        <View style={{ flex: 1 }}>
                            <Text>
                                <Icon name="bookmark" size={30} color="#900" />
                            </Text>

                        </View>
                    </View>
                </View>
                <View style={{ flex: 4 }}>


                    <LikeCount countheart={this.state.count} />
                </View>
            </View >
        );
    }
}
const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        backgroundColor: '#ffff',
        padding: 18
    }
}