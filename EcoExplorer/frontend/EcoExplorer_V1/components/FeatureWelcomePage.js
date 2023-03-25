import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants';

const FeatureWelcomePage = ({ FeatureWelcomePageData, navigation }) => {
    return (
        <>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: SIZES.extraLarge }}>
                    <Text style={{
                        fontSize: 35,
                        fontFamily: FONTS.semiBold,
                        textAlign: "center",
                        textShadowColor: 'rgba(0, 0, 0, 0.75)',
                        textShadowOffset: { width: -1, height: 1 },
                        textShadowRadius: 6
                    }}>{FeatureWelcomePageData.title}</Text>
                </View>
                <View style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 40,
                    marginRight: SIZES.extraLarge,
                    marginLeft: SIZES.extraLarge,
                }}>
                    <TouchableOpacity disabled={true}
                        style={{
                            flexDirection: "row",
                            backgroundColor: "#000000",
                            alignItems: "center",
                            marginTop: -20,
                            width: 500,
                            height: 60,
                            paddingVertical: 10,
                            paddingHorizontal: 10,
                            elevation: 10,
                            marginLeft: 15,
                            opacity: 0.2
                        }}
                    >
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: SIZES.medium,
                        fontFamily: FONTS.semiBold,
                        color:"#20a0e1",
                        textAlign: "center",
                        marginTop: -53
                    }}>{FeatureWelcomePageData.content}</Text>
                </View>
                <View style={{
                    flex: 1,
                    marginTop: 40,
                    marginRight: SIZES.extraLarge,
                    marginLeft: SIZES.extraLarge,
                    elevation: 20,
                    shadowColor: '#52006A',
                    backgroundColor: COLORS.darkCustomColor,
                    borderRadius: 35,
                    paddingVertical: 20,
                    paddingHorizontal: 25,
                    marginVertical: 5,
                }}>
                    {FeatureWelcomePageData.features.map((item, index) => {
                        return <>
                            <View style={{ flexDirection: "row", marginTop: SIZES.base, alignContent: "space-between" }} key={index} >
                                <View styles={{ flex: 1 }}>
                                    <Text> 👋 </Text>
                                </View>
                                <View style={{ flex: 4 }}>
                                    <Text style={{
                                        fontSize: SIZES.medium,
                                        fontFamily: FONTS.medium,
                                        color: COLORS.white
                                    }}>
                                        {item.content}
                                    </Text>
                                </View>
                            </View>
                        </>
                    })}
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 100, margin: SIZES.extraLarge }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.darkCustomColor,
                            padding: 10,
                            borderRadius: 35,
                            alignContent: "center",
                            width: "60%",
                            marginTop: -20,
                            height: 45
                        }}
                        onPress={() => { navigation.push(`${FeatureWelcomePageData.button.link}`) }}
                    >
                        <Text style={{
                            fontFamily: FONTS.bold,
                            fontSize: SIZES.medium,
                            color: COLORS.white,
                            textAlign: "center",
                            
                        }}>
                            {FeatureWelcomePageData.button.title}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    )
}

export default FeatureWelcomePage