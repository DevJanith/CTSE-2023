import axios from "axios";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
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
  ImageBackground,
  TextInput
} from "react-native-paper";
import baseURL from "../../../store";
import FocusedStatusBar from '../../../components/FocusedStatusBar';
import { COLORS, FONTS, SIZES } from "../../../constants";

const ViewEach_Info = ({ route, navigation }) => {

  const { item } = route.params;

  const [visible, setVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDialog, setShowDialog] = useState(false);

  const onDismissSnackBar = () => setVisible(false);
  const hideDialog = () => setShowDialog(false);

  const editSeaAnimal = (item) => {
    navigation.navigate("AddInfoUpdate", { item });
  };

  const deleteSeaAnimal = () => {
    console.log("deleted item ===========================>");
    console.log(item);

    // get this user id from login
    let userEmail = "user@gmail.com";
    const data = {
      email: userEmail,
      name: item.name,
      introduction: item.introduction,
      lifespan: item.lifespan,
      mass: item.mass,
      length: item.length,
      explanantion: item.explanantion,
      updatedAt: item.updatedAt,
    };

    console.log(data);
    axios
      .delete(baseURL + "info/" + item._id)
      .then((response) => {
        if (response.status == 200) {
          setVisible(true);
          setSnackbarMessage("Details Deleted!");
          navigation.navigate("AddInfoViewAll", { reloadVal: Math.random() });
        } else {
          setVisible(true);
          setSnackbarMessage("Failed to delete Details.");
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
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#d9ddbf"
        }}>

        <Text style={{
          color: "#000000",
          fontFamily: FONTS.bold,
          fontSize: 35,
          width: 300,
          alignSelf: "center",
          textAlign: "center",
          marginTop: 30,
          textShadowColor: 'rgba(0, 0, 0, 0.75)',
          textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 2
        }}>Life of Plants!</Text>

        <Text style={{
          color: "#000000",
          fontFamily: FONTS.medium,
          fontSize: 15,
          width: 500,
          alignSelf: "center",
          textAlign: "center",
          marginTop: 10,
        }}>━━━━━━━ View All your added Informations ━━━━━━━</Text>

        <TouchableOpacity disabled={true}
          style={{
            flexDirection: "row",
            backgroundColor: "#357f54",
            alignItems: "center",
            marginTop: 30,
            width: 115,
            paddingVertical: 10,
            borderRadius: 14,
            paddingHorizontal: 10,
            marginLeft: 155,
            elevation: 10,
            marginBottom: 20
          }}
        >
          <Text
            style={{
              color: "#FFF",
              fontFamily: FONTS.bold,
              fontSize: 13,
              marginLeft: 5,

            }}>
            Indoor Plants
          </Text>
        </TouchableOpacity>

        {/* <ImageBackground
          source={require('../../../assets/images/EcoExplorer/view_all_bg_2.png')}
          style={{ width: "100%", height: "100%" }}> */}

        {/* <FocusedStatusBar
            background={COLORS.primary}
          /> */}
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
          // onPress={() => {
          //   navigation.navigate("AddInfoViewEach", { item });
          // }}
          >
            <Card.Content>

              <TouchableOpacity disabled={true}
                style={{
                  flexDirection: "row",
                  backgroundColor: "#000000",
                  alignItems: "center",
                  marginTop: 5,
                  width: 310,
                  height: 44,
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  elevation: 10,
                  opacity: 0.2,
                  borderRadius: 23,
                }}
              >
              </TouchableOpacity>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginTop: -40
                }}
              >

                {/* ----------------- name ------------------------ */}
                <Title style={{ fontWeight: "bold", fontSize: 27, paddingHorizontal: 20, paddingVertical: 2 }}>
                  {item.name}
                </Title>


                <FAB
                  icon="delete"
                  color="white"
                  small
                  style={styles.fab}
                  onPress={() => { setShowDialog(true); }}
                />
              </View>

              {/* ----------------- Introduction ------------------------ */}
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                }}
              >

                <View style={{ flex: 2 }}>
                  <Text style={{
                    color: "#000000",
                    fontFamily: FONTS.bold,
                    fontSize: 18,
                    alignSelf: "flex-start",
                    textAlign: "left",
                    fontWeight: "bold",
                    marginTop: 20
                  }}>Introduction   ➜</Text>
                </View>

                <View style={{ flex: 1, marginLeft: -300 }}>

                  <TextInput style={styles.input_text} disabled={true}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: "#000000",
                        opacity: 20
                      }}
                    >
                      {item.introduction}
                    </Text>
                  </TextInput>
                </View>
              </View>

              {/* ----------------- Life Span ------------------------ */}
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                }}
              >

                <View style={{ flex: 2 }}>
                  <Text style={{
                    color: "#000000",
                    fontFamily: FONTS.bold,
                    fontSize: 17,
                    alignSelf: "flex-start",
                    textAlign: "left",
                    fontWeight: "bold",
                    marginTop: 20
                  }}>Life Span   ➜</Text>
                </View>

                <View style={{ flex: 1, marginLeft: -300 }}>

                  <TextInput style={styles.input_text} disabled={true}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: "#000000",
                        opacity: 20
                      }}
                    >
                      {item.lifespan}
                    </Text>
                  </TextInput>
                </View>
              </View>
              {/* ----------------- Mass ------------------------ */}
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                }}
              >

                <View style={{ flex: 2 }}>
                  <Text style={{
                    color: "#000000",
                    fontFamily: FONTS.bold,
                    fontSize: 17,
                    alignSelf: "flex-start",
                    textAlign: "left",
                    fontWeight: "bold",
                    marginTop: 20
                  }}>Mass      ➜</Text>
                </View>

                <View style={{ flex: 1, marginLeft: -300 }}>

                  <TextInput style={styles.input_text} disabled={true}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: "#000000",
                        opacity: 20
                      }}
                    >
                      {item.mass}
                    </Text>
                  </TextInput>
                </View>
              </View>

              {/* ---------------- Length ----------------------- */}
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                }}
              >

                <View style={{ flex: 2 }}>
                  <Text style={{
                    color: "#000000",
                    fontFamily: FONTS.bold,
                    fontSize: 17,
                    alignSelf: "flex-start",
                    textAlign: "left",
                    fontWeight: "bold",
                    marginTop: 20
                  }}>Length   ➜</Text>
                </View>

                <View style={{ flex: 1, marginLeft: -300 }}>

                  <TextInput style={styles.input_text} disabled={true}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: "#000000",
                        opacity: 20
                      }}
                    >
                      {item.length}
                    </Text>
                  </TextInput>
                </View>
              </View>

              {/* --------------------- explanantion ------------------------ */}
              <View
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                }}
              >

                <View style={{ flex: 2 }}>
                  <Text style={{
                    color: "#000000",
                    fontFamily: FONTS.bold,
                    fontSize: 17,
                    alignSelf: "flex-start",
                    textAlign: "left",
                    fontWeight: "bold",
                    marginTop: 20
                  }}>Explanation     ➜</Text>
                </View>

                <View style={{ flex: 1, marginLeft: -300 }}>

                  <TextInput style={styles.input_text} disabled={true}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: "#000000",
                        opacity: 20
                      }}
                    >
                      {item.explanantion}
                    </Text>
                  </TextInput>
                </View>
              </View>

              {/* ----------------- Created Date & Time ------------------------ */}

              <View
                style={{
                  flexDirection: "row",
                  marginTop: 10,
                }}
              >
                <Text
                  style={{
                    color: "#000000",
                    fontFamily: FONTS.bold,
                    fontSize: 16,
                    alignSelf: "flex-start",
                    textAlign: "left",
                    fontWeight: "bold",
                    marginTop: 40
                  }}
                >
                  Created Date & Time : {'\t'}
                </Text>
                <Text
                  numberOfLines={1}
                  ellipsizeMode="tail"
                  style={{
                    color: "#357f54",
                    fontFamily: FONTS.bold,
                    fontSize: 15,
                    alignSelf: "flex-start",
                    textAlign: "left",
                    fontWeight: "bold",
                    marginTop: 40
                  }}
                >
                  {item.updatedAt}
                </Text>
              </View>
            </Card.Content>
          </Card>
        </View>

        {/* ----------------- delete alert dialog  ------------------------ */}
        <Portal>
          <Dialog visible={showDialog} onDismiss={hideDialog}>
            <Dialog.Title>Warning!</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Do you want to remove this Details?</Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={hideDialog} color="#015C92">
                Cancel
              </Button>
              <Button
                onPress={() => {
                  deleteSeaAnimal();
                }}
                color="#015C92"
                style={styles.actionButton}
              >
                Ok
              </Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </SafeAreaView>
    </Provider>
  )
}

export default ViewEach_Info

const styles = StyleSheet.create({
  eventCard: {
    backgroundColor: "#fbe5d8",
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 23,
    width: "95%"
  },

  chip: {
    backgroundColor: "#fbe5d8",
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
  fab: {
    backgroundColor: "#FF2E2E",
    elevation: 5,
  },
  Card: {
    backgroundColor: "#fbe5d8",
    borderRadius: 20,
    elevation: 4,
    width: "90%"
  },
  input_span: {
    width: 200,
    height: 10,
    borderWidth: 1,
    padding: 10,
    marginLeft: -110,
    borderRadius: 10
  },
  input_text: {
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    marginTop: 10,
    width: "75%",
    height: 40,
    opacity: 0.6,
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20
  }
});