import React from 'react'
import { Button, Text, View } from 'react-native'
import { ScreenContainer } from '../../components'

const Page2 = ({ navigation }) => {
    return (
        <ScreenContainer>
            <View>
                <Text>Start Page 2</Text>
                <Button title='Page3' onPress={() => { navigation.push("Page3") }} />
            </View>
        </ScreenContainer>
    )
}

export default Page2