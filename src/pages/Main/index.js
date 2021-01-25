import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import BalancePanel from '../../components/BalancePanel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import Colors from '../../styles/Colors';

const Main = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <BalancePanel onNewEntryPress={() => navigation.navigate('NewEntry')} />
      <ScrollView>
        <EntrySummary onPressActionButton={() => navigation.navigate('Report')} />
        
        <EntryList 

        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,

  },

});

export default Main;

/*
Rotina para nomear projeto por completo
> react-native-rename "No do Projeto" -b br.com.marcal.nomeprojeto_teste
add icone
react-native set-icon --path "C:\mobilePiloto\smartMoney\icone_bank.png"


 */