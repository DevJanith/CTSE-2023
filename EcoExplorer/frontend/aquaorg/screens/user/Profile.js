import React, { useContext, useEffect, useRef, useState } from 'react'
import { Image, SafeAreaView, ScrollView, View } from 'react-native'
import { Modalize } from 'react-native-modalize'
import { getUser } from '../../api'
import { FocusedStatusBar } from '../../components'
import { assets, COLORS, SIZES } from '../../constants'
import { AuthContext } from '../../context/context'
import Splash from '../other/Splash'
import EditProfile from './components/EditProfile'
import ProfileBody from './components/ProfileBody'
import ProfileHeader from './components/ProfileHeader'

const Profile = () => {
  const { userDetails } = useContext(AuthContext)

  const [userId, setUserId] = useState(typeof userDetails != "undefined" && userDetails._id)
  const [userData, setUserData] = useState()
  const [userErrorData, setUserErrorData] = useState();
  const [userIsSuccess, setUserIsSuccess] = useState(false);
  const [userIsPending, setUserIsPending] = useState(false);
  const [userIsError, setUserIsError] = useState(false);

  const [userUpdateFormState, setUserUpdateFormState] = useState("initial")

  const getUserDetails = (id) => {
    setUserIsPending(true)

    getUser(id)
      .then((response) => {
        console.log(response.data.result);
        setUserData(response.data.result)
        setUserIsPending(false)
      })
      .catch((err) => {
        console.log(err)
        setUserErrorData(err.response)
        setUserIsPending(false)
        alert("User details fetch fail")
      })
  }

  useEffect(() => {
    if (typeof userId == "undefined" || userId == null) return
    getUserDetails(userId)
    setUserUpdateFormState("initial")
  }, [userId, userUpdateFormState])

  const modalizeRef = useRef(null);

  const onOpen = () => {
    modalizeRef.current?.open();
  };

  if (userIsPending) {
    return <Splash />;
  }

  if (typeof userData == "undefined" || userData == null) {
    return <Splash />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ zIndex: 0 }}>
        <ScrollView>
          <FocusedStatusBar background={COLORS.primary} />
          <ProfileHeader name={userData.name} onOpen={onOpen} />
          <ProfileBody data={userData} />
        </ScrollView>
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
          source={assets.b10}
          resizeMode="cover"
          style={{
            width: "100%",
            height: 300,
            borderBottomLeftRadius: SIZES.medium,
            borderBottomRightRadius: SIZES.medium,
          }}
        />
      </View>
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
        modalHeight={500}
        // alwaysOpen={500}
        scrollViewProps={{ showsVerticalScrollIndicator: false }}
        ref={modalizeRef}
      >
        <EditProfile setUserUpdateFormState={setUserUpdateFormState} />
      </Modalize>
    </SafeAreaView>
  )
}

export default Profile