import React from 'react';
import {
    FlatList,
    View,
    Text,
    Image,
    TouchableOpacity,


} from 'react-native';
import ToolBar1 from './ToolBar1';
import LoveToolbar from './LoveToolbar';

const Flatlists = (props) => {
    return (
        <FlatList
            refreshing={props.refreshing}
            onRefresh={() => props.onRefresh}
            ListHeaderComponent={() => props.ListHeaderComponent}
            data={props.data}
            renderItem={({ item }) => (
                <View style={{ flex: 1, backgroundColor: '#ffffff' }}>
                    <ToolBar1
                        image={item.urlToImage}
                        heading={item.author}
                    />
                    <TouchableOpacity onPress={() => props.navigation.navigate('Detail', {
                        data: item
                    })} >
                        <Image
                            source={{ uri: item.urlToImage }}
                            style={{ height: 360, width: '100%' }}
                        />
                    </TouchableOpacity>
                    <LoveToolbar />
                </View >
            )}

            keyExtractor={(item, index) => index}
        />
    )
}
export default Flatlists;