import firestore from '@react-native-firebase/firestore';

export const getDefaultCategories = () => {
  return [
    {
      name: 'Alimentação',
      isDebit: true,
      color: '#1abc9c',
      order: 0,
    },
    {
      name: 'Restaurantes e Bares',
      color: '#2ecc71',
      isDebit: true,
      order: 1,
    },
    {
      name: 'Casa',
      color: '#3498db',
      isDebit: true,
      order: 2,
    },
    {
      name: 'Compras',
      color: '#9b59b6',
      isDebit: true,
      order: 3,
    },
    {
      name: 'Cuidados Pessoais',
      color: '#f1c40f',
      isDebit: true,
      order: 4,
    },
    {
      name: 'Dívidas e Empréstimos',
      color: '#f39c12',
      isDebit: true,
      order: 5,
    },
    {
      name: 'Educação',
      color: '#e67e22',
      isDebit: true,
      order: 6,
    },
    {
      name: 'Família e Filhos',
      color: '#d35400',
      isDebit: true,
      order: 7,
    },
    {
      name: 'Impostos e Taxas',
      color: '#e74c3c',
      isDebit: true,
      order: 8,
    },
    {
      name: 'Investimentos',
      color: '#c0392b',
      isDebit: true,
      order: 9,
    },
    {
      name: 'Lazer',
      color: '#ecf0f1',
      isDebit: true,
      order: 10,
    },
    {
      name: 'Mercado',
      color: '#bdc3c7',
      isDebit: true,
      order: 11,
    },
    {
      name: 'Outras Despesas',
      color: '#95a5a6',
      isDebit: true,
      order: 12,
    },

    {
      name: 'Empréstimos',
      color: '#273c75',
      isCredit: true,
      order: 1,
    },
    {
      name: 'Investimentos',
      color: '#4cd137',
      isCredit: true,
      order: 2,
    },
    {
      name: 'Salário',
      color: '#487eb0',
      isCredit: true,
      order: 3,
    },
    {
      name: 'Outras Receitas',
      color: '#8c7ae6',
      isCredit: true,
      order: 4,
    },
    {
      name: 'Saldo Inicial',
      color: '#27ae60',
      isInit: true,
      order: 5,
    },
  ];
};

export const getAllCategories = async () => {
  //  const realm = await getRealm();
  //  return realm.objects('Category').sorted('order');
};

export const getDebitCategories = async () => {
  //  const realm = await getRealm();
  //  return realm
  //    .objects('Category')
  //.filtered('isDebit = true AND isInit = false')
  //    .sorted('order');
};

export const getCreditCategories = async () => {
  //  const realm = await getRealm();
  //return realm
  //    .objects('Category')
  //    .filtered('isCredit = true AND isInit = false')
  //    .sorted('order');
};

export const getInitCategories = async () => {
  const querySnapShot = await firestore()
    .collection('categories')
    .where('isInit', '==', true)
    .get();

  return {...querySnapShot.docs[0].data(), id: querySnapShot.docs[0].id};
};

/*

Ração
Sal Mineral
Petróleo
Funcionário
Mão de Obra
Semente
Médicamento
Veneno
Transporte
Maquinario
Benfeitoria
Outros
*/
