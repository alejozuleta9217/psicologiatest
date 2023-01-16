export default class MapFileBig {
    static fileregistrerbig(data) {
      let location = [];
      if (typeof data.length === "undefined") {
        location[0] = {
          ID: 1,
          descripcion: 'Sin valores',
          preguntaid_pregunta: 'Sin valores'  
        };
      } else {
        for (let i = 0; i < data.length; i++) {          
            location[i] = {    
              ID: data[i].id_opciones,
              descripcion: data[i].descripcion,
              preguntaid_pregunta: data[i].preguntaid_pregunta         
            };
                   
          
        }
      }
      return location;
    }
  }
  
 