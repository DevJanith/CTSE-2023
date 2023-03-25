import React, { useContext, useState } from 'react'
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { createMarks } from '../../../api'
import { FocusedStatusBar } from '../../../components'
import { DetailsHeader } from '../../../components/DetailsHeader'
import { assets, COLORS, FONTS, SIZES } from '../../../constants'
import { AuthContext } from '../../../context/context'
import Splash from '../../other/Splash'

const QuickQAEnd = ({ route, navigation }) => {
    const { marks } = route.params;
    // const marks = 50;
    const { userDetails } = useContext(AuthContext)

    const [marksSuccessData, setMarksSuccessData] = useState();
    const [marksErrorData, setMarksErrorData] = useState();
    const [marksIsSuccess, setMarksIsSuccess] = useState(false);
    const [marksIsPending, setMarksIsPending] = useState(false);
    const [marksIsError, setMarksIsError] = useState(false);

    const saveUserQAMarks = (data) => {
        setMarksIsPending(true)
        createMarks(data)
            .then((response) => {
                console.log(response.data.result);
                setMarksSuccessData(response.data.result); 
                setMarksIsPending(false);
                setMarksIsSuccess(true);
                alert("You're Score Saved Successfully");
                navigation.push('QuestionAndAnswersSrc')
            })
            .catch((err) => {
                console.log(err);
                setMarksErrorData(err.response);
                setMarksIsPending(false);
                setMarksIsError(true);
                alert("marks Fail");
            });
    }
    const onSave = (mark, userData) => {
        const data = {
            "marks": mark,
            "userDetails": {
                "userId": userData._id,
                "userName": userData.name,
                "userEmail": userData.email,
                "userContactNumber": userData.contactNumber,
            }
        }
        console.log(data);
        saveUserQAMarks(data)
    }

    if (marksIsPending) {
        return <Splash />
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <FocusedStatusBar
                    barStyle="dark-content"
                    backgroundColor="transparent"
                    translucent={true}
                />
                <DetailsHeader navigation={navigation} image={assets.b11} />
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: SIZES.extraLarge }}>
                        <Text style={{
                            fontSize: SIZES.extraLarge,
                            fontFamily: FONTS.bold,
                            textAlign: "center"
                        }}>End of the Quick Question & Answers</Text>
                    </View>
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 60 }}>
                    <Text style={{
                        fontSize: 40,
                        fontFamily: FONTS.bold,
                        textAlign: "center"
                    }}>Your Score : {typeof marks == "undefined" || marks == null ? "N/A" : marks}</Text>
                </View>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: 200 }}>
                    <TouchableOpacity
                        style={{
                            backgroundColor: COLORS.darkCustomColor,
                            padding: SIZES.font,
                            // margin: SIZES.small,
                            // marginRight: SIZES.large,
                            // marginLeft: SIZES.large,
                            borderRadius: SIZES.font,
                            marginTop: 100,
                            alignContent: "center",
                            width: '60%'

                        }}
                        onPress={() => { onSave(marks, userDetails) }}
                    >
                        <Text style={{
                            fontFamily: FONTS.bold,
                            fontSize: SIZES.large,
                            color: COLORS.white,
                            alignSelf: "center"
                        }}>
                            Save you're Score
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default QuickQAEnd