import React from 'react'
import {Modal, FlatList, TouchableOpacity, View, Text, StyleSheet } from 'react-native'

import Colors from '../../styles/Colors';

import ActionFooter,
{ ActionPrimaryButton, ActionSecondaryButton } from '../Core/ActionFooter';

import useCategories from '../../hooks/useCategories';


const CategoryModal = ({categoryType, isVisible, onConfirm, onCancel}) => {

    const [debitCategories, creditCategories, allCategories ] = useCategories();
       
    
    return (
        
        <Modal animationType="slide"
        transparent={false}
        visible={isVisible}>

        <View style={styles.modal}>
            <FlatList
                data={categoryType === 'all' 
                ? allCategories 
                : categoryType === 'debit'
                ? debitCategories 
                : creditCategories}

                keyExtractor={item => item.id}
                renderItem={({ item }) => (

                    <TouchableOpacity style={styles.modalItem}
                        onPress={() => onConfirm(item)}>
                        <Text style={[styles.modalItemText, { color: item.color }]}>
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
            />
        </View>
        <ActionFooter>
            <ActionPrimaryButton title="Fechar" onPress={onCancel} />
        </ActionFooter>
    </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: Colors.background,
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


})
export default CategoryModal;
