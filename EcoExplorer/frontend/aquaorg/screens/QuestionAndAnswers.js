import React, { useContext, useEffect, useRef } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import FocusedStatusBar from "../components/FocusedStatusBar";
import { assets, COLORS, FONTS, SIZES } from "../constants";
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
      <ScrollView>
        <FocusedStatusBar background={COLORS.primary} />
        <View style={{ flex: 1 }}>
          <View style={{ zIndex: 0, marginLeft: 20 }}>
            <Text
              style={{
                fontFamily: FONTS.bold,
                fontSize: 40,
                color: COLORS.white,
                marginTop: 100,
                marginBottom: SIZES.large,
                textAlign: "center",
              }}
            >
              Question & Answers
            </Text>
            <View
              style={{
                marginTop: SIZES.font,
                marginBottom: SIZES.large,
                marginRight: SIZES.extraLarge,
              }}
            >
              <View
                style={{
                  width: "100%",
                  borderRadius: SIZES.font,
                  backgroundColor: COLORS.lightCustomColor,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: SIZES.font,
                  paddingVertical: SIZES.small - 2,
                }}
              >
                <Image
                  source={assets.search}
                  resizeMode="contain"
                  style={{
                    height: 20,
                    width: 20,
                    marginRight: SIZES.base,
                  }}
                />
                <TextInput
                  placeholder="search for new questions"
                  style={{ flex: 1, color: COLORS.white }}
                  onChangeText={() => {}}
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
                <TouchableOpacity
                  style={{
                    backgroundColor: COLORS.darkCustomColor,
                    padding: SIZES.font,
                    marginRight: SIZES.base,
                    borderRadius: SIZES.font,
                    alignContent: "center",
                    justifyContent: "center",
                    width: "100%",
                  }}
                  onPress={() => refRBSheet.current.open()}
                >
                  <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 8 }}>
                      <Text
                        style={{
                          fontFamily: FONTS.light,
                          fontSize: SIZES.large,
                          color: COLORS.white,
                        }}
                      >
                        What are the Question and Answers features ?
                      </Text>
                    </View>
                    <View
                      style={{
                        flex: 2,
                        backgroundColor: COLORS.white,
                        alignContent: "center",
                        borderRadius: SIZES.font,
                      }}
                    >
                      <Image
                        source={assets.learning}
                        resizeMode="contain"
                        style={{
                          margin: SIZES.base,
                        }}
                      />
                    </View>
                  </View>
                </TouchableOpacity>
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
                    style={[styles.card, styles.elevation]}
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
                        source={assets.menu1}
                        resizeMode="cover"
                        style={{}}
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
                        source={assets.menu2}
                        resizeMode="cover"
                        style={{}}
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
                    style={[styles.card, styles.elevation]}
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
                        source={assets.menu3}
                        resizeMode="cover"
                        style={{}}
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
                        source={assets.menu4}
                        resizeMode="cover"
                        style={{}}
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
          {/* <View style={{
            position: "absolute",
            bottom: -20,
            right: 0,
            left: 0,
            zIndex: -1,
          }}>
            <Image
              source={assets.b5}
              resizeMode="cover"
              style={{
                width: "100%",
                height: 400,
                borderBottomLeftRadius: SIZES.medium,
                borderBottomRightRadius: SIZES.medium,
              }}
            />
          </View> */}
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
                backgroundColor: COLORS.lightCustomColor,
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
              <Text>
                Quick Q & A is a Simple Question Answers to test you’re
                knowledge regarding life below water
              </Text>
            </View>
          </RBSheet>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuestionAndAnswers;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 25,
    width: "100%",
    marginVertical: 5,
  },
  elevation: {
    elevation: 20,
    shadowColor: "#52006A",
  },
});
