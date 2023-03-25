import React, { useContext, useEffect, useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Snackbar } from 'react-native-paper'
import { getUser, updateUser } from '../../../api'
import { assets, COLORS, FONTS, SIZES } from '../../../constants'
import { AuthContext } from '../../../context/context'
import { contactNumberValidation } from '../../../util/validation'

const EditProfile = ({setUserUpdateFormState}) => {
    const { userDetails } = useContext(AuthContext)

    const [formData, setFormData] = useState({
        email: "",
        name: "",
        contactNumber: "",
    })
    const [userId, setUserId] = useState(typeof userDetails != "undefined" && userDetails._id)
    const [SuccessData, setSuccessData] = useState();
    const [ErrorData, setErrorData] = useState();
    const [IsSuccess, setIsSuccess] = useState(false);
    const [IsPending, setIsPending] = useState(false);
    const [IsError, setIsError] = useState(false);

    const [userData, setUserData] = useState()
    const [userErrorData, setUserErrorData] = useState();
    const [userIsSuccess, setUserIsSuccess] = useState(false);
    const [userIsPending, setUserIsPending] = useState(false);
    const [userIsError, setUserIsError] = useState(false);

    const [validContactNumber, setValidContactNumber] = useState({ result: false, desc: "" })

    const [visible, setVisible] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState("");

    const onDismissSnackBar = () => setVisible(false);

    const onChangeName = (value) => {
        setFormData({ ...formData, name: value })
    }

    const onChangeContactNumber = (value) => {
        setValidContactNumber(contactNumberValidation(value))
        setFormData({ ...formData, contactNumber: value })
    }

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

    const updateUserDetails = (id, data) => {
        setIsPending(true)

        updateUser(id, data)
            .then((response) => {
                console.log(response.data.result);
                setSuccessData(response.data.result)
                setUserData(response.data.result)
                setIsPending(false)
                setUserUpdateFormState("end")
                alert("update success")
            })
            .catch((err) => {
                console.log(err)
                setErrorData(err.response)
                setIsPending(false)
                alert("update fail")
            })
    }

    const onFormSubmit = () => {
        // register(formData)
        console.log(formData);
        updateUserDetails(userId, formData)
    }

    useEffect(() => {
        if (typeof userData == "undefined") return
        setFormData(
            {
                email: userData.email,
                name: userData.name,
                contactNumber: userData.contactNumber,
            }
        )
    }, [userData])


    useEffect(() => {
        if (typeof userId == "undefined" || userId == null) return
        getUserDetails(userId)
    }, [userId])


    return (
        <View style={{ zIndex: 0, marginLeft: 20 }}>
            <Text style={{
                fontFamily: FONTS.bold,
                fontSize: SIZES.extraLarge,
                color: COLORS.primary,
                marginTop: 50,
                marginBottom: 10,
                textAlign: "center"
            }}>
                Edit Profile Details
            </Text>
            <View style={{
                marginTop: 10,
                marginBottom: SIZES.large,
                marginRight: SIZES.extraLarge,
            }}>
                <Text style={{
                    fontFamily: FONTS.bold,
                    fontSize: SIZES.medium,
                    color: COLORS.primary,
                    margin: SIZES.base
                }}>
                    Full Name
                </Text>
                <View style={{
                    width: "100%",
                    borderRadius: SIZES.font,
                    backgroundColor: COLORS.lightCustomColor,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: SIZES.font,
                    paddingVertical: SIZES.small - 2,
                    marginBottom: SIZES.large
                }}>
                    <Image
                        source={assets.user}
                        resizeMode="contain"
                        style={{
                            height: 20,
                            width: 20,
                            marginRight: SIZES.base
                        }}
                    />
                    <TextInput
                        placeholder='Enter Full Name'
                        style={{ flex: 1, color: COLORS.primary }}
                        onChangeText={(value) => { onChangeName(value) }}
                        value={formData.name}
                    />
                </View>
                <Text style={{
                    fontFamily: FONTS.bold,
                    fontSize: SIZES.medium,
                    color: COLORS.primary,
                    margin: SIZES.base
                }}>
                    Email Address (*)
                </Text>
                <View style={{
                    width: "100%",
                    borderRadius: SIZES.font,
                    backgroundColor: COLORS.gray,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: SIZES.font,
                    paddingVertical: SIZES.small - 2,
                    marginBottom: SIZES.large
                }}>
                    <Image
                        source={assets.email}
                        resizeMode="contain"
                        style={{
                            height: 20,
                            width: 20,
                            marginRight: SIZES.base
                        }}
                    />
                    <TextInput
                        placeholder='Enter Email Address'
                        editable={false}
                        style={{ flex: 1, color: COLORS.primary }}
                        onChangeText={(value) => { onChangeEmail(value) }}
                        value={formData.email}
                    />
                </View>
                <Text style={{
                    fontFamily: FONTS.bold,
                    fontSize: SIZES.medium,
                    color: COLORS.primary,
                    margin: SIZES.base
                }}>
                    Contact Number (*)
                </Text>
                <View style={{
                    width: "100%",
                    borderRadius: SIZES.font,
                    backgroundColor: COLORS.lightCustomColor,
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: SIZES.font,
                    paddingVertical: SIZES.small - 2,
                    marginBottom: SIZES.large
                }}>
                    <Image
                        source={assets.contact}
                        resizeMode="contain"
                        style={{
                            height: 20,
                            width: 20,
                            marginRight: SIZES.base
                        }}
                    />
                    <TextInput
                        placeholder='Enter Contact Number'
                        style={{ flex: 1, color: COLORS.primary }}
                        onChangeText={(value) => { onChangeContactNumber(value) }}
                        value={formData.contactNumber}
                    />
                </View>
            </View>
            <View
                style={{
                    marginTop: SIZES.large,
                    alignItems: "center"
                }}
            >
                <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.darkCustomColor,
                        padding: SIZES.font,
                        // margin: SIZES.small,
                        marginRight: SIZES.large,
                        borderRadius: SIZES.font,
                        marginTop: 10,
                        alignContent: "center",
                        width: '50%'

                    }}
                    onPress={() => { onFormSubmit() }}
                >
                    <Text style={{
                        fontFamily: FONTS.bold,
                        fontSize: SIZES.large,
                        color: COLORS.white,
                        textAlign: "center"
                    }}>
                        Edit
                    </Text>
                </TouchableOpacity>
            </View>
            <Snackbar
                visible={visible}
                onDismiss={onDismissSnackBar}
                action={{
                    label: "Dismiss",
                    onPress: () => {
                        setVisible(false);
                    },
                }}
            >
                {snackbarMessage}
            </Snackbar>
        </View>
    )
}

export default EditProfile