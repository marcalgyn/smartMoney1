import React from 'react';
import { View, StatusBar, TouchableOpacity, StyleSheet } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';
import Colors from '../../styles/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
import useBalance from '../../hooks/useBalance';

const BalancePanel = ({ currentBalance, onNewEntryPress }) => {

    const [balance] = useBalance();

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={Colors.violet} />
            <LinearGradient
                colors={[Colors.violet, Colors.blue]}
                style={styles.panel}>
                <BalancePanelLabel currentBalance={balance} />
                <BalancePanelChart />
            </LinearGradient>

            <TouchableOpacity style={styles.Button}
                onPress={onNewEntryPress}>
                <Icon name="add" size={30} color={Colors.white} />
            </TouchableOpacity>
            
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        marginBottom: -23,
    },
    panel: {
        
    },
    Button: {
        backgroundColor: Colors.green,
        borderRadius: 150,
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        shadowColor: Colors.black,
        elevation: 5,
        marginTop: -25,
        marginRight: 10,

    }
});

export default BalancePanel;
