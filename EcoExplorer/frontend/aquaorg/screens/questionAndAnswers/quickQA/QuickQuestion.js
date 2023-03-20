import React, { useEffect, useRef, useState } from 'react';
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { Modalize } from 'react-native-modalize';
import { TextInput } from 'react-native-paper';
import { getAllQuestionAnswers, getQuestionAnswers } from '../../../api';
import { FocusedStatusBar } from '../../../components';
import { CircleButton, EditButton } from '../../../components/Button';
import { DetailsHeader } from '../../../components/DetailsHeader';
import { assets, COLORS, FONTS, SIZES } from '../../../constants';
import Splash from '../../other/Splash';

const QuickQuestion = ({ navigation }) => {

  const [qaData, setQaData] = useState()
  const [qaErrorData, setQaErrorData] = useState();
  const [qaIsSuccess, setQaIsSuccess] = useState(false);
  const [qaIsPending, setQaIsPending] = useState(false);
  const [qaIsError, setQaIsError] = useState(false);

  const [qaSetData, setQaSetData] = useState()
  const [qaSetErrorData, setQaSetErrorData] = useState();
  const [qaSetIsSuccess, setQaSetIsSuccess] = useState(false);
  const [qaSetIsPending, setQaSetIsPending] = useState(false);
  const [qaSetIsError, setQaSetIsError] = useState(false);

  const [qaSetKeys, setQaSetKeys] = useState([])
  const [qaSetKey, setQaSetKey] = useState(null)
  const [dummyData, setDummyData] = useState([])
  const [qaNumber, setQaNumber] = useState(0)
  const [answer, setAnswer] = useState(null)
  const [answerStates, setAnswerStates] = useState(false)
  const [marks, setMarks] = useState(0)

  const getQaAllDetails = () => {
    setQaIsPending(true)

    getAllQuestionAnswers()
      .then((response) => {
        console.log(response.data.result);
        setQaData(response.data.result)
        setQaIsPending(false)
      })
      .catch((err) => {
        console.log(err)
        setQaErrorData(err.response)
        setQaIsPending(false)
        alert("Q/A details fetch fail")
      })
  }

  const getQaSetDetails = (key) => {
    setQaSetIsPending(true)

    getQuestionAnswers(key)
      .then((response) => {
        console.log(response.data.result);
        setQaSetData(response.data.result)
        setQaSetIsPending(false)
      })
      .catch((err) => {
        console.log(err)
        setQaSetErrorData(err.response)
        setQaSetIsPending(false)
        alert("Q/A Set details fetch fail")
      })
  }

  //get all q/a sets
  useEffect(() => {
    getQaAllDetails()
  }, [])

  //get random q/a set 
  useEffect(() => {
    if (typeof qaSetKey == "undefined" || qaSetKey == null) return
    getQaSetDetails(qaSetKey)
  }, [qaSetKey])

  //get id's from the Q/A sets 
  useEffect(() => {
    if (typeof qaData == "undefined") return

    qaData.map((item) => {
      setQaSetKeys((prev) => [...prev, item._id])
    })
  }, [qaData])

  //get random q/a set 
  useEffect(() => {
    if (typeof qaSetKeys == "undefined") return
    const random = Math.floor(Math.random() * qaSetKeys.length);
    setQaSetKey(qaSetKeys[random])
  }, [qaSetKeys])

  //q/a set that will generate feature
  useEffect(() => {
    if (typeof qaSetData == "undefined") return
    // console.log("qa Collection >>>>>>>>>>>>   ", qaSetData.qaCollection);
    setDummyData(qaSetData.qaCollection)
  }, [qaSetData])

  const modalizeRef = useRef(null);
  const onOpen = (answer, questionId) => {
    if (answer == null) return alert("Please select an answer")
    validateAnswer(answer, questionId)
    modalizeRef.current?.open();
  };

  //qa handlers
  const NextQuestion = () => {
    if (dummyData.length == qaNumber + 1) return navigation.push('QuickQAEnd', { marks: marks })
    setQaNumber((prev) => { return prev + 1 })
    setAnswer(null)
  }

  const validateAnswer = (answer, questionId) => {
    if (dummyData[qaNumber].answer == answer) {
      setMarks((prev) => { return prev + 10 })
      setAnswerStates(true)
    } else {
      // setMarks((prev) => { return prev - 10 })
      setAnswerStates(false)
    }
  }

  if (qaIsPending) {
    return <>
      <Splash />
    </>
  }

  if (dummyData.length == 0) {
    return <>
      <Splash />
    </>
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
        <View style={{
          padding: SIZES.font
        }}>
          <View style={{ marginVertical: SIZES.font }}>
            <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.large, marginTop: SIZES.base / 2, color: COLORS.primary }}>
              {qaNumber + 1}. {dummyData[qaNumber].question}
            </Text>
          </View>
          {dummyData[qaNumber].options.map((item) => {
            return (
              <>
                <View
                  style={{
                    marginTop: SIZES.large,
                    alignItems: "center"
                  }}
                >
                  <TouchableOpacity
                    style={{
                      backgroundColor: COLORS.lightCustomColor,
                      padding: SIZES.font,
                      // margin: SIZES.small,
                      marginRight: SIZES.large,
                      marginLeft: SIZES.large,
                      borderRadius: SIZES.font,
                      marginTop: 10,
                      alignContent: "center",
                      width: '100%'

                    }}
                    onPress={() => {
                      setAnswer(item)
                    }}
                  >
                    <Text style={{
                      fontFamily: FONTS.bold,
                      fontSize: SIZES.large,
                      color: COLORS.primary
                    }}>
                      {item}
                    </Text>
                  </TouchableOpacity>
                </View>
              </>
            )
          })
          }
          <View
            style={{
              marginTop: SIZES.large,
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: COLORS.darkCustomColor,
                padding: SIZES.font,
                // margin: SIZES.small,
                marginRight: SIZES.large,
                marginLeft: SIZES.large,
                borderRadius: SIZES.font,
                marginTop: 100,
                alignContent: "center",
                width: '60%'

              }}
              onPress={() => {
                onOpen(answer, dummyData[qaNumber]._id);
              }}
            >
              <Text style={{
                fontFamily: FONTS.bold,
                fontSize: SIZES.large,
                color: COLORS.white,
                alignSelf: "center"
              }}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
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
        <View style={{ zIndex: 0, marginLeft: 20 }}>
          <Text style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.extraLarge,

            marginTop: 50,
            marginBottom: 10,
            textAlign: "center"
          }}>
            Answer &  Clarification
          </Text>
          <CircleButton
            imgUrl={assets.go}
            handlePress={() => {
              modalizeRef.current?.close();
              NextQuestion()
            }}
            right={20}
            top={50}
          />
          <View style={{
            marginTop: 10,
            marginBottom: SIZES.large,
            marginRight: SIZES.extraLarge,
          }}>
            <Text style={{
              fontFamily: FONTS.bold,
              fontSize: SIZES.medium,

              margin: SIZES.base
            }}>
              Given Answer
            </Text>
            {answerStates ? <>
              <View style={{
                width: "100%",
                borderRadius: SIZES.font,
                backgroundColor: "#90EE90",
                flexDirection: "row",
                alignItems: "center",
                paddingHorizontal: SIZES.font,
                paddingVertical: SIZES.small - 2,
                marginBottom: SIZES.large,
                border: "1px solid green"
              }}>
                <Image
                  source={assets.passwordView}
                  resizeMode="contain"
                  style={{
                    height: 20,
                    width: 20,
                    marginRight: SIZES.base
                  }}
                />
                <TextInput
                  placeholder='Answer'
                  style={{ flex: 1, }}
                  value={answer}
                />
              </View>
            </>
              :
              <>
                <View style={{
                  width: "100%",
                  borderRadius: SIZES.font,
                  backgroundColor: "#FFCCCB",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: SIZES.font,
                  paddingVertical: SIZES.small - 2,
                  marginBottom: SIZES.large,
                  border: "1px solid red"

                }}>
                  <Image
                    source={assets.passwordView}
                    resizeMode="contain"
                    style={{
                      height: 20,
                      width: 20,
                      marginRight: SIZES.base
                    }}
                  />
                  <TextInput
                    placeholder='Answer'
                    style={{ flex: 1, }}
                    value={answer}
                  />
                </View>
              </>}
            <Text style={{
              fontFamily: FONTS.bold,
              fontSize: SIZES.medium,

              margin: SIZES.base
            }}>
              Answer
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
                source={assets.answer}
                resizeMode="contain"
                style={{
                  height: 20,
                  width: 20,
                  marginRight: SIZES.base
                }}
              />
              <TextInput
                placeholder='Answer'
                style={{ flex: 1, }}
                value={dummyData[qaNumber].answer}
              />
            </View>
            <Text style={{
              fontFamily: FONTS.bold,
              fontSize: SIZES.medium,

              margin: SIZES.base
            }}>
              Clarification
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
                source={assets.clarification}
                resizeMode="contain"
                style={{
                  height: 20,
                  width: 20,
                  marginRight: SIZES.base
                }}
              />
              <TextInput
                multiline
                numberOfLines={6}
                placeholder='Clarification'
                style={{
                  flex: 1
                }}
                value={dummyData[qaNumber].clarification}
              />
            </View>
          </View>
        </View>
      </Modalize>
    </SafeAreaView>
  )
}

export default QuickQuestion