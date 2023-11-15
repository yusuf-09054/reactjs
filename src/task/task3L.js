import "bootstrap/dist/css/bootstrap.min.css"

import { useEffect, useState } from "react";
import { Fetchingvalues1,list,removing1} from "./taska";
import { Bistable} from "./task1t";
import { BisUpage } from "./task4U";
import { Bisrpage1 } from "./task2r";


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
                <th>productcount</th>
                <th>productcategory</th>
                <th>productbrand</th>
                <th>productname</th>
                <th>productprice</th>
                <th>productoffer</th>
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
                            }}>{data.productcount}</td>
                            <td>{data.productcategory}</td>
                            <td>{data.productbrand}</td>
                            <td>{data.productname}</td>
                            <td>{data.productprice}</td>
                            <td>{data.productoffer}</td>
                            <td> 
                                <button className="btn btn-outline-info"
                                onClick={()=>
                                {
                                    setupdatepage(true)
                                    setpos(index)
                                    const temp=Fetchingvalues1(data.productname);
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