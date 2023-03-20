import React from 'react'
import { Image, ImageBackground, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import FocusedStatusBar from '../../components/FocusedStatusBar'
import { COLORS, FONTS, SIZES } from '../../constants'

const Chapters = ({title,num, description, percent, color, onPress, icon}) => {
  return (
    
    <TouchableOpacity
                onPress={onPress}
                style={{
                    flexDirection:"row",
                    padding:20,
                    marginHorizontal:20,
                    borderRadius:20,
                    alignItems:"center",
                }}
           >

                <View style={{
                   backgroundColor:color,
                   paddingVertical:10,
                   paddingHorizontal:15,
                   borderRadius:15,
               }}>
                   <Text style={{
                       fontSize:18,
                       fontFamily:FONTS.bold
                   }}>{num}</Text>
               </View>

               <View>
                   <Text style={{
                       color:"#345c74",
                       fontFamily:FONTS.bold,
                       fontSize:15,
                       paddingLeft:20,
                       width:180,
                       marginLeft:4,
                   }}>
                       {title}
                   </Text>
                   <Text style={{
                       color:"#f58084",
                       fontSize:12,
                       fontFamily:FONTS.medium,
                       paddingLeft:20,
                       marginLeft:4,
                   }}>
                       {description}
                   </Text>
               </View>
               <Text style={{
                   color:"#345c74",
                   fontFamily:FONTS.medium,
                   fontSize:13,
                   width:50,
                   marginLeft:26,
               }}>
                   {percent}%
               </Text>

               <Image
                source={icon}
                style={{ 
                    width: 30, 
                    height: 30,
                    marginLeft:25,
                    marginTop:8
                }}
            />

           </TouchableOpacity>
  )
}

export default Chapters