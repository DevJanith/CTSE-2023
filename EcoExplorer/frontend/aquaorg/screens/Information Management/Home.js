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
                    source={require('../../assets/images/Info/Home_bg.png')}
                    style={{ width: "100%", height: "116%" }}>

                    <FocusedStatusBar
                        background={COLORS.primary}
                    />
                    <ScrollView>

                    <View style={{ flexDirection: "row" }}>

                    <View style={{ flex: 2 }}>
                        <Text style={{
                            color: "#FFFF00",
                            fontFamily: FONTS.semiBold,
                            fontSize: 15,
                            paddingHorizontal: 20,
                            marginTop: 30,
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
                            color: COLORS.white,
                            marginTop: 150
                        }}>
                        Welcome to 👋
                    </Text>

                    <Text
                        style={{
                            paddingHorizontal: 20,
                            fontFamily: FONTS.bold,
                            fontSize: 50,
                            color: COLORS.white
                        }}>
                        AquaOrg
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
                    <View
                        style={{
                            flexDirection: "row",
                            backgroundColor: "#BCE6FF",
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
                                    color: "#000000",
                                    fontFamily: FONTS.bold,
                                    fontSize: 20,
                                    width: 250,
                                    paddingRight: 100
                                }}
                            >Start Learning</Text>
                            <Text
                                style={{
                                    color: "#000000",
                                    fontFamily: FONTS.bold,
                                    fontSize: 25,
                                    width: 250
                                }}
                            >Life Below Water!</Text>

                            <TouchableOpacity
                                onPress={() => { navigation.push('InfoCategories') }} 
                                style={{
                                    flexDirection: "row",
                                    backgroundColor: "#015C92",
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
                                        color: "#FFF",
                                        fontFamily: FONTS.bold,
                                        fontSize: 12
                                    }}>
                                    Categories
                                </Text>
                                <Image
                                    source={require('../../assets/images/Info/right_arrow.png')}
                                    style={{
                                        marginLeft: 35,
                                        width: 15,
                                        height: 15
                                    }}
                                />

                            </TouchableOpacity>
                        </View>
                        <Image
                            source={require('../../assets/images/Info/undraw.png')}
                            style={{
                                marginLeft: -50,
                                marginTop: 70
                            }}
                        />
                    </View>

                    <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 2 }}>
                        <Text style={{
                            color: "#345c74",
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
                                backgroundColor: "#53A7DB",
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
                                    color: COLORS.white,
                                }}>
                                More
                                </Text>
                        </TouchableOpacity>
                    </View>

                    </View>

                    <SeaAnimalList
                        onPress={() => { navigation.push('BlueWhale') }}
                        img={require('../../assets/images/Info/blue_whale.png')}
                        title="Blue Whale"
                        bg="#BCE6FF"
                        icon={require('../../assets/images/Info/play.png')}
                    />

                    <SeaAnimalList
                        img={require('../../assets/images/Info/seahorse.png')}
                        title="Sea Horse"
                        bg="#BCE6FF"
                        icon={require('../../assets/images/Info/play.png')}
                    />

                    <SeaAnimalList
                        img={require('../../assets/images/Info/turtle.png')}
                        title="Turtle"
                        bg="#BCE6FF"
                        icon={require('../../assets/images/Info/play.png')}
                    />

                    <SeaAnimalList
                        img={require('../../assets/images/Info/shrimp.png')}
                        title="Shrimp"
                        bg="#BCE6FF"
                        icon={require('../../assets/images/Info/play.png')}
                    />

                    {/* ------------------ Wanna Add Information ------------------------------------ */}

                    <View
                        style={{
                            flexDirection: "row",
                            backgroundColor: "#C8E7F9",
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
                                    color: "#AEAEAE",
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
                                    backgroundColor: "#015C92",
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
                            source={require('../../assets/images/Info/question.png')}
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