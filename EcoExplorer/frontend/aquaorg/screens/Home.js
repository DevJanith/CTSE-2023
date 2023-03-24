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
  ImageBackground
} from "react-native";
import { Card, Paragraph, Title } from "react-native-paper";
import { getUser } from "../api";
import { ScreenContainer } from "../components";
import { COLORS, FONTS, SIZES } from '../constants'
import { AuthContext } from "../context/context";
import { sizes, spacing } from "../constants/theme";

const CARD_WIDTH = sizes.width - 100;
const CARD_HEIGHT = 200;

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

    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ImageBackground
        source={require('../assets/images/EcoExplorer/main_home_bg_2.png')}
        style={{ width: "100%", height: "100%" }}>
        <ScrollView>
          <View style={{ flex: 1 }}>
            <View style={{ zIndex: 0, marginLeft: 10, marginRight: 10 }}>
              <View style={styles.titleContainer}>

                {/* ================ logout =================== */}
                <TouchableOpacity
                  style={styles.fab}
                  onPress={() => {
                    logout();
                  }}
                >
                  <Image
                    source={require('../assets/images/EcoExplorer/log-out.png')}
                    style={{
                      height: 25,
                      width: 25,
                      marginTop: 1
                    }}
                  />
                </TouchableOpacity>
              </View>

              {/* ================= title =================== */}
              <Image
                source={require('../assets/images/EcoExplorer/eco_explorer.png')}
                style={{
                  height: 30,
                  width: 28,
                  marginTop: 250,
                  marginBottom: -90,
                  marginLeft: 370
                }}
              />
              <Text
                style={{
                  paddingHorizontal: 20,
                  fontFamily: FONTS.bold,
                  fontSize: 60,
                  color: "#295405",
                  textShadowColor: 'rgba(0, 0, 0, 0.75)',
                  textShadowOffset: { width: -1, height: 1 },
                  textShadowRadius: 6,
                  marginTop: 50,
                  marginLeft: 250
                }}>
                Eco
              </Text>
              <Text
                style={{
                  paddingHorizontal: 20,
                  fontFamily: FONTS.bold,
                  fontSize: 60,
                  color: "#295405",
                  textShadowColor: 'rgba(0, 0, 0, 0.75)',
                  textShadowOffset: { width: -1, height: 1 },
                  textShadowRadius: 6,
                  marginTop: -25,
                  marginLeft: 120
                }}>
                Explorer
              </Text>


              <View>
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  pagingEnabled={true}
                >
                  {/* =============== Information ==================== */}
                  <TouchableOpacity
                    // onPress={() => { navigation.push('InfoHome') }}
                    style={{
                      flexDirection: "column",
                      backgroundColor: "#357f54",
                      alignItems: "center",
                      marginTop: 30,
                      width: 250,
                      paddingVertical: 10,
                      borderRadius: 35,
                      paddingHorizontal: 10,
                      height: 200,
                      marginLeft: 10
                    }}
                  >
                    <Text
                      style={{
                        color: COLORS.white,
                        fontFamily: FONTS.bold,
                        fontSize: 25,
                        marginLeft: -26,
                        marginTop: 10
                      }}>
                      Explore Informations !
                    </Text>
                    <Image
                      source={require('../assets/images/EcoExplorer/right_arrow.png')}
                      style={{
                        marginLeft: 160,
                        marginTop: 60,
                        width: 35,
                        height: 35
                      }}
                    />
                  </TouchableOpacity>

                  {/* =============== Q & A ==================== */}

                  <TouchableOpacity
                    // onPress={() => { navigation.push('InfoCategories') }}
                    style={{
                      flexDirection: "column",
                      backgroundColor: "#81B622",
                      alignItems: "center",
                      marginTop: 30,
                      width: 250,
                      paddingVertical: 10,
                      borderRadius: 35,
                      paddingHorizontal: 10,
                      height: 200,
                      marginLeft: 10
                    }}
                  >
                    <Text
                      style={{
                        color: COLORS.white,
                        fontFamily: FONTS.bold,
                        fontSize: 25,
                        marginTop: 10
                      }}>
                      Explore Question & Answers !
                    </Text>
                    <Image
                      source={require('../assets/images/EcoExplorer/right_arrow.png')}
                      style={{
                        marginLeft: 160,
                        marginTop: 60,
                        width: 35,
                        height: 35
                      }}
                    />
                  </TouchableOpacity>

                  {/* =============== Event ==================== */}

                  <TouchableOpacity
                    // onPress={() => { navigation.push('InfoCategories') }}
                    style={{
                      flexDirection: "column",
                      backgroundColor: "#228B22",
                      alignItems: "center",
                      marginTop: 30,
                      width: 250,
                      paddingVertical: 10,
                      borderRadius: 35,
                      paddingHorizontal: 10,
                      height: 200,
                      marginLeft: 10
                    }}
                  >
                    <Text
                      style={{
                        color: COLORS.white,
                        fontFamily: FONTS.bold,
                        fontSize: 25,
                        marginTop: 10
                      }}>
                      Explore Events Details !
                    </Text>
                    <Image
                      source={require('../assets/images/EcoExplorer/right_arrow.png')}
                      style={{
                        marginLeft: 160,
                        marginTop: 60,
                        width: 35,
                        height: 35
                      }}
                    />
                  </TouchableOpacity>

                  {/* ========================== Donation ========================== */}

                  <TouchableOpacity
                    // onPress={() => { navigation.push('InfoCategories') }}
                    style={{
                      flexDirection: "column",
                      backgroundColor: "#AFE1AF",
                      alignItems: "center",
                      marginTop: 30,
                      width: 250,
                      paddingVertical: 10,
                      borderRadius: 35,
                      paddingHorizontal: 10,
                      height: 200,
                      marginLeft: 10
                    }}
                  >
                    <Text
                      style={{
                        color: COLORS.black,
                        fontFamily: FONTS.bold,
                        fontSize: 25,
                        marginTop: 10
                      }}>
                      Explore Donation Details !
                    </Text>
                    <Image
                      source={require('../assets/images/EcoExplorer/right_arrow.png')}
                      style={{
                        marginLeft: 160,
                        marginTop: 60,
                        width: 35,
                        height: 35
                      }}
                    />
                  </TouchableOpacity>

                </ScrollView>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageBackground >
    </SafeAreaView >
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
    color: "black",
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
    height: 40,
    width: 40,
    borderRadius: 50,
    padding: 4,
    top: 20,
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "black",
    elevation: 18
  },

  menuCard1: {
    backgroundColor: "#0c78b9",

    margin: 10,
    width: 130,
    height: 100,
    // borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
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
    // borderBottomLeftRadius: 30,
    borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    borderBottomRightRadius: 30,
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
    borderBottomLeftRadius: 30,
    // borderTopEndRadius: 30,
    borderTopStartRadius: 30,
    borderBottomRightRadius: 30,
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
    borderTopEndRadius: 30,
    // borderTopStartRadius: 30,
    borderBottomRightRadius: 30,
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
