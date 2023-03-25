import React, { useContext, useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native'
import { Snackbar } from 'react-native-paper'
import { FocusedStatusBar } from '../../components'
import { assets, COLORS, FONTS, SIZES } from '../../constants'
import { AuthContext } from '../../context/context'
import { requiredFieldValidation } from '../../util/validation'

const Login = ({ navigation }) => {
    const { login } = useContext(AuthContext)
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const [validEmail, setValidEmail] = useState({ result: false, desc: "" })
    const [validPassword, setValidPassword] = useState({ result: false, desc: "" })

    const [viewPassword, setViewPassword] = useState(true)
    const [visible, setVisible] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    const onDismissSnackBar = () => setVisible(false);

    const onChangeEmail = (value) => {
        setValidEmail(requiredFieldValidation(value))
        setFormData({ ...formData, email: value })
    }

    const onChangePassword = (value) => {
        setValidPassword(requiredFieldValidation(value))
        setFormData({ ...formData, password: value })
    }

    const onFormSubmit = () => {
        if (!validEmail.result) {
            setVisible(true)
            setSnackbarMessage(validEmail.desc == "" ? "Required Fields Can not be empty" : validEmail.desc)
            return false
        }
        if (!validPassword.result) {
            setVisible(true)
            setSnackbarMessage(validPassword.desc == "" ? "Required Fields Can not be empty" : validPassword.desc)
            return false
        }
        login(formData)
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
                                        marginBottom: -90,
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
                                        marginTop: 50,
                                        marginLeft: 30
                                    }}>
                                    Eco Explorer
                                </Text>
                                {/* <Text style={{
                                    fontFamily: FONTS.bold,
                                    fontSize: 20,
                                    color: COLORS.black,
                                    marginTop: 10,
                                    marginBottom: 10,
                                    textAlign: "center"
                                }}>
                                    Login
                                </Text> */}
                                <View style={{
                                    marginTop: 80,
                                    marginBottom: SIZES.large,
                                    marginRight: SIZES.extraLarge,
                                }}>
                                    <Text style={{
                                        fontFamily: FONTS.bold,
                                        fontSize: SIZES.medium,
                                        color: COLORS.primary,
                                        margin: SIZES.base
                                    }}>
                                        User Name*
                                    </Text>
                                    <View style={{
                                        width: "100%",
                                        borderRadius: SIZES.font,
                                        backgroundColor: "#93a688",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        paddingHorizontal: SIZES.font,
                                        paddingVertical: SIZES.small - 2,
                                        marginBottom: SIZES.large,
                                        // opacity: 0.8
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
                                            placeholder='Enter User Name'
                                            style={{ flex: 1, color: "COLORS.primary", fontWeight: "bold" }}
                                            onChangeText={(value) => onChangeEmail(value)}
                                        />
                                    </View>
                                    <Text style={{
                                        fontFamily: FONTS.bold,
                                        fontSize: SIZES.medium,
                                        color: COLORS.primary,
                                        margin: SIZES.base
                                    }}>
                                        Password*
                                    </Text>
                                    <View style={{
                                        width: "100%",
                                        borderRadius: SIZES.font,
                                        backgroundColor: "#93a688",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        paddingHorizontal: SIZES.font,
                                        paddingVertical: SIZES.small - 2

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
                                            onChangeText={(value) => onChangePassword(value)}
                                        />
                                        <TouchableOpacity
                                            style={{
                                                backgroundColor: COLORS.white,
                                                padding: 5,
                                                borderRadius: 50,
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
                                </View>
                                <View
                                    style={{
                                        margin: SIZES.base
                                    }}
                                >
                                    <Text style={{
                                        fontFamily: FONTS.regular,
                                        fontSize: SIZES.small,
                                        color: COLORS.primary,
                                        textAlign: "left",
                                        marginTop: -10
                                    }}>
                                        Forget Password ?
                                        <Text
                                            style={{
                                                fontFamily: FONTS.bold,
                                                fontSize: SIZES.small,
                                                color: COLORS.primary,
                                                textAlign: "left",
                                                cursor: "pointer"
                                            }}
                                            onPress={() => { navigation.push("ResetPassword") }}
                                        > Click Here</Text>
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        marginTop: SIZES.large,
                                        alignItems: "center"
                                    }}
                                >
                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: "#2f5019",
                                            padding: SIZES.font,
                                            // margin: SIZES.small,
                                            marginRight: SIZES.large,
                                            borderRadius: SIZES.font,
                                            marginTop: 80,
                                            alignContent: "center",
                                            width: '40%',
                                            borderRadius: 30

                                        }}
                                        onPress={() => { login(formData) }}
                                    >
                                        <Text style={{
                                            fontFamily: FONTS.bold,
                                            fontSize: SIZES.medium,
                                            color: COLORS.white,
                                            textAlign: "center"
                                        }}>
                                            Login
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                                <View
                                    style={{
                                        margin: SIZES.base,
                                        alignItems: "center"
                                    }}
                                >
                                    <Text style={{
                                        fontFamily: FONTS.regular,
                                        fontSize: SIZES.small,
                                        color: COLORS.primary,
                                        margin: SIZES.medium,
                                        marginTop: 2,
                                        marginLeft: -2
                                    }}>
                                        Not a registered user ?
                                        <Text
                                            style={{
                                                fontFamily: FONTS.bold,
                                                fontSize: SIZES.small,
                                                color: COLORS.primary,
                                            }}
                                            onPress={() => { navigation.push("Registration") }}
                                        > Register</Text>
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
                                    source={assets.b1}
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

export default Login