import React from 'react'
import { Text, View , StatusBar} from 'react-native'
import { CircleButton } from '../../../../components'
import { assets, COLORS, FONTS, SIZES } from '../../../../constants'

const ProfileHeader = ({ name, onOpen, navigation }) => {
    return (
        <View style={{
            backgroundColor: COLORS.primary,
            padding: SIZES.font
        }}>
            <CircleButton
                imgUrl={assets.left}
                handlePress={() => { navigation.goBack() }}
                left={15}
                top={StatusBar.currentHeight + 10}
            />
            <View left={60} style={{ marginVertical: SIZES.font }}>
                <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.white }}>
                    Hello {name} 👋
                </Text>
                <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.large, marginTop: SIZES.base / 2, color: COLORS.white }}>
                    Manage You're Score Board
                </Text>
            </View>
        </View>
    )
}

export default ProfileHeader