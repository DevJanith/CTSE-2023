import React from 'react'
import {
    Image,
    ImageBackground, Text, TouchableOpacity,
    View
} from 'react-native'
import { Modalize } from 'react-native-modalize'
import { FONTS } from '../../constants'
import SeaAnimalList from './SeaAnimalList'

const SeaAnimal = ({ onSearch, navigation }) => {
    return (
        <ImageBackground
            source={require('../../assets/images/Info/sea_animal_bg.png')}
            style={{
                width: "100%",
                height: "100%"
            }}
        >

            <View style={{
                flexDirection: "row",
                width: "100%",
                paddingHorizontal: 20
            }}>
                <TouchableOpacity
                    onPress={() => { navigation.push('InformationSrc') }}
                    style={{
                        paddingHorizontal: 10,
                        paddingVertical: 13,
                        borderRadius: 10,
                        marginTop: 30,
                        backgroundColor: "#8bbcdb"
                    }}
                >
                    <Image
                        source={require('../../assets/images/Info/left_arrow.png')}
                        style={{ width: 20, height: 15 }}
                    />
                </TouchableOpacity>
            </View>

            <Text style={{
                color: "#FFF",
                fontSize: 35,
                fontFamily: FONTS.bold,
                width: 200,
                marginLeft: 115,
                textAlign: "center",
                marginTop: 34,
                elevation: 10

            }}>
                Sea Animals
            </Text>

            <Modalize
                handleStyle={{
                    marginTop: 30,
                    backgroundColor: "#53A7DB",
                    width: 80
                }}
                modalStyle={{
                    borderTopLeftRadius: 60,
                    borderTopRightRadius: 60
                }}
                alwaysOpen={500}
                scrollViewProps={{ showsVerticalScrollIndicator: false }}
            >

                <View style={{ marginTop: 40 }}>
                    <SeaAnimalList
                        onPress={() => { navigation.push('BlueWhale') }}
                        img={require('../../assets/images/Info/blue_whale.png')}
                        title="Blue Whale"
                        bg="#C8E7F9"
                        icon={require('../../assets/images/Info/right_arrow_2.png')}

                    />

                    <SeaAnimalList

                        img={require('../../assets/images/Info/seahorse.png')}
                        title="Sea Horse"
                        bg="#C8E7F9"
                        icon={require('../../assets/images/Info/right_arrow_2.png')}
                    />

                    <SeaAnimalList
                        img={require('../../assets/images/Info/turtle.png')}
                        title="Turtle"
                        bg="#C8E7F9"
                        icon={require('../../assets/images/Info/right_arrow_2.png')}
                    />

                    <SeaAnimalList
                        img={require('../../assets/images/Info/shrimp.png')}
                        title="Shrimp"
                        bg="#C8E7F9"
                        icon={require('../../assets/images/Info/right_arrow_2.png')}
                    />

                    <SeaAnimalList
                        img={require('../../assets/images/Info/jellyfish.png')}
                        title="Jelly Fish"
                        bg="#C8E7F9"
                        icon={require('../../assets/images/Info/right_arrow_2.png')}
                    />

                    <SeaAnimalList
                        img={require('../../assets/images/Info/crab.png')}
                        title="Crab"
                        bg="#C8E7F9"
                        icon={require('../../assets/images/Info/right_arrow_2.png')}
                    />

                    <SeaAnimalList
                        img={require('../../assets/images/Info/starfish.png')}
                        title="StarFish"
                        bg="#C8E7F9"
                        icon={require('../../assets/images/Info/right_arrow_2.png')}
                    />
                </View>

            </Modalize>

        </ImageBackground>
    )
}

export default SeaAnimal