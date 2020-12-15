import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

import BalancePanelLabel from './BalancePanelLabel';
import BalancePanelChart from './BalancePanelChart';

const BalancePanel = () => {
    return (
        <View styles={styles.container}>
            <BalancePanelLabel />
            <BalancePanelChart />
            
      
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default BalancePanel;