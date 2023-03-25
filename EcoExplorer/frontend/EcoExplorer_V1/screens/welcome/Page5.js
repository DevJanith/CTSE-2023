import React from 'react'
import { Button, Text, View } from 'react-native'
import { ScreenContainer } from '../../components'

const Page5 = ({ navigation }) => {
    return (
        <ScreenContainer>
            <View>
                <Text>Start Page 5</Text>
                <Button title='Login Page' onPress={() => { navigation.push("Login") }} />
            </View>
        </ScreenContainer>
    )
}

export default Page5