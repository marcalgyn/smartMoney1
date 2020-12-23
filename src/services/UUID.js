
export const getUUID = () =>{
  
   const uuid = require('react-native-uuid');   
   console.log("Resultado getUUID ",  uuid.v1());
   return uuid.v1();

};