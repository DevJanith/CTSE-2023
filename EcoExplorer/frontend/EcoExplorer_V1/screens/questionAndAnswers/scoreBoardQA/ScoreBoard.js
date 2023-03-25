import { View, Text, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { FocusedStatusBar, HomeHeader } from '../../../components'
import { assets, COLORS, FONTS, SHADOWS, SIZES } from '../../../constants'
import { DetailsHeader } from '../../../components/DetailsHeader'
import { AuthContext } from '../../../context/context'
import ProfileHeader from './components/ProfileHeader'
import { deleteMarks, getAllMarks } from '../../../api'
import Splash from '../../other/Splash'

const ScoreBoard = ({ navigation }) => {
  const { userDetails } = useContext(AuthContext)

  const [dummyData, setDummyData] = useState([
    {
      "userDetails": {
        "userId": "636d08043a81c5bb2ec0b7ae",
        "userName": "Nuwan Jeewan",
        "userEmail": "user@gmail.com",
        "userContactNumber": "0718078369"
      },
      "_id": "636e2c6ff884ab06b6600c8a",
      "marks": "50",
      "status": "1",
      "createdAt": "2022-11-11T11:04:03.470Z",
      "updatedAt": "2022-11-11T11:04:03.470Z",
      "__v": 0
    },
    {
      "userDetails": {
        "userId": "636d08043a81c5bb2ec0b7ae",
        "userName": "Nuwan Jeewan",
        "userEmail": "user@gmail.com",
        "userContactNumber": "0718078369"
      },
      "_id": "636e2c6ff884ab06b6600c8a",
      "marks": "50",
      "status": "1",
      "createdAt": "2022-11-11T11:04:03.470Z",
      "updatedAt": "2022-11-11T11:04:03.470Z",
      "__v": 0
    },
    {
      "userDetails": {
        "userId": "636d08043a81c5bb2ec0b7ae",
        "userName": "Nuwan Jeewan",
        "userEmail": "user@gmail.com",
        "userContactNumber": "0718078369"
      },
      "_id": "636e2c6ff884ab06b6600c8a",
      "marks": "50",
      "status": "1",
      "createdAt": "2022-11-11T11:04:03.470Z",
      "updatedAt": "2022-11-11T11:04:03.470Z",
      "__v": 0
    },
    {
      "userDetails": {
        "userId": "636d08043a81c5bb2ec0b7ae",
        "userName": "Nuwan Jeewan",
        "userEmail": "user@gmail.com",
        "userContactNumber": "0718078369"
      },
      "_id": "636e2c6ff884ab06b6600c8a",
      "marks": "50",
      "status": "1",
      "createdAt": "2022-11-11T11:04:03.470Z",
      "updatedAt": "2022-11-11T11:04:03.470Z",
      "__v": 0
    },
    {
      "userDetails": {
        "userId": "636d08043a81c5bb2ec0b7ae",
        "userName": "Nuwan Jeewan",
        "userEmail": "user@gmail.com",
        "userContactNumber": "0718078369"
      },
      "_id": "636e2c6ff884ab06b6600c8a",
      "marks": "50",
      "status": "1",
      "createdAt": "2022-11-11T11:04:03.470Z",
      "updatedAt": "2022-11-11T11:04:03.470Z",
      "__v": 0
    }
  ])

  const [marksData, setMarksData] = useState();
  const [marksErrorData, setMarksErrorData] = useState();
  const [marksIsSuccess, setMarksIsSuccess] = useState(false);
  const [marksIsPending, setMarksIsPending] = useState(false);
  const [marksIsError, setMarksIsError] = useState(false);

  const [deleteSuccessData, setDeleteSuccessData] = useState();
  const [deleteErrorData, setDeleteErrorData] = useState();
  const [deleteIsSuccess, setDeleteIsSuccess] = useState(false);
  const [deleteIsPending, setDeleteIsPending] = useState(false);
  const [deleteIsError, setDeleteIsError] = useState(false);

  const getMarkDetails = () => {
    setMarksIsPending(true);

    getAllMarks()
      .then((response) => {
        console.log(response.data.result);
        setMarksData(response.data.result);
        setMarksIsPending(false);
        setMarksIsSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setMarksErrorData(err.response);
        setMarksIsPending(false);
        setMarksIsError(true);
        alert("Marks get all Fail");
      });
  }

  const deleteMarkDetails = (id) => {

    setDeleteIsPending(true);

    deleteMarks(id)
      .then((response) => {
        console.log(response.data.result);
        setDeleteSuccessData(response.data.result);
        setDeleteIsPending(false);
        setDeleteIsSuccess(true);
        alert("delete Success");
      })
      .catch((err) => {
        console.log(err);
        setDeleteErrorData(err.response);
        setDeleteIsPending(false);
        setDeleteIsError(true);
        alert("delete Fail");
      });
  }

  useEffect(() => {
    getMarkDetails()
  }, [deleteSuccessData])

  const onDeleteClick = (id) => {
    deleteMarkDetails(id)
  }

  if (marksIsPending) {
    return <Splash />
  }

  if (deleteIsPending) {
    return <Splash />
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />
      {/* <DetailsHeader navigation={navigation} image={assets.b8} /> */}
      <ProfileHeader navigation={navigation} name={userDetails.name} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0, marginTop: 50 }}>
          <FlatList
            data={marksData}
            renderItem={({ item }) => {
              return (
                <>
                  <View style={{
                    backgroundColor: COLORS.lightCustomColor,
                    borderRadius: SIZES.font,
                    marginBottom: SIZES.extraLarge,
                    margin: SIZES.base,
                    ...SHADOWS.dark,
                  }}>
                    <View style={{
                      width: '100%',
                      paddingHorizontal: SIZES.font,
                      marginTop: -SIZES.extraLarge,
                      flexDirection: "row",
                      justifyContent: "flex-end"
                    }}>
                      <View
                        style={{
                          paddingHorizontal: SIZES.font,
                          paddingVertical: SIZES.base,
                          backgroundColor: COLORS.darkCustomColor,
                          justifyContent: "center",
                          alignItems: "center",
                          ...SHADOWS.light,
                          elevation: 0,
                          maxWidth: '50%',
                        }}
                      >
                        <Text style={{
                          fontFamily: FONTS.regular,
                          fontSize: SIZES.small,
                          color: COLORS.white
                        }}>
                          Date
                        </Text>
                        <Text style={{
                          fontFamily: FONTS.semiBold,
                          fontSize: SIZES.medium,
                          color: COLORS.white
                        }}>
                          20/11/2022
                        </Text>
                      </View>
                    </View>
                    <View style={{ width: "100%", padding: SIZES.font }}>
                      <View>
                        <Text style={{ fontFamily: FONTS.semiBold, fontSize: SIZES.large, color: COLORS.primary }}>Name : {item.userDetails.userName}</Text>
                        <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.primary }}>Email : {item.userDetails.userEmail}</Text>
                        <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.primary }}>Contact Number : {item.userDetails.userContactNumber}</Text>
                        <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.primary }}>user Id : {item.userDetails.userId}</Text>
                      </View>
                      <View
                        style={{
                          marginTop: SIZES.font,
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center"
                        }}
                      >
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                          <Image
                            source={assets.eth}
                            resizeMode="contain"
                            style={{
                              width: 20,
                              height: 20,
                              marginRight: 2
                            }}
                          />
                          <Text style={{ fontFamily: FONTS.medium, fontSize: SIZES.font, color: COLORS.primary }}>Score : {item.marks}</Text>
                        </View>
                        <TouchableOpacity
                          style={{
                            backgroundColor: COLORS.primary,
                            borderRadius: SIZES.extraLarge,
                            minWidth: 120,
                            padding: SIZES.small
                          }}
                          onPress={() => { onDeleteClick(item._id) }}
                        >
                          <Text style={{
                            fontFamily: FONTS.semiBold,
                            fontSize: SIZES.font,
                            color: COLORS.white,
                            textAlign: "center"
                          }}> Delete Score</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </>
              )
            }}
            keyExtractor={(item) => item._id}
            showsVerticalScrollIndicator={false}
          // ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>

        {/* <View style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          zIndex: -1,
        }}>
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View> */}
      </View>
      <View style={{
        position: "absolute",
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        zIndex: -1,
      }}>
        <Image
          source={assets.b8}
          resizeMode="cover"
          style={{
            width: "100%",
            height: 300,
            borderBottomLeftRadius: SIZES.medium,
            borderBottomRightRadius: SIZES.medium,
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default ScoreBoard