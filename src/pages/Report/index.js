import React from 'react'
import { View, Picker, StyleSheet, Button } from 'react-native'

import EntryLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';


const Report = ({navigation}) => {
    return (
        <View>
            <EntryLabel />
            <View>
                <Picker>
                    <Picker.Item label="Todas as Categorias" />
                </Picker>

                <Picker>
                    <Picker.Item label="Ultimos 7 dias" />
                </Picker>
            </View>

            <EntrySummary />
            <EntryList />
            <View>
                <Button title="Salvar" />
                <Button title="Fechar"  onPress={() =>
                    navigation.goBack()} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

});

export default Report;
