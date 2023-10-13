import { useState } from "react"

export let bistable=()=>
{
 const[values,setvalues]=useState({
    "bisno":0,
    "bisname":"",
    "bismrp":"",
    "bisquantity":0,
 })
}

const track=(datas)=>
{
    const {name,values}=datas.target
    setvalues((getting)=>
    {
     return{
        ...getting,
        [name]:values
     }
    })
}
return(
    <>
    <div className="container text-center">
        <div className="row justify-content-center">
            <h1 className="text-center">Biscuitsdetails</h1>
            <div className="col-lg-8 col-md-10 col-sm-12">
                    <div className="form-group">
                    <label className="form-label">Enter your fav biscuit no:</label>
                        <input
                        placeholder="Enter your fav biscuit no"
                        type="number"
                        name="bisno"
                        onChange={track}
                        value={values.bisno}
                        className="form-contorl"
                        />
                         <div className="form-group">
                        <label className="form-label">Enter your biscuit name:</label>
                        <input
                        placeholder="Enter your biscuit name"
                        type="text"
                        name="bisname"
                        onChange={track}
                        value={values.bisname}
                        className="form-contorl"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Enter mrp :</label>
                        <input
                        placeholder="Enter mrp"
                        type="text"
                        name="bismrp"
                        onChange={track}
                        value={values.bismrp}
                        className="form-contorl"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Enter quantity :</label>
                        <input
                        placeholder="Enter quantity"
                        type="number"
                        name="bisquantity"
                        onChange={track}
                        value={values.bisquantity}
                        className="form-contorl"
                        />
                    </div>
                   </div>
             </div>
        </div>
    </div>
    </>
)