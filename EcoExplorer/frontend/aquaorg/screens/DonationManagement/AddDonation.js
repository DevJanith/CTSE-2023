import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

const AddDonation = ({ navigation }) => {
  return (
    <View>
      <Text> Add Donation Page </Text>
      {/* <TouchableOpacity
              onPress={()=>{navigation.push('RecurringDonation')}}
                style={styles.submitButton}
               
              >
                <Text style={styles.btnText}>Recurring Donation</Text>
              </TouchableOpacity> */}

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate("RecurringDonation")}
      >
        <Text style={styles.btnText}>Recurring Donation </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => navigation.navigate("OneTimeDonation")}
      >
        <Text style={styles.btnText}>One Time Donation </Text>
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

export default AddDonation;
