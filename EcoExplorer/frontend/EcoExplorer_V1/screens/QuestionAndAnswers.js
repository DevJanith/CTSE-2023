import React, { useContext, useEffect, useRef } from "react";
import {
  Image, ImageBackground, SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import FocusedStatusBar from "../components/FocusedStatusBar";
import { COLORS, FONTS, SIZES } from "../constants";
import { AuthContext } from "../context/context";

const QuestionAndAnswers = ({ navigation }) => {
  const { userDetails } = useContext(AuthContext);

  useEffect(() => {
    console.log("Q&A +=====================", userDetails);
  }, []);

  const refRBSheet = useRef();
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
       <ImageBackground
            source={require('../assets/images/EcoExplorer/question_home_2.png')}
            style={{ width: "100%", height: "110%" }}>

            <FocusedStatusBar
              background={COLORS.primary}
        />

      <ScrollView>
        {/* <FocusedStatusBar background={COLORS.primary} /> */}
        <View style={{ flex: 1 }}>
          <View style={{ zIndex: 0, marginLeft: 20 }}>
            <Text style={{
                    color: "#000000",
                    fontSize: 45,
                    fontFamily: FONTS.bold,
                    width: 500,
                    marginLeft: -5,
                    textAlign: "left",
                    marginTop: 65,
                    elevation: 10,
                    textShadowColor: 'rgba(0, 0, 0, 0.75)',
                    textShadowOffset: { width: -1, height: 1 },
                    textShadowRadius: 2

                  }}>
            Question{'\n\t\t'}
            <Text style={{ fontSize: 35}}>&</Text>{'\n'}Answers!
            </Text>

            <View
              style={{
                marginTop: SIZES.font,
                marginBottom: SIZES.large,
                marginRight: SIZES.extraLarge,
              }}
            >
              {/* ------------------------------ search bar -------------------------- */}
              <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "#ECE9E9",
                            padding: 10,
                            borderRadius: 18,
                            marginHorizontal: 30,
                            marginTop: 85,
                            elevation:10,
                            width: 350
                        }}>
                        <TextInput
                            placeholder="Search for new Questions!"
                            placeholderTextColor="#345c74"
                            style={{
                                fontFamily: FONTS.light,
                                fontSize: 12,
                                width: 280,
                                paddingHorizontal: 12,
                                marginRight: 35
                            }} />

                        <Image
                            source={require('../assets/images/EcoExplorer/search_home.png')}
                            style={{
                                height: 20,
                                width: 20,
                                marginLeft: -10
                            }}
                        />
                    </View>

            </View>
            <View
              style={{
                margin: SIZES.extraLarge,
              }}
            >
              <View
                style={
                  {
                    // margin: SIZES.extraLarge
                  }
                }
              >

                {/* ----------------------------------------- start learning ---------------------------- */}
                <TouchableOpacity
                  style={{
                    flexDirection: "row",
                    backgroundColor: "#357f54",
                    padding: 20,
                    marginRight: SIZES.base,
                    borderRadius: 25,
                    alignContent: "center",
                    justifyContent: "center",
                    width: 350,
                    height: 150,
                    elevation: 10,
                    marginTop:5
                  }}
                  onPress={() => refRBSheet.current.open()}
                >
                        <View>
                            <Text
                                style={{
                                    color: COLORS.white,
                                    fontFamily: FONTS.bold,
                                    fontSize: 20,
                                    width: 250,
                                    paddingRight: 100,
                                    marginTop: 20
                                }}
                            >Start Learning</Text>
                            <Text
                                style={{
                                    color: COLORS.white,
                                    fontFamily: FONTS.bold,
                                    fontSize: 25,
                                    width: 250,
                                    marginTop: 3,
                                }}
                            >Start Quizzing!</Text>
                        </View>
                        <Image
                            source={require('../assets/images/EcoExplorer/trophy.png')}
                            style={{
                                marginLeft: -30,
                                marginTop: 15,
                                width: 80,
                                height: 80
                            }}
                        />
                </TouchableOpacity>
              </View>

              {/* ------------------ features------------------- */}

              
              <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{
                            color: "#000000",
                            fontFamily: FONTS.bold,
                            fontSize: 20,
                            paddingHorizontal: 20,
                            marginTop: 30,
                            marginLeft: -13,
                            marginBottom: 5
                        }}>Features</Text>
                    </View>
              </View>

              {/* ---------------------------- cards -----------------------------= */}
              <View
                style={{
                  flexDirection: "row",
                  alignContent: "space-around",
                }}
              >
                <View
                  style={{
                    flex: 1,
                    margin: SIZES.base,
                  }}
                >
                  <TouchableOpacity
                    style={[styles.card, styles.elevation,]}
                    onPress={() => {
                      navigation.push("QuickQAHome");
                    }}
                  >
                    <View
                      style={{
                        padding: SIZES.medium,
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={require('../assets/images/EcoExplorer/QuickQAHome.png')}
                        style={{
                          height:70,
                          width: 70,
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                </View>


                <View
                  style={{
                    flex: 1,
                    margin: SIZES.base,
                  }}
                >
                  <TouchableOpacity
                    style={[styles.card, styles.elevation]}
                    onPress={() => {
                      navigation.push("PreviousQAHome");
                    }}
                  >
                    <View
                      style={{
                        padding: SIZES.medium,
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={require('../assets/images/EcoExplorer/PreviousQAHome.png')}
                        style={{
                          height:70,
                          width: 70,
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignContent: "space-around",
                }}
              >
                <View
                  style={{
                    flex: 1,
                    margin: SIZES.base,
                  }}
                >


                  <TouchableOpacity
                    style={[styles.card, styles.elevation, styles.MarginBottom]}
                    onPress={() => {
                      navigation.push("ScoreBoardQAHome");
                    }}
                  >
                    <View
                      style={{
                        padding: SIZES.medium,
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={require('../assets/images/EcoExplorer/ScoreBoardQAHome.png')}
                        style={{
                          height:70,
                          width: 70,
                        }}
                      />
                    </View>
                  </TouchableOpacity>



                </View>
                <View
                  style={{
                    flex: 1,
                    margin: SIZES.base,
                  }}
                >
                  <TouchableOpacity
                    style={[styles.card, styles.elevation, styles.MarginBottom]}
                    onPress={() => {
                      alert("New Feature, Coming Soon...");
                    }}
                  >
                    <View
                      style={{
                        padding: SIZES.medium,
                        alignItems: "center",
                      }}
                    >
                      <Image
                        source={require('../assets/images/EcoExplorer/coming-soon.png')}
                        style={{
                          height:70,
                          width: 70,
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
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
          </View>

          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            customStyles={{
              wrapper: {
                backgroundColor: "transparent",
              },
              draggableIcon: {
                backgroundColor: "#000",
              },
              container: {
                backgroundColor: "#b4cea6",
                borderTopLeftRadius: 40,
                borderTopRightRadius: 40,
              },
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/* <Text>
                Quick Q & A is a Simple Question Answers to test you’re
                knowledge regarding life below water
              </Text> */}

            <View>
                <View style={{flexDirection:"row"}}>
                    <Text
                      style={{
                      color: "#000000",
                      fontFamily: FONTS.bold,
                      fontSize: 35,
                      width: 250
                      }}
                    >Quick Q & A</Text>

                    <Image
                      source={require('../assets/images/EcoExplorer/question-mark.png')}
                      style={{
                          width:50,
                          height:50,
                          marginLeft: -40,
                    }} />
                </View>

                            <Text
                                style={{
                                    color: "#84945c",
                                    fontFamily: FONTS.medium,
                                    fontSize: 13,
                                    width: 280,
                                    marginTop: 15
                                }}
                            >Quick Q & A is a Simple Question Answers to test you’re
                            knowledge regarding life below water.
                            </Text>
                        </View>

            </View>
          </RBSheet>
        </View>
      </ScrollView>
    </ImageBackground>
    </SafeAreaView>
  );
};

export default QuestionAndAnswers;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fbe5d8",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 25,
    width: "100%",
    marginVertical: 5,
    marginBottom: 10
  },
  elevation: {
    elevation: 20,
    shadowColor: "#52006A",
  },
  MarginBottom: {
    marginBottom: 90
  },
});
