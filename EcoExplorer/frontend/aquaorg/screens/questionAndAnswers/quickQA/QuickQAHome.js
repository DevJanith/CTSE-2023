import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { FocusedStatusBar } from '../../../components'
import { DetailsHeader } from '../../../components/DetailsHeader'
import FeatureWelcomePage from '../../../components/FeatureWelcomePage'
import { assets } from '../../../constants'

const QuickQAHome = ({ navigation }) => {
  const FeatureWelcomePageData = {
    title: "Welcome to Quick Question & Answers",
    content: "Quick Q & A is a Simple Question Answers to test you’re knowledge regarding life below water",
    features: [
      {
        id: 1,
        content: "This Q & A have 10 main questions."
      },
      {
        id: 2,
        content: "It can be MCQ, Long or small Questions."
      },
      {
        id: 3,
        content: "Time Limit is 2 minutes."
      },
      {
        id: 4,
        content: "Answers will be validated."
      }
    ],
    button: {
      title: "Start Quiz",
      link: "QuickQuestion"
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <FocusedStatusBar
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent={true}
        />
        <DetailsHeader navigation={navigation} image={assets.b7} />
        <FeatureWelcomePage FeatureWelcomePageData={FeatureWelcomePageData} navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default QuickQAHome