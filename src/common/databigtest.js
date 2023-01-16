export default class MapFileBig {
    static fileregistrerbig(data) {
      let location = [];
      if (typeof data.length === "undefined") {
        location[0] = {
          id_seq_pregunta: 1,
          pdescripcion: 'Sin valores',
          id_pregunta: 'Sin valores'  
        };
      } else {
        for (let i = 0; i < data.length; i++) {
          let id = i;          
            location[i] = {
              id_seq_pregunta: id+1,              
              pdescripcion: data[i].pdescripcion,
              id_pregunta: data[i].id_pregunta         
            };
          }      
          
        }
      
      return location;
    }
  }
  
 