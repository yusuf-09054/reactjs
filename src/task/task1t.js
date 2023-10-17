import { useState } from "react"
import { creation } from "./taska"

export let Bistable=()=>
{
 const[values,setvalues]=useState({
    "bisno":0,
    "bisname":"",
    "bismrp":"",
    "bisquantity":0,
 })


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
const Biscuit=()=>
{
    alert("Successfully Done"+JSON.stringify(values))
    creation(values)
    alert("Added Successfully")
}
return(
    <>
    <div className="container text-center" style={{backgroundImage:"url('https://img.delicious.com.au/T_mAoteE/w759-h506-cfill/del/2021/03/white-chocolate-anzac-biscuits-148212-2.jpg')"}}>
        <div className="row justify-content-center">
            <h1 className="text-center">Biscuitsdetails</h1>
            <div className="col-lg-8 col-md-10 col-sm-12" >
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
                    <div className="row justify-content-center mt-5">
                    <button className="btn btn-outline-success col-5 me-3"onClick={Biscuit}>SUBMIT</button>
                    <button className="btn btn-outline-danger col-5 me-3">CANCEL</button>

                    </div>
                   </div>
             </div>
        </div>
    </div>
    </>
);
}
