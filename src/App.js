import {BrowserRouter, Routes, Route} from "react-router-dom";
import Data from "./page/data";
import { ThemeProvider } from '@material-ui/core/styles';

export default function App() {
  return(
    <ThemeProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Data/>}/>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
  )
}
