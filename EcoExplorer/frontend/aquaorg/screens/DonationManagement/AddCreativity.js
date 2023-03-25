import {
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import React, { useContext, useState } from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import {
    TextInput,
    Button,
    FAB,
    IconButton,
    Chip,
    Snackbar,
  } from "react-native-paper";
  import DateTimePicker from "@react-native-community/datetimepicker";
  import axios from "axios";
  import baseURL from "../../store";
  import { AuthContext } from "../../context/context";
  import aquaOrgAPI from "../../api";
  
  const AddCreativity = ({ navigation }) => {
  
    const [name, setName] = useState();
    const [location, setLocation] = useState();
    const [email, setEmail] = useState();
    const [description, setDescription] = useState();
    
    const [loading, setLoading] = useState(false);
  
    // validations
    const [checkValidaName, setCheckValidName] = useState(false);
    const [checkValidaLocation, setCheckValidLocation] = useState(false);
    const [checkValidaEmail, setCheckValidEmail] = useState(false);
    const [checkValidaDescription, setCheckValidDescription] = useState(false);
    
  
    const [visible, setVisible] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");
  
    
  
   
    const onDismissSnackBar = () => setVisible(false);
  
    const SubmitCreativity = () => {
      handleCheckName(name);
      handleCheckLocation(location);
      handleCheckEmail(email);
      handleCheckDescription(description);
      
  
      if (name && location && email && description) {
        setLoading(true);
        const data = {
         
          name: name,
          location: location,
          email: email,
          description: description,
          
          
        };
  
        console.log(data);
  
        aquaOrgAPI
          .post("creativity", data)
          .then((response) => {
            setLoading(false);
            if (response.status == 200) {
              setVisible(true);
              setSnackbarMessage("Creativity Added Succsesfully!");
              navigation.navigate("AllCreativity", { reloadVal: Math.random() });
            } else {
              setVisible(true);
              setSnackbarMessage("Failed to add Creativity.");
            }
          })
          .catch((err) => {
            setLoading(false);
            console.log(err);
            setVisible(true);
            setSnackbarMessage("Something went wrong!");
          });
      } else {
        if (!name) {
          setCheckValidName(true);
        }
        if (!location) {
          setCheckValidLocation(true);
        }
       
        if (!email) {
          setCheckValidEmail(true);
        }
        if (!description) {
          setCheckValidDescription(true);
        }
       
        
      }
    };
  
    function handleCheckName(text) {
      if (text) {
        setCheckValidName(false);
      } else {
        setCheckValidName(true);
      }
    }
    function handleCheckLocation(text) {
      if (text) {
        setCheckValidLocation(false);
      } else {
        setCheckValidLocation(true);
      }
    }
    
    function handleCheckEmail(text) {
      if (text) {
        setCheckValidEmail(false);
      } else {
        setCheckValidEmail(true);
      }
    }
    function handleCheckDescription(text) {
      if (text) {
        setCheckValidDescription(false);
      } else {
        setCheckValidDescription(true);
      }
    }
   
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.formContainer}>
            <TextInput
              mode="outlined"
              activeOutlineColor="#015C92"
              label="Enter Your Name"
              style={styles.inputField}
              value={name}
              onChangeText={(text) => {
                setName(text);
                handleCheckName(text);
              }}
            />
            {checkValidaName ? (
              <Text style={styles.textFailed}>*Name field is required</Text>
            ) : (
              <Text style={styles.textFailed}></Text>
            )}
            <TextInput
              mode="outlined"
              label="Enter Your Location"
              activeOutlineColor="#015C92"
              value={location}
              style={styles.inputField}
              onChangeText={(text) => {
                setLocation(text);
                handleCheckLocation(text);
              }}
            />
            {checkValidaLocation ? (
              <Text style={styles.textFailed}>*Location field is required</Text>
            ) : (
              <Text style={styles.textFailed}></Text>
            )}
  
           
            <TextInput
              mode="outlined"
              activeOutlineColor="#015C92"
              label="Enter Your Email"
              style={styles.inputField}
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                handleCheckEmail(text);
              }}
            />
            {checkValidaEmail ? (
              <Text style={styles.textFailed}>*Email field is required</Text>
            ) : (
              <Text style={styles.textFailed}></Text>
            )}
            
            <TextInput
              mode="outlined"
              activeOutlineColor="#015C92"
              label="Enter Your Description"
              style={styles.inputField}
              value={description}
              onChangeText={(text) => {
                setDescription(text);
                handleCheckDescription(text);
              }}
            />
            {checkValidaDescription ? (
              <Text style={styles.textFailed}>*Description field is required</Text>
            ) : (
              <Text style={styles.textFailed}></Text>
            )}
           
          </View>
  
          
         
  
          <TouchableOpacity
            style={styles.submitButton}
            onPress={() => SubmitCreativity()}
          >
            <Text style={styles.btnText}> Submit Creativity</Text>
          </TouchableOpacity>
  
          <Snackbar
            visible={visible}
            onDismiss={onDismissSnackBar}
            action={{
              label: "Dismiss",
              onPress: () => {
                setVisible(false);
              },
            }}
          >
            {snackbarMessage}
          </Snackbar>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default AddCreativity;
  
  const styles = StyleSheet.create({
    formContainer: {
      padding: 5,
    },
  
    inputField: {
      marginVertical: 10,
    },
    inputFieldsmall: {
      minWidth: 200,
    },
    inputContainer: {
      flexDirection: "row",
    },
    textField: {
      fontSize: 16,
      marginRight: 10,
      marginTop: 3,
      marginLeft: 3,
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
  
    dateBtn: {
      width: 100,
    },
    chip: {
      backgroundColor: "#53A7DB",
      marginRight: 10,
    },
    btnText: {
      textAlign: "center",
      fontSize: 20,
      fontWeight: "700",
      color: "white",
      marginTop: 7,
    },
    textFailed: {
      marginTop: -10,
      color: "#D10000",
      fontWeight: "500",
    },
  });
  