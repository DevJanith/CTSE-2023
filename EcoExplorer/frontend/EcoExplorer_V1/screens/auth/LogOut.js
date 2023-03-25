import { View, Text } from 'react-native'
import React, { useContext, useEffect } from 'react'
import Splash from '../other/Splash';
import { AuthContext } from '../../context/context';

const LogOut = () => {
    const { logout } = useContext(AuthContext);
    useEffect(() => {
        logout()
    }, [])

    return <Splash />;
}

export default LogOut