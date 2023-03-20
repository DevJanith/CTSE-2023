import React from 'react'
import { Button, Text, View } from 'react-native'
import { ScreenContainer } from '../../components'

const Page4 = ({ navigation }) => {
    return (
        <ScreenContainer>
            <View>
                <Text>Start Page 4</Text>
                <Button title='Page5' onPress={() => { navigation.push("Page5") }} />
            </View>
        </ScreenContainer>
    )
}

export default Page4