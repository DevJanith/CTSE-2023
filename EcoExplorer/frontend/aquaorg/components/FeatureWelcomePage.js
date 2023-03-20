import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { COLORS, FONTS, SIZES } from '../constants';

const FeatureWelcomePage = ({ FeatureWelcomePageData, navigation }) => {
    return (
        <>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: SIZES.extraLarge }}>
                    <Text style={{
                        fontSize: SIZES.extraLarge,
                        fontFamily: FONTS.bold,
                        textAlign: "center"
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
                    <Text style={{
                        fontSize: SIZES.medium,
                        fontFamily: FONTS.medium,
                        textAlign: "center"
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
                    borderRadius: 8,
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
                            padding: SIZES.large,
                            borderRadius: SIZES.font,
                            alignContent: "center",
                            width: "100%"
                        }}
                        onPress={() => { navigation.push(`${FeatureWelcomePageData.button.link}`) }}
                    >
                        <Text style={{
                            fontFamily: FONTS.bold,
                            fontSize: SIZES.large,
                            color: COLORS.white,
                            textAlign: "center"
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