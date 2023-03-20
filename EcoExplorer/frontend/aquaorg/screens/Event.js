import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList, TextInput } from "react-native-gesture-handler";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { BackgroundContainer, FocusedStatusBar } from "../components";
import axios from "axios";
import baseURL from "../store";
import { assets, COLORS, FONTS, SIZES } from "../constants";

const Event = ({ navigation }) => {
  const [topEvents, setTopEvents] = useState();

  const data = [];

  const getEventsData = () => {
    axios
      .get(baseURL + "/aqua-org/events/")
      .then((response) => {
        setTopEvents(response.data.data.slice(0, 5));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getEventsData();
  }, []);

  function viewAllEvents() {
    navigation.navigate("AllEvents");
  }
  function addEvent() {
    navigation.navigate("AddEvent");
  }
  function viewYourEvents() {
    navigation.navigate("YourEvents", { reloadVal: true });
  }
  function interestedEvents() {
    navigation.navigate("InterestedEvents");
  }

  useEffect(() => {
    setTopEvents(data);
  }, []);
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View style={{ zIndex: 0, marginLeft: 10, marginRight: 10 }}>
            <View style={styles.titleContainer}>
              <Text style={styles.heading}>Top Events</Text>

              <TouchableOpacity
                style={styles.fab}
                onPress={() => viewAllEvents()}
              >
                <Text
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 13,
                    marginLeft: 3,
                    textAlign: "center",
                  }}
                >
                  View More...
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.topEventsContainer}>
              <View></View>
              <FlatList
                keyExtractor={(key) => {
                  return key._id;
                }}
                style={styles.topList}
                horizontal
                data={topEvents}
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
                        <Title
                          ellipsizeMode="tail"
                          numberOfLines={1}
                          style={{
                            maxWidth: 130,
                          }}
                        >
                          {item.name}
                        </Title>
                        <Paragraph
                          ellipsizeMode="tail"
                          numberOfLines={1}
                          style={{
                            maxWidth: 130,
                          }}
                        >
                          <Text
                            ellipsizeMode="tail"
                            numberOfLines={1}
                            style={{
                              fontWeight: "bold",
                            }}
                          >
                            On :{" "}
                          </Text>
                          {item.date}
                        </Paragraph>
                      </Card.Content>
                    </Card>
                  );
                }}
              />
            </View>

            <View
              style={{
                marginTop: 30,
              }}
            >
              <View style={{ flex: 1 }}>
                <Card
                  style={[
                    styles.questionCard,
                    { top: 15, backgroundColor: "#015C92", height: 100 },
                  ]}
                  elevation={5}
                  onPress={() => {
                    navigation.navigate("EventInfo");
                  }}
                >
                  <Card.Content
                    style={{
                      flex: 1,
                      flexDirection: "row",
                    }}
                  >
                    <View
                      style={{
                        flex: 1,
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <Title>
                        <Text style={{ color: "white" }}>
                          What is Events ?{" "}
                        </Text>
                      </Title>
                      <Paragraph>
                        <Text style={{ color: "white" }}>
                          Click Here to view more information
                        </Text>
                      </Paragraph>
                    </View>
                    <Image
                      source={require("../assets/questionMark.png")}
                      style={{
                        width: 70,
                        height: 70,
                      }}
                    />
                  </Card.Content>
                </Card>
              </View>
            </View>

            <View
              style={{
                marginTop: 20,
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flex: 2.7,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity
                  style={styles.menuCard1}
                  elevation={5}
                  onPress={() => {
                    viewAllEvents();
                  }}
                >
                  <Text style={styles.menuCardHeading}>All Events</Text>
                  <Image
                    source={assets.list}
                    resizeMode="contain"
                    style={{
                      height: 30,
                      width: 30,
                    }}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.menuCard2}
                  elevation={5}
                  onPress={() => {
                    viewYourEvents();
                  }}
                >
                  <Text style={styles.menuCardHeading}>View Your Events</Text>
                  <Image
                    source={assets.your_list}
                    resizeMode="contain"
                    style={{
                      height: 30,
                      width: 30,
                    }}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.menuCard3}
                  onPress={() => {
                    addEvent();
                  }}
                >
                  <Text style={styles.menuCardHeading}>Add Event</Text>
                  <Image
                    source={assets.add}
                    resizeMode="contain"
                    style={{
                      height: 30,
                      width: 30,
                    }}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.menuCard4}
                  elevation={5}
                  onPress={() => {
                    interestedEvents();
                  }}
                >
                  <Text style={styles.menuCardHeading}>Interested Events</Text>
                  <Image
                    source={assets.like}
                    resizeMode="contain"
                    style={{
                      height: 30,
                      width: 30,
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              zIndex: -1,
            }}
          >
            <Image
              source={assets.b1}
              resizeMode="cover"
              style={{
                width: "100%",
                height: 230,
                borderBottomLeftRadius: SIZES.medium,
                borderBottomRightRadius: SIZES.medium,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Event;

const styles = StyleSheet.create({
  input: {
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    paddingLeft: 16,
    flex: 1,
    marginLeft: 16,
  },

  titleContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  container: {
    flexDirection: "column",
  },
  textStyle: {
    fontSize: 40,
    padding: 30,
    backgroundColor: "blue",
    margin: 20,
    color: "white",
  },
  listStyle: {
    textAlign: "center",
    margin: 20,
    padding: 10,
  },
  heading: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 0,
    margin: 10,
    color: "white",
  },

  eventCard: {
    height: 100,
    width: 175,
    margin: 10,
    backgroundColor: "#BCE6FF",
    borderRadius: 20,
  },
  topList: {
    borderWidth: 2,
    padding: 10,
    borderRadius: 10,
    borderColor: "white",
    minHeight: 140,
  },
  topEventsContainer: {
    // paddingRight: 10,
  },

  fab: {
    height: 30,
    width: 100,
    borderRadius: 20,
    padding: 4,
    top: 20,
    backgroundColor: "#337DA9",
  },

  menuCard1: {
    backgroundColor: "#0c78b9",

    margin: 10,
    width: 130,
    height: 100,
    borderBottomRightRadius: 30,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  menuCard2: {
    backgroundColor: "#0c78b9",

    margin: 10,
    width: 130,
    height: 100,
    borderBottomLeftRadius: 30,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  menuCard3: {
    backgroundColor: "#0c78b9",

    margin: 10,
    width: 130,
    height: 100,
    borderBottomRightRadius: 30,
    borderTopEndRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  menuCard4: {
    backgroundColor: "#0c78b9",
    margin: 10,
    width: 130,
    height: 100,
    borderBottomLeftRadius: 30,
    borderTopStartRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  menuCardHeading: {
    fontSize: 17,
    fontWeight: "700",
    marginBottom: 10,
    color: "white",
    textAlign: "center",
  },
  questionCard: {
    borderRadius: 20,
  },
});
