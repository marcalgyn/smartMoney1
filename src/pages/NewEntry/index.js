import React, {useState} from 'react';

import {StatusBar, View, StyleSheet, Text} from 'react-native';

import {View, StyleSheet, Text} from 'react-native';


import NewEntryInput from '../NewEntry/NewEntryInput';
import NewEntryCategoryPicker from '../NewEntry/NewEntryCategoryPicker';
import NewEntryDatePicker from '../NewEntry/NewEntryDatePicker';
import NewEntryAddressPicker from './NewEntryAddressPicker';

import NewEntryDeleteAction from '../NewEntry/NewEntryDeleteAction';
import ActionFooter, {
  ActionPrimaryButton,
  ActionSecondaryButton,
} from '../../components/Core/ActionFooter';
import BalanceLabel from '../../components/BalanceLabel';
import useEntries from '../../hooks/useEntries';
import Colors from '../../styles/Colors';

const NewEntry = ({navigation}) => {
  const entry = navigation.getParam('entry', {
    id: null,
    amount: 0,
    entryAt: new Date(),
    address: null,
    latitude: null,
    longitude: null,
    category: {id: null, name: 'Selecione'},
  });

  const [, saveEntry, deleteEntry] = useEntries();

  const [debit, setDebit] = useState(entry.amount <= 0);
  const [amount, setAmount] = useState(entry.amount);
  const [category, setCategory] = useState(entry.category);
  const [entryAt, setEntryAt] = useState(entry.entryAt);
  const [address, setAddress] = useState(entry.address);
  const [latitude, setLatitude] = useState(entry.latitude);
  const [longitude, setLongitude] = useState(entry.longitude);

  const isValid = () => {
    if (parseFloat(amount) !== 0) {
      return true;
    }
    return false;
  };

  const onSave = () => {
    const data = {
      amount: parseFloat(amount),
      address: address,
      latitude: latitude,
      longitude: longitude,
      category: category,
      entryAt: entryAt,
    };

    console.log('NewEntry :: onSave ', data, ' - ', entry);
    saveEntry(data, entry);
    onClose();
  };

  const onDelete = () => {
    deleteEntry(entry);
    onClose();
  };

  const onClose = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>

      <StatusBar barStyle="light-content" backgroundColor={Colors.violet} />
      <BalanceLabel />

      <BalanceLabel />


      <View style={styles.formContainer}>
        <NewEntryInput
          value={amount}
          onChangeDebit={setDebit}
          onChangeValue={setAmount}
        />

        <NewEntryCategoryPicker
          debit={debit}
          category={category}
          onChangeCategory={setCategory}
        />

        <View style={styles.formActionContainer}>
          <NewEntryDatePicker value={entryAt} onChange={setEntryAt} />

          <NewEntryAddressPicker
            address={address}
            onChange={({latitude, longitude, address}) => {
              setLatitude(latitude);
              setLongitude(longitude);
              setAddress(address);
            }}
          />
          <NewEntryDeleteAction entry={entry} onOkPress={onDelete} />
        </View>
      </View>

      <Text style={styles.rodape} > Em teste by Silvio Marçal </Text>

      <ActionFooter>
        <ActionPrimaryButton
          title={entry.id ? 'Salvar' : 'Adicionar'}
          onPress={() => {
            isValid() && onSave();
          }}
        />

        <ActionSecondaryButton title="Cancelar" onPress={onClose} />
      </ActionFooter>
    </View>
  );
};

// <Button title="Excluir" onPress={onDelete} />

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    padding: 10,
  },

  formActionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  formContainer: {
    flex: 1,
    paddingVertical: 20,
  },

  rodape: {
    textAlign: 'right',
    color: Colors.white,
  },

});

export default NewEntry;
