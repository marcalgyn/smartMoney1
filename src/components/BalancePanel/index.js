import React from 'react';
import { View, Button, TouchableOpacity, Text, StyleSheet } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';
import Colors from '../../styles/Colors';

const BalancePanel = ({currentBalance}) => {
    
    return (

        <View style={styles.container}>

        <LinearGradient 
        colors={[Colors.violet, Colors.blue]}
        style={styles.panel}>
            <BalancePanelLabel currentBalance={currentBalance}/>
            <BalancePanelChart />
        </LinearGradient>
        <TouchableOpacity style={styles.Button}>
            <Text>+</Text>
        </TouchableOpacity>
        </View>
    )
};
    const styles = StyleSheet.create({
        container: {
            
        },
    panel: {
        
        paddingVertical: 10,
    },
    Button: {   
        backgroundColor: Colors.green,
        borderRadius:150,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        width:50,
        height:50,
        marginTop: -25,
        marginRight: 10,

    }
});

export default BalancePanel;
