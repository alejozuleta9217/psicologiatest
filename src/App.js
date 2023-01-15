import {BrowserRouter, Routes, Route} from "react-router-dom";
import Data from "./page/data";

export default function App() {
  return(
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Data/>}/>
      </Routes>
    </BrowserRouter>
  )
}
