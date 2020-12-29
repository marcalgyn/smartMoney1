import React, { useState, useEffect } from 'react'
import { View, TouchableOpacity, FlatList, Text, StyleSheet, Modal } from 'react-native';

import { getDebitCategories, getCreditCategories } from '../../../services/Categories';

import Colors from '../../../styles/Colors';

import ActionFooter,
{ ActionPrimaryButton, ActionSecondaryButton } from '../../../components/Core/ActionFooter';

const NewEntryCategoryPicker = ({ debit, category, onChangeCategory }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [debitCategories, setDebitCategories] = useState([]);
    const [creditCategories, setCreditCategories] = useState([]);

    useEffect(() => {
        async function loadCategories() {
            setDebitCategories(await getDebitCategories());
            setCreditCategories(await getCreditCategories());
        }
        loadCategories();

        console.log('NewEntryCategoryPicker :: useEffect');
    }, []);

    const onCategoryPress = item => {
        onChangeCategory(item);
        onClosePress();
    }
    const onClosePress = () => {
        setModalVisible(false);
    }

    return (
        <View>
            <TouchableOpacity
                style={styles.pickerButton}
                onPress={() => {
                    setModalVisible(true);
                }}>
                <Text style={styles.pickerButtonText}>{category.name}</Text>
            </TouchableOpacity>

            <Modal animationType="slide"
                transparent={false}
                visible={modalVisible}>

                <View style={styles.modal}>
                    <FlatList
                        data={debit ? debitCategories : creditCategories}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (

                            <TouchableOpacity style={styles.modalItem}
                                onPress={() => onCategoryPress(item)}>
                                <Text style={[styles.modalItemText, { color: item.color }]}>
                                    {item.name}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <ActionFooter>
                    <ActionPrimaryButton title="Fechar" onPress={onClosePress} />
                </ActionFooter>
            </Modal>
        </View>
    )
}
const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: Colors.background,
    },
    pickerButton: {
        backgroundColor: Colors.asphalt,
        borderRadius: 15,
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 20,
    },
    pickerButtonText: {
        fontSize: 28,
        color: Colors.white,
        textAlign: 'center',
    },
    modalItem: {
        backgroundColor: Colors.asphalt,
        borderRadius: 15,
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 20,
    },
    modalItemText: {
        fontSize: 22,
        color: Colors.white,
        textAlign: 'center',
    },
    closeButton: {
        borderColor: Colors.green,
        backgroundColor: Colors.background,
        borderWidth: 2,
        borderRadius: 15,
        marginVertical: 10,
        marginHorizontal: 20,
        padding: 10,
        textAlign: 'center',
        alignSelf: 'center',
        paddingVertical: 3,
        paddingHorizontal: 5,
    },
    closeButtonText: {
        fontSize: 14,
        color: Colors.green,
        textAlign: 'center',
    }

});

export default NewEntryCategoryPicker
