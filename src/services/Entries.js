import {Alert} from 'react-native';

import {getUUID} from '../services/UUID';
import moment from '../vendors/moment';

import firestore from '@react-native-firebase/firestore';


export const getEntries = async (days, category) => {
  let realm = await getRealm();
  realm = realm.objects('Entry');

  //Parametro para filtar por periodo
  if (days > 0) {
    const date = moment().subtract(days, 'days').toDate();
    console.log('getEntries :: days ', days);
    realm = realm.filtered('entryAt >= $0', date);
  }

  //paramentro para filtrar por categoria
  if (category && category.id) {
    console.log('getEntries :: category ', JSON.stringify(category));
    realm = realm.filtered('category == $0', category);
  }

  const entries = realm.sorted('entryAt', true);
  console.log('getEntries :: entries ', JSON.stringify(entries));

  return entries;
};

export const addEntry = async (value, entry = {}) => {
  
  let data = {};

  try {
    data = {
      amount: entry.amount,
      entryAt: entry.entryAt || new Date(),
      description: entry.category.name,
      address: entry.address,
      latitude: entry.latitude,
      longitude: entry.longitude,
      //photo: entry.photo,
      isInit: entry.isInit || false,
      category: entry.category,
    };

    await firestore()
    .collection('entries')
    .add(data);
    console.log('addEntry :: Salvar ', JSON.stringify(data));
  } catch (error) {
    console.error('addEntry :: data: ' + JSON.stringify(data));
    Alert.alert('Erro', 'Houve um erro ao salvar este lançamento');
  }

  return data;
};
export const deleteEntry = async (entry) => {
  
  // const realm = await getRealm();

  // try {
  //   //Nao implementado o filtro realm aqui
  //   realm.write(() => {
  //     realm.delete(entry);
  //   });
  // } catch (error) {
  //   console.error(
  //     'deleteEntry :: error on delete object: ' + JSON.stringify(entry),
  //   );
  //   Alert.alert('Erro ao excluir este lançamento');
  // }
};
