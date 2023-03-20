import React from 'react'
import { Image, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FocusedStatusBar from '../components/FocusedStatusBar'
import { assets, COLORS, FONTS, SHADOWS, SIZES } from '../constants'

const Info = ({ onSearch, navigation }) => {
    return (
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
                            fontSize: SIZES.extraLarge,
                            color: COLORS.white,
                            marginTop: 200
                        }}>
                            Welcome Back👋
                        </Text>
                        <Text style={{
                            fontFamily: FONTS.bold,
                            fontSize: SIZES.extraLarge,
                            color: COLORS.white,
                            marginTop: 10
                        }}>
                            User #1
                        </Text>
                        <View style={{
                            marginTop: SIZES.font,
                            marginBottom: SIZES.large,
                            marginRight: SIZES.extraLarge,
                        }}>
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
                                    source={assets.search}
                                    resizeMode="contain"
                                    style={{
                                        height: 20,
                                        width: 20,
                                        marginRight: SIZES.base
                                    }}
                                />
                                <TextInput
                                    placeholder='search for new knowledge'
                                    style={{ flex: 1, color: COLORS.white }}
                                    onChangeText={onSearch}
                                />
                            </View>
                        </View>
                        <View style={{
                            backgroundColor: COLORS.lightCustomColor,
                            borderRadius: SIZES.font,
                            marginBottom: SIZES.extraLarge,
                            marginTop: SIZES.extraLarge,
                            marginRight: SIZES.extraLarge,
                            // margin: SIZES.,
                            ...SHADOWS.dark
                        }}>
                            <View style={{ width: "100%", height: 100, padding: SIZES.font, }}>
                                <Text style={{
                                    fontFamily: FONTS.bold,
                                    fontSize: SIZES.extraLarge,
                                    color: COLORS.primary,
                                    marginTop: 10
                                }}>
                                    Start Learning
                                </Text>
                                <Text style={{
                                    fontFamily: FONTS.semiBold,
                                    fontSize: SIZES.large,
                                    color: COLORS.primary,
                                    marginTop: 5
                                }}>
                                    Life Below Water
                                </Text>
                            </View>
                            <View style={{ width: "100%", padding: SIZES.font, }}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <View style={{ flex: 1 }}>
                                        <TouchableOpacity
                                            style={{
                                                backgroundColor: COLORS.darkCustomColor,
                                                padding: SIZES.font,
                                                // margin: SIZES.small,
                                                marginRight: SIZES.large,
                                                borderRadius: SIZES.font,
                                                alignContent: "center",
                                                justifyContent: "center"
                                            }}
                                            // onPress={() => { alert("test alert") }}
                                            onPress={() => { navigation.push('InfoCategories') }}
                                        >
                                            <View style={{ flexDirection: "row" }}>
                                                <Text style={{
                                                    fontFamily: FONTS.bold,
                                                    fontSize: SIZES.large,
                                                    color: COLORS.white,
                                                }}>
                                                    Categories
                                                </Text>
                                                <Image
                                                    source={assets.play}
                                                    resizeMode="contain"
                                                    style={{
                                                        marginLeft: SIZES.font,
                                                        borderTopLeftRadius: SIZES.font,
                                                        borderTopRightRadius: SIZES.font,
                                                    }}
                                                />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Image
                                            source={assets.b2}
                                            resizeMode="contain"
                                            style={{
                                                width: 200,
                                                borderTopLeftRadius: SIZES.font,
                                                borderTopRightRadius: SIZES.font,
                                            }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={{
                            marginBottom: SIZES.extraLarge,
                            marginTop: SIZES.extraLarge,
                            marginRight: SIZES.small,
                            marginLeft: SIZES.small,
                        }}>
                            <View style={{ flexDirection: "row" }}>
                                <View style={{ flex: 2 }}>
                                    <Text style={{
                                        fontFamily: FONTS.bold,
                                        fontSize: SIZES.large,
                                        color: COLORS.primary,
                                        marginTop: 10
                                    }}>
                                        Featured Categories
                                    </Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <TouchableOpacity
                                        style={{
                                            backgroundColor: COLORS.lightCustomColor,
                                            padding: SIZES.font,
                                            // margin: SIZES.small,
                                            marginLeft: SIZES.extraLarge,
                                            marginRight: SIZES.large,
                                            borderRadius: SIZES.font,
                                            alignContent: "center",
                                            justifyContent: "center"
                                        }}
                                        onPress={() => { navigation.push('InfoHome') }}
                                    >
                                        <Text style={{
                                            fontFamily: FONTS.regular,
                                            fontSize: SIZES.medium,
                                            color: COLORS.white,
                                        }}>
                                            More
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{
                            marginTop: SIZES.base,
                            marginBottom: SIZES.extraLarge,
                            marginRight: SIZES.extraLarge,
                            height: 70
                        }}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: COLORS.lightCustomColor,
                                    padding: SIZES.font,
                                    // margin: SIZES.small,
                                    marginLeft: SIZES.extraLarge,
                                    marginRight: SIZES.large,
                                    borderRadius: SIZES.font,
                                    alignContent: "center",
                                    justifyContent: "center",
                                    flex: 1
                                }}
                                onPress={() => { }}
                            >
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flex: 0.80 }}></View>
                                    <View style={{ flex: 2, flexDirection: "column" }}>
                                        <Text style={{
                                            fontFamily: FONTS.regular,
                                            fontSize: SIZES.large,
                                            color: COLORS.primary,
                                        }}>
                                            Blue Whale
                                        </Text>
                                        <Text style={{
                                            fontFamily: FONTS.light,
                                            fontSize: SIZES.small,
                                            color: COLORS.primary,
                                        }}>
                                            Click Here to view more information
                                        </Text>
                                    </View>
                                    <View style={{ flex: 0.5 }}>
                                        <Image
                                            source={assets.play}
                                            resizeMode="contain"
                                            style={{
                                                marginLeft: SIZES.font,
                                                width: 50,
                                                top: 8
                                            }}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            marginTop: SIZES.base,
                            marginBottom: SIZES.extraLarge,
                            marginRight: SIZES.extraLarge,
                            height: 70
                        }}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: COLORS.lightCustomColor,
                                    padding: SIZES.font,
                                    // margin: SIZES.small,
                                    marginLeft: SIZES.extraLarge,
                                    marginRight: SIZES.large,
                                    borderRadius: SIZES.font,
                                    alignContent: "center",
                                    justifyContent: "center",
                                    flex: 1
                                }}
                                onPress={() => { }}
                            >
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flex: 0.80 }}></View>
                                    <View style={{ flex: 2, flexDirection: "column" }}>
                                        <Text style={{
                                            fontFamily: FONTS.regular,
                                            fontSize: SIZES.large,
                                            color: COLORS.primary,
                                        }}>
                                            Purple Coral
                                        </Text>
                                        <Text style={{
                                            fontFamily: FONTS.light,
                                            fontSize: SIZES.small,
                                            color: COLORS.primary,
                                        }}>
                                            Click Here to view more information
                                        </Text>
                                    </View>
                                    <View style={{ flex: 0.5 }}>
                                        <Image
                                            source={assets.play}
                                            resizeMode="contain"
                                            style={{
                                                marginLeft: SIZES.font,
                                                width: 50,
                                                top: 8
                                            }}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            marginTop: SIZES.base,
                            marginBottom: SIZES.extraLarge,
                            marginRight: SIZES.extraLarge,
                            height: 70
                        }}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: COLORS.lightCustomColor,
                                    padding: SIZES.font,
                                    // margin: SIZES.small,
                                    marginLeft: SIZES.extraLarge,
                                    marginRight: SIZES.large,
                                    borderRadius: SIZES.font,
                                    alignContent: "center",
                                    justifyContent: "center",
                                    flex: 1
                                }}
                                onPress={() => { }}
                            >
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flex: 0.80 }}></View>
                                    <View style={{ flex: 2, flexDirection: "column" }}>
                                        <Text style={{
                                            fontFamily: FONTS.regular,
                                            fontSize: SIZES.large,
                                            color: COLORS.primary,
                                        }}>
                                            Purple Coral
                                        </Text>
                                        <Text style={{
                                            fontFamily: FONTS.light,
                                            fontSize: SIZES.small,
                                            color: COLORS.primary,
                                        }}>
                                            Click Here to view more information
                                        </Text>
                                    </View>
                                    <View style={{ flex: 0.5 }}>
                                        <Image
                                            source={assets.play}
                                            resizeMode="contain"
                                            style={{
                                                marginLeft: SIZES.font,
                                                width: 50,
                                                top: 8
                                            }}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            marginTop: SIZES.base,
                            marginBottom: SIZES.extraLarge,
                            marginRight: SIZES.extraLarge,
                            height: 70
                        }}>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: COLORS.lightCustomColor,
                                    padding: SIZES.font,
                                    // margin: SIZES.small,
                                    marginLeft: SIZES.extraLarge,
                                    marginRight: SIZES.large,
                                    borderRadius: SIZES.font,
                                    alignContent: "center",
                                    justifyContent: "center",
                                    flex: 1
                                }}
                                onPress={() => { }}
                            >
                                <View style={{ flexDirection: "row" }}>
                                    <View style={{ flex: 0.80 }}></View>
                                    <View style={{ flex: 2, flexDirection: "column" }}>
                                        <Text style={{
                                            fontFamily: FONTS.regular,
                                            fontSize: SIZES.large,
                                            color: COLORS.primary,
                                        }}>
                                            Purple Coral
                                        </Text>
                                        <Text style={{
                                            fontFamily: FONTS.light,
                                            fontSize: SIZES.small,
                                            color: COLORS.primary,
                                        }}>
                                            Click Here to view more information
                                        </Text>
                                    </View>
                                    <View style={{ flex: 0.5 }}>
                                        <Image
                                            source={assets.play}
                                            resizeMode="contain"
                                            style={{
                                                marginLeft: SIZES.font,
                                                width: 50,
                                                top: 8
                                            }}
                                        />
                                    </View>
                                </View>
                            </TouchableOpacity>
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
                                height: 450,
                                borderBottomLeftRadius: SIZES.medium,
                                borderBottomRightRadius: SIZES.medium,
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default Info