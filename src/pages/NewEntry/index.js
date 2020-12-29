import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

import NewEntryInput from '../NewEntry/NewEntryInput'
import NewEntryCategoryPicker from '../NewEntry/NewEntryCategoryPicker';

import BalanceLabel from '../../components/BalanceLabel';
import { saveEntry } from '../../services/Entries';
import { deleteEntry } from '../../services/Entries'
import Colors from '../../styles/Colors';

const NewEntry = ({ navigation }) => {
    

    const entry = navigation.getParam('entry', {
        id: null,
        amount: 0,
        entryAt: new Date(),
    });

    const [amount, setAmount] = useState(entry.amount);

    const isValid = () => {
        if (parseFloat(amount) !== 0) {
            return true;
        }
        return false;

    }

    const onSave = () => {
        const data = {
            amount: parseFloat(amount),
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

        //currentBalance={currentBalance}
        //<TextInput style={styles.input}
          //          onChangeText={text => setAmount(text)}
            //        value={amount}
              //  />
    return (
        <View style={styles.container}>
            <BalanceLabel  />

            <View>
                <NewEntryInput value={amount} onChangeValue={setAmount} />
                <NewEntryCategoryPicker />

                
                <Button title="GPS" />
                <Button title="Camera" />
            </View>

            <View>
                <Button title="Adicionar" onPress={() => {
                    isValid() && onSave()
                }} />
                <Button title="Excluir" onPress={onDelete} />
                <Button title="Cancelar" onPress={onClose} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 10,
    },
    input: {
        borderColor: '#000',
        borderWidth: 1,
    }
});

export default NewEntry;
