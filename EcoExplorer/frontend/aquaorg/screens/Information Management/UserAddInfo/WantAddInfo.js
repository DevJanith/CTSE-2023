import React, { useContext, useEffect, useRef, useState } from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Alert
} from 'react-native'

import { AuthContext } from '../../../context/context';
import { Modalize } from 'react-native-modalize'
import FocusedStatusBar from '../../../components/FocusedStatusBar'
import { COLORS, FONTS, SIZES } from '../../../constants'
import SeaAnimalList from '../SeaAnimalList'

const WantAddInfo = ({ navigation }) => {

  const { userDetails } = useContext(AuthContext)
  const [user, setuser] = useState()

  useEffect(() => {
    console.log("Add_Info +=====================>", userDetails)
    setuser(userDetails)
  }, [])

  return (

    <ImageBackground
      source={require('../../../assets/images/Info/Want_to_Addbg.png')}
      style={{
        width: "100%",
        height: "110%"
      }}
    >

      <View style={{
        flexDirection: "row",
        width: "100%",
        paddingHorizontal: 20
      }}>
        <TouchableOpacity
          onPress={() => { navigation.push('InformationSrc') }}
          // handlePress={() => { navigation.goBack() }}
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
            style={{ width: 20, height: 15 }}
          />
        </TouchableOpacity>

      </View>

      <Text style={{
        color: "#000000",
        fontSize: 45,
        fontFamily: FONTS.bold,
        width: 500,
        marginLeft: 35,
        textAlign: "left",
        marginTop: 55,
        elevation: 10,

      }}>
        Want to{'\n'}Add{'\n'}Informations

        <Image
          source={require('../../../assets/images/Info/question_2.png')}
          style={{
            width: 50,
            height: 50,
          }}
        />

      </Text>


      <Text style={{
        color: "#000000",
        fontSize: 20,
        fontFamily: FONTS.medium,
        width: 500,
        marginLeft: 30,
        textAlign: "left",
        marginTop: 70,
        elevation: 10,

      }}>📍 Categories</Text>



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
        alwaysOpen={450}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
      >

        <View style={{
          marginTop: 40,
          marginBottom: 10
        }}>
          {/* ------------------------------- sea animals -----------------------------------------------------*/}

            <TouchableOpacity
                onPress={() => { navigation.push('AddInfoCreate') }}
                style={{
                    flexDirection: "row",
                    backgroundColor: "#BCE6FF",
                    padding: 20,
                    marginHorizontal: 20,
                    borderRadius: 20,
                    alignItems: "center",
                    marginTop: 10,
                    elevation:6
                }}
            >
                <Image
                    source={require('../../../assets/images/Info/sea_animal.png')}
                    style={{ width: 60, height: 60 }}
                />

                <View>
                    <Text
                        style={{
                            color: "#000000",
                            fontFamily: FONTS.bold,
                            fontSize: 20,
                            paddingHorizontal: 20,
                            width: 170
                        }}
                    >Sea Animals</Text>
                    <Text
                        style={{
                            color:"#f58084",
                            fontFamily:FONTS.medium,
                            fontSize:12,
                            paddingHorizontal:20
                        }}
                    >Click to add more informations</Text>
                </View>
              
                <Image
                    source={require('../../../assets/images/Info/right_arrow_3.png')}
                    style={{ 
                        width: 35, 
                        height: 35,
                        marginLeft:40
                    }}
                />
            </TouchableOpacity> 

{/* ------------------------------- sea plants -----------------------------------------------------*/}

            <TouchableOpacity
                onPress={() => { 
                  navigation.push('AddInfoCreate')
                  // alert('Hello'+ {typeof :user != "undefined" && user.name} + 'Wanna continue?') 

                }}
                style={{
                    flexDirection: "row",
                    backgroundColor: "#BCE6FF",
                    padding: 20,
                    marginHorizontal: 20,
                    borderRadius: 20,
                    alignItems: "center",
                    marginTop: 20,
                    elevation:6
                }}
            >
                <Image
                    source={require('../../../assets/images/Info/sea_plant.png')}
                    style={{ width: 60, height: 60 }}
                />

                <View>
                    <Text
                        style={{
                            color: "#000000",
                            fontFamily: FONTS.bold,
                            fontSize: 20,
                            paddingHorizontal: 20,
                            width: 170
                        }}
                    >Sea Plants</Text>
                    <Text
                        style={{
                            color:"#f58084",
                            fontFamily:FONTS.medium,
                            fontSize:12,
                            paddingHorizontal:20
                        }}
                    >Click to add more informations</Text>
                </View>
              
                <Image
                    source={require('../../../assets/images/Info/right_arrow_3.png')}
                    style={{ 
                        width: 35, 
                        height: 35,
                        marginLeft:40
                    }}
                />
            </TouchableOpacity> 

              {/* View All added Details by User */}

                            <TouchableOpacity
                                // onPress={() => { navigation.push('InfoCategories') }}
                                onPress={() => { navigation.push('AddInfoViewAll') }}
                                style={{
                                    flexDirection: "row",
                                    backgroundColor: "#015C92",
                                    alignItems: "center",
                                    marginTop: 30,
                                    width: 150,
                                    height:50,
                                    paddingVertical: 10,
                                    borderRadius: 50,
                                    paddingHorizontal: 10,
                                    marginLeft: 310
                                }}
                            >
                                <Image
                                    source={require('../../../assets/images/Info/play.png')}
                                    style={{
                                        marginLeft: 15,
                                        marginRight: 15,
                                        width: 15,
                                        height: 15,
                                        tintColor: "#FFF"
                                    }}
                                />
                                <Text
                                    style={{
                                        color: "#FFF",
                                        fontFamily: FONTS.bold,
                                        fontSize: 12
                                    }}>
                                    VIEW ALL
                                </Text>
                            </TouchableOpacity>

        </View>

      </Modalize>

    </ImageBackground>

  )
}

export default WantAddInfo