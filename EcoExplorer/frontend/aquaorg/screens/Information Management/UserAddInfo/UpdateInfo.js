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

    const [visible, setVisible] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

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
                .put(baseURL + "info/" + item._id, data)
                .then((response) => {
                    setLoading(false);
                    if (response.status == 200) {
                        setVisible(true);
                        setSnackbarMessage("Details Updated Succsesfully!");
                        navigation.navigate("AddInfoViewAll", { reloadVal: true });
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
            source={require('../../../assets/images/EcoExplorer/view_all_bg_2.png')}
            style={{
                width: "100%",
                height: "110%"
            }}
        >

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

            <TouchableOpacity disabled={true}
                style={{
                    flexDirection: "row",
                    backgroundColor: "#357f54",
                    alignItems: "center",
                    marginTop: 30,
                    width: 115,
                    paddingVertical: 10,
                    borderRadius: 30,
                    paddingHorizontal: 10,
                    marginLeft: 150,
                    elevation: 10,
                    marginBottom: 50
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
                elevation: 10
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
                                marginLeft: 55,
                                width: 120,
                                paddingVertical: 10,
                                borderRadius: 20,
                                paddingHorizontal: 10,
                            }}
                        >
                            <Image
                                source={require('../../../assets/images/Info/close.png')}
                                style={{
                                    marginLeft: 18,
                                    width: 12,
                                    height: 12.,
                                    marginRight: 5,
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
                                backgroundColor: "#357f54",
                                alignItems: "center",
                                marginTop: 20,
                                marginLeft: -30,
                                width: 120,
                                paddingVertical: 10,
                                borderRadius: 19,
                                paddingHorizontal: 10,
                            }}
                            onPress={() => updateSeaAnimal()}
                        >
                            <Image
                                source={require('../../../assets/images/Info/submit.png')}
                                style={{
                                    marginLeft: 15,
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