import { useEffect, useState } from "react"
import { Reading1 } from "./taska"

 export let Bisrpage1=(indexvalue)=>
 {
    const[values,setvalues]=useState({
        "productcount":0,
        "productcategory":"",
        "productbrand":"",
        "productname":"",
        "productprice":0,
        "productoffer":0,
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
                            <td className="ms-5">productcount:{values.productcount}</td>
                            <br></br>
                            <tr>
                            <td className="ms-5">productcategory:{values.productcategory}</td>
                            <br></br>
                            </tr>
                            <tr>
                            <td className="ms-5">productbrand:{values.productbrand}</td>
                            <br></br>
                            </tr>
                            <tr>
                                <td className="ms-5">productname:{values.productname}</td>
                            </tr>
                            <br></br>
                            <tr>
                            <td className="ms-5">productprice:{values.productprice}</td>
                            </tr> 
                            <br></br>
                            <tr>
                            <td className="ms-5">productoffer:{values.productoffer}</td>
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