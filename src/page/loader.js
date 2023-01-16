import { ContainerComplete, ContainerModal } from "./loaderstyle";
import CircularProgress from "@mui/material/CircularProgress";
import React from 'react';

export const Loader = (props) => {
    let loaderItem  = props.open ? 
    <ContainerComplete  >
    <ContainerModal>
      <CircularProgress color="success" />
      <p>
          Cargando
      </p>
    </ContainerModal>
  </ContainerComplete>: 
     <p></p>
  return (
      loaderItem
  );
};
