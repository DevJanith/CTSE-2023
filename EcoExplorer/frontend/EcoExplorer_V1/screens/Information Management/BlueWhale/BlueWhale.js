import React from 'react'
import {
    Image,
    ImageBackground,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import { Modalize } from 'react-native-modalize'
import FocusedStatusBar from '../../../components/FocusedStatusBar'
import { COLORS, FONTS, SIZES } from '../../../constants'
import Chapters from '../Chapters'

function BlueWhale({ onSearch, navigation }) {
    return (
        <ImageBackground
            source={require('../../../assets/images/EcoExplorer/orchid_bg.png')}
            style={{
                width: "100%",
                height: "113%",
                marginBottom: 50
            }}
        >

            <View style={{
                flexDirection: "row",
                width: "100%",
                paddingHorizontal: 20
            }}>
                <TouchableOpacity
                    onPress={() => { navigation.push('InfoSeaAnimal') }}
                    style={{
                        paddingHorizontal: 10,
                        paddingVertical: 13,
                        borderRadius: 10,
                        marginTop: 30,
                        backgroundColor: 'rgba(52, 52, 52, 0.4)'
                    }}
                >
                    <Image
                        source={require('../../../assets/images/Info/left_arrow.png')}
                        style={{ height: 15, width: 20 }}
                    />
                </TouchableOpacity>

            </View>

            <TouchableOpacity disabled={true}
                style={{
                    flexDirection: "row",
                    backgroundColor: "#000000",
                    alignItems: "center",
                    marginTop: 80,
                    width: 400,
                    height: 60,
                    paddingVertical: 10,
                    paddingHorizontal: 10,
                    elevation: 10,
                    marginLeft: 15,
                    opacity: 0.5
                }}
            >
            </TouchableOpacity>

            <Text style={{
                color: COLORS.white,
                fontFamily: FONTS.bold,
                fontSize: 35,
                width: 200,
                alignSelf: "center",
                textAlign: "center",
                marginTop: -55,
            }}>ORCHIDS</Text>

            <TouchableOpacity disabled={true}
                style={{
                    flexDirection: "row",
                    backgroundColor: "#357f54",
                    alignItems: "center",
                    marginTop: 20,
                    width: 100,
                    paddingVertical: 10,
                    borderRadius: 14,
                    paddingHorizontal: 10,
                    marginLeft: 170,
                    elevation: 10
                }}
            >
                <Text
                    style={{
                        color: "#FFF",
                        fontFamily: FONTS.bold,
                        fontSize: 12,
                        marginLeft: 5
                    }}>
                    Indoor Plant
                </Text>
            </TouchableOpacity>

            <Modalize
                handleStyle={{
                    marginTop: 30,
                    backgroundColor: "#a7b28a",
                    width: 80,
                    elevation: 5
                }}
                modalStyle={{
                    borderTopLeftRadius: 60,
                    borderTopRightRadius: 60,
                    backgroundColor: "#fbe5d8"
                }}
                alwaysOpen={580}
                scrollViewProps={{ showsVerticalScrollIndicator: false }}
                backgroundColor
            >

                <View style={{
                    flexDirection: "row",
                    marginHorizontal: 30,
                    marginTop: 40,

                }}>
                    <Image
                        source={require('../../../assets/images/EcoExplorer/orchid_2.png')}
                        style={{
                            height: 50,
                            width: 50,
                            borderWidth: 1,
                            borderColor: "#A020F0",
                            borderRadius: 50 / 2,

                        }}
                    />
                    <View style={{ marginHorizontal: 20 }}>
                        <Text
                            style={{
                                color: "#345c74",
                                fontFamily: FONTS.bold,
                                fontSize: 20,
                                marginTop: 2
                            }}
                        >
                            Orchidaceae
                        </Text>
                        <Text
                            style={{
                                color: "#A020F0",
                                fontFamily: FONTS.medium,
                                fontSize: 11,
                                marginBottom: 15
                            }}>
                            Scientific/Family name
                        </Text>
                    </View>

                    {/* Round Button Here */}

                </View>

                <Chapters
                    onPress={() => { navigation.push('BlueWhaleIntroduction') }}
                    num={1}
                    color="#bcd49c"
                    percent={25}
                    description="0 hours, 02:42 minutes"
                    title="Introduction"
                    icon={require('../../../assets/images/Info/right_arrow_3.png')}
                />
                <Chapters
                    onPress={() => { navigation.push('BlueWhaleInformation') }}
                    num={2}
                    color="#C4B454"
                    percent={70}
                    description="Get brief explanation"
                    title="Informations"
                    icon={require('../../../assets/images/Info/right_arrow_3.png')}
                />
                <Chapters
                    onPress={() => { navigation.push('BlueWhaleHologram') }}
                    num={3}
                    color="#8A9A5B"
                    percent={0}
                    description="New Feature!"
                    title="Hologram"
                    icon={require('../../../assets/images/Info/right_arrow_3.png')}
                />
                <Chapters
                    onPress={() => { navigation.push('BlueWhaleExplore') }}
                    num={4}
                    color="#93C572"
                    percent={15}
                    description="Explore some images"
                    title="Explore"
                    icon={require('../../../assets/images/Info/right_arrow_3.png')}
                />

            </Modalize>

        </ImageBackground>
    )
}

export default BlueWhale