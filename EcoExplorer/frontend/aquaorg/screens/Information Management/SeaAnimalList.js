import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { FONTS } from '../../constants'

const SeaAnimalList = ({ onPress, img, title, bg, icon }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                flexDirection: "row",
                backgroundColor: bg,
                padding: 20,
                marginHorizontal: 20,
                borderRadius: 20,
                alignItems: "center",
                marginTop: 10,
                elevation:6
            }}
        >
            <Image
                source={img}
                style={{ width: 60, height: 60 }}
            />

            <View>
                <Text
                    style={{
                        color: "#345c74",
                        fontFamily: FONTS.bold,
                        fontSize: 18,
                        paddingHorizontal: 20,
                        width: 170
                    }}
                >{title}</Text>
                <Text
                    style={{
                        color:"#f58084",
                        fontFamily:FONTS.medium,
                        fontSize:12,
                        paddingHorizontal:20
                    }}
                >Click to view more informations</Text>
            </View>
            <Text 
                    style={{
                        color:"#345c74",
                        fontFamily:FONTS.medium,
                        fontSize:13,
                        paddingLeft:10,
                        paddingRight:10
                    }}>
                25%
            </Text>

            
            <Image
                source={icon}
                style={{ 
                    width: 15, 
                    height: 15,
                    marginLeft:10
                }}
            />
            

        </TouchableOpacity> 
    )
}

export default SeaAnimalList