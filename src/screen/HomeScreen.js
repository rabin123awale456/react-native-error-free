import React from 'react';
import { ActivityIndicator, View, Text } from 'react-native';
import Flatlists from '../component/Flatlists';
import Toolbar from '../component/Toolbar';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
    constructor() {
        super();
        this.state = {
            data: [],
            loading: true,
            refreshing: true
        }
    }
    componentDidMount() {
        this.fetchapi();
    }
    onRefresh = () => {
        // return (
        this.fetchap();

    }
    fetchapi = () => {
        const url = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=2a5edf88e76845559a0c7016de7150ee";
        fetch(url, {
            method: "GET"
        })
            .then((response) => response.json())
            .then((data) => this.setState({ data: data.articles, loading: false, refreshing: false }))
            .catch((error) => console.log('error', error))
    }


    render() {
        return (
            <View style={{ flex: 1 }}>
                <Toolbar navigation={this.props.navigation}
                />
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    {this.state.loading === true ?
                        <ActivityIndicator
                            size="large"
                            animating={this.state.loading}
                        /> : null
                    }
                </View>
                <View>
                    < Flatlists
                        ListHeaderComponent={(<View><Text>Recommended Item</Text></View>)}
                        data={this.state.data}
                        navigation={this.props.navigation}
                        refreshing={this.state.refreshing}
                        onRefresh={() => onRefresh()}
                    />
                </View>
            </View>

        )
    }
}