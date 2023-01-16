import Styled from "styled-components";

export const ContainerModal = Styled.div`
      position: 'absolute';

      width: 100px;
      height: 100px;
      padding:20px;
      box-shadow:2px;
      text-align:center;
      background-color:white;
        border-radius: 5px;


`

export const ContainerComplete = Styled.div`
    position:fixed;
    width: 100%;
    height:100%;
    top:0;
    left: 0;
    background-color:rgba(0,0,0,0.5);
    z-index:1001;
    justify-content:center;
    text-align: center;
    align-items:center;
    display: flex;
`