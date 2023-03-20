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
import {Modalize} from 'react-native-modalize'
import FocusedStatusBar from '../../../components/FocusedStatusBar'
import { COLORS, FONTS, SIZES } from '../../../constants'
import Chapters from '../Chapters'

function BlueWhale({ onSearch, navigation }) {
  return (
    <ImageBackground
                source={require('../../../assets/images/Info/blue_whale_bg.jpg')}
                style={{
                    width:"100%",
                    height:"113%"
                }}
            >
                
                <View style={{
                    flexDirection:"row",
                    width:"100%",
                    paddingHorizontal:20
                }}>
                    <TouchableOpacity
                        onPress={() => { navigation.push('InfoSeaAnimal') }}
                        style={{
                            paddingHorizontal:10,
                            paddingVertical:13,
                            borderRadius:10,
                            marginTop:30,
                            backgroundColor:'rgba(52, 52, 52, 0.4)'
                        }}
                    >
                            <Image
                                source={require('../../../assets/images/Info/left_arrow.png')}
                                style={{height:15,width:20}}
                            />
                    </TouchableOpacity>
                    
                </View>

                <Text style={{
                    color:"#000000",
                    fontFamily:FONTS.bold,
                    fontSize:35,
                    width:200,
                    alignSelf:"center",
                    textAlign:"center",
                    marginTop:40
                }}>Blue Whale</Text>

                <TouchableOpacity disabled={true}
                    style={{
                        flexDirection: "row",
                        backgroundColor: "#015C92",
                        alignItems: "center",
                        marginTop: 20,
                        width: 100,
                        paddingVertical: 10,
                        borderRadius: 14,
                        paddingHorizontal: 10,
                        marginLeft:170,
                        elevation:10
                    }}
                    >
                        <Text
                            style={{
                                color: "#FFF",
                                fontFamily: FONTS.bold,
                                fontSize: 12,
                                marginLeft:5
                            }}>
                            Sea Animal
                        </Text>
                    </TouchableOpacity>

                    <Modalize 
                        handleStyle={{
                            marginTop:30,
                            backgroundColor:"#53A7DB",
                            width:80,
                            elevation:5
                        }}
                        modalStyle={{
                            borderTopLeftRadius:60,
                            borderTopRightRadius:60
                        }}
                        alwaysOpen={580}
                        scrollViewProps={{ showsVerticalScrollIndicator:false }}
                    >

                    <View style={{
                            flexDirection:"row",
                            marginHorizontal:30,
                            marginTop:40
                        }}>
                            <Image
                                source={require('../../../assets/images/Info/author.jpg')}
                                style={{
                                    height:50,
                                    width:50,
                                    borderWidth:2,
                                    borderColor:"#f58084",
                                    borderRadius:50,
                                }}
                            />
                        <View style={{ marginHorizontal:20}}>
                            <Text
                                style={{
                                    color:"345c74",
                                    fontFamily:FONTS.bold,
                                    fontSize:18,
                                    marginTop:2
                                }}
                            >
                                Mikolaj Galezioski
                            </Text>
                            <Text
                            style={{
                                color:"#f58084",
                                fontFamily:FONTS.medium,
                                fontSize:13,
                                marginBottom:15
                            }}>
                                Scientist, Marine Vetanary Professor
                            </Text>
                        </View>

                            {/* Round Button Here */}
                        
                    </View>

                    <Chapters
                            onPress={() => { navigation.push('BlueWhaleIntroduction') }}
                            num={1}
                            color="#fde6e6"
                            percent={25}
                            description="0 hours, 02:42 minutes"
                            title="Introduction"
                            icon={require('../../../assets/images/Info/right_arrow_3.png')}
                        />
                         <Chapters
                            onPress={() => { navigation.push('BlueWhaleInformation') }}
                            num={2}
                            color="#f9e1fc"
                            percent={50}
                            description="Get brief explanation"
                            title="Informations"
                            icon={require('../../../assets/images/Info/right_arrow_3.png')}
                        />
                         <Chapters
                            onPress={() => { navigation.push('BlueWhaleHologram') }}
                            num={3}
                            color="#e8f1fd"
                            percent={0}
                            description="New Feature!"
                            title="Hologram"
                            icon={require('../../../assets/images/Info/right_arrow_3.png')}
                        />
                         <Chapters
                            onPress={() => { navigation.push('BlueWhaleExplore') }}
                            num={4}
                            color="#e5ffef"
                            percent={0}
                            description="Explore some images"
                            title="Explore"
                            icon={require('../../../assets/images/Info/right_arrow_3.png')}
                        />
                        
                </Modalize>
            
            </ImageBackground>
  )
}

export default BlueWhale