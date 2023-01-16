import {BrowserRouter, Routes, Route} from "react-router-dom";
import Data from "./page/data";
import Register from "./page/register";
import Test from "./page/test";

export default function App() {
  return(
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/Persons" element={<Data/>}/>
        <Route path="/Test" element={<Test/>}/>
      </Routes>
    </BrowserRouter>
  )
}
