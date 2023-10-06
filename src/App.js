// function
// function syntex

// function functioname()
// {

// }
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { Operator } from './ternaryoperator';
import { Hook1,} from './Usestate';

import{Route, Routes} from "react-router-dom";
import { Homepage } from './Navigation';

export function App1()
{
    return(
        <>
        <browerRouter>
        <Homepage/>
        <Routes>
            <Route path='ternary1' exact element={<Operator/>}/>
            <Route path='usestate1'exact element={<Hook1/>}/>
        </Routes>
        </browerRouter>
        </>
    );
}