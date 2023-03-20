import React from 'react'
import { Text, View } from 'react-native'
import { EditButton } from '../../../components/Button'
import { assets, COLORS, FONTS, SIZES } from '../../../constants'

const ProfileHeader = ({ name, onOpen }) => {
    return (
        <View style={{
            backgroundColor: COLORS.primary,
            padding: SIZES.font
        }}>
            <View style={{ marginVertical: SIZES.font }}>
                <Text style={{ fontFamily: FONTS.regular, fontSize: SIZES.small, color: COLORS.white }}>
                    Hello {name} 👋
                </Text>
                <Text style={{ fontFamily: FONTS.bold, fontSize: SIZES.large, marginTop: SIZES.base / 2, color: COLORS.white }}>
                    View You're Profile
                </Text>
                <EditButton
                    imgUrl={assets.left}
                    handlePress={() => { onOpen() }}
                    right={15}
                    top={5}
                />
            </View>
        </View>
    )
}

export default ProfileHeader