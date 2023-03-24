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
                                fontSize: 40,
                                marginTop: 100,
                                marginBottom: 50,
                                textAlign: "center"
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
                                    margin: SIZES.base
                                }}>
                                    Email Address
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
                                        style={{ flex: 1, color: COLORS.white }}
                                        onChangeText={() => { }}
                                    />
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
                            <View
                                style={{
                                    marginTop: SIZES.extraLarge,
                                    alignItems: "center",
                                    marginBottom: SIZES.extraLarge
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
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView >
        </>
    )
}

export default ResetPassword