
import React, { useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import ActionFooter, {
  ActionPrimaryButton,
} from '../../components/Core/ActionFooter';


import Colors from '../../styles/Colors';
import Logo from '../../assets/logo-white.png';
import WelcomeMessage from './WelcomeMessage';
import WelcomeBalanceInput from './WelcomeBalanceInput';
import { saveEntry } from '../../services/Entries';
import useCategories from '../../hooks/useCategories';
import { setInitialized } from '../../services/Welcome';


const Welcome = ({ navigation }) => {
  const [, , , initCategories] = useCategories();
  const [amount, setAmount] = useState(0);

  const onSavePress = () => {
    saveEntry({
      amount: parseFloat(amount),
      isInit: true,
      category: initCategories,
    });

    setInitialized();

    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>

      <View style={styles.showView} >
        <View style={styles.logo}>
          <Image source={Logo} />
        </View>

        <WelcomeMessage />
        <WelcomeBalanceInput value={amount} onChangeValue={setAmount} />

        <ActionFooter>
          <ActionPrimaryButton title="Continuar" onPress={onSavePress} />
        </ActionFooter>

      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}> Clique em "R$" para escolher: </Text>
        <Text style={styles.footerText}> Despesa - / Receita + </Text>
        <Text style={styles.byText}> Dev. Silvio Marçal 62 98556-7314 </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({

  showView: {
    flex: 1,
  },

  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10,
  },
  logo: {
    alignItems: 'center',
    marginTop: 20,
  },

  footerText: {
    color: Colors.white,
    fontSize: 12,
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 0,
  },
  byText: {
    color: Colors.white,
    fontSize: 11,
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 0,
    
  }
});

export default Welcome;
