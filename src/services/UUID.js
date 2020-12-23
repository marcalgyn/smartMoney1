//const {v1 : uuidv1} = require('uuid');
export const getUUID = () =>{
    const uuidv1 = require('uuid/V1');
   
    return uuidv1();

};