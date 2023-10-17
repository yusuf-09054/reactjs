import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Listingpage } from './Listingpage';
import { Homepage } from './Navigation';

export function App1()
{
    return(
        <>
        <BrowserRouter>
        <Homepage/>
        <Routes>
            <Route path="listall" exact element={<Listingpage/>}/>
        </Routes>
        </BrowserRouter>
        </>
    );
}