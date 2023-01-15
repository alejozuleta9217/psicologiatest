import axios from "axios";
import React, { useState, useEffect } from "react";
import datafileregistrer from "../common/datarepository";
import datamodule from "../common/datamodule";
import { Grid, makeStyles, CardMedia } from "@material-ui/core";
import DataGrid, { Column, Paging } from 'devextreme-react/data-grid'
import logo from "./Imagotipo_de_la_Universidad_de_la_Amazonia.svg.png";

const useStyle = makeStyles({
  datarepository: {
    margin: "13px 10px 0px 10px",
    color: "#fbfbfb",
    backgroundColor: "#544040",
    lineHeight: "inherit",
    border: "solid 2px #000000",   
    textAlign:"center" 
  },
  bodygrid:{
    textAlign: "center"
  },
  media3: {
    height: "26vh",
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "27vh",
    backgroundPosition: "center",
  },
});

const Data = () => {
  const [data, setdata] = useState([]);
  const [module, setmodule] = useState();
  const [moduleall, setmoduleall] = useState([]);
  const classes = useStyle();

  const loadStatistics = () => {
    axios
      .get(
        `https://parqueaderouniamazonia.azurewebsites.net/HistorialRegistros`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          //   if (
          //setdata(response.data.data.historial);
          setdata(response.data.data.historial);
          //     response.data.data.cantidadph == "0" &&
          //     response.data.data.cantidadrural == "0"
          //   ) {
          //     setOpen3(true);
          //   }
          //   if (response.data.code == "OK") {
          //     setstatistics(response.data.data);
          //   } else {
          //     //setOpen3(true)
          //     alert("ocurrio un problema Error!..1");
          //   }
        }
        //else {
        //   alert("ocurrio un problema externo");
        // }
      });
  };

  const loadModule = () => {
    axios
      .get(
        `https://parqueaderouniamazonia.azurewebsites.net/AvailableModule`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          //   if (
          //setdata(response.data.data.historial);
          console.log(response.data.data.modulos.disponibles)
          setmodule(response.data.data.modulos.disponibles);
          //     response.data.data.cantidadph == "0" &&
          //     response.data.data.cantidadrural == "0"
          //   ) {
          //     setOpen3(true);
          //   }
          //   if (response.data.code == "OK") {
          //     setstatistics(response.data.data);
          //   } else {
          //     //setOpen3(true)
          //     alert("ocurrio un problema Error!..1");
          //   }
        }
        //else {
        //   alert("ocurrio un problema externo");
        // }
      });
  };

  const loadModuleAviable = () => {
    axios
      .get(
        `https://parqueaderouniamazonia.azurewebsites.net/ModuleAvailable`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          //   if (
          //setdata(response.data.data.historial);
          setmoduleall(response.data.data.datamodule);
          //     response.data.data.cantidadph == "0" &&
          //     response.data.data.cantidadrural == "0"
          //   ) {
          //     setOpen3(true);
          //   }
          //   if (response.data.code == "OK") {
          //     setstatistics(response.data.data);
          //   } else {
          //     //setOpen3(true)
          //     alert("ocurrio un problema Error!..1");
          //   }
        }
        //else {
        //   alert("ocurrio un problema externo");
        // }
      });
  };

  useEffect(() => {
    loadModule();
    loadModuleAviable();
    loadStatistics();
  }, []);

  let dataSourceRegister = datafileregistrer.fileregistrer(data);
  let dataSourceModule = datamodule.fileregistrer(moduleall);
  window.setTimeout(loadModule(), 2000)
  window.setTimeout(loadModuleAviable(), 3000)
  window.setTimeout(loadStatistics(), 4000)
  return (
    <Grid container direction="columnn" justifyContent="center" alignItems="center">
      <Grid container justifyContent="center">
      <CardMedia className={classes.media3} image={logo} />
      </Grid>
      <Grid container justifyContent="center">
        <h1 className={classes.bodygrid}>INFORMACIÓN PARQUEADERO SEDE UNIVERSIDAD DE LA AMAZONÍA</h1>
      </Grid>
      <Grid container justifyContent="center">
        <h2 className={classes.bodygrid}>MODULOS DISPONIBLES {module}</h2>
      </Grid>
      <DataGrid
        className={classes.datarepository}
        id="gridContainer1"
        dataSource={dataSourceModule}
        keyExpr="ID"
      >        
        <Column
          dataField="FirstName"
          caption="Esatdo del módulo"
          alignment="center"
          width={200}
        />
        <Column
          dataField="ID"
          caption="Id del módulo"
          alignment="center"
          width={200}
        />
      </DataGrid>
      <Grid container justifyContent="center">
        <h2 className={classes.bodygrid}>HISTORIAL DE PARQUEO</h2>
      </Grid>
      <DataGrid
        className={classes.datarepository}
        id="gridContainer"
        dataSource={dataSourceRegister}
        keyExpr="ID"
        columnAutoWidth={true}
        showBorders={true}
      >
        <Paging defaultPageSize={10} />
        <Column
          dataField="ID"
          caption="Id historial registros"
          alignment="center"
          width={200}
        />
        <Column
          dataField="Prefix"
          caption="Identificación"
          alignment="center"
          width={150}
        />
        <Column
          dataField="FirstName"
          caption="Id modulo"
          alignment="center"
          width={125}
        />
        <Column
          dataField="BirthDate"
          caption="Fecha Ingreso"
          width={200}
          dataType="date"
          alignment="center"
        />
        <Column
          dataField="fechasalida"
          caption="Fecha Salida"
          width={200}
          dataType="date"
          alignment="center"
        />
      </DataGrid>
    </Grid>
  );
};

export default Data;
