import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Card,
  Chip,
  FAB,
  IconButton,
  Paragraph,
  Snackbar,
  Title,
} from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import axios from "axios";
import baseURL from "../../store";
import { AuthContext } from "../../context/context";

const AllEvents = ({ navigation }) => {
  const { userDetails } = useContext(AuthContext);

  const [events, setEvents] = useState();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const data = [];

  const getEventsData = () => {
    setLoading(true);
    axios
      .get(baseURL + "/aqua-org/events/")
      .then((response) => {
        setEvents(response.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const addToInterestedList = (item) => {
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
        if (response.status == 200) {
          setVisible(true);
          setSnackbarMessage("Added to Interested List.");
        } else {
          setVisible(true);
          setSnackbarMessage("Failed to add Event.");
        }
      })
      .catch((err) => {
        console.log(err);
        setVisible(true);
        setSnackbarMessage("Something went wrong!");
      });
  };
  const onDismissSnackBar = () => setVisible(false);

  useEffect(() => {
    getEventsData();
    setEvents(data);
  }, []);

  return (
    <SafeAreaView>
      {loading ? (
        <View
          style={{
            justifyContent: "center", //Centered horizontally
            alignItems: "center", //Centered vertically
            flex: 1,
            marginTop: "60%",
          }}
        >
          <ActivityIndicator
            animating={loading}
            color="#015C92"
            hidesWhenStopped={true}
            size="large"
          />
        </View>
      ) : (
        <View style={styles.listContainer}>
          <FlatList
            keyExtractor={(key) => {
              return key._id;
            }}
            style={styles.topList}
            data={events}
            renderItem={({ item }) => {
              return (
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
                      <Title style={{ fontWeight: "bold" }}>{item.name}</Title>

                      <FAB
                        icon="plus"
                        small
                        style={styles.fab}
                        onPress={() => addToInterestedList(item)}
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
                        Description :
                      </Text>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={{
                          fontSize: 15,
                          maxWidth: 300,
                        }}
                      >
                        {item.description}
                      </Text>
                    </View>
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
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
                  </Card.Content>
                </Card>
              );
            }}
          />
          <Snackbar
            visible={visible}
            style={styles.snackbar}
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
        </View>
      )}
    </SafeAreaView>
  );
};

export default AllEvents;

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  eventCard: {
    backgroundColor: "#BCE6FF",
    marginVertical: 10,
    borderRadius: 23,
  },

  chip: {
    backgroundColor: "#53A7DB",
    marginRight: 10,
  },

  fab: {
    backgroundColor: "#77BF5E",
  },
  snackbar: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
