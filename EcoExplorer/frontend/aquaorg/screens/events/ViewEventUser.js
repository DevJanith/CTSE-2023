import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  Button,
  Card,
  Chip,
  Dialog,
  FAB,
  Paragraph,
  Portal,
  Provider,
  Snackbar,
  Title,
} from "react-native-paper";
import { AuthContext } from "../../context/context";
import baseURL from "../../store";

const ViewEventUser = ({ route, navigation }) => {
  const { userDetails } = useContext(AuthContext);
  const { item } = route.params;

  const [visible, setVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const onDismissSnackBar = () => setVisible(false);
  const hideDialog = () => setShowDialog(false);

  const editEvent = (item) => {
    navigation.navigate("EditEvent", { item });
  };

  const deleteEvent = () => {
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
      .delete(baseURL + "/aqua-org/events/" + item._id)
      .then((response) => {
        if (response.status == 200) {
          setVisible(true);
          setSnackbarMessage("Event Deleted!");
          navigation.navigate("YourEvents", { reloadVal: Math.random() });
        } else {
          setVisible(true);
          setSnackbarMessage("Failed to delete Event.");
        }
      })
      .catch((err) => {
        console.log(err);
        setVisible(true);
        setSnackbarMessage("Something went wrong!");
      });
  };

  return (
    <Provider>
      <SafeAreaView>
        <View
          style={{
            padding: 10,
            paddingTop: 20,
          }}
        >
          <Card elevation={5} style={styles.eventCard} mode={"elevated"}>
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
                <FAB
                  icon="pen"
                  color="white"
                  small
                  style={styles.fab}
                  onPress={() => editEvent(item)}
                />
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
            onPress={() => {
              setShowDialog(true);
            }}
          >
            <Text style={styles.btnText}>Remove Event</Text>
          </TouchableOpacity>
        </View>
        <Portal>
          <Dialog visible={showDialog} onDismiss={hideDialog}>
            <Dialog.Title>Warning!</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Do you want to remove this event?</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog} color="#015C92">
                Cancel
              </Button>
              <Button
                onPress={() => {
                  deleteEvent();
                }}
                color="#015C92"
                style={styles.actionButton}
              >
                Ok
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
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
    </Provider>
  );
};

export default ViewEventUser;

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
    backgroundColor: "#e86262",
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
  actionButton: {
    width: 80,
  },
  fab: {
    backgroundColor: "#ff8407",
  },
});
