import { useState } from "react"
import { altervalues1 } from "./taska";

export let BisUpage=(replacing)=>
{
    const [pos,setpos]=useState(replacing.who1);
    const [values,setvalues]=useState({
        "bisno":replacing.biscuitdet.bisno,
        "bisname":replacing.biscuitdet.bisname,
        "bismrp":replacing.biscuitdet.bismrp,
        "bisquantity":replacing.biscuitdet.bisquantity,
    })
    const track=(datas)=>
    {
        const{name,value}=datas.target
        setvalues((getting)=>
        {
          return{
           ...getting,
           [name]:value
          }
        })
    }
    const updating1=()=>
    {
      altervalues1(values,pos);
      alert("Updated successfully")
      alert(JSON.stringify(values));
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
                    <div className="row justify-content-center mt-5">
                    <button className="btn btn-outline-success col-5 me-3"onClick={updating1}>Update</button>
                    <button className="btn btn-outline-danger col-5 me-3">CANCEL</button>

                    </div>
                   </div>
             </div>
        </div>
        </div>
        </>
    )
}