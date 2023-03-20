import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
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

const EditEvent = ({ route, navigation }) => {
  const { userDetails } = useContext(AuthContext);

  const { item } = route.params;
  const [eventName, setEventName] = useState();
  const [oraganizer, setOrganizer] = useState();
  const [description, setDescription] = useState();
  const [eventDate, setEventDate] = useState();
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(false);

  // validations
  const [checkValidaEventName, setCheckValidEventName] = useState(false);
  const [checkValidaOrganizer, setCheckValidOrganizer] = useState(false);
  const [checkValidaDate, setCheckValidDate] = useState(false);
  const [checkValidaDescription, setCheckValidDescription] = useState(false);

  const [tag, setTag] = useState();

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [text, setText] = useState("Empty");
  const [visible, setVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const [seed, setSeed] = useState(1);
  const loadTags = () => {
    setSeed(Math.random());
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);

    let tempDate = new Date(currentDate);
    let fDate =
      tempDate.getDate() +
      "/" +
      (tempDate.getMonth() + 1) +
      "/" +
      tempDate.getFullYear();

    let fTime = tempDate.getHours() + ":" + tempDate.getMinutes();

    console.log(fDate + "+++" + fTime);
    setEventDate(fDate + " " + fTime);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  function addToTags() {
    let existingTags = tags;

    if (tag) {
      setTag("");

      existingTags.push(tag);
      setTags(existingTags);
      console.log(existingTags);
      loadTags();
    }
  }
  const onDismissSnackBar = () => setVisible(false);

  useEffect(() => {
    setEventName(item.name);
    setOrganizer(item.organizer);
    setEventDate(item.date);
    setDescription(item.description);
    setTags(item.tags);
  }, []);

  const updateEvent = () => {
    handleCheckDate(eventDate);
    handleCheckEventName(eventName);
    handleCheckDescription(description);
    handleCheckOrganizer(oraganizer);
    if (eventName && oraganizer && eventDate && description) {
      setLoading(true);
      // get this user id from login
      let userID = userDetails._id;
      const data = {
        user: userID,
        name: eventName,
        organizer: oraganizer,
        date: eventDate,
        description: description,
        tags: tags,
      };

      // console.log(data);
      axios
        .put(baseURL + "/aqua-org/events/" + item._id, data)
        .then((response) => {
          setLoading(false);
          if (response.status == 200) {
            setVisible(true);
            setSnackbarMessage("Event Updated Succsesfully!");
            navigation.navigate("YourEvents", { reloadVal: Math.random() });
          } else {
            setVisible(true);
            setSnackbarMessage("Failed to Update Event.");
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
          setVisible(true);
          setSnackbarMessage("Something went wrong!");
        });
    } else {
      if (!eventName) {
        setCheckValidEventName(true);
      }
      if (!eventDate) {
        setCheckValidDate(true);
      }
      if (!oraganizer) {
        setCheckValidOrganizer(true);
      }
      if (!description) {
        setCheckValidDescription(true);
      }
    }
  };

  // validations
  function handleCheckEventName(text) {
    if (text) {
      setCheckValidEventName(false);
    } else {
      setCheckValidEventName(true);
    }
  }
  function handleCheckOrganizer(text) {
    if (text) {
      setCheckValidOrganizer(false);
    } else {
      setCheckValidOrganizer(true);
    }
  }
  function handleCheckDate(text) {
    if (text) {
      setCheckValidDate(false);
    } else {
      setCheckValidDate(true);
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
            label="Enter Event Name"
            style={styles.inputField}
            value={eventName}
            onChangeText={(text) => {
              setEventName(text);
              handleCheckEventName(text);
            }}
          />
          {checkValidaEventName ? (
            <Text style={styles.textFailed}>*Event Name field is required</Text>
          ) : (
            <Text style={styles.textFailed}></Text>
          )}
          <TextInput
            mode="outlined"
            label="Enter Organizer Name"
            activeOutlineColor="#015C92"
            value={oraganizer}
            style={styles.inputField}
            onChangeText={(text) => {
              setOrganizer(text);
              handleCheckOrganizer(text);
            }}
          />
        </View>
        {checkValidaOrganizer ? (
          <Text style={styles.textFailed}>*Organizer field is required</Text>
        ) : (
          <Text style={styles.textFailed}></Text>
        )}

        <View style={styles.inputContainer}>
          <Text style={styles.textField}>Select Date and Time</Text>

          <View
            style={{
              marginRight: 10,
            }}
          >
            <Button
              uppercase={false}
              style={styles.dateBtn}
              mode="contained"
              color="#53A7DB"
              onPress={() => {
                showMode("date");
              }}
            >
              <Text style={{ color: "white" }}> Date</Text>
            </Button>
          </View>

          <View
            style={{
              marginRight: 10,
            }}
          >
            <Button
              uppercase={false}
              style={styles.dateBtn}
              mode="contained"
              color="#53A7DB"
              onPress={() => {
                showMode("time");
              }}
            >
              <Text style={{ color: "white" }}> TIme</Text>
            </Button>
          </View>

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          )}
        </View>

        <TextInput
          mode="outlined"
          label="Event Date and Time"
          activeOutlineColor="#015C92"
          value={eventDate}
          style={styles.inputField}
          disabled={true}
          onChangeText={(text) => setEventDate(text)}
        />

        <TextInput
          mode="outlined"
          multiline={true}
          activeOutlineColor="#015C92"
          label="Enter Description about Event... "
          style={styles.inputField}
          value={description}
          onChangeText={(text) => {
            setDescription(text);
            handleCheckDescription(text);
          }}
        />
        {checkValidaDescription ? (
          <Text style={styles.textFailed}>*Event description is required</Text>
        ) : (
          <Text style={styles.textFailed}></Text>
        )}
        <View
          style={{
            flexDirection: "row",
            marginBottom: 10,
          }}
        >
          <TextInput
            mode="outlined"
            activeOutlineColor="#015C92"
            label="Add Tags"
            style={[styles.inputField, styles.inputFieldsmall]}
            value={tag}
            onChangeText={(text) => setTag(text)}
          />
          <IconButton
            style={{
              marginTop: 8,
            }}
            icon="plus"
            size={40}
            color="#53A7DB"
            onPress={() => addToTags()}
          />
        </View>
        <View
          style={{ flexDirection: "row", marginTop: 2, marginBottom: 10 }}
          key={seed}
        >
          {tags.map((item, key) => (
            <Chip
              onClose={() => {
                console.log("test test");
                const index = tags.indexOf(item);
                tags.splice(index, 1);
                loadTags();
              }}
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
          onPress={() => updateEvent()}
        >
          <Text style={styles.btnText}> Edit Event</Text>
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

export default EditEvent;

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
    fontWeight: "400",
  },
});
