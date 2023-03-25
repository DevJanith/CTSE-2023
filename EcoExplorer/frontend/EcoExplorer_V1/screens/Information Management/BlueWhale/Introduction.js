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
                source={require('../../../assets/videos/Intro_orchid.mp4')}
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
                    backgroundColor:"#bcd49c",
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
                        fontSize:20,
                        paddingLeft:20,
                        width:180,
                        marginLeft:4,
                    }}>
                        Introduction
                    </Text>
                    <Text style={{
                        color:"#b30c76",
                        fontSize:12,
                        fontFamily:FONTS.medium,
                        paddingLeft:20,
                        marginLeft:4,
                    }}>
                        0 hours, 01:17 minutes
                    </Text>
                </View>
                <Text style={{
                        color:"#b30c76",
                        fontFamily:FONTS.bold,
                        fontSize:13,
                        width:100,
                        marginLeft:30,
                    }}>
                        NOT-EXTINCT!
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
                {'\t\t\t\t\t\t\t\t'}Orchids make up the world's most diverse plant family with the number of species estimated to be between 
                <Text style={{fontWeight: "bold", color:"#228B22", fontSize: 14}}> 30,000 and 40,000</Text> in over 800 genera. Almost every 
                month new species are found and documented and very often they are found to be a completely new genus.
                {'\n'}
                {'\n'}The largest orchid is generally agreed to be <Text style={{fontWeight: "bold", color:"#0000FF", fontSize: 14, fontStyle:"italic"}}>Grammatophyllum speciosum.</Text> 
                It can weigh up to 2,000 pounds or 900 kilograms and is reputed to produce up to 10,000 flowers on a mature plant in nature.
                {'\n'}
                {'\t\t\t\t\t\t\t\t\t\t\t\t\t'}The smallest orchid is <Text style={{fontWeight: "bold", color:"#0000FF", fontSize: 14, fontStyle:"italic"}}>Platystele jungermannioides </Text>
                which has flowers only half a millimeter or one-hundredth of an inch in diameter. The entire plant is only about a quarter of an inch or half a centimeter tall.
                {'\n'}        
               </Text>

               {/* ------- Read more button --------- */}
               <View style={{
                   flexDirection:"row",
                   paddingVertical:5,
                   backgroundColor:"#bcd49c",
                   marginHorizontal:95,
                   paddingVertical:15,
                   alignItems:"center",
                   borderRadius:40,
                   justifyContent:"center",
                   marginTop:5, 
                   width:180,
                   elevation:10,
                   marginLeft: 135
               }}>

               <Text
                style={{
                    color:"#000000",
                    fontFamily:FONTS.bold,
                    fontSize:15,
                    alignContent:"center"
                }}>
                    Read More
                </Text>
                <Image
                source={require('../../../assets/images/EcoExplorer/right_arrow.png')}
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