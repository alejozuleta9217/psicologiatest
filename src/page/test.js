import axios from "axios";
import React, { useState, useEffect} from "react";
import { Loader } from "./loader";
//import { useNavigate } from "react-router-dom";
import databigsource from "../common/databigtest";
import databigsourceoptions from "../common/options";
import {
  Grid,
  makeStyles,
  CardMedia,
  Typography,
  Checkbox
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
  solid: {
    
    border: "solid 1px"
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
  gridstyletable: {
    display: "block",
    //border: "1px solid #000000",
    marginTop: "1em",
  },
  gridstyletablealto: {
    maxHeight: "150vh",
  },
  gridtablecolumnvalor: {    
    minWidth: "250px !important",
  },
  gridtablecolumndescrip: {
    minWidth: "52em !important",
    textAlign:"justify"
  },

  gridtablecolumndireccioninmu: {    
    minWidth: "250px !important",
  },
});
const Test = () => {
  const classes = useStyle();
  const [openLoading, setLoading] = useState(false);
  const [filebig, setfilebig] = useState([]);
  const [filebigoptions, setfilebigoptions] = useState([]);
  const [coordenada, setCoordenada] = useState([]);
  //const history = useNavigate();
  let user = localStorage.getItem("identificacion");
  
  const loadStatistics = () => {
    axios
      .get(
        `https://psicologiaback.azurewebsites.net/BringQuestions`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          //console.log("diego1", response.data.data.preguntasopciones)
          setfilebig(response.data.data.preguntasopciones);
        
        }
      });
  };

  const loadStatisticsoptions = () => {
    axios
      .get(
        `https://psicologiaback.azurewebsites.net/BringQuestionsOptions`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          console.log("diego1", response.data.data.preguntasopciones)
          setfilebigoptions(response.data.data.preguntasopciones);
        
        }
      });
  };
  const onSelectAllClick = (event) => {
    if (event.target.checked === true) {
      let coordenadas = event.target.value.split(",");
      console.log("verificando descripcion", coordenadas)
      coordenada.push(coordenadas[0], coordenadas[1]);
      setCoordenada(Object.values(coordenada));
    } else {
      let filternotariado = event.target.value.split(",");
      console.log("borrar la coordenada del array", coordenada);
      const borrarlat = filternotariado[0] + "";
      const borrarlong = filternotariado[1] + "";
      console.log(
        "borrar la coordenada del array",        
        typeof borrarlat,
        typeof borrarlong,
      );
      let coordenadaborrada = coordenada.filter(
        (item) => item !== filternotariado[0] && item !== filternotariado[1]
      );
      setCoordenada(Object.values(coordenadaborrada));
      console.log("borrar la coordenada del array1", coordenadaborrada);
    }
  };
 useEffect(() => {
    loadStatistics();
    loadStatisticsoptions();
  }, []);
  let dataSourceBig = databigsource.fileregistrerbig(filebig);
  let dataSourceBigoptions = databigsourceoptions.fileregistrerbig(filebigoptions);

  const ceeddownloaduser = () => {
    let body=coordenada
     setLoading(true)
     axios.post(
         `https://psicologiaback.azurewebsites.net/RegisterInsertTest`, 
          body, 
          {
              headers: { 
                  'Content-Type' : 'application/json'
              }
          }
  ).then(response => {  
    console.log("test", response.data)
      if(response.status === 200 ){
          if(response.data.code === "OK"){            
            setLoading(false)
            //history('/Register')
            alert('Test Guardado') 
          }else{
              setLoading(false)
              alert('Test no Guardado') 
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
          TEST
        </h2>
      </Grid>
      <Grid
        container
        item
        xs        
        direction="row"
        className={classes.rootpassword}
      >
        <Grid
          container
          //alignItems="center"
          className={classes.itemTextFieldceedcontainer}
          xs
        >          
        {dataSourceBig.map((row) => (              
            <Grid container direction="row">
                <Grid direction="column" item xs>
                    <Typography className={classes.itemTextFieldceedtext}>
                        {row.id_seq_pregunta} - {row.pdescripcion}
                    </Typography>
                </Grid>  
                <p className={classes.solid}></p> 
            </Grid>     
        ))}
        </Grid>
        <Grid
          container
          alignItems="center"
          className={classes.itemTextFieldceedcontainer}
          xs ={5}
        > 
        {dataSourceBigoptions.map((row1) => (              
            <Grid container direction="row">
                <Grid container item xs={1}>                    
                <Checkbox
                                  value={[row1.ID, user]}
                                  className="notariadocheck"
                                  //id={row.latitud}
                                  // color="primary"
                                  // indeterminate={
                                  //   numSelected > 0 && numSelected < rowCount
                                  // }
                                  //checked={rowCount > 0 && numSelected === rowCount}
                                  onChange={onSelectAllClick}
                                //    inputProps={{
                                //     "aria-label": "select all desserts",
                                //    }}
                    />
                </Grid>   
                <Grid container item xs alignItems="center">   
                    <Typography className={classes.itemTextFieldceedtext}>
                        {row1.descripcion}
                    </Typography>
                </Grid>                
            </Grid>     
        ))}
        </Grid>        
      <Grid
          container
          alignItems="center"
          className={classes.itemTextFieldceedtext}
        >
          <button 
            onClick={ceeddownloaduser}
            className={classes.botonpass}
          >
            Guardar
          </button>
        </Grid>
      </Grid>   
        
      <Loader open={openLoading}></Loader>   
    </Grid>
  );
};
export default Test;