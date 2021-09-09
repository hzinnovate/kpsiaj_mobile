import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
// import messaging from '@react-native-firebase/messaging';
// import database from '@react-native-firebase/database';
// console.log(database())
// console.log(messaging)

export default HomeComponent = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ textAlign: 'center', fontSize: 28 }}>
                    Hello World
                </Text>
            </View>
        </SafeAreaView>
    )
}