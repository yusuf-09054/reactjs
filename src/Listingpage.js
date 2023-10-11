import "bootstrap/dist/css/bootstrap.min.css"
import { useEffect, useState } from "react"
import { listing } from "./Arrayvalues";
import { Registrationform } from "./registrationfrom";


export let Listingpage=()=>
{
  const [temparray,settemparray]=useState([]);

  const[createpage,setcreatepage]=useState(false);

  const gettingvalues=()=>
  {
    settemparray(listing());
  }
   useEffect(()=>
   {
    gettingvalues()
   }
   )
   return(
    <>
    <div className="container row justify-content-center">
        {
            (createpage)?
            <>
            <Registrationform/>
            <button className="btn btn-ouline-secondary col-2 mt-2 mb-3"
            onClick={
                ()=>
            {
                setcreatepage(false)
            }}
            >BACK
            </button>
            </>
            :
            <button className="btn btn-outline-success col-2 mt-2 mb-3"
            onClick={()=>
            {
                setcreatepage(true)
            }}
            >Registration</button>
        }
     <table className="table table-striped table-dark col-lg-8 col-md-10 col-sm-12">
        <thead>
            <tr>
                <th>STUDENT ID</th>
                <th>STUDENT NAME</th>
                <th>STUDENT DOB</th>
            </tr>
        </thead>
        <tbody>
            {
                temparray.map((data)=>
                (
                    <>
                     <tr>
                        <td>{data.stuid}</td>
                        <td>{data.stuname}</td>
                        <td>{data.studob}</td>
                    </tr>
                    </>
                ))
            }
        </tbody>
     </table>
    </div>
    </>
   )
}