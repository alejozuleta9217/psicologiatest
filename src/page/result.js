import axios from "axios";
import React, { useState} from "react";
import TextField from "@mui/material/TextField";
import { Loader } from "./loader";
import PieChart, {
  Series,
  Label,
  Legend,
  Size,
  Export,
  Tooltip,
  Title,
} from "devextreme-react/pie-chart";
import {
  Chart,
  CommonSeriesSettings,
  SeriesTemplate,
  Format,
  Font,
} from "devextreme-react/chart";

import { Grid, makeStyles, CardContent, CardMedia } from "@material-ui/core";
import logo from "./psicologia.png";
import Dash from "../common/datosdashboard";
const useStyle = makeStyles({
  datarepository: {
    margin: "13px 10px 0px 10px",
    color: "#fbfbfb",
    backgroundColor: "#544040",
    lineHeight: "inherit",
    border: "solid 2px #000000",
    textAlign: "center",
  },
  centerText: {
    textAlign: "center",
    // padding: "3vh 0 0 0",
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
    border: "solid 1px",
  },
  itemTextFieldceed: {
    backgroundColor: "white",
    width: "20vw !important",
    borderRadius: "4px",
    marginRight:"0.5vw !important"
  },
  marg2: {
    margin: "1vw 0px 0px 0px"
  },
  botonpass: {
    padding: "0.5em 0.5em 0.5em 0.5em",
    borderRadius: "2vh",
    backgroundColor: "#821a3f",
    color: "#ffffff",
    fontFamily: "Work sans",
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
    textAlign: "justify",
  },

  gridtablecolumndireccioninmu: {
    minWidth: "250px !important",
  },
  root4: {
    width: "100%",
    borderRadius: "1em",
    padding: "1em",
    backgroundColor: "#E5E5E5",
    margin: "0em 0 0 0em",
  },
  root5: {
    width: "100%",
    borderRadius: "1em",
    boxShadow: "3px 3px 10px #7b7676",
    padding: "1em",
    backgroundColor: "#ffffff",
    marginTop: "1vw",
  },
});

const Cardsmapas = () => {
  const classes = useStyle();
  const [ph_venta_arriendo, setph_venta_arriendo] = useState([]);
  const [openLoading, setLoading] = useState(false);  

  const ceeddownloaduser = () => {
    let Pnombre = document.getElementById("Pnombre").value;
    let body={
        usuario: Pnombre
     }
     console.log("usuario",body)
    setLoading(true)
    axios
      .post(
        `https://psicologiaback.azurewebsites.net/ResultUser`,
        body,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          setLoading(false)
          setph_venta_arriendo(response.data.data);
        
        }else{
            setLoading(false)
            alert('Resultados no Encontrados') 
        }
      });
 }

  let aperturaMental = Dash.AperturaMental(ph_venta_arriendo);
  let estabilidadEmocional = Dash.EstabilidadEmocional(ph_venta_arriendo);
  let afabilidad = Dash.Afabilidad(ph_venta_arriendo);
  let energia = Dash.Energia(ph_venta_arriendo);
  let distorsion = Dash.Distorsion(ph_venta_arriendo);
  let teson = Dash.Teson(ph_venta_arriendo);
  let dimensiones = Dash.Dimensiones(ph_venta_arriendo);
  return (
    <Grid item xs container direction="column" justifyContent="center">
      <CardContent className={classes.centerText}>
        <Grid
          container
          direction="row"
          item
          xs
          className={classes.root4}
          justifyContent="center"
        >
          <Grid container justifyContent="center">
            <CardMedia className={classes.media3} image={logo} />
          </Grid>
          <Grid className={classes.root5} item xs>            
          <Grid container justifyContent="center">
            <h1 className={classes.bodygrid}>RESULT TEST</h1>
          </Grid>
          <Grid container justifyContent="initial">
          <TextField
              className={classes.itemTextFieldceed}
              id="Pnombre"
              variant="filled"
              label="Igresar la Identifición del Candidato"
              type="number"
            ></TextField>
            <button href="#" onClick={ceeddownloaduser} className={classes.botonpass}>Enviar</button>
          </Grid>
            <Grid container item xs className={classes.marg2} direction="row">
            <Grid
                container
                item
                xs
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <PieChart
                  id="pie1"
                  dataSource={aperturaMental}
                  palette="Material"
                >
                  <Title text={"Apertura Mental"}>
                    <Font
                      color="#821a3f"
                      family="Roboto"
                      size={25}
                      weight="bold"
                    />
                  </Title>
                  <Series argumentField="country" valueField="medals" />
                  <Tooltip
                    enabled={true}
                    contentTemplate={customizeText}
                    color="#821a3f"
                  >
                    <Font size={18} color="white" />
                  </Tooltip>
                  <Size width="100%" />
                  <Export enabled={true} />
                </PieChart>
              </Grid>
              <Grid
                container
                item
                xs
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <PieChart
                  id="pie2"
                  dataSource={estabilidadEmocional}
                  palette="Material"
                >
                  <Title text={"Estabilidad Emocional"}>
                    <Font
                      color="#821a3f"
                      family="Roboto"
                      size={25}
                      weight="bold"
                    />
                  </Title>
                  <Series argumentField="country" valueField="medals" />
                  <Tooltip
                    enabled={true}
                    contentTemplate={customizeText}
                    color="#821a3f"
                  >
                    <Font size={18} color="white" />
                  </Tooltip>
                  <Size width="100%" />
                  <Export enabled={true} />
                </PieChart>
              </Grid>
              
              <Grid
                container
                item
                xs
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <PieChart
                  id="pie6"
                  dataSource={teson}
                  palette="Material"
                >
                  <Title text={"Tesón"}>
                    <Font
                      color="#821a3f"
                      family="Roboto"
                      size={25}
                      weight="bold"
                    />
                  </Title>
                  <Series argumentField="country" valueField="medals" />
                  <Tooltip
                    enabled={true}
                    contentTemplate={customizeText}
                    color="#821a3f"
                  >
                    <Font size={18} color="white" />
                  </Tooltip>
                  <Size width="100%" />
                  <Export enabled={true} />
                </PieChart>
              </Grid>
              <Grid
                container
                item
                xs
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <PieChart
                  id="pie4"
                  dataSource={energia}
                  palette="Material"
                >
                  <Title text={"Energía"}>
                    <Font
                      color="#821a3f"
                      family="Roboto"
                      size={25}
                      weight="bold"
                    />
                  </Title>
                  <Series argumentField="country" valueField="medals" />
                  <Tooltip
                    enabled={true}
                    contentTemplate={customizeText}
                    color="#821a3f"
                  >
                    <Font size={18} color="white" />
                  </Tooltip>
                  <Size width="100%" />
                  <Export enabled={true} />
                </PieChart>
              </Grid>
              
              <Grid
                container
                item
                xs
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <PieChart
                  id="pie3"
                  dataSource={afabilidad}
                  palette="Material"
                >
                  <Title text={"Afabilidad"}>
                    <Font
                      color="#821a3f"
                      family="Roboto"
                      size={25}
                      weight="bold"
                    />
                  </Title>
                  <Series argumentField="country" valueField="medals" />
                  <Tooltip
                    enabled={true}
                    contentTemplate={customizeText}
                    color="#821a3f"
                  >
                    <Font size={18} color="white" />
                  </Tooltip>
                  <Size width="100%" />
                  <Export enabled={true} />
                </PieChart>
              </Grid>
              <Grid
                container
                item
                xs
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <PieChart
                  id="pie5"
                  dataSource={distorsion}
                  palette="Material"
                >
                  <Title text={"Distorsión"}>
                    <Font
                      color="#821a3f"
                      family="Roboto"
                      size={25}
                      weight="bold"
                    />
                  </Title>
                  <Series argumentField="country" valueField="medals" />
                  <Tooltip
                    enabled={true}
                    contentTemplate={customizeText}
                    color="#821a3f"
                  >
                    <Font size={18} color="white" />
                  </Tooltip>
                  <Size width="100%" />
                  <Export enabled={true} />
                </PieChart>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            direction="column"
            item
            xs={12}
            className={classes.root5}
          >            
          <Grid container justifyContent="center">
            <h1 className={classes.bodygrid}>RESULT TEST DIMENSIONES</h1>
          </Grid>
            <Grid
              direction="row"
              item
              container
              justifyContent="center"
              alignItems="center"
            >
              <Chart
                id="chart"
                dataSource={dimensiones}
                palette="Soft"
                width="80%"
              >
                <CommonSeriesSettings
                  valueField="mass"
                  argumentField="id"
                  type="bar"
                  ignoreEmptyPoints={true}
                >
                  <Label visible={true}>
                    <Format type="fixedPoint" precision={0} />
                  </Label>
                </CommonSeriesSettings>
                <SeriesTemplate argumentField="id" nameField="name" />
                <Legend
                  visible={true}
                  verticalAlignment="top"
                  horizontalAlignment="center"
                  itemTextPosition="right"
                  width={18}
                />
                <Tooltip
                  enabled={true}
                  color="#821a3f"
                  customizeTooltip={customizeTooltip}
                >
                  <Font size={18} color="white" />
                </Tooltip>
                <Size width="100%" />
                <Export enabled={true} />
              </Chart>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      <Loader open={openLoading}></Loader>   
    </Grid>
  );
};

function customizeText(arg) {
    return `${arg.valueText} (${arg.percentText})`;
  }

  function customizeTooltip(arg) {
    return {
      text: `${arg.seriesName} - ${arg.valueText}`,
    };
  }

export default Cardsmapas;
