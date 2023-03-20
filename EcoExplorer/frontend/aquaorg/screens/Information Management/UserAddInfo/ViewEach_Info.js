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
  Title
 } from "react-native-paper";
import baseURL from "../../../store";

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
      .delete(baseURL + "/aqua-org/sea-animal/" + item._id)
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
    <SafeAreaView>
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
                  onPress={() => editSeaAnimal(item)}
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
                Introduction :
              </Text>
              <Text
                style={{
                  fontSize: 15,
                }}
              >
                {item.introduction}
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
                Life Span :
              </Text>
              <Text
                style={{
                  fontSize: 15,
                  textAlign: "justify",
                }}
              >
                {item.lifespan}
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
                Mass :
              </Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{
                  fontSize: 15,
                }}
              >
                {item.mass}
              </Text>
            </View>

            {/* ---- Length ----- */}
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
                        Length :
                      </Text>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={{
                          fontSize: 15,
                          maxWidth: 300,
                        }}
                      >
                        {item.length}
                      </Text>
                    </View>

                    {/* ---- explanantion ----- */}
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
                        Explanantion :
                      </Text>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={{
                          fontSize: 15,
                          maxWidth: 300,
                        }}
                      >
                        {item.explanantion}
                      </Text>
                    </View>

            {/* <View style={{ flexDirection: "row", marginVertical: 13 }}>
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
            </View> */}
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
                  marginTop: 10
                }}
              >
                Created Date & Time :
              </Text>
              <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={{
                  fontSize: 15,
                  marginTop: 10
                }}
              >
                {item.updatedAt}
              </Text>
            </View>
          </Card.Content>
        </Card>

        <TouchableOpacity
            style={styles.submitButton}
            onPress={() => {
              setShowDialog(true);
            }}
          >
            <Text style={styles.btnText}>Delete</Text>
          </TouchableOpacity>
      </View>
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
      {/* <Snackbar
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
      </Snackbar> */}
    </SafeAreaView>
    </Provider>
  )
}

export default ViewEach_Info

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
  fab: {
    backgroundColor: "#ff8407",
  },
});