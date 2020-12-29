import Realm from 'realm';
import CategorySchema from '../schemas/CategorySchema';
import EntrySchema from '../schemas/EntrySchema';
import { getAllCategories, getDefaultCategories } from './Categories';

export const getRealm = async () => {
    const realm = await Realm.open({
        schema: [CategorySchema, EntrySchema],
        schemaVersion: 5,

    });

    // Teste apagar tudo no banco
    // DropDB(realm);
    initDB(realm);
    return realm;
};

export const initDB = (realm) => {
    //Consultar a quantidade de categorias no BD
    //se = 0
    //Preencho as categorias
    //se não
    //não faço nada

    const categoriesLength = realm.objects('Category').length;
    console.log(`initDB :: Quantidade de categorias no BD: ${categoriesLength}`);

    if (categoriesLength === 0) {
        const categories = getDefaultCategories();

        console.log(`initDB :: initing db....`);

        try {
            realm.write(() => {
                categories.forEach(category => {
                    console.log(`initDB :: creating category: ${JSON.stringify(category)}`);
                    realm.create('Category', category, true);
                });
            })
        } catch (error) {
            console.log('init DB :: Erro de criação de Category ', error);
        }

    } else {
        console.log('init DB :: ja possui categorias ');
    }
};

export const dropDB = realm => {

    realm.write(() => {
        realm.deleteAll();
        console.log("dropDB :: apaga todos os dados do DB...");
    })
}
