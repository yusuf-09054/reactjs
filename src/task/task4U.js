import { useState } from "react"
import { altervalues1 } from "./taska";

export let BisUpage=(replacing)=>
{
    const [pos,setpos]=useState(replacing.who1);
    const [values,setvalues]=useState({
        "productcount":replacing.biscuitdet.productcount,
        "productcategory":replacing.biscuitdet.productcategory,
        "productbrand":replacing.biscuitdet.productbrand,
        "productname":replacing.biscuitdet.productname,
        "productprice":replacing.biscuitdet.productprice,
        "productoffer":replacing.biscuitdet.productoffer,
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
        <h1 className="text-center">product DETAILS</h1>
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <div className="form-group">
                        <label className="form-label">Enter your productcount:</label>
                        <input
                        placeholder="Enter your productcount:"
                        type="number"
                        name="productcount"
                        onChange={track}
                        value={values.productcount}
                        className="form-contorl"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Enter your productcategory:</label>
                        <input
                        placeholder="Enter your productcategory"
                        type="text"
                        name="productcategory"
                        onChange={track}
                        value={values.productcategory}
                        className="form-contorl"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Enter your productbrand</label>
                        <input
                        placeholder="Enter productbrand"
                        type="text"
                        name="productbrand"
                        onChange={track}
                        value={values.productbrand}
                        className="form-contorl"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Enter your productname</label>
                        <input
                        placeholder="Enter productname"
                        type="text"
                        name="productname"
                        onChange={track}
                        value={values.productname}
                        className="form-contorl"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Enter your productprice</label>
                        <input
                        placeholder="Enter productprice"
                        type="text"
                        name="productprice"
                        onChange={track}
                        value={values.productprice}
                        className="form-contorl"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Enter your productoffer</label>
                        <input
                        placeholder="Enter productoofer"
                        type="text"
                        name="productoffer"
                        onChange={track}
                        value={values.productoffer}
                        className="form-contorl"
                        />
                    </div>
                    <div className="row justify-content-center mt-5">
                    <button className="btn btn-outline-success col-5 me-3"onClick={updating1}>SUBMIT</button>
                    <button className="btn btn-outline-danger col-5 me-3">CANCEL</button>

                    </div>
                </div>
            </div>
        </div>
        </>
    );
}