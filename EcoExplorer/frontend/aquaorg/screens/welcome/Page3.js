import React from 'react'
import { Button, Text, View } from 'react-native'
import { ScreenContainer } from '../../components'

const Page3 = ({ navigation }) => {
    return (
        <ScreenContainer>
            <View>
                <Text>Start Page 3</Text>
                <Button title='Page4' onPress={() => { navigation.push("Page4") }} />
            </View>
        </ScreenContainer>
    )
}

export default Page3