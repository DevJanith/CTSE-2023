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
            source={require('../../assets/images/EcoExplorer/plant_kingdom_bg_2.png')}
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
                        backgroundColor: "#357f54"
                    }}
                >
                    <Image
                        source={require('../../assets/images/Info/left_arrow.png')}
                        style={{ width: 20, height: 15 }}
                    />
                </TouchableOpacity>
            </View>

            <Text style={{
                color: "#000000",
                fontSize: 35,
                fontFamily: FONTS.bold,
                width: 200,
                marginLeft: 115,
                textAlign: "center",
                marginTop: 34,
                elevation: 10

            }}>
                Plant Kingdom
            </Text>

            <Modalize
                handleStyle={{
                    marginTop: 30,
                    backgroundColor: "#b4cea6",
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
                        img={require('../../assets/images/EcoExplorer/orchid.png')}
                        title="ORCHIDS"
                        bg="#fbe5d8"
                        icon={require('../../assets/images/EcoExplorer/right_arrow_2.png')}

                    />

                    <SeaAnimalList

                        img={require('../../assets/images/EcoExplorer/peace-lily.png')}
                        title="PEACE LILY"
                        bg="#fbe5d8"
                        icon={require('../../assets/images/EcoExplorer/right_arrow_2.png')}
                    />

                    <SeaAnimalList
                        img={require('../../assets/images/EcoExplorer/snake-plant.png')}
                        title="SNAKE PLANT"
                        bg="#fbe5d8"
                        icon={require('../../assets/images/EcoExplorer/right_arrow_2.png')}
                    />

                    <SeaAnimalList
                        img={require('../../assets/images/EcoExplorer/bromeliad.png')}
                        title="BROMELIADS"
                        bg="#fbe5d8"
                        icon={require('../../assets/images/EcoExplorer/right_arrow_2.png')}
                    />

                    <SeaAnimalList
                        img={require('../../assets/images/EcoExplorer/cyclamen.png')}
                        title="CYCLAMEN"
                        bg="#fbe5d8"
                        icon={require('../../assets/images/EcoExplorer/right_arrow_2.png')}
                    />

                    <SeaAnimalList
                        img={require('../../assets/images/EcoExplorer/pothos.png')}
                        title="DEVIL'S IVY"
                        bg="#fbe5d8"
                        icon={require('../../assets/images/EcoExplorer/right_arrow_2.png')}
                    />

                    <SeaAnimalList
                        img={require('../../assets/images/EcoExplorer/succulents.png')}
                        title="SUCCULENTS"
                        bg="#fbe5d8"
                        icon={require('../../assets/images/EcoExplorer/right_arrow_2.png')}
                    />
                </View>

            </Modalize>

        </ImageBackground>
    )
}

export default SeaAnimal