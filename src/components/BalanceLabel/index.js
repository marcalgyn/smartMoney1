import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../styles/Colors';
import useBalance from '../../hooks/useBalance';
import Currency from '../Core/Currency';
const BalanceLabel = () => {
  const [balance] = useBalance();

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Saldo Atual</Text>

      <LinearGradient
        style={styles.panel}
        colors={[Colors.violet, Colors.blue]}>

        <Text style={styles.value}>
          <Currency value={balance} /> 
        </Text>

      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  label: {
    fontSize: 12,
    color: Colors.white,
  },
  value: {
    fontSize: 28,
    color: Colors.white,
    textAlign: 'center',
  },
  panel: {
    borderRadius: 10,
    minWidth: 150,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginVertical: 10,
  },
});
export default BalanceLabel;
