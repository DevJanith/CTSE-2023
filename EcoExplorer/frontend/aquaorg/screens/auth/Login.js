import React, { useContext, useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
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
                <FocusedStatusBar
                    background={COLORS.primary}
                />
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <View style={{ zIndex: 0, marginLeft: 20 }}>
                            <Text style={{
                                fontFamily: FONTS.bold,
                                fontSize: 60,
                                color: COLORS.white,
                                marginTop: 150,
                                marginBottom: 30,
                                textAlign: "center"
                            }}>
                                Login
                            </Text>
                            <View style={{
                                marginTop: 60,
                                marginBottom: SIZES.large,
                                marginRight: SIZES.extraLarge,
                            }}>
                                <Text style={{
                                    fontFamily: FONTS.bold,
                                    fontSize: SIZES.medium,
                                    color: COLORS.primary,
                                    margin: SIZES.base
                                }}>
                                    User Name (*)
                                </Text>
                                <View style={{
                                    width: "100%",
                                    borderRadius: SIZES.font,
                                    backgroundColor: COLORS.lightCustomColor,
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
                                        placeholder='Enter User Name'
                                        style={{ flex: 1, color: COLORS.primary }}
                                        onChangeText={(value) => onChangeEmail(value)}
                                    />
                                </View>
                                <Text style={{
                                    fontFamily: FONTS.bold,
                                    fontSize: SIZES.medium,
                                    color: COLORS.primary,
                                    margin: SIZES.base
                                }}>
                                    Password (*)
                                </Text>
                                <View style={{
                                    width: "100%",
                                    borderRadius: SIZES.font,
                                    backgroundColor: COLORS.lightCustomColor,
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
                                        style={{ flex: 1, color: COLORS.primary }}
                                        onChangeText={(value) => onChangePassword(value)}
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
                                    textAlign: "left"
                                }}>
                                    Forget Password ?
                                    <Text
                                        style={{
                                            fontFamily: FONTS.bold,
                                            fontSize: SIZES.medium,
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
                                        backgroundColor: COLORS.darkCustomColor,
                                        padding: SIZES.font,
                                        // margin: SIZES.small,
                                        marginRight: SIZES.large,
                                        borderRadius: SIZES.font,
                                        marginTop: 10,
                                        alignContent: "center",
                                        width: '50%'

                                    }}
                                    onPress={() => { login(formData) }}
                                >
                                    <Text style={{
                                        fontFamily: FONTS.bold,
                                        fontSize: SIZES.large,
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
                                    fontSize: SIZES.medium,
                                    color: COLORS.primary,
                                    margin: SIZES.medium
                                }}>
                                    Not a User ?
                                    <Text
                                        style={{
                                            fontFamily: FONTS.bold,
                                            fontSize: SIZES.medium,
                                            color: COLORS.primary,
                                        }}
                                        onPress={() => { navigation.push("Registration") }}
                                    > Register</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={{
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
                        </View>
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
            </SafeAreaView >
        </>
    )
}

export default Login