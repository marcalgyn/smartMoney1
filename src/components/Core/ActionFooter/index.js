import React  from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import Colors from '../../../styles/Colors';


const ActionFooter = ({children}) => {
    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                {children}
            </View>
            
        </View>
    )
}

export const ActionPrimaryButton = ( { title, onPress}) => {
    return (
        <TouchableOpacity 
        style={styles.primaryButton} 
        onPress={onPress}>
            <Text style={styles.primaryButtonText} >{title}</Text>
        </TouchableOpacity>
    );
};

export const ActionSecondaryButton = ( { title, onPress}) => {
    return (
        <TouchableOpacity 
        style={styles.sencondaryButton} 
        onPress={onPress}>
            <Text style={styles.sencondaryButtonText}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        paddingVertical: 10,
    },
    primaryButton: {
        borderColor: Colors.green,
        borderRadius: 150,
        borderWidth: 1,
        paddingVertical: 10,
        paddingHorizontal: 20,
        
    },
    primaryButtonText: { 
        textAlign: 'center',
        fontSize: 18,
        color: Colors.green,
    },
    sencondaryButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    sencondaryButtonText :{
        textAlign: 'center',
        fontSize: 18,
        color: Colors.white,
    },
    inner: {
        flexDirection:  'row',
        justifyContent: 'center',
    }

})
export default ActionFooter;
