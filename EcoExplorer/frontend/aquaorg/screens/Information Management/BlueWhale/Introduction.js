import React from 'react'
import { 
    Image, 
    ImageBackground, 
    SafeAreaView, 
    StatusBar, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View, 
    StyleSheet, 
    Dimensions 
} from 'react-native'
import FocusedStatusBar from '../../../components/FocusedStatusBar'
import { COLORS, FONTS, SIZES } from '../../../constants'
import { Video } from 'expo-av'
import Chapters from '../Chapters'

const {width, height} = Dimensions.get("window");

const Introduction = () => {
  return (
    <View style={style.container}>
               <StatusBar backgroundColor="#000000"/>
               <Video
                source={require('../../../assets/videos/Blue_Whales.mp4')}
                rate={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay={false}
                isLooping={false}
                useNativeControls
                style={style.video}
               />
               
            {/* ------------------------ Heading ------------------------------ */}

            <TouchableOpacity disabled={true}
                    style={{
                        flexDirection:"row",
                        padding:20,
                        marginHorizontal:20,
                        borderRadius:20,
                        alignItems:"center",
                    }}
                    >

                    <View style={{
                    backgroundColor:"#fde6e6",
                    paddingVertical:10,
                    paddingHorizontal:18,
                    borderRadius:25,
                }}>
                    <Text style={{
                        fontSize:20,
                        fontFamily:FONTS.bold
                    }}>1</Text>
                </View>

                <View>
                    <Text style={{
                        color:"#345c74",
                        fontFamily:FONTS.bold,
                        fontSize:18,
                        paddingLeft:20,
                        width:180,
                        marginLeft:4,
                    }}>
                        Introduction
                    </Text>
                    <Text style={{
                        color:"#f58084",
                        fontSize:12,
                        fontFamily:FONTS.medium,
                        paddingLeft:20,
                        marginLeft:4,
                    }}>
                        0 hours, 02:42 minutes
                    </Text>
                </View>
                <Text style={{
                        color:"#FF0000",
                        fontFamily:FONTS.semiBold,
                        fontSize:13,
                        width:100,
                        marginLeft:63,
                    }}>
                        EXTINCT!
                    </Text>
            </TouchableOpacity>

               {/* ---------------------------------------------------------- */}

               <Text style={{
                   fontFamily:FONTS.medium,
                   textAlign:"justify",
                   color:"#345c74",
                   paddingLeft:42,
                   paddingRight:35
               }}>
                   Blue whales are the largest animals ever to live on our planet. They feed almost exclusively on krill, 
                   straining huge volumes of ocean water through their baleen plates (which hang from the roof of the 
                   mouth and work like a sieve). Some of the biggest individuals may eat up to 6 tons of krill a day.
                   {'\n'}Blue whales are found in all oceans except the Arctic Ocean. There are five currently recognized 
                   subspecies of blue whales. 
                   {'\n'}The number of blue whales today is only a small fraction of what it was before modern commercial whaling
                   significantly reduced their numbers during the early 1900s, but populations are increasing globally. 
                   {'\n'}The primary threats blue whales currently face are vessel strikes and entanglements in fishing gear.......
               </Text>
               <View style={{
                   flexDirection:"row",
                   paddingVertical:5,
                   backgroundColor:"#f58084",
                   marginHorizontal:95,
                   paddingVertical:15,
                   alignItems:"center",
                   borderRadius:40,
                   justifyContent:"center",
                   marginTop:20, 
                   width:250,
                   elevation:6,
               }}>

               <Text
                style={{
                    color:"#FFF",
                    fontFamily:FONTS.bold,
                    fontSize:15,
                    alignContent:"center"
                }}>
                    Read More
                </Text>
                <Image
                source={require('../../../assets/images/Info/right_arrow_2.png')}
                style={{ 
                    width: 20, 
                    height: 20,
                    marginLeft:15,
                    marginTop:2
                }}></Image>
               </View>
           </View>
  )
}

export default Introduction

const style = StyleSheet.create({
    video:{
        width:width,
        height:height/3
    },
    container:{
        backgroundColor:"#fff",
        justifyContent:"center"
    }
});