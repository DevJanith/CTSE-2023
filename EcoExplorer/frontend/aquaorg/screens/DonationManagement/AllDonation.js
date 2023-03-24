import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RecurringDonation = ({navigation}) => {
    return (
        <View>
           

            <TouchableOpacity
                style={styles.submitButton}
                onPress={() => navigation.navigate("AddDetails")}
            >
                <Text style={styles.btnText}> Daily </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.submitButton}
                onPress={() => navigation.navigate("AddDetails")}
            >
                <Text style={styles.btnText}> Weekly </Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.submitButton}
                onPress={() => navigation.navigate("AddDetails")}
            >
                <Text style={styles.btnText}> Monthly </Text>
            </TouchableOpacity>
           
            <TouchableOpacity
                style={styles.submitButton}
                onPress={() => navigation.navigate("AddDetails")}
            >
                <Text style={styles.btnText}> Yearly </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
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

export default RecurringDonation;




