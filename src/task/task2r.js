import { useEffect, useState } from "react"
import { Reading1 } from "./taska"

 export let Bisrpage1=(indexvalue)=>
 {
    const[values,setvalues]=useState({
    "bisno":0,
    "bisname":"",
    "bismrp":"",
    "bisquantity":0,
    })

 const settingvalues=()=>
 {
     setvalues(Reading1(indexvalue.who))
 }
 useEffect(()=>
 {
     settingvalues()
 })
 return(
    <>
    <>
    <div className="container text-center mt-3" >
            <div className="row justify-content-center">
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <div className="bg-dark text-light">
                    <tr className="text-center">
                            <td className="ms-5">Biscuit No :{values.bisno}</td>
                            <br></br>
                            <tr>
                            <td className="ms-5">Biscuit Name:{values.bisname}</td>
                            <br></br>
                            </tr>
                            <tr>
                            <td className="ms-5">Biscuit mrp:{values.bismrp}</td>
                            <br></br>
                            </tr>
                            <tr>
                                <td className="ms-5">Biscuit Quantity:{values.bisquantity}</td>
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