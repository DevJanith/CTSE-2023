import React from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import { assets, COLORS, FONTS, SHADOWS, SIZES } from '../constants'

const CircleButton = ({ imgUrl, handlePress, ...props }) => {
    return (
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.white,
                position: "absolute",
                borderRadius: SIZES.extraLarge,
                alignItems: "center",
                justifyContent: "center",
                ...SHADOWS.light,
                ...props
            }}
            onPress={handlePress}
        >
            <Image
                source={imgUrl}
                resizeMode="contain"
                style={{ width: 24, height: 24 }}
            />
        </TouchableOpacity>
    )
}


const EditButton = ({ imgUrl, handlePress, ...props }) => {
    return (
        <TouchableOpacity
            style={{
                width: 40,
                height: 40,
                backgroundColor: COLORS.white,
                position: "absolute",
                borderRadius: SIZES.extraLarge,
                alignItems: "center",
                justifyContent: "center",
                ...SHADOWS.light,
                ...props
            }}
            onPress={handlePress}
        >
            <Image
                source={assets.edit}
                resizeMode="contain"
                style={{ width: 24, height: 24 }}
            />
        </TouchableOpacity>
    )
}


const RectButton = ({ minWidth, fontSize, handlePress, ...props }) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: COLORS.primary,
                borderRadius: SIZES.extraLarge,
                minWidth: minWidth,
                padding: SIZES.small,
                ...props
            }}
            onPress={handlePress}
        >
            <Text style={{
                fontFamily: FONTS.semiBold,
                fontSize: fontSize,
                color: COLORS.white,
                textAlign: "center"
            }}> Place a bid</Text>
        </TouchableOpacity>
    )
}

export {
    CircleButton,
    RectButton,
    EditButton
}

