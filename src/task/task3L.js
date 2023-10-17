import "bootstrap/dist/css/bootstrap.min.css"

import { useEffect, useState } from "react";
import { Fetchingvalues1,list,removing1} from "./taska";
import { Bistable} from "./task1t";
import { BisUpage } from "./task4U";
import { Bisrpage1 } from "./task2r";
import { Fetchingvalues } from "../Arrayvalues";

export let Bislpage=()=>
{
    const[temparray,settemparray]=useState([])
    const[create,setCreate]=useState(false);
    const[readpage,setReadpage]=useState(false);
    const[pos,setpos]=useState(0);
    const[updatepage,setupdatepage]=useState(false);
    const[object,setObject]=useState({});
const gettingvalues=()=>
  {
    settemparray(list());
  }
   useEffect(()=>
   {
    gettingvalues()
   })
    
    return(
    <>
    <div className="container row justify-content-center">
        {
            (create)?
            <>
            <Bistable/>
            <button className=" btn btn-outline-secondary col-2 mt-2 mb-3"
            onClick={()=>
            {
                setCreate(false)
            }}
             >BACK
            </button>
            </>
            :
            (readpage)?
            <>
            <Bisrpage1 who={pos}/>
            <button onClick={()=>
            {
                setReadpage(false)
            }}
             >BACK
            </button>
            </>
            :
            (updatepage)?
            <>
            <BisUpage who1={pos} biscuitdet={object}/>
            <button 
            onClick={()=>
            {
               setupdatepage(false)
            }}
            >BACK</button>
            </>
            :
            <>
            <button className="btn btn-outline-successcol-2 mt-2 mb-3"
            onClick={()=>
            {
                setCreate(true)
            }}
            >Submit</button>
            <table className="table table-striped table-dark col-lg-8 col-md-10 col-sm-12">
             <thead>
              <tr>
                <th>Biscuit No</th>
                <th>Biscuit Name</th>
                <th>Biscuit MRP</th>
                <th>Biscuit Quantity</th>
                <th>ACTIONS</th>
              </tr>
             </thead>
             <tbody>
                {
                    temparray.map((data,index)=>
                    (
                        <>
                        <tr>
                            <td onClick={()=>
                            {
                                setReadpage(true);
                                setpos(index)
                            }}>{data.bisno}</td>
                            <td>{data.bisname}</td>
                            <td>{data.bismrp}</td>
                            <td>{data.bisquantity}</td>
                            <td> 
                                <button className="btn btn-outline-info"
                                onClick={()=>
                                {
                                    setupdatepage(true)
                                    setpos(index)
                                    const temp=Fetchingvalues1(data.bisname);
                                    setObject(temp);
                                }}>
                                    Update
                                </button>
                                <button
                                 className='btn btn-outline-danger'
                                 onClick={()=>
                                 {
                                     settemparray(removing1(index))
                                 }}
                                >DELETE</button>
                            </td>
                        </tr>
                        </>
                    ))
                }
             </tbody>
            </table>
            </>
        }
    </div>
    </>
   );
}