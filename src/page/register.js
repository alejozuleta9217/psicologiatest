import axios from "axios";
import React, { useState} from "react";
import TextField from "@mui/material/TextField";
import { Loader } from "./loader";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  makeStyles,
  CardMedia,
  Typography
} from "@material-ui/core";
import logo from "./psicologia.png";
const useStyle = makeStyles({
  datarepository: {
    margin: "13px 10px 0px 10px",
    color: "#fbfbfb",
    backgroundColor: "#544040",
    lineHeight: "inherit",
    border: "solid 2px #000000",
    textAlign: "center",
  },
  bodygrid: {
    textAlign: "center",
  },
  media3: {
    height: "26vh",
    width: "85%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "26vh",
    backgroundPosition: "center",
  },
  itemTextFieldceedcontainer: {
    margin: "0.5em 0px 0.5em 0",
  },
  rootpassword: {
    width: "80%",
    borderRadius: "1em",
    boxShadow: "3px 3px 10px #7b7676",
    padding: "1em",
    margin: "0 0 2em 1.5em",
    backgroundColor: "#E5E5E5",
  },
  itemTextFieldceedtext: {
    paddingLeft: "1.5vh !important",
    textAlign: "initial",
  },
  itemTextFieldceed: {
    backgroundColor: "white",
    width: "100% !important",
    borderRadius: "4px",
  },
  botonpass: {
    padding: "0.5em 0.5em 0.5em 0.5em",
    borderRadius: "2vh",
    backgroundColor: "#821a3f",
    color: "#ffffff",
    fontFamily:"Work sans",
    textTransform: "capitalize",
    transition: "all 0.8s ease-out",
    cursor: "pointer",
    width: "max-content",
    fontSize: "calc(1em + 0.3vh)",
    textDecoration: "none",
    border: "none",
    // fontWeight: "bold",
    "&:hover": {
      backgroundColor: "#3e071a",
      border: "none",
    },
  },
});
const Data = () => {
  const classes = useStyle();
  const [openLoading, setLoading] = useState(false);
  const history = useNavigate();
  
  const ceeddownloaduser = () => {
    let Pnombre = document.getElementById("Pnombre").value;
    let Snombre = document.getElementById("Snombre").value;
    let Papellido = document.getElementById("Papellido").value;
    let Sapellido = document.getElementById("Sapellido").value;
    let Direccion = document.getElementById("direccion").value;
    let Telefono = document.getElementById("telefono").value;
    let Email = document.getElementById("email").value;
    let Identificacion = document.getElementById("identificacion").value;
    let body={
        nombre1: Pnombre,
        nombre2: Snombre,
        apellido1: Papellido,
        apellido2: Sapellido,
        direccion: Direccion,
        telefono: Telefono,
        email: Email,
        identificacion: Identificacion,
     }
     setLoading(true)
     axios.post(
         `https://psicologiaback.azurewebsites.net/RegisterInsert`, 
          body, 
          {
              headers: { 
                  'Content-Type' : 'application/json'
              }
          }
  ).then(response => {  
      if(response.status === 200 ){
          if(response.data.code === "OK"){
            localStorage.setItem("identificacion",response.data.data[0].identificacion)            
            setLoading(false)
            history('/Test')
            alert('Usuario registrado') 
          }else{
              setLoading(false)
              alert('Usuario no registrado') 
          }

      }else{
         setLoading(false)
         alert('ocurrio un problema externo')
      }  
      
  });
 }

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid container justifyContent="center">
        <CardMedia className={classes.media3} image={logo} />
      </Grid>
      <Grid container justifyContent="center">
        <h2 className={classes.bodygrid}>
          REGISTRO PARA TEST
        </h2>
      </Grid>
      <Grid
        container
        item
        xs
        direction="column"
        className={classes.rootpassword}
      >
        <Grid
          container
          alignItems="center"
          className={classes.itemTextFieldceedcontainer}
        >
          <Grid direction="column" item xs={3}>
            <Typography className={classes.itemTextFieldceedtext}>
              Primer Nombre *
            </Typography>
          </Grid>
          <Grid direction="column" item xs>
            <TextField
              className={classes.itemTextFieldceed}
              id="Pnombre"
            ></TextField>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          className={classes.itemTextFieldceedcontainer}
        >
          <Grid direction="column" item xs={3}>
            <Typography className={classes.itemTextFieldceedtext}>
              Segundo Nombre
            </Typography>
          </Grid>
          <Grid direction="column" item xs>
            <TextField
              className={classes.itemTextFieldceed}
              id="Snombre"
            ></TextField>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          className={classes.itemTextFieldceedcontainer}
        >
          <Grid direction="column" item xs={3}>
            <Typography className={classes.itemTextFieldceedtext}>
              Primer Apellido *
            </Typography>
          </Grid>
          <Grid direction="column" item xs>
            <TextField
              className={classes.itemTextFieldceed}
              id="Papellido"
            ></TextField>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          className={classes.itemTextFieldceedcontainer}
        >
          <Grid direction="column" item xs={3}>
            <Typography className={classes.itemTextFieldceedtext}>
              Segundo Apellido
            </Typography>
          </Grid>
          <Grid direction="column" item xs>
            <TextField
              id="Sapellido"
              className={classes.itemTextFieldceed}
              placeholder=""
            ></TextField>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          className={classes.itemTextFieldceedcontainer}
        >
          <Grid direction="column" item xs={3}>
            <Typography className={classes.itemTextFieldceedtext}>
              Dirección *
            </Typography>
          </Grid>
          <Grid direction="column" item xs>
            <TextField
              className={classes.itemTextFieldceed}
              id="direccion"
            ></TextField>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          className={classes.itemTextFieldceedcontainer}
        >
          <Grid direction="column" item xs={3}>
            <Typography className={classes.itemTextFieldceedtext}>
              Telefono *
            </Typography>
          </Grid>
          <Grid direction="column" item xs>
            <TextField
              className={classes.itemTextFieldceed}
              id="telefono"
              type="number"
            ></TextField>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          className={classes.itemTextFieldceedcontainer}
        >
          <Grid direction="column" item xs={3}>
            <Typography className={classes.itemTextFieldceedtext}>
              Email *
            </Typography>
          </Grid>
          <Grid direction="column" item xs>
            <TextField
              className={classes.itemTextFieldceed}
              id="email"
              type="email"
            ></TextField>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          className={classes.itemTextFieldceedcontainer}
        >
          <Grid direction="column" item xs={3}>
            <Typography className={classes.itemTextFieldceedtext}>
              Identificación *
            </Typography>
          </Grid>
          <Grid direction="column" item xs>
            <TextField
              className={classes.itemTextFieldceed}
              id="identificacion"
            ></TextField>
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          className={classes.itemTextFieldceedcontainer}
        >
          <Typography className={classes.itemTextFieldceedtext}>
            * campo obligatorio
          </Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          className={classes.itemTextFieldceedtext}
        >
          <button href="#" onClick={ceeddownloaduser} className={classes.botonpass}>Enviar</button>
          
        </Grid>
      </Grid>   
      <Loader open={openLoading}></Loader>   
    </Grid>
  );
};
export default Data;
