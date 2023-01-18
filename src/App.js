import {BrowserRouter, Routes, Route} from "react-router-dom";
import Data from "./page/data";
import Register from "./page/register";
import Test from "./page/test";
import Result from "./page/result";

export default function App() {
  return(
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Register/>}/>
        <Route path="/Persons" element={<Data/>}/>
        <Route path="/Test" element={<Test/>}/>
        <Route path="/Result" element={<Result/>}/>
      </Routes>
    </BrowserRouter>
  )
}
