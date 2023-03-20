import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import { getUser } from "../api";
import { ScreenContainer } from "../components";
import { assets, SIZES } from "../constants";
import { AuthContext } from "../context/context";

const Home = ({ navigation }) => {
  const { logout } = useContext(AuthContext);

  const id = "636bb46d6018b5eeb2c92548";
  const [successData, setSuccessData] = useState();
  const [errorData, setErrorData] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const [isError, setIsError] = useState(false);
  const [name, setName] = useState();

  const getUserDetails = (value) => {
    setIsPending(true);

    getUser(value)
      .then((response) => {
        console.log(response.data.result);
        setSuccessData(response.data.result);
        setIsPending(false);
        setIsSuccess(true);
        setName(response.data.result.name);
      })
      .catch((err) => {
        console.log(err);
        setErrorData(err.response);
        setIsPending(false);
        setIsError(true);
      });
  };

  useEffect(() => {
    getUserDetails(id);
  }, []);

  return (
    // <ScreenContainer>
    //     <View>
    //         <Text>Home</Text>
    //         <Button title='Log Out' onPress={() => { logout() }} />
    //     </View>
    // </ScreenContainer>

    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View style={{ zIndex: 0, marginLeft: 10, marginRight: 10 }}>
            <View style={styles.titleContainer}>
              {/* <Text style={styles.heading}>Welcome Back</Text> */}

              <TouchableOpacity
                style={styles.fab}
                onPress={() => {
                  logout();
                }}
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
                  Logout
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                marginTop: "40%",
              }}
            >
              <Text style={[styles.heading, { marginBottom: 0 }]}>
                Welcome Back
              </Text>
              <Text style={[styles.heading2, { marginTop: 0 }]}>{name}</Text>
            </View>

            <View
              style={{
                marginTop: "5%",
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
                    navigation.navigate("EventSC");
                  }}
                >
                  <Text style={styles.menuCardHeading}>Information</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.menuCard2}
                  elevation={5}
                  onPress={() => {
                    navigation.navigate("EventSC");
                  }}
                >
                  <Text style={styles.menuCardHeading}>Q & A</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.menuCard3}
                  onPress={() => {
                    navigation.navigate("EventSC");
                  }}
                >
                  <Text style={styles.menuCardHeading}>Events</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.menuCard4}
                  elevation={5}
                  onPress={() => {
                    navigation.navigate("EventSC");
                  }}
                >
                  <Text style={styles.menuCardHeading}>Donation</Text>
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
              source={assets.b4}
              resizeMode="cover"
              style={{
                width: "100%",
                height: 300,
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

export default Home;

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
    justifyContent: "flex-end",
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
    fontSize: 35,
    padding: 0,
    margin: 10,
    color: "white",
  },

  heading2: {
    fontWeight: "500",
    fontSize: 28,
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
    borderWidth: 1,
    borderColor: "white",
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
    elevation: 5,

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
    elevation: 5,

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
    elevation: 5,
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
