import {   
  View, 
  Text, 
  SafeAreaView, 
  StyleSheet,
  Image,
  ImageBackground, 
  ScrollView,
  TextInput,
  TouchableOpacity } from "react-native";
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
import { deleteSeaAnimal, getAllSeaAnimals } from '../../../api/index';
import { FlatList } from "react-native-gesture-handler";
import axios from "axios";
import baseURL from "../../../store";
import { FONTS } from "../../../constants";
import { AuthContext } from "../../../context/context";

const ViewAll_Info = ({  route, navigation }) => {
  const { userDetails } = useContext(AuthContext);

  // let { reloadVal } = route.params;
  const [seaAnimal, setseaAnimal] = useState();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const data = [];

  const getSeaAnimalData = () => {
    setLoading(true);
    axios
      .get(baseURL + `/aqua-org/sea-animal/type/${userDetails.email}`)
      .then((response) => {
        console.log(response.data);
        setseaAnimal(response.data.result);
        setLoading(false);
      })
      .catch((err) => {
        // console.log(err);
        setLoading(false);
      });
  };

  const onDismissSnackBar = () => setVisible(false);

  useEffect(() => {
    getSeaAnimalData();
    setseaAnimal(data);
  }, []);
  
  return (
    <SafeAreaView>
      {loading ? 
      (
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

            <Text style={{
                color: "#000000",
                fontFamily: FONTS.bold,
                fontSize: 25,
                width: 200,
                alignSelf: "center",
                textAlign: "center",
            }}>Life Below Water</Text>

            <TouchableOpacity disabled={true}
                style={{
                    flexDirection: "row",
                    backgroundColor: "#015C92",
                    alignItems: "center",
                    marginTop: 10,
                    width: 105,
                    paddingVertical: 10,
                    borderRadius: 50,
                    paddingHorizontal: 10,
                    marginLeft: 145,
                    marginBottom:20,
                    elevation: 10
                }}
            >
                <Text
                    style={{
                        color: "#FFF",
                        fontFamily: FONTS.bold,
                        fontSize: 13,
                        marginLeft: 5
                    }}>
                    Sea Animal
                </Text>
            </TouchableOpacity>
            
          <FlatList
            keyExtractor={(key) => {
              return key._id;
            }}
            style={styles.topList}
            data={seaAnimal}
            renderItem={({ item }) => {
              return (
                <Card

                // here press can see each details indivitually
  
                  elevation={5}
                  style={styles.eventCard}
                  mode={"elevated"}
                  onPress={() => {
                    navigation.navigate("AddInfoViewEach", { item });
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
                        onPress={() => { navigation.push('AddInfoUpdate') }}
                      />
                    </View>

                    {/* ---- Introduction ----- */}
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

                  {/* ---- Created At ----- */}
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 10,
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: FONTS.bold,
                          fontSize: 15
                        }}
                      >
                        Create On :
                      </Text>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        style={{
                          fontSize: 15,
                          maxWidth: 300,
                        }}
                      >
                        {item.updatedAt}
                      </Text>
                    </View>

                  </Card.Content>
                </Card>
              );
            }}
          />
          {/* <Snackbar
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
          </Snackbar> */}
        </View>
      )}
    </SafeAreaView>
  )
}

export default ViewAll_Info;

const styles = StyleSheet.create({
  listContainer: {
    padding: 20,
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
  snackbar: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
