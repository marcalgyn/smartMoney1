export const getUUID = () =>{
    const uuidv1 = require('uuid/V1');
   // const {v1 : uuidv1} = require('uuid');
    return uuidv1();

};