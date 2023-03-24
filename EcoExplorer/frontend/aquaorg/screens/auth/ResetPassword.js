import React, { useContext } from 'react'
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { FocusedStatusBar } from '../../components'
import { assets, COLORS, FONTS, SIZES } from '../../constants'
import { AuthContext } from '../../context/context'

const ResetPassword = ({ navigation }) => {
    const { register } = useContext(AuthContext)

    return (
        <>
            <SafeAreaView
                style={{
                    flex: 1,
                    backgroundColor: "#fbe5d8"
                }}>
                <FocusedStatusBar
                    background={COLORS.primary}
                />
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <View style={{ zIndex: 0, marginLeft: 20 }}>
                            <Text style={{
                                fontFamily: FONTS.bold,
                                fontSize: 40,
                                marginTop: 100,
                                marginBottom: 50,
                                textAlign: "center",
                                marginLeft: -20,
                                color: "#295405",
                                textShadowColor: 'rgba(0, 0, 0, 0.75)',
                                textShadowOffset: { width: -1, height: 1 },
                                textShadowRadius: 6,
                            }}>
                                Reset Password
                            </Text>
                            <View style={{
                                marginTop: 20,
                                marginBottom: SIZES.large,
                                marginRight: SIZES.extraLarge,
                            }}>
                                <Text style={{
                                    fontFamily: FONTS.bold,
                                    fontSize: SIZES.medium,
                                    color: COLORS.primary,
                                    margin: SIZES.base,
                                    marginBottom: 20,
                                }}>
                                    Email Address
                                </Text>

                                {/* ============================ text input ============================== */}
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
                                        style={{ flex: 1, color: COLORS.white, fontWeight: "bold"  }}
                                        onChangeText={() => { }}
                                    />
                                </View>
                            </View>

                            {/* =================== reset password button ============================= */}
                            <View
                                style={{
                                    marginTop: SIZES.extraLarge,
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
                                        marginTop: 30,
                                        alignContent: "center",
                                        width: '60%',
                                        borderRadius: 30

                                    }}
                                    onPress={() => { alert("password rest email sent") }}
                                >
                                    <Text style={{
                                        fontFamily: FONTS.bold,
                                        fontSize: SIZES.large,
                                        color: COLORS.white,
                                        textAlign: "center"
                                    }}>
                                        Reset Password
                                    </Text>
                                </TouchableOpacity>
                            </View>


                            {/* ============================ already user link ===================== */}
                            <View
                                style={{
                                    margin: SIZES.base,
                                    marginTop: -15,
                                    marginLeft: 115
                                }}
                            >
                                <Text style={{
                                    fontFamily: FONTS.regular,
                                    fontSize: SIZES.medium,
                                    color: COLORS.primary,
                                    textAlign: "left"
                                }}>
                                    Already a user ?
                                    <Text
                                        style={{
                                            fontFamily: FONTS.bold,
                                            fontSize: SIZES.medium,
                                            color: COLORS.primary,
                                            textAlign: "left",
                                        }}
                                        onPress={() => { navigation.push("Login") }}
                                    > Log In</Text>
                                </Text>
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView >
        </>
    )
}

export default ResetPassword