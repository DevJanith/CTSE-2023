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

const AddDonation = ({ navigation }) => {
  // const { userDetails } = useContext(AuthContext);

  const [name, setName] = useState();
  const [location, setLocation] = useState();
  const [contactNo, setContactNo] = useState();
  const [email, setEmail] = useState();
  const [amount, setAmount] = useState();
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);

  // validations
  const [checkValidaName, setCheckValidName] = useState(false);
  const [checkValidaLocation, setCheckValidLocation] = useState(false);
  const [checkValidaContactNo, setCheckValidContactNo] = useState(false);
  const [checkValidaEmail, setCheckValidEmail] = useState(false);
  const [checkValidaAmount, setCheckValidAmount] = useState(false);

  const [tag, setTag] = useState();

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Empty");
  const [visible, setVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  function addToTags() {
    if (tag) {
      let existingTags = tags;

      setTag("");

      existingTags.push(tag);
      setTags(existingTags);
      console.log(existingTags);
    }
  }
  const onDismissSnackBar = () => setVisible(false);

  const SubmitDonation = () => {
    handleCheckName(name);
    handleCheckLocation(location);
    handleCheckContactNo(contactNo);
    handleCheckEmail(email);
    handleCheckAmount(amount);

    console.log(checkValidName);

    if (name && location && contactNo && email && amount) {
      setLoading(true);
      // get this user id from login
      let userID = userDetails._id;
      const data = {
        user: userID,
        name: name,
        location: location,
        contactNo: contactNo,
        email: email,
        amount: amount,
        tags: tags,
      };

      console.log(data);

      aquaOrgAPI
        .post("donation", data)
        .then((response) => {
          setLoading(false);
          if (response.status == 200) {
            setVisible(true);
            setSnackbarMessage("Donation Added Succsesfully!");
            navigation.navigate("AllDonation", { reloadVal: Math.random() });
          } else {
            setVisible(true);
            setSnackbarMessage("Failed to add Donation.");
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
      if (!contactNo) {
        setCheckValidContactNo(true);
      }
      if (!email) {
        setCheckValidEmail(true);
      }
      if (!amount) {
        setCheckValidAmount(true);
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
  function handleCheckContactNo(text) {
    if (text) {
      setCheckValidContactNo(false);
    } else {
      setCheckValidContactNo(true);
    }
  }
  function handleCheckEmail(text) {
    if (text) {
      setCheckValidEmail(false);
    } else {
      setCheckValidEmail(true);
    }
  }
  function handleCheckAmount(text) {
    if (text) {
      setCheckValidAmount(false);
    } else {
      setCheckValidAmount(true);
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
            label="Enter Your ContactNo"
            style={styles.inputField}
            value={contactNo}
            onChangeText={(text) => {
              setContactNo(text);
              handleCheckContactNo(text);
            }}
          />
          {checkValidaContactNo ? (
            <Text style={styles.textFailed}>*ContactNo field is required</Text>
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
            label="Enter Your Amount"
            style={styles.inputField}
            value={amount}
            onChangeText={(text) => {
              setAmount(text);
              handleCheckAmount(text);
            }}
          />
          {checkValidaAmount ? (
            <Text style={styles.textFailed}>*Amount field is required</Text>
          ) : (
            <Text style={styles.textFailed}></Text>
          )}
        </View>

        
        <View style={{ flexDirection: "row", marginTop: 2, marginBottom: 10 }}>
          {tags.map((item, key) => (
            <Chip
              // icon="information"
              textStyle={{
                fontWeight: "800",
              }}
              style={styles.chip}
              mode="flat"
              selectedColor="#443F3F"
              key={key}
            >
              {item}
            </Chip>
          ))}
        </View>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => SubmitDonation()}
        >
          <Text style={styles.btnText}> Submit Donation</Text>
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

export default AddDonation;

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
  addTagsBtn: {
    backgroundColor: "",
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
