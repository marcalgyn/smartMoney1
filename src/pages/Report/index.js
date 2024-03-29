import React, { useState } from 'react'
import {StatusBar, View, TouchableOpacity, StyleSheet, ScrollView, Text } from 'react-native'

import BalanceLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';
import Colors from '../../styles/Colors';

import Icon from 'react-native-vector-icons/MaterialIcons';


import ActionFooter, { ActionPrimaryButton } from '../../components/Core/ActionFooter';
import RelativeDaysModal from '../../components/RelativeDaysModal';
import CategoryModal from '../../components/CategoryModal';


const Report = ({ navigation }) => {
    const [relativeDaysModalVisible, setRelativeDaysModalVisible] = useState(false,);
    const [CategoryModalVisible, setCategoryModalVisible] = useState(false,);

    const [relativeDays, setRelativeDays] = useState(7);
    const [category, setCategory] = useState({
        id: null, name: 'Todas Categorias',
    });

    const onRelativeDaysPress = item => {
        setRelativeDays(item);
        onRelativeDaysClosePress();
    };

    const onCategoryPress = item => {
        setCategory(item);
        onCategoryClosePress();
    }

    const onRelativeDaysClosePress = () => {
        setRelativeDaysModalVisible(false);

    }
    const onCategoryClosePress = () => {
        setCategoryModalVisible(false);
    }

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={Colors.background} />
            <BalanceLabel />
            <View style={styles.FiltersContainer}>
                <TouchableOpacity
                    style={styles.filterButton}
                    onPress={() => {
                        setRelativeDaysModalVisible(true)
                    }}>
                    <Text style={styles.filterButtonText}> {`Últimos ${relativeDays} dias`} </Text>
                    <Icon
                        name="keyboard-arrow-down"
                        size={20}
                        color={Colors.champagneDark}
                    />
                </TouchableOpacity>

                <RelativeDaysModal
                    isVisible={relativeDaysModalVisible}
                    onConfirm={onRelativeDaysPress}
                    onCancel={onRelativeDaysClosePress} />

                <TouchableOpacity
                    style={styles.filterButton}
                    onPress={() => {
                        setCategoryModalVisible(true)
                    }}>
                    <Text style={styles.filterButtonText}> {category.name} </Text>
                    <Icon
                        name="keyboard-arrow-down"
                        size={20}
                        color={Colors.champagneDark}
                    />
                </TouchableOpacity>


                <CategoryModal
                    categoryType="all"
                    isVisible={CategoryModalVisible}
                    onConfirm={onCategoryPress}
                    onCancel={onCategoryClosePress} />

            </View>

            <ScrollView>
                <EntrySummary days={relativeDays} />
                <EntryList days={relativeDays} category={category} />
            </ScrollView>

            <ActionFooter>
                <ActionPrimaryButton
                    title="Fechar" onPress={() =>
                        navigation.goBack()} />
            </ActionFooter>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,

    },
    FiltersContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 5,

    },
    filterButton: {
        flexDirection: 'row',
        borderColor: Colors.champagneDark,
        borderWidth: 1,
        borderRadius: 150,

        paddingVertical: 5,
        paddingHorizontal: 10,
        marginHorizontal: 5,
    },
    filterButtonText: {
        color: Colors.champagneDark,

    }

});

export default Report;
