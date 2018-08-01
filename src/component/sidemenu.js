import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView, View, Text, Image } from 'react-native';
import { DrawerItems } from 'react-navigation';

const CustomDrawerContentComponent = (props) => (
    <View>
        <View style={{ height: 200, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                    ource={require('./ass.png')}

                style={{ height: 150, width: 150 }} />
        </View>
        <ScrollView>
            <SafeAreaView style={styles.container} forceInset={{ top: 'always', horizontal: 'never' }}>
                <DrawerItems {...props} />
            </SafeAreaView>
        </ScrollView>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
export default CustomDrawerContentComponent;