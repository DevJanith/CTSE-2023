import React, { useContext, useEffect, useRef, useState } from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FocusedStatusBar from '../../components/FocusedStatusBar'
import { COLORS, FONTS, SIZES } from '../../constants'
import SeaAnimalList from './SeaAnimalList'
import { AuthContext } from '../../context/context';

const Home = ({ onSearch, navigation }) => {

    const { userDetails } = useContext(AuthContext)
    const [user, setuser] = useState()
  
    useEffect(() => {
      console.log("Info +=====================>", userDetails)
      setuser(userDetails)
    }, [])

    return (
        <SafeAreaView
            style={{
                flex: 1
            }}>
            
                <ImageBackground
                    source={require('../../assets/images/EcoExplorer/Home_bg.png')}
                    style={{ width: "100%", height: "116%" }}>

                    <FocusedStatusBar
                        background={COLORS.primary}
                    />
                    <ScrollView>

                    <View style={{ flexDirection: "row" }}>

                    <View style={{ flex: 2 }}>
                        <Text style={{
                            color: "#eaab39",
                            fontFamily: FONTS.semiBold,
                            fontSize: 25,
                            paddingHorizontal: 20,
                            marginTop: 35,
                            marginBottom: 10
                        }}>Hi 😊 {typeof user != "undefined" && user.name}! </Text>
                    </View>

                    <View style={{ flex: 1 }}>
                        
                        <View
                            style={{
                                width: "100%",
                                alignItems: "flex-end",
                                paddingHorizontal: 20
                            }}>

                            <View
                                style={{
                                    paddingHorizontal: 10,
                                    paddingVertical: 12,
                                    borderRadius: 10,
                                    marginTop: 30,
                                    backgroundColor: 'rgba(52, 52, 52, 0.6)',
                                    elevation:6
                                }}>

                                <Image
                                    source={require('../../assets/images/Info/home_menu.png')}
                                    style={{ width: 20, height: 15 }}
                                />
                            </View>
                        </View>
                    </View>

                    </View>

                    
                    <Text
                        style={{
                            paddingHorizontal: 20,
                            paddingTop: 40,
                            fontFamily: FONTS.medium,
                            fontSize: 30,
                            color: "#000000",
                            marginTop: 240
                        }}>
                        Welcome to 👋
                    </Text>

                    <Text
                        style={{
                            paddingHorizontal: 20,
                            fontFamily: FONTS.bold,
                            fontSize: 50,
                            color: "#000000"
                        }}>
                        Eco Explorer
                    </Text>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            backgroundColor: "#ECE9E9",
                            padding: 10,
                            borderRadius: 18,
                            marginHorizontal: 30,
                            marginTop: 20,
                            elevation:10
                        }}>
                        <TextInput
                            placeholder="Search for new Knowledge!"
                            placeholderTextColor="#345c74"
                            style={{
                                fontFamily: FONTS.light,
                                fontSize: 12,
                                width: 280,
                                paddingHorizontal: 12,
                                marginRight: 35
                            }} />

                        <Image
                            source={require('../../assets/images/Info/search.png')}
                            style={{
                                height: 28,
                                width: 28,
                            }}
                        />
                    </View>

                    {/* ------------------ Start Learning ------------------------------------ */}
                    
                    <View
                        style={{
                            flexDirection: "row",
                            backgroundColor: "#357f54",
                            marginTop: 25,
                            marginHorizontal: 20,
                            borderRadius: 30,
                            paddingVertical: 30,
                            paddingLeft: 30,
                            elevation:6
                        }}
                    >
                        <View>
                            <Text
                                style={{
                                    color: COLORS.white,
                                    fontFamily: FONTS.bold,
                                    fontSize: 20,
                                    width: 250,
                                    paddingRight: 100
                                }}
                            >Start Learning</Text>
                            <Text
                                style={{
                                    color: COLORS.white,
                                    fontFamily: FONTS.bold,
                                    fontSize: 25,
                                    width: 250,
                                    marginTop: 3,
                                }}
                            >Life of Plants!</Text>

                            <TouchableOpacity
                                onPress={() => { navigation.push('InfoCategories') }} 
                                style={{
                                    flexDirection: "row",
                                    backgroundColor: "#81B622",
                                    alignItems: "center",
                                    marginTop: 20,
                                    width: 150,
                                    paddingVertical: 10,
                                    borderRadius: 14,
                                    paddingHorizontal: 10
                                }}
                            >
                                <Text
                                    style={{
                                        color: "#000000",
                                        fontFamily: FONTS.bold,
                                        fontSize: 14
                                    }}>
                                    Categories
                                </Text>
                                <Image
                                    source={require('../../assets/images/EcoExplorer/right_arrow.png')}
                                    style={{
                                        marginLeft: 35,
                                        width: 15,
                                        height: 15
                                    }}
                                />

                            </TouchableOpacity>
                        </View>
                        <Image
                            source={require('../../assets/images/EcoExplorer/plant-2.png')}
                            style={{
                                marginLeft: -30,
                                marginTop: -5
                            }}
                        />
                    </View>

                    {/* ------------------ Featured Categories ------------------------------------ */}

                    <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{
                            color: "#000000",
                            fontFamily: FONTS.bold,
                            fontSize: 22,
                            paddingHorizontal: 20,
                            marginTop: 30,
                            marginBottom: 10
                        }}>Featured Categories</Text>
                    </View>

                    <View style={{ flex: 1 }}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: "#81B622",
                                alignItems: "center",
                                width: 80,
                                paddingVertical: 5,
                                borderRadius: 20,
                                paddingHorizontal: 5,
                                marginTop: 30,
                                marginLeft: 40,
                                alignContent: "center",
                                elevation:10
                            }}
                            onPress={() => { navigation.push('InfoSeaAnimal') }}
                            >
                                <Text style={{
                                    fontFamily: FONTS.medium,
                                    fontSize: SIZES.small,
                                    color: "#000000",
                                }}>
                                More
                                </Text>
                        </TouchableOpacity>
                    </View>

                    </View>

                    <SeaAnimalList
                        onPress={() => { navigation.push('BlueWhale') }}
                        img={require('../../assets/images/EcoExplorer/orchid.png')}
                        title="ORCHIDS"
                        bg="#fbe5d8"
                        icon={require('../../assets/images/EcoExplorer/play.png')}
                    />

                    <SeaAnimalList
                        img={require('../../assets/images/EcoExplorer/peace-lily.png')}
                        title="PEACE LILY"
                        bg="#fbe5d8"
                        icon={require('../../assets/images/EcoExplorer/play.png')}
                    />

                    <SeaAnimalList
                        img={require('../../assets/images/EcoExplorer/snake-plant.png')}
                        title="SNAKE PLANT"
                        bg="#fbe5d8"
                        icon={require('../../assets/images/EcoExplorer/play.png')}
                    />

                    <SeaAnimalList
                        img={require('../../assets/images/EcoExplorer/bromeliad.png')}
                        title="BROMELIADS"
                        bg="#fbe5d8"
                        icon={require('../../assets/images/EcoExplorer/play.png')}
                    />

                    {/* ------------------ Wanna Add Information ------------------------------------ */}

                    <View
                        style={{
                            flexDirection: "row",
                            backgroundColor: "#b4cea6",
                            marginTop: 25,
                            marginHorizontal: 20,
                            borderRadius: 30,
                            paddingVertical: 30,
                            paddingLeft: 30,
                            marginBottom:150,
                            elevation:6
                        }}
                    >
                        <View>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontFamily: FONTS.bold,
                                    fontSize: 30,
                                    width: 250,
                                    paddingRight: 100
                                }}
                            >Want to</Text>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontFamily: FONTS.bold,
                                    fontSize: 30,
                                    width: 250,
                                    paddingRight: 100
                                }}
                            >Add</Text>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontFamily: FONTS.bold,
                                    fontSize: 35,
                                    width: 250
                                }}
                            >Information</Text>

                            <Text
                                style={{
                                    color: "#84945c",
                                    fontFamily: FONTS.medium,
                                    fontSize: 13,
                                    width: 250,
                                    marginTop: 15
                                }}
                            >You can share your knlowledge 
                            by sharing with others......
                            {'\n'}{'\n'}
                            Knowledge can only be volunteered it cannot be conscripted
                            </Text>

                            <TouchableOpacity
                                onPress={() => { navigation.push('AddInfoHome') }}
                                style={{
                                    flexDirection: "row",
                                    backgroundColor: "#357f54",
                                    alignItems: "center",
                                    marginTop: 20,
                                    marginLeft: 240,
                                    width: 100,
                                    paddingVertical: 10,
                                    borderRadius: 30,
                                    paddingHorizontal: 10
                                }}
                            >
                                <Text
                                    style={{
                                        color: "#FFF",
                                        fontFamily: FONTS.bold,
                                        fontSize: 12,
                                        marginLeft: 10
                                    }}>
                                    Click Here
                                </Text>

                            </TouchableOpacity>
                        </View>
                        <Image
                            source={require('../../assets/images/EcoExplorer/question-mark.png')}
                            style={{
                                width:100,
                                height:100,
                                marginLeft: -140,
                                marginTop: 30,
                            }}
                        />
                    </View>

                    </ScrollView>
                </ImageBackground>
            
        </SafeAreaView>
    )
}

export default Home