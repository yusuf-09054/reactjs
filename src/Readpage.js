import { useEffect, useState } from "react"
import { reading } from "./Arrayvalues"

export let Readpage=(indexvalue)=>
{
    const[myvalues,setmyvalues]=useState({
        "stuid":0,
       "stuname":"",
       "studob":"", 
    })
    const settingvalues=()=>
    {
        setmyvalues(reading(indexvalue.who))
    }
    useEffect(()=>
    {
        settingvalues()
    })
    return(
        <>
        <>
        <div className="container text-center mt-3">
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <div className="bg-dark text-light">
                        <h1>FIND MY ID (One User Value)</h1>
                        <tr className="text-center">
                            <td className="ms-5">Student ID:{myvalues.stuid}</td>
                            <br></br>
                            <tr>
                            <td className="ms-5">Student Name:{myvalues.stuname}</td>
                            <br></br>
                            </tr>
                            <tr>
                            <td className="ms-5">Student DOB:{myvalues.studob}</td>
                            <br></br>
                            </tr>
                        </tr>
                    </div>
                </div>
            </div>
        </div>
        </>
        </>
    );
} 