import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Bislpage } from "./task3L";
import { Homepage1 } from "./taskn";
 
export function App2()
{
 return(
   <>
   <BrowserRouter>
   <Homepage1/>
   <Routes>
    <Route path="listall1" exact element={<Bislpage/>}/>
   </Routes>
   </BrowserRouter>
   </>
 );
}