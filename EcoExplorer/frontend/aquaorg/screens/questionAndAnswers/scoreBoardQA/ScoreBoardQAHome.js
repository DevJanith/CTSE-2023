import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { FocusedStatusBar } from '../../../components'
import { DetailsHeader } from '../../../components/DetailsHeader'
import FeatureWelcomePage from '../../../components/FeatureWelcomePage'
import { assets } from '../../../constants'

const ScoreBoardQAHome = ({ navigation }) => {
  const FeatureWelcomePageData = {
    title: "Welcome to Global Score Board",
    content: "Global Score Board will rank scores according to asc act and you’re score will be part of it",
    features: [
      {
        id: 1,
        content: "In here you can view you’re rank."
      },
      {
        id: 2,
        content: "You can hide you’re rank from public."
      },
      {
        id: 3,
        content: "You can remove you’re rank details."
      },
    ],
    button: {
      title: "View Score Board ...",
      link: "ScoreBoard"
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
        <DetailsHeader navigation={navigation} image={assets.b8} />
        <FeatureWelcomePage FeatureWelcomePageData={FeatureWelcomePageData} navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default ScoreBoardQAHome