import React, { useContext, useEffect, useRef, useState } from 'react';
import {
    Image,
    ImageBackground, ScrollView, StyleSheet, Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { createSeaAnimal } from '../../../api/index';
import { FONTS } from '../../../constants';
import { AuthContext } from '../../../context/context';
import axios from "axios";
import baseURL from "../../../store";

const UpdateInfo = ({ route, navigation }) => {

  const { item } = route.params;

  const [user, setuser] = useState();
  const [animalName, setanimalName] = useState();
  const [animalIntro, setanimalIntro] = useState();
  const [animalLifeSpan, setanimalLifeSpan] = useState();
  const [animalMass, setanimalMass] = useState();
  const [animalLength, setanimalLength] = useState();
  const [animalExplain, setanimalExplain] = useState();

  const [text, setText] = useState("Empty");
  const [loading, setLoading] = useState(false);

//form Data
const [formData, setFormData] = useState({
  email: "",
  name: "",
  introduction: "",
  lifespan: "",
  mass: "",
  length: "",
  explanantion: ""
});

useEffect(() => {
  if (typeof user == "undefined") return
  setFormData({ ...formData, email: user.email })
}, [user])

useEffect(() => {
  console.log(">>>>>>>>>>>> form data   ", formData);
}, [formData])



const onChangeName = (value) => {
  setFormData({ ...formData, name: value })
}

const onChangeIntro = (value) => {
  setFormData({ ...formData, introduction: value })
}

const onChangeLifespan = (value) => {
  setFormData({ ...formData, lifespan: value })
}

const onChangeMass = (value) => {
  setFormData({ ...formData, mass: value })
}

const onChangeLength = (value) => {
  setFormData({ ...formData, length: value })
}

const onChangeExplain = (value) => {
  setFormData({ ...formData, explanantion: value })
}


  //-------------------------    Update Function ---------------------------------

  useEffect(() => {
    setanimalName(item.name);
    setanimalIntro(item.introduction);
    setanimalLifeSpan(item.lifespan);
    setanimalMass(item.mass);
    setanimalLength(item.length);
    setanimalExplain(item.explanantion);
  }, []);

  const updateSeaAnimal = () => {
    console.log(item);
    // handleCheckDate(eventDate);
    // handleCheckEventName(eventName);
    // handleCheckDescription(description);
    // handleCheckOrganizer(oraganizer);
    if (animalName && animalIntro && animalLifeSpan && animalMass && animalLength && animalExplain) {
      setLoading(true);
      // get this user id from login
      // let userID = 1;
      const data = {
        
        // email: user,
        name: animalName,
        introduction: animalIntro,
        lifespan: animalLifeSpan,
        mass: animalMass,
        length: animalLength,
        explanantion: animalExplain

      };

      // console.log(data);
      axios
        .put(baseURL + "/aqua-org/sea-animal/" + item._id, data)
        .then((response) => {
          setLoading(false);
          if (response.status == 200) {
            setVisible(true);
            setSnackbarMessage("Details Updated Succsesfully!");
            navigation.navigate("AddInfoViewAll", { reloadVal: Math.random() });
          } else {
            setVisible(true);
            setSnackbarMessage("Failed to Update Details.");
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
          setVisible(true);
          setSnackbarMessage("Something went wrong!");
        });
    } 
    // else {
    //   if (!eventName) {
    //     setCheckValidEventName(true);
    //   }
    //   if (!eventDate) {
    //     setCheckValidDate(true);
    //   }
    //   if (!oraganizer) {
    //     setCheckValidOrganizer(true);
    //   }
    //   if (!description) {
    //     setCheckValidDescription(true);
    //   }
    // }
  };

  return (
    
    <ImageBackground
            source={require('../../../assets/images/Info/add_Info_bg.png')}
            style={{
                width: "100%",
                height: "113%"
            }}
        >

            <View style={{
                flexDirection: "row",
                width: "100%",
                paddingHorizontal: 20
            }}>
                <TouchableOpacity
                    onPress={() => { navigation.push('AddInfoHome') }}
                    style={{
                        paddingHorizontal: 10,
                        paddingVertical: 13,
                        borderRadius: 10,
                        marginTop: 30,
                        backgroundColor: 'rgba(52, 52, 52, 0.4)'
                    }}
                >
                    <Image
                        source={require('../../../assets/images/Info/left_arrow.png')}
                        style={{ height: 15, width: 20 }}
                    />
                </TouchableOpacity>

            </View>

            <Text style={{
                color: "#000000",
                fontFamily: FONTS.bold,
                fontSize: 30,
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
                    marginLeft: 165,
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

            {/* <TextInput
                mode="outlined"
                activeOutlineColor="#015C92"
                label="Enter Event Name"
                style={{
                    marginVertical: 10,
                }}
            /> */}


            <ScrollView style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 50,
                marginTop: -20,
            }}
                scrollViewProps={{ showsVerticalScrollIndicator: false }}
            >

                <View style={{
                    flexDirection: "row",
                    marginHorizontal: 30,
                    marginTop: 20
                }}>

                </View>

                <Text style={{
                    color: "#000000",
                    fontFamily: FONTS.bold,
                    fontSize: 15,
                    alignSelf: "flex-start",
                    textAlign: "left",
                    marginLeft: 51
                }}>Name</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Enter name here"
                    keyboardType="ascii-capable"
                    value={animalName}
                    onChangeText={(text) => {
                      setanimalName(text);
                      // handleCheckEventName(text);
                    }}
                />

                <Text style={{
                    color: "#000000",
                    fontFamily: FONTS.bold,
                    fontSize: 15,
                    alignSelf: "flex-start",
                    textAlign: "left",
                    marginLeft: 51
                }}>Introduction</Text>

                <TextInput
                    style={styles.desc}
                    onChangeText={(text) => {
                      setanimalIntro(text);
                      // handleCheckEventName(text);
                    }}
                    value={animalIntro}
                    placeholder="Enter Introduction Here"
                    keyboardType="ascii-capable"
                />

                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{
                            color: "#000000",
                            fontFamily: FONTS.bold,
                            fontSize: 15,
                            alignSelf: "flex-start",
                            textAlign: "left",
                            marginLeft: 51,
                            marginTop: 20
                        }}>LifeSpan</Text>
                    </View>

                    <View style={{ flex: 1 }}>

                        <TextInput
                            style={styles.input_span}
                            onChangeText={(text) => {
                              setanimalLifeSpan(text);
                              // handleCheckEventName(text);
                            }}
                            value={animalLifeSpan}
                            placeholder="Enter LifeSpan Here"
                            keyboardType="ascii-capable"
                        />

                    </View>
                </View>

                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{
                            color: "#000000",
                            fontFamily: FONTS.bold,
                            fontSize: 15,
                            alignSelf: "flex-start",
                            textAlign: "left",
                            marginLeft: 51,
                            marginTop: 20
                        }}>Mass</Text>
                    </View>

                    <View style={{ flex: 1 }}>

                        <TextInput
                            style={styles.input_span}
                            onChangeText={(text) => {
                              setanimalMass(text);
                              // handleCheckEventName(text);
                            }}
                            value={animalMass}
                            placeholder="Enter Mass Here"
                            keyboardType="ascii-capable"
                        />

                    </View>
                </View>


                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{
                            color: "#000000",
                            fontFamily: FONTS.bold,
                            fontSize: 15,
                            alignSelf: "flex-start",
                            textAlign: "left",
                            marginLeft: 51,
                            marginTop: 20
                        }}>Length</Text>
                    </View>

                    <View style={{ flex: 1 }}>

                        <TextInput
                            style={styles.input_span}
                            onChangeText={(text) => {
                              setanimalLength(text);
                              // handleCheckEventName(text);
                            }}
                            value={animalLength}
                            placeholder="Enter Length Here"
                            keyboardType="ascii-capable"
                        />

                    </View>
                </View>


                <Text style={{
                    color: "#000000",
                    fontFamily: FONTS.bold,
                    fontSize: 15,
                    alignSelf: "flex-start",
                    textAlign: "left",
                    marginLeft: 51,
                    marginTop: 20
                }}>Explanation</Text>

                <TextInput
                    style={styles.desc}
                    onChangeText={(text) => {
                      setanimalExplain(text);
                      // handleCheckEventName(text);
                    }}
                    value={animalExplain}
                />


                <View style={{ flexDirection: "row", marginBottom: 150 }}>
                    <View style={{ flex: 2 }}>

                        <TouchableOpacity
                            // onPress={() => { navigation.push('InfoCategories') }}
                            style={{
                                flexDirection: "row",
                                backgroundColor: "#D41212",
                                alignItems: "center",
                                marginTop: 20,
                                marginLeft: 60,
                                width: 100,
                                paddingVertical: 10,
                                borderRadius: 18,
                                paddingHorizontal: 10,
                            }}
                        >
                            <Image
                                source={require('../../../assets/images/Info/close.png')}
                                style={{
                                    marginLeft: 8,
                                    width: 12,
                                    height: 12.,
                                    marginRight: 5
                                }}
                            />
                            <Text
                                style={{
                                    color: "#FFF",
                                    fontFamily: FONTS.bold,
                                    fontSize: 14,
                                    marginLeft: 3
                                }}>
                                Close
                            </Text>

                        </TouchableOpacity>

                    </View>

                    <View style={{ flex: 1 }}>

                        <TouchableOpacity
                            // onPress={() => { navigation.push('InfoCategories') }}
                            style={{
                                flexDirection: "row",
                                backgroundColor: "#015C92",
                                alignItems: "center",
                                marginTop: 20,
                                marginLeft: -10,
                                width: 100,
                                paddingVertical: 10,
                                borderRadius: 18,
                                paddingHorizontal: 10,
                            }}
                            onPress={() => updateSeaAnimal()}
                        >
                            <Image
                                source={require('../../../assets/images/Info/submit.png')}
                                style={{
                                    marginLeft: 5,
                                    marginRight: 5,
                                    width: 18,
                                    height: 18
                                }}
                            />
                            <Text
                                style={{
                                    color: "#FFF",
                                    fontFamily: FONTS.bold,
                                    fontSize: 13,
                                    alignItems: "center"
                                }}>
                                update
                            </Text>


                        </TouchableOpacity>

                    </View>
                </View>

            </ScrollView>

        </ImageBackground>

  )
}

export default UpdateInfo;

const styles = StyleSheet.create({
  input: {
      width: 330,
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      marginLeft: 50
  },

  desc: {
      width: 330,
      height: 100,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      marginLeft: 50,
      marginTop: 10
  },

  input_span: {
      width: 240,
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      marginLeft: -150
  },

});