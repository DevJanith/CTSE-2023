import React from 'react'
import { Image, Text, TextInput, View } from 'react-native'
import { assets, COLORS, FONTS, SIZES } from '../../../constants'

const ProfileBody = ({ data }) => {
    return (
        <View style={{ 
            padding: SIZES.font,
            marginTop: 180
        }}>
            <View style={{ marginVertical: SIZES.font, flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                    <Text style={{
                        fontFamily: FONTS.bold,
                        fontSize: SIZES.medium,
                        color: COLORS.primary,
                        margin: SIZES.base
                    }}>
                        Full Name
                    </Text>
                </View>
                <View style={{ flex: 2 }}>
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
                            placeholder='Full Name'
                            style={{ flex: 1, color: COLORS.primary, width: "100%" }}
                            editable={false}
                            value={data.name} 
                        />
                    </View>
                </View>
            </View>
            <View style={{ marginVertical: SIZES.font, flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                    <Text style={{
                        fontFamily: FONTS.bold,
                        fontSize: SIZES.medium,
                        color: COLORS.primary,
                        margin: SIZES.base
                    }}>
                        Email Address
                    </Text>
                </View>
                <View style={{ flex: 2 }}>
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
                            source={assets.email}
                            resizeMode="contain"
                            style={{
                                height: 20,
                                width: 20,
                                marginRight: SIZES.base
                            }}
                        />
                        <TextInput
                            placeholder='Full Name'
                            style={{ flex: 1, color: COLORS.primary, width: "100%" }}
                            editable={false}
                            value={data.email}
                        />
                    </View>
                </View>
            </View>
            <View style={{ marginVertical: SIZES.font, flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                    <Text style={{
                        fontFamily: FONTS.bold,
                        fontSize: SIZES.medium,
                        color: COLORS.primary,
                        margin: SIZES.base
                    }}>
                        Contact No.
                    </Text>
                </View>
                <View style={{ flex: 2 }}>
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
                            source={assets.contact}
                            resizeMode="contain"
                            style={{
                                height: 20,
                                width: 20,
                                marginRight: SIZES.base
                            }}
                        />
                        <TextInput
                            placeholder='Full Name'
                            style={{ flex: 1, color: COLORS.primary, width: "100%" }}
                            editable={false}
                            value={data.contactNumber}
                        />
                    </View>
                </View>
            </View>

            <View style={{ marginVertical: SIZES.font, flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                    <Text style={{
                        fontFamily: FONTS.bold,
                        fontSize: SIZES.medium,
                        color: COLORS.primary,
                        margin: SIZES.base
                    }}>
                        Status
                    </Text>
                </View>
                <View style={{ flex: 2 }}>
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
                        <TextInput
                            placeholder='Full Name'
                            style={{ flex: 1, color: COLORS.primary, width: "100%" }}
                            editable={false}
                            value={"ACTIVE"}
                        />
                    </View>
                </View>
            </View>

            <View style={{ marginVertical: SIZES.font, flexDirection: "row" }}>
                <View style={{ flex: 1 }}>
                    <Text style={{
                        fontFamily: FONTS.bold,
                        fontSize: SIZES.medium,
                        color: COLORS.primary,
                        margin: SIZES.base
                    }}>
                        Created Date
                    </Text>
                </View>
                <View style={{ flex: 2 }}>
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
                        <TextInput
                            placeholder='Full Name'
                            style={{ flex: 1, color: COLORS.primary, width: "100%" }}
                            editable={false}
                            value={"11.11.2022"}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ProfileBody