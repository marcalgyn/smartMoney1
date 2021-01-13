import React from 'react'
import { View, Image, StyleSheet } from 'react-native'

import Colors from '../../styles/Colors';
import Logo from '../../assets/logo-white.png';
import WelcomeMessage from './WelcomeMessage';

const Welcome = ({navigation}) => {
    return (
        <View style={StyleSheet.container}>
            
            <View style={style.logo}>
                <Image source={Logo} />
            </View>
            <WelcomeMessage />
            
        </View>
    )
}

const style = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 10,
    },
    logo:{
        alignItems: 'center',
        marginTop: 20,
    },

});

export default Welcome;
