import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../../../styles/Colors';
// 'react-native/Libraries/NewAppScreen';

import Currency from '../../Core/Currency';

const BalancePanelLabel = ({currentBalance}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Saldo Atual</Text>
            <Text style={styles.value}>
                <Currency value={currentBalance} /> 
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
 container: {
     alignItems: 'center', 
     zIndex: 1,
 },
 label: {
    color: Colors.white,
    fontSize: 14,
    
    
 },
 value: {  
    color: Colors.white,
     fontSize: 36,
     
 },
});

export default BalancePanelLabel;

