import React, { useState } from 'react';
import { Image, StatusBar, View } from "react-native";

import { CircleButton } from "../components";
import { assets } from '../constants';

export const DetailsHeader = ({ navigation, data, image }) => {

    return (
        <View style={{ width: "100%", height: 90 }}>
            <Image
                source={image}
                resizeMode="cover"
                style={{ width: "100%", height: "100%" }}
            />
            <CircleButton
                imgUrl={assets.left}
                handlePress={() => { navigation.goBack() }}
                left={15}
                top={StatusBar.currentHeight + 10}
            />
            {/* <CircleButton
            imgUrl={assets.heart}
            right={15}
            top={StatusBar.currentHeight + 10}
        /> */}
        </View>
    )
}