import { View, Text, Button } from 'react-native'
import React from 'react'
import { ScreenContainer } from '../../components'

const Page1 = ({ navigation }) => {
    return (
        <ScreenContainer>
            <View>
                <Text>Start Page 1</Text>
                <Button title='Page2' onPress={() => { navigation.push("Page2") }} />
            </View>
        </ScreenContainer>
    )
}

export default Page1