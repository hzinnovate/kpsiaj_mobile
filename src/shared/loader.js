import React from 'react'
import { ActivityIndicator, StyleSheet, View } from "react-native";
import {COLORS} from '../constants'
export const Loader = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={100} color={COLORS.yellow} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        position: 'absolute',
        backgroundColor: 'rgba(0,0,0,0.7)',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 500
    },
});