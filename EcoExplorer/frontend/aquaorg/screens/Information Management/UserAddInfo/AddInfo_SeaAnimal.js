import { React, useContext, useEffect, useState } from 'react';
import {
    Image,
    ImageBackground, ScrollView, StyleSheet, Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { Snackbar } from 'react-native-paper';
import { createSeaAnimal } from '../../../api/index';
import { FONTS } from '../../../constants';
import { AuthContext } from '../../../context/context';
import { requiredFieldValidation } from '../../../util/validation';

const AddInfo_SeaAnimal = ({ navigation }) => {

    const { userDetails } = useContext(AuthContext)
    const [user, setuser] = useState()

    useEffect(() => {
        console.log("Add_Info +=====================>", userDetails)
        setuser(userDetails)
    }, [])

    // const Email = user.email;

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


    const [validEmail, setValidEmail] = useState({ result: false, desc: "" })
    const [validName, setValidName] = useState({ result: false, desc: "" })
    const [validIntroduction, setValidIntroduction] = useState({ result: false, desc: "" })
    const [validLifeSpan, setValidLifeSpan] = useState({ result: false, desc: "" })
    const [validMass, setValidMass] = useState({ result: false, desc: "" })
    const [validLength, setValidLength] = useState({ result: false, desc: "" })
    const [validExplanation, setValidExplanation] = useState({ result: false, desc: "" })

    const [visible, setVisible] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    const onDismissSnackBar = () => setVisible(false);

    const onChangeName = (value) => {
        setValidName(requiredFieldValidation(value))
        setFormData({ ...formData, name: value })
    }

    const onChangeIntro = (value) => {
        setValidIntroduction(requiredFieldValidation(value))
        setFormData({ ...formData, introduction: value })
    }

    const onChangeLifespan = (value) => {
        setValidLifeSpan(requiredFieldValidation(value))
        setFormData({ ...formData, lifespan: value })
    }

    const onChangeMass = (value) => {
        setValidMass(requiredFieldValidation(value))
        setFormData({ ...formData, mass: value })
    }

    const onChangeLength = (value) => {
        setValidLength(requiredFieldValidation(value))
        setFormData({ ...formData, length: value })
    }

    const onChangeExplain = (value) => {
        setValidExplanation(requiredFieldValidation(value))
        setFormData({ ...formData, explanantion: value })
    }

    return (
        <>
            <ImageBackground
                source={require('../../../assets/images/EcoExplorer/add_Info_bg.png')}
                style={{
                    width: "100%",
                    height: "105%"
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

                <Image
                    source={require('../../../assets/images/EcoExplorer/Indoor.png')}
                    style={{
                        width: 60,
                        height: 60,
                        marginLeft: 185
                    }}
                />

                <Text style={{
                    color: "#000000",
                    fontFamily: FONTS.bold,
                    marginTop: 10,
                    fontSize: 30,
                    width: 200,
                    alignSelf: "center",
                    textAlign: "center",
                }}>Life of Plants!</Text>

                <TouchableOpacity disabled={true}
                    style={{
                        flexDirection: "row",
                        backgroundColor: "#023020",
                        alignItems: "center",
                        marginTop: 10,
                        width: 115,
                        paddingVertical: 10,
                        borderRadius: 50,
                        paddingHorizontal: 10,
                        marginLeft: 160,
                        elevation: 10,
                        marginTop: 20
                    }}
                >
                    <Text
                        style={{
                            color: "#FFF",
                            fontFamily: FONTS.bold,
                            fontSize: 13,
                            marginLeft: 5
                        }}>
                        Indoor Plants
                    </Text>
                </TouchableOpacity>

                <TextInput
                    mode="outlined"
                    activeOutlineColor="#015C92"
                    label="Enter Event Name"
                    style={{
                        marginVertical: 10,
                    }}
                />


                <ScrollView style={{
                    backgroundColor: "#FAF9F6",
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
                        onChangeText={(value) => { onChangeName(value) }}
                        placeholder="Enter name here"
                        keyboardType="ascii-capable"
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
                        onChangeText={(value) => { onChangeIntro(value) }}
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
                                onChangeText={(value) => { onChangeLifespan(value) }}
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
                                onChangeText={(value) => { onChangeMass(value) }}
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
                                onChangeText={(value) => { onChangeLength(value) }}
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
                        onChangeText={(value) => { onChangeExplain(value) }}
                        placeholder="Enter explanation Here"
                        keyboardType="ascii-capable"
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
                                    backgroundColor: "#023020",
                                    alignItems: "center",
                                    marginTop: 20,
                                    marginLeft: -10,
                                    width: 100,
                                    paddingVertical: 10,
                                    borderRadius: 18,
                                    paddingHorizontal: 10,
                                }}
                                onPress={() => {
                                    if (!validName.result) {
                                        console.log("here");
                                        setVisible(true)
                                        setSnackbarMessage(validName.desc == "" ? "Name Fields Can not be empty" : validName.desc)
                                        return false
                                    }
                                    if (!validIntroduction.result) {
                                        console.log("here");
                                        setVisible(true)
                                        setSnackbarMessage(validIntroduction.desc == "" ? "Introduction Fields Can not be empty" : validIntroduction.desc)
                                        return false
                                    }
                                    if (!validLifeSpan.result) {
                                        console.log("here");
                                        setVisible(true)
                                        setSnackbarMessage(validLifeSpan.desc == "" ? "Lifespan Fields Can not be empty" : validLifeSpan.desc)
                                        return false
                                    }
                                    if (!validMass.result) {
                                        console.log("here");
                                        setVisible(true)
                                        setSnackbarMessage(validMass.desc == "" ? "Mass Fi elds Can not be empty" : validMass.desc)
                                        return false
                                    }
                                    if (!validLength.result) {
                                        console.log("here");
                                        setVisible(true)
                                        setSnackbarMessage(validLength.desc == "" ? "Length Fields Can not be empty" : validLength.desc)
                                        return false
                                    }
                                    if (!validExplanation.result) {
                                        console.log("here");
                                        setVisible(true)
                                        setSnackbarMessage(validExplanation.desc == "" ? "Explanation Fields Can not be empty" : validExplanation.desc)
                                        return false
                                    }
                                    createSeaAnimal(formData)
                                        .then((response) => {
                                            console.log(response.data.result);
                                            alert('Added Successfully')
                                        })
                                        .catch((err) => {
                                            console.log(err);
                                            alert('Data not added')
                                        });
                                }}
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
                                    Submit
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </ImageBackground>
            <Snackbar
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
            </Snackbar>
        </>

    )
}

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

export default AddInfo_SeaAnimal