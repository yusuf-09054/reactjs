import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react"
import { Fetchingvalues, listing, removing } from "./Arrayvalues";
import { Registrationform } from "./registrationfrom";
import { Readpage } from "./Readpage";

export let Listingpage=()=>
{
  const [temparray,settemparray]=useState([])
  const[createpage,setcreatepage]=useState(false);
  const[readpage,setReadpage]=useState(false);
  const[pos,setpos]=useState(0);
  const[updatepage,setUpdatepage]=useState(false);
  const[object,setObject]=useState({});

  const gettingvalues=()=>
  {
    settemparray(listing());
  }
   useEffect(()=>
   {
    gettingvalues()
   })
   return(

    <>
    <div className="container row justify-content-center">
        {
            (createpage)?
            <>
            <Registrationform/>
            <button className="btn btn-ouline-secondary col-2 mt-2 mb-3"
            onClick={()=>
            {
                setcreatepage(false)
            }}
            >BACK </button>
            </>
            :
            (readpage)?
            <>
            <Readpage who={pos}/>
            <button
            onClick={()=>
            {
                setReadpage(false)
            }}
            >BACK</button>
            </>
            :
            (updatepage)?
                <>
                <updatepage who={pos} studentdet={object} />
                <button 
                onClick={()=>
                {
                   setUpdatepage(false)
                }}
                >BACK</button>
                </>
                :
            <>
            <button className="btn btn-outline-success col-2 mt-2 mb-3"
            onClick={()=>
            {
                setcreatepage(true)
            }}
            >Registration</button>
     <table className="table table-striped table-dark col-lg-8 col-md-10 col-sm-12">
        <thead>
            <tr>
                <th>Student ID</th>
                <th>Student NAME</th>
                <th>Student DOB</th>
                <th>Update/Delete</th>
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
                        }}>{data.stuid}</td>
                        <td>{data.stuname}</td>
                        <td>{data.studob}</td>
                        <td>
                                        <button
                                        className='btn btn-outline-warning'
                                        onClick={()=>
                                        {
                                            setUpdatepage(true)
                                            setpos(index)
                                            const temp=Fetchingvalues(data.stuname);
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
   );
}