import React from 'react';
import { View, Text, Image } from 'react-native';
import ToolBar from '../component/Toolbar';
import AboutToolbar from '../AboutToolbar';

export default class DetailScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
    render() {
        const { navigation } = this.props;
        const data = navigation.getParam('data', 'NO-ID');

        return (
            <View style={{ flex: 1 }}>
                <View>

                    <AboutToolbar navigation={this.props.navigation}
                        heading={data.title}
                    />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', paddingTop: 30, padding: 50 }}>
                    <Image
                        source={{ uri: data.urlToImage }}
                        style={{ height: 200, width: 200, paddingBottom: 10 }}
                    />

                    <Text>
                        {data.title}
                    </Text>
                    <Text>
                        {data.description}
                    </Text>
                </View>

            </View>
        )
    }
}