import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { TextInput } from 'react-native-paper';

const AddDetails = () => {
    return (
        <View>
            <TextInput
                mode="outlined"
                activeOutlineColor="#015C92"
                label="Full Name"
                style={[styles.inputField, styles.inputFieldsmall]}
            />
            <TextInput
                mode="outlined"
                activeOutlineColor="#015C92"
                label="Email Address"
                style={[styles.inputField, styles.inputFieldsmall]}
            />
            <TextInput
                mode="outlined"
                activeOutlineColor="#015C92"
                label="Contact"
                style={[styles.inputField, styles.inputFieldsmall]}
            />
            <TextInput
                mode="outlined"
                activeOutlineColor="#015C92"
                label="Amount"
                style={[styles.inputField, styles.inputFieldsmall]}
            />

            <TouchableOpacity
                style={styles.submitButton}
                onPress={() => console.log("ssd")}
            >
                <Text style={styles.btnText}> Payment </Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({

    inputField: {
        marginVertical: 10,
    },
    inputFieldsmall: {
        minWidth: 200,
    },
    submitButton: {
        backgroundColor: "#015C92",
        marginTop: 10,
        marginBottom: 30,
        alignSelf: "center",
        textAlign: "center",
        borderRadius: 30,
        width: 300,
        height: 50,
    },
    btnText: {
        textAlign: "center",
        fontSize: 20,
        fontWeight: "700",
        color: "white",
        marginTop: 7,
    },
})

export default AddDetails;
