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

const YourEvents = ({ route, navigation }) => {
  const { userDetails } = useContext(AuthContext);

  let { reloadVal } = route.params;
  const [events, setEvents] = useState();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const data = [];

  const getEventsData = () => {
    setLoading(true);
    let userID = userDetails._id;
    axios
      .get(baseURL + "/aqua-org/events/user/" + userID)
      .then((response) => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const onDismissSnackBar = () => setVisible(false);

  const editEvent = (item) => {
    navigation.navigate("EditEvent", { item });
  };

  useEffect(() => {
    getEventsData();
    setEvents(data);
  }, [reloadVal]);

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
                    navigation.navigate("ViewEventUser", { item });
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

export default YourEvents;

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
    backgroundColor: "#ff8407",
  },
});
