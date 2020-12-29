import React, { useEffect, useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';

import Container from '../Core/Container';

import EntryListItem from './EntryListItem';

import { getEntries } from '../../services/Entries';



const EntryList = ({onEntryPress, onPressActionButton }) => {
  [entries, setEntries] = useState([]);

  useEffect(() => {
    async function loadEntries() {
      const data = await getEntries();
      setEntries(data);
    }
    loadEntries();

    console.log('EntryList :: useEffect');
  }, []);

  return (
    <Container
      title="Últimos Lançamentos"
      actionLabelText="Últimos 7 dias"
      actionButtonText="Ver mais"
      onPressActionButton={onPressActionButton}>
      <FlatList
        data={entries}
        keyExtractor={item => item.id}
        renderItem={({ item, index }) => (
          <EntryListItem entry={item} 
          isFirstItem={index ===0}
          isLastItem={index === entries.length - 1}
          onEntryPress={onEntryPress}
          />
          
        )}
      />
    </Container>
  );

};



export default EntryList;
