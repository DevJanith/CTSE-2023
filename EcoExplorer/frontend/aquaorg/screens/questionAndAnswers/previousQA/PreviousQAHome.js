import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native'
import { FocusedStatusBar } from '../../../components'
import { DetailsHeader } from '../../../components/DetailsHeader'
import FeatureWelcomePage from '../../../components/FeatureWelcomePage'
import { assets } from '../../../constants'

const PreviousQAHome = ({ navigation }) => {
  const FeatureWelcomePageData = {
    title: "Welcome to Previous Q & A",
    content: "Previous Q & A will show the previously attempt Q & A ‘s and it details",
    features: [
      {
        id: 1,
        content: "In here you can view you’re previous Q & A Attempts."
      },
      {
        id: 2,
        content: "You can learn from past failures by viewing the answers."
      },
      {
        id: 3,
        content: "You can refresh you’re understanding about life below water."
      },
    ],
    button: {
      title: "View Previous Q & A ...",
      link: "Previous"
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
        <DetailsHeader navigation={navigation} image={assets.b6} />
        <FeatureWelcomePage FeatureWelcomePageData={FeatureWelcomePageData} navigation={navigation} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default PreviousQAHome