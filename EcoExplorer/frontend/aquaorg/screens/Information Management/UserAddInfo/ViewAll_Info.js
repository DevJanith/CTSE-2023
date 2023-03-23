import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  TextInput,
  TouchableOpacity
} from "react-native";
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
import {  COLORS, FONTS, SIZES } from "../../../constants";
import { AuthContext } from "../../../context/context";
import FocusedStatusBar from '../../../components/FocusedStatusBar';

const ViewAll_Info = ({ route, navigation }) => {
  const { userDetails } = useContext(AuthContext);
  const [user, setuser] = useState()

  const [reload, setReload] = useState(true);
  const [seaAnimal, setseaAnimal] = useState();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const data = [];

  const getSeaAnimalData = () => {
    setLoading(true);
    axios
      .get(baseURL + `info/type/${userDetails.email}`)
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

  useEffect(() => {
    console.log("View All +=====================>", userDetails)
    setuser(userDetails)
  }, [])

  const onDismissSnackBar = () => setVisible(false);

  useEffect(() => {
    if (reload) {
      getSeaAnimalData();
      setseaAnimal(data);
      setReload(false)
    }
  }, [reload]);

  useEffect(() => {
    if (typeof route.params == "undefined") return
    let { reloadVal } = route.params;
 
    setReload(reloadVal)
  }, [route.params]);

  return (
    <SafeAreaView
      style={{
        flex: 1
      }}>

      <ImageBackground
          source={require('../../../assets/images/EcoExplorer/view_all_bg_2.png')}
          style={{ width: "100%", height: "100%" }}>

          <FocusedStatusBar
            background={COLORS.primary}
          />
      {/* <ScrollView> */}
      {/* {loading ?
        ( */}
          {/* <View
            style={{
              justifyContent: "center", //Centered horizontally
              alignItems: "center", //Centered vertically
              flex: 1,
              marginTop: -10,
            }}
          >
            <ActivityIndicator
              animating={loading}
              color="#015C92"
              hidesWhenStopped={true}
              size="large"
            />
          </View> */}
        {/* ) : ( */}

          <View style={styles.listContainer}>

            <Text style={{
              color: "#000000",
              fontFamily: FONTS.bold,
              fontSize: 35,
              width: 300,
              alignSelf: "center",
              textAlign: "center",
              marginTop:30,
              textShadowColor: 'rgba(0, 0, 0, 0.75)',
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 2
            }}>Life of Plants!</Text>


            <Text style={{
              color: "#357f54",
              fontFamily: FONTS.semiBold,
              fontSize: 20,
              paddingHorizontal: 20,
              marginLeft: 110,
              marginTop: 10,
              textShadowColor: 'rgba(0, 0, 0, 0.75)',
              textShadowOffset: { width: -1, height: 1 },
              textShadowRadius: 1
                            
            }}>Hi 😊 {typeof user != "undefined" && user.name}! </Text>


            <Text style={{
              color: "#000000",
              fontFamily: FONTS.medium,
              fontSize: 15,
              width: 500,
              alignSelf: "center",
              textAlign: "center",
              marginTop:10,
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
                marginLeft:135,
                elevation:10,
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
                        {/* ---- Item Name ----- */}

                        <Title style={{ fontWeight: "bold" }}>{item.name}</Title>

                        <FAB
                          icon="pen"
                          color="black"
                          small
                          style={styles.fab}
                          onPress={() => { navigation.push('AddInfoUpdate', { item }) }}
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

                      {/* ---- Created On ----- */}
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
        {/* )} */}
        {/* </ScrollView> */}
      </ImageBackground>
    </SafeAreaView>
  )
}

export default ViewAll_Info;

const styles = StyleSheet.create({
  listContainer: {
    padding: 20,
  },
  eventCard: {
    backgroundColor: "#fbe5d8",
    marginVertical: 10,
    borderRadius: 23,
    marginTop: 10
  },

  chip: {
    backgroundColor: "#53A7DB",
    marginRight: 10,
  },

  fab: {
    backgroundColor: "#bcd49c",
  },
  snackbar: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
