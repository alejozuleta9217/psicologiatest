export default class Dash {

  static AperturaMental(data) {
    if (data.length <= 0) {
      return [
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
      ];
    } else {
      return [
        {
          country: data.aperturaalaculturan.nombre_tipo,
          medals: data.aperturaalaculturan.peso,
        },
        {
          country: data.aperturaalaculturap.nombre_tipo,
          medals: data.aperturaalaculturap.peso,
        },
        {
          country: data.aperturaalaexperiencian.nombre_tipo,
          medals: data.aperturaalaexperiencian.peso,
        },
        {
          country: data.aperturaalaexperienciap.nombre_tipo,
          medals: data.aperturaalaexperienciap.peso,
        },
      ];
    }
  }

  static EstabilidadEmocional(data) {
    if (data.length <= 0) {
      return [
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
      ];
    } else {
      return [
        {
          country: data.controldeemocionesn.nombre_tipo,
          medals: data.controldeemocionesn.peso,
        },
        {
          country: data.controldeemocionesp.nombre_tipo,
          medals: data.controldeemocionesp.peso,
        },
        {
          country: data.controldeimpulsosn.nombre_tipo,
          medals: data.controldeimpulsosn.peso,
        },
        {
          country: data.controldeimpulsosp.nombre_tipo,
          medals: data.controldeimpulsosp.peso,
        },
      ];
    }
  }

  static Afabilidad(data) {
    if (data.length <= 0) {
      return [
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
      ];
    } else {
      return [
        {
          country: data.cooperacionn.nombre_tipo,
          medals: data.cooperacionn.peso,
        },
        {
          country: data.cooperacionp.nombre_tipo,
          medals: data.cooperacionp.peso,
        },
        {
          country: data.cordialidadn.nombre_tipo,
          medals: data.cordialidadn.peso,
        },
        {
          country: data.cordialidadp.nombre_tipo,
          medals: data.cordialidadp.peso,
        },
      ];
    }
  }

  static Energia(data) {
    if (data.length <= 0) {
      return [
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
      ];
    } else {
      return [
        {
          country: data.dinamismon.nombre_tipo,
          medals: data.dinamismon.peso,
        },
        {
          country: data.dinamismop.nombre_tipo,
          medals: data.dinamismop.peso,
        },
        {
          country: data.dominancian.nombre_tipo,
          medals: data.dominancian.peso,
        },
        {
          country: data.dominanciap.nombre_tipo,
          medals: data.dominanciap.peso,
        },
      ];
    }
  }

  static Distorsion(data) {
    if (data.length <= 0) {
      return [
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
      ];
    } else {
      return [
        {
          country: data.distorsion.nombre_tipo,
          medals: data.distorsion.peso,
        },
      ];
    }
  }

  static Teson(data) {
    if (data.length <= 0) {
      return [
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
        {
          country: "Sin datos",
          medals: 0,
        },
      ];
    } else {
      return [
        {
          country: data.escrupulosidadn.nombre_tipo,
          medals: data.escrupulosidadn.peso,
        },
        {
          country: data.escrupulosidadp.nombre_tipo,
          medals: data.escrupulosidadp.peso,
        },
        {
          country: data.perseverancian.nombre_tipo,
          medals: data.perseverancian.peso,
        },
        {
          country: data.perseveranciap.nombre_tipo,
          medals: data.perseveranciap.peso,
        },
      ];
    }
  }

  static Dimensiones(data) {
    if (data.length <= 0) {
        return [
            {
              id: "1",
              name: "Si datos",
              mass: 0,
            },
            {
              id: "2",
              name: "Si datos",
              mass: 0,
            },
            {
              id: "3",
              name: "Si datos",
              mass: 0,             
            },
            {
              id: "4",
              name: "Si datos",
              mass: 0,
            },
            {
              id: "5",
              name: "Si datos",
              mass: 0,
            },
            {
              id: "6",
              name: "Si datos",
              mass: 0,
            }
          ];
      
    }else{ 
        return [
            {
              id: "1",
              name: data.aperturaalaculturan.nombre_dimension,
              mass: ((36+parseInt(data.aperturaalaculturap.peso)+parseInt(data.aperturaalaexperienciap.peso))-(parseInt(data.aperturaalaculturan.peso)+parseInt(data.aperturaalaexperiencian.peso))),
            },
            {
              id: "2",
              name: data.controldeemocionesn.nombre_dimension,
              mass: ((36+parseInt(data.controldeemocionesp.peso)+parseInt(data.controldeimpulsosp.peso))-(parseInt(data.controldeemocionesn.peso)+parseInt(data.controldeimpulsosn.peso))),              
            },
            {
              id: "3",
              name: data.cooperacionn.nombre_dimension,              
              mass: ((36+parseInt(data.cooperacionp.peso)+parseInt(data.cordialidadp.peso))-(parseInt(data.cooperacionn.peso)+parseInt(data.cordialidadn.peso))),
            },
            {
              id: "4",
              name: data.dinamismon.nombre_dimension,
              mass: ((36+parseInt(data.dinamismop.peso)+parseInt(data.dominanciap.peso))-(parseInt(data.dinamismon.peso)+parseInt(data.dominancian.peso))),
            },
            {
              id: "5",
              name: data.distorsion.nombre_dimension,
              mass: data.distorsion.peso,
            },
            {
              id: "6",
              name: data.escrupulosidadn.nombre_dimension,
              mass: ((36+parseInt(data.escrupulosidadp.peso)+parseInt(data.perseveranciap.peso))-(parseInt(data.escrupulosidadn.peso)+parseInt(data.perseverancian.peso))),
            }
          ];
    }    
  }
}
