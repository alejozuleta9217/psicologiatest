export default class MapFile{
  
    static fileregistrer (data){
      let location = [];
      if(typeof data.length === "undefined" ){
        location[0] =
        {
          ID: 1,
          FirstName: 'Sin Datos',
        }
      }else{
        for (let i = 0; i < data.length; i++) {
          location[i] =
             {
                ID: data[i].numero_modulo,
                FirstName: data[i].estado_modulo,
             }          
         }
      }
      return location;
    }  
  
  }