import "bootstrap/dist/css/bootstrap.min.css"

import { bistable } from "./task1";
import { bisrpage } from "./task2r";
import { useEffect, useState } from "react";
import { list } from "./task";

export let bislpage=()=>
{
    const[temparray,settemparray]=useState([])
    const[create,setcreate]=useState(false);
    const [readpage,setReadpage]=useState(false);
    const[pos,setpos]=useState(0);
    const[updatepage,setupdatepage]=useState(false);
    const[object,setObject]=useState({});
}
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
            <bistable/>
            <button className=" btn btn-outline-secondary col-2 mt-2 mb-3"
            onClick={()=>
            {
                setcreate(false)
            }}
             >BACK
            </button>
            </>
            :
            (readpage)?
            <>
            <Readpage how={pos}/>
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
            <updatepage who={pos} biscuitdet={object}/>
            <button 
            onClick={()=>
            {
               setUpdatepage(false)
            }}
            >BACK</button>
            </>
            :
            <>
            <button className="btn btn-outline-successcol-2 mt-2 mb-3"
            onClick={()=>
            {
                setcreatepage(true)
            }}
            >Submit</button>
            <table className="table table-striped table-dark col-lg-8 col-md-10 col-sm-12">
             <thead>
              <tr>
                <th>Biscuit No</th>
                <th>Biscuit Name</th>
                <th>Biscuit MRP</th>
                <th>Biscuit Quantity</th>
              </tr>
             </thead>
             <tbody>
                {
                    temparray.map((data,index)
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
                                <button 
                                className="btn btn-outline-warning"
                                onclick={()=>
                                {
                                    setUpdatepage(true)
                                            setpos(index)
                                            const temp=Fetchingvalues1(data.bisnamename);
                                            setObject(temp);
                                }}
                                >UPDATE</button>
                                <button
                                 className='btn btn-outline-danger'
                                 onClick={()=>
                                 {
                                     settemparray(removing(index))
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
   )