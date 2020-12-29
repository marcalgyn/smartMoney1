import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

import NewEntryInput from '../NewEntry/NewEntryInput'

import NewEntryCategoryPicker from '../NewEntry/NewEntryCategoryPicker';

import NewEntryDatePicker from '../NewEntry/NewEntryDatePicker';
import NewEntryDeleteAction from '../NewEntry/NewEntryDeleteAction';

import ActionFooter, { ActionPrimaryButton, ActionSecondaryButton } from '../../components/Core/ActionFooter';


import BalanceLabel from '../../components/BalanceLabel';
import { saveEntry } from '../../services/Entries';
import { deleteEntry } from '../../services/Entries'
import Colors from '../../styles/Colors';

const NewEntry = ({ navigation }) => {
    const entry = navigation.getParam('entry', {
        id: null,
        amount: 0,
        entryAt: new Date(),
        category: { id: null, name: 'Selecione' },

    });


    const [debit, setDebit] = useState(entry.amount <= 0);
    const [amount, setAmount] = useState(entry.amount);
    const [category, setCategory] = useState(entry.category);
    const [entryAt, setEntryAt] = useState(entry.entryAt);

    const isValid = () => {
        if (parseFloat(amount) !== 0) {
            return true;
        }
        return false;

    }

    const onSave = () => {
        const data = {
            amount: parseFloat(amount),
            category: category,
            entryAt: entryAt,

        };

        console.log("NewEntry :: onSave ", data, " - ", entry);
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
            <BalanceLabel />

            <View style={styles.formContainer}>
                <NewEntryInput value={amount}
                    onChangeDebit={setDebit}
                    onChangeValue={setAmount} />
                <NewEntryCategoryPicker
                    debit={debit}
                    category={category}
                    onChangeCategory={setCategory} />

                <View style={styles.formActionContainer}>

                    <NewEntryDatePicker value={entryAt} onChange={setEntryAt} />
                    <NewEntryDeleteAction entry={entry} onOkPress={onDelete} />

                </View>

            </View>
            <Button title="GPS" />
            <Button title="Camera" />
     

            <ActionFooter>
                <ActionPrimaryButton
                 title={entry.id ? 'Salvar' : 'Adicionar' }
                 onPress={() => {
                    isValid() && onSave()
                }} />

                <ActionSecondaryButton title="Cancelar" onPress={onClose} />
            </ActionFooter>

        </View>
    )
}

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
});

export default NewEntry;
