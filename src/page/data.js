import axios from "axios";
import React, { useState, useEffect } from "react";
import datafileregistrer from '../common/datarepository.js';
import { Grid, makeStyles, CardMedia } from "@material-ui/core";
import DataGrid, { Column} from 'devextreme-react/data-grid'
import logo from "./psicologia.png";
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
  const classes = useStyle();
  const loadStatistics = () => {
    axios
      .get(
        `https://psicologiaback.azurewebsites.net/Persons`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setdata(response.data.data.historial);
        
        }
      });
  };
  
  useEffect(() => {
    loadStatistics();
  }, []);

  let dataSourceRegister = datafileregistrer.fileregistrer(data);

  return (
    <Grid container direction="column" justifyContent="center" alignItems="center">
      <Grid container justifyContent="center">
      <CardMedia className={classes.media3} image={logo} />
      </Grid>
      <Grid container justifyContent="center">
        <h2 className={classes.bodygrid}>Usuarios</h2>
      </Grid>
      <DataGrid
        className={classes.datarepository}
        id="gridContainer"
        dataSource={dataSourceRegister}
        keyExpr="ID"
        columnAutoWidth={true}
        showBorders={true}
      >
        <Column
          dataField="ID"
          caption="Id Registros"
          alignment="center"
          width={100}
        />
        <Column
          dataField="identificacion"
          caption="Identificación"
          alignment="center"
          width={150}
        />
        <Column
          dataField="FirstName"
          caption="Nombre"
          alignment="center"
          width={300}
        />
        <Column
          dataField="direccion"
          caption="Dirección"
          width={200}
          alignment="center"
        />
        <Column
          dataField="telefono"
          caption="Telefono"
          width={200}
          alignment="center"
        />
        <Column
          dataField="email"
          caption="email"
          width={200}
          alignment="center"
        />
      </DataGrid>
    </Grid>
  );
};
export default Data;
