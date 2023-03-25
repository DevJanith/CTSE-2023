import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 5,
        backgroundColor: "black"
    }
});

export default function ScreenContainer({ children }) {
    return (
        <View style={styles.container}>{children}</View>
    )
}