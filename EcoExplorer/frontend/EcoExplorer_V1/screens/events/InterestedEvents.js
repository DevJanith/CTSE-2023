import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Button,
  Card,
  Chip,
  Colors,
  Dialog,
  FAB,
  IconButton,
  Paragraph,
  Portal,
  Provider,
  Snackbar,
  Title,
} from "react-native-paper";
import { FlatList } from "react-native-gesture-handler";
import axios from "axios";
import baseURL from "../../store";
import { AuthContext } from "../../context/context";
import aquaOrgAPI from "../../api";
import { COLORS } from "../../constants";

const AllEvents = () => {
  const { userDetails } = useContext(AuthContext);

  const [events, setEvents] = useState();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [deleteItemID, setDeleteItemID] = useState();
  const data = [];
  const hideDialog = () => setShowDialog(false);

  const getEventsData = () => {
    setLoading(true);
    let userID = userDetails._id;
    aquaOrgAPI
      .get("interested/user/" + userID)
      .then((response) => {
        setEvents(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const removeEvent = () => {
    setShowDialog(false);
    aquaOrgAPI
      .delete("interested/" + deleteItemID)
      .then((response) => {
        console.log(response.status);
        getEventsData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onDismissSnackBar = () => setVisible(false);

  useEffect(() => {
    getEventsData();
    setEvents(data);
  }, []);

  const deleteItem = (item) => {
    setShowDialog(true);
    setDeleteItemID(item._id);
  };

  return (
    <Provider>
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
              color={Colors.green600}
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
                      console.log("View Event");
                    }}
                  >
                    <Card.Content>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-between",
                        }}
                      >
                        <Title
                          style={{
                            fontWeight: "bold",
                            color: COLORS.darkTextColor,
                          }}
                        >
                          {item.name}
                        </Title>

                        <FAB
                          icon="delete"
                          color="white"
                          small
                          style={styles.fab}
                          onPress={() => deleteItem(item)}
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
                            selectedColor="white"
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
            <Portal>
              <Dialog visible={showDialog} onDismiss={hideDialog}>
                <Dialog.Title>Warning!</Dialog.Title>
                <Dialog.Content>
                  <Paragraph>
                    Do you want to remove this item from the interested list?
                  </Paragraph>
                </Dialog.Content>
                <Dialog.Actions>
                  <Button onPress={hideDialog} color="#015C92">
                    Cancel
                  </Button>
                  <Button
                    onPress={() => {
                      removeEvent();
                    }}
                    color="#015C92"
                    style={styles.actionButton}
                  >
                    Ok
                  </Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
          </View>
        )}
      </SafeAreaView>
    </Provider>
  );
};

export default AllEvents;

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  eventCard: {
    backgroundColor: COLORS.lightGreen,
    marginVertical: 10,
    borderRadius: 23,
  },

  chip: {
    backgroundColor: COLORS.darkGreen3,
    marginRight: 10,
  },

  fab: {
    backgroundColor: "#e86262",
  },

  actionButton: {
    width: 80,
  },
});
