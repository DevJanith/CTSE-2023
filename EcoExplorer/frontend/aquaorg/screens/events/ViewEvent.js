import axios from "axios";
import React, { useContext, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Button, Card, Chip, FAB, Snackbar, Title } from "react-native-paper";
import { AuthContext } from "../../context/context";
import baseURL from "../../store";

const ViewEvent = ({ route, navigation }) => {
  const { userDetails } = useContext(AuthContext);
  const { item } = route.params;

  const [visible, setVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const onDismissSnackBar = () => setVisible(false);

  const addToInterestedList = (item) => {
    setLoading(true);
    console.log(item);

    // get this user id from login
    let userID = userDetails._id;
    const data = {
      user: userID,
      name: item.name,
      oraganizer: item.organizer,
      date: item.date,
      description: item.description,
      tags: item.tags,
    };

    console.log(data);
    axios
      .post(baseURL + "/aqua-org/interested", data)
      .then((response) => {
        setLoading(false);
        if (response.status == 200) {
          setVisible(true);
          setSnackbarMessage("Added to Interested List.");
        } else {
          setVisible(true);
          setSnackbarMessage("Failed to add Event.");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
        setVisible(true);
        setSnackbarMessage("Something went wrong!");
      });
  };

  return (
    <SafeAreaView>
      <View
        style={{
          padding: 10,
          paddingTop: 20,
        }}
      >
        <Card
          elevation={5}
          style={styles.eventCard}
          mode={"elevated"}
          onPress={() => {
            navigation.navigate("ViewEvent", { item });
          }}
        >
          <Card.Content>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Title style={{ fontWeight: "bold", fontSize: 27 }}>
                {item.name}
              </Title>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Event On :
              </Text>
              <Text
                style={{
                  fontSize: 15,
                }}
              >
                {item.date}
              </Text>
            </View>

            <View
              style={{
                flexDirection: "column",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  marginBottom: 8,
                }}
              >
                Description :
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "justify",
                }}
              >
                {item.description}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Organizer :
              </Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{
                  fontSize: 15,
                }}
              >
                {item.organizer}
              </Text>
            </View>
            <View style={{ flexDirection: "row", marginVertical: 13 }}>
              {item.tags.map((item, key) => (
                <Chip
                  // icon="information"
                  textStyle={{
                    fontWeight: "800",
                  }}
                  style={styles.chip}
                  mode="flat"
                  selectedColor="#443F3F"
                  onPress={() => console.log("Pressed")}
                  key={key}
                >
                  {item}
                </Chip>
              ))}
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Event Date & Time :
              </Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{
                  fontSize: 15,
                }}
              >
                {item.date}
              </Text>
            </View>

            {/* <View
              style={{
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Member(s) :
              </Text>

              {item.members.map((item, key) => (
                <Text
                  style={{
                    fontSize: 15,
                    marginLeft: 5,
                  }}
                >
                  {item},{" "}
                </Text>
              ))}
            </View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 10,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                }}
              >
                Participant(s) :
              </Text>

              {item.participants.map((item, key) => (
                <Text
                  style={{
                    fontSize: 15,
                    marginLeft: 5,
                  }}
                >
                  {item},{" "}
                </Text>
              ))}
            </View> */}
          </Card.Content>
        </Card>

        <TouchableOpacity
          style={styles.submitButton}
          onPress={() => addToInterestedList(item)}
        >
          <Text style={styles.btnText}> Add to Interested List</Text>
        </TouchableOpacity>
      </View>
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
    </SafeAreaView>
  );
};

export default ViewEvent;

const styles = StyleSheet.create({
  eventCard: {
    backgroundColor: "#BCE6FF",
    marginVertical: 10,
    borderRadius: 23,
  },

  chip: {
    backgroundColor: "#53A7DB",
    marginRight: 10,
  },
  submitButton: {
    backgroundColor: "#015C92",
    marginTop: 30,
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
});
