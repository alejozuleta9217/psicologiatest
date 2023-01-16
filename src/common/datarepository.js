export default class Datafileregistrer {
  static fileregistrer(data) {
    console.log("Diego", data)
    let location = [];
    if (typeof data.length === "undefined") {
      location[0] = {
        ID: 1,
        FirstName: "Sin Datos",
        direccion: "Sin Datos",
        telefono: "Sin Datos",
        email: "Sin Datos",
        identificacion: "Sin Datos"
      };
    } else {
      for (let i = 0; i < data.length; i++) {
        location[i] = {
          ID: data[i].id_candidato,
          FirstName: data[i].primer_nombre+" "+data[i].segundo_nombre+" "+data[i].primer_apellido+" "+data[i].segundo_apellido,
          direccion: data[i].direccion,
          telefono: data[i].telefono,
          email: data[i].email,
          identificacion: data[i].identificacion
        };
      }
    }
    return location;
  }
}
