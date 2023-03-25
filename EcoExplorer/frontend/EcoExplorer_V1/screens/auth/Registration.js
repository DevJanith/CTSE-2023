import React, { useContext, useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native'
import { Snackbar } from 'react-native-paper'
import { FocusedStatusBar } from '../../components'
import { assets, COLORS, FONTS, SIZES } from '../../constants'
import { AuthContext } from '../../context/context'
import { confirmPasswordValidation, contactNumberValidation, emailValidation, passwordValidation } from '../../util/validation'

const Registration = ({ navigation }) => {
    const { register } = useContext(AuthContext)

    const [formData, setFormData] = useState({
        email: "",
        name: "",
        contactNumber: "",
        password: "",
        confirmPassword: ""
    })
    const [validEmail, setValidEmail] = useState({ result: false, desc: "" })
    const [validContactNumber, setValidContactNumber] = useState({ result: false, desc: "" })
    const [validPassword, setValidPassword] = useState({ result: false, desc: "" })
    const [validConfirmPassword, setValidConfirmPassword] = useState({ result: false, desc: "" })

    const [viewPassword, setViewPassword] = useState(true)
    const [visible, setVisible] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    const onDismissSnackBar = () => setVisible(false);

    const onChangeEmail = (value) => {
        setValidEmail(emailValidation(value))
        setFormData({ ...formData, email: value })
    }

    const onChangeName = (value) => {
        setFormData({ ...formData, name: value })
    }

    const onChangeContactNumber = (value) => {
        setValidContactNumber(contactNumberValidation(value))
        setFormData({ ...formData, contactNumber: value })
    }

    const onChangePassword = (value) => {
        setValidPassword(passwordValidation(value))
        setFormData({ ...formData, password: value })
    }

    const onChangeConfirmPassword = (value) => {
        setValidConfirmPassword(confirmPasswordValidation(value, formData))
        setFormData({ ...formData, confirmPassword: value })
    }

    const onFormSubmit = () => {
        if (!validEmail.result) {
            setVisible(true)
            setSnackbarMessage(validEmail.desc == "" ? "Required Fields Can not be empty" : validEmail.desc)
            return false
        }
        if (!validContactNumber.result) {
            setVisible(true)
            setSnackbarMessage(validContactNumber.desc == "" ? "Required Fields Can not be empty" : validContactNumber.desc)
            return false
        }
        if (!validPassword.result) {
            setVisible(true)
            setSnackbarMessage(validPassword.desc == "" ? "Required Fields Can not be empty" : validPassword.desc)
            return false
        }
        if (!validConfirmPassword.result) {
            setVisible(true)
            setSnackbarMessage(validConfirmPassword.desc == "" ? "Required Fields Can not be empty" : validConfirmPassword.desc)
            return false
        }
        register(formData)
    }

    return (
        <>
            <SafeAreaView
                style={{
                    flex: 1
                }}>

                <ImageBackground
                    source={require('../../assets/images/EcoExplorer/login_bg_2.png')}
                    style={{ width: "100%", height: "100%", opacity: 0.8 }}>

                    <FocusedStatusBar
                        background={COLORS.primary}
                    />
                    <ScrollView>
                        <View style={{ flex: 1 }}>
                            <View style={{ zIndex: 0, marginLeft: 20 }}>
                                <Image
                                    source={require('../../assets/images/EcoExplorer/eco_explorer.png')}
                                    style={{
                                        height: 30,
                                        width: 28,
                                        marginTop: 60,
                                        marginBottom: -72,
                                        marginLeft: 150
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
                                        marginTop: 30,
                                        marginLeft: 30
                                    }}>
                                    Eco Explorer
                                </Text>
                                <TouchableOpacity disabled={true}
                                    style={{
                                        flexDirection: "row",
                                        backgroundColor: "#000000",
                                        alignItems: "center",
                                        marginTop: 20,
                                        width: 410,
                                        height: 40,
                                        paddingVertical: 10,
                                        paddingHorizontal: 10,
                                        elevation: 10,
                                        marginLeft: -9,
                                        opacity: 0.3
                                    }}
                                >
                                </TouchableOpacity>
                                <Text style={{
                                    fontFamily: FONTS.bold,
                                    fontSize: 20,
                                    marginTop: -35,
                                    textAlign: "center",
                                    marginLeft: -20
                                }}>
                                    create your account
                                </Text>
                                <View style={{
                                    marginTop: 40,
                                    marginBottom: SIZES.large,
                                    marginRight: SIZES.extraLarge,
                                }}>
                                    <Text style={{
                                        fontFamily: FONTS.bold,
                                        fontSize: SIZES.medium,
                                        color: COLORS.primary,
                                        margin: SIZES.base
                                    }}>
                                        Full Name
                                    </Text>
                                    <View style={{
                                        width: "100%",
                                        borderRadius: SIZES.font,
                                        backgroundColor: "#93a688",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        paddingHorizontal: SIZES.font,
                                        paddingVertical: SIZES.small - 2,
                                        marginBottom: SIZES.large
                                    }}>
                                        <Image
                                            source={assets.user}
                                            resizeMode="contain"
                                            style={{
                                                height: 20,
                                                width: 20,
                                                marginRight: SIZES.base
                                            }}
                                        />
                                        <TextInput
                                            placeholder='Enter Full Name'
                                            style={{ flex: 1, color: COLORS.primary, fontWeight: "bold" }}
                                            onChangeText={(value) => { onChangeName(value) }}
                                        />
                                    </View>
                                    <Text style={{
                                        fontFamily: FONTS.bold,
                                        fontSize: SIZES.medium,
                                        color: COLORS.primary,
                                        margin: SIZES.base
                                    }}>
                                        Email Address *
                                    </Text>
                                    <View style={{
                                        width: "100%",
                                        borderRadius: SIZES.font,
                                        backgroundColor: "#93a688",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        paddingHorizontal: SIZES.font,
                                        paddingVertical: SIZES.small - 2,
                                        marginBottom: SIZES.large
                                    }}>
                                        <Image
                                            source={assets.email}
                                            resizeMode="contain"
                                            style={{
                                                height: 20,
                                                width: 20,
                                                marginRight: SIZES.base
                                            }}
                                        />
                                        <TextInput
                                            placeholder='Enter Email Address'
                                            style={{ flex: 1, color: COLORS.primary, fontWeight: "bold" }}
                                            onChangeText={(value) => { onChangeEmail(value) }}
                                        />
                                    </View>
                                    <Text style={{
                                        fontFamily: FONTS.bold,
                                        fontSize: SIZES.medium,
                                        color: COLORS.primary,
                                        margin: SIZES.base
                                    }}>
                                        Contact Number *
                                    </Text>
                                    <View style={{
                                        width: "100%",
                                        borderRadius: SIZES.font,
                                        backgroundColor: "#93a688",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        paddingHorizontal: SIZES.font,
                                        paddingVertical: SIZES.small - 2,
                                        marginBottom: SIZES.large
                                    }}>
                                        <Image
                                            source={assets.contact}
                                            resizeMode="contain"
                                            style={{
                                                height: 20,
                                                width: 20,
                                                marginRight: SIZES.base
                                            }}
                                        />
                                        <TextInput
                                            placeholder='Enter Contact Number'
                                            style={{ flex: 1, color: COLORS.primary, fontWeight: "bold" }}
                                            onChangeText={(value) => { onChangeContactNumber(value) }}
                                        />
                                    </View>
                                    <Text style={{
                                        fontFamily: FONTS.bold,
                                        fontSize: SIZES.medium,
                                        color: COLORS.primary,
                                        margin: SIZES.base
                                    }}>
                                        Password *
                                    </Text>
                                    <View style={{
                                        width: "100%",
                                        borderRadius: SIZES.font,
                                        backgroundColor: "#93a688",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        paddingHorizontal: SIZES.font,
                                        paddingVertical: SIZES.small - 2,
                                        marginBottom: SIZES.large
                                    }}>
                                        <Image
                                            source={assets.password}
                                            resizeMode="contain"
                                            style={{
                                                height: 20,
                                                width: 20,
                                                marginRight: SIZES.base
                                            }}
                                        />
                                        <TextInput
                                            placeholder='Enter Password'
                                            secureTextEntry={viewPassword}
                                            style={{ flex: 1, color: COLORS.primary, fontWeight: "bold" }}
                                            onChangeText={(value) => { onChangePassword(value) }}
                                        />
                                        <TouchableOpacity
                                            style={{
                                                backgroundColor: COLORS.white,
                                                padding: 5,
                                                borderRadius: 50
                                            }}
                                            onPress={() => { setViewPassword((prev) => { return !prev }) }}>
                                            <Image
                                                source={viewPassword ? assets.passwordHide : assets.passwordView}
                                                resizeMode="contain"
                                                style={{
                                                    height: 20,
                                                    width: 20,
                                                }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                    <Text style={{
                                        fontFamily: FONTS.bold,
                                        fontSize: SIZES.medium,
                                        color: COLORS.primary,
                                        margin: SIZES.base
                                    }}>
                                        Confirm Password *
                                    </Text>
                                    <View style={{
                                        width: "100%",
                                        borderRadius: SIZES.font,
                                        backgroundColor: "#93a688",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        paddingHorizontal: SIZES.font,
                                        paddingVertical: SIZES.small - 2,
                                        marginBottom: SIZES.large
                                    }}>
                                        <Image
                                            source={assets.password}
                                            resizeMode="contain"
                                            style={{
                                                height: 20,
                                                width: 20,
                                                marginRight: SIZES.base
                                            }}
                                        />
                                        <TextInput
                                            placeholder='Re Enter Password'
                                            secureTextEntry={true}
                                            style={{ flex: 1, color: COLORS.primary, fontWeight: "bold" }}
                                            onChangeText={(value) => { onChangeConfirmPassword(value) }}
                                        />
                                    </View>
                                </View>

                                <View
                                    style={{
                                        marginTop: SIZES.large,
                                        alignItems: "center",
                                        marginBottom: SIZES.extraLarge
                                    }}
                                >
                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: "#2f5019",
                                            padding: SIZES.font,
                                            // margin: SIZES.small,
                                            marginRight: SIZES.large,
                                            borderRadius: SIZES.font,
                                            marginTop: 20,
                                            alignContent: "center",
                                            width: '40%',
                                            borderRadius: 30

                                        }}
                                        onPress={() => { onFormSubmit() }}
                                    >
                                        <Text style={{
                                            fontFamily: FONTS.bold,
                                            fontSize: SIZES.large,
                                            color: COLORS.white,
                                            textAlign: "center"
                                        }}>
                                            Register
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                <View
                                    style={{
                                        margin: SIZES.base
                                    }}
                                >
                                    <Text style={{
                                        fontFamily: FONTS.regular,
                                        fontSize: SIZES.medium,
                                        color: COLORS.primary,
                                        textAlign: "center",
                                        marginTop: -10,
                                        marginBottom: 40,
                                        marginLeft: -20
                                    }}>
                                        Already a user ?
                                        <Text
                                            style={{
                                                fontFamily: FONTS.bold,
                                                fontSize: SIZES.medium,
                                                color: COLORS.primary,
                                                textAlign: "center",
                                            }}
                                            onPress={() => { navigation.push("Login") }}
                                        > Log In</Text>
                                    </Text>
                                </View>

                            </View>
                            {/* <View style={{
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            right: 0,
                            left: 0,
                            zIndex: -1,
                        }}>
                            <Image
                                source={assets.b3}
                                resizeMode="cover"
                                style={{
                                    width: "100%",
                                    height: 300,
                                    borderBottomLeftRadius: SIZES.medium,
                                    borderBottomRightRadius: SIZES.medium,
                                }}
                            />
                        </View> */}
                        </View>
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
                    </ScrollView>
                </ImageBackground>
            </SafeAreaView >
        </>
    )
}

export default Registration