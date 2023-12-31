import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"
import { creation } from "./Arrayvalues"
export let Registrationform=()=>

{
    //const[getvariable,setvariable]=usestate(initialization)
    const[myvalues,setmyvalues]=useState({
    "stuid":0,
    "stuname":"",
    "studob":"",
    })

    const track=(datas)=>
    {
        const{name,value}=datas.target
        setmyvalues((getting)=>
        {
          return{
           ...getting,
           [name]:value
          }
        })
    }

    const register=()=>
    {
        alert("SUCCESSFULLY REGISTERED"+JSON.stringify(myvalues))
        creation(myvalues)
        alert("your value is added successfully")
    }
    return(
        <>
        <div className="container text-center">
            <div className="row justify-content-center">
            <h1 className="text-center">STUDENT DETAILS</h1>
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <div className="form-group">
                        <label className="form-label">Enter your ID:</label>
                        <input
                        placeholder="Enter your fav biscuit no:"
                        type="number"
                        name="stuid"
                        onChange={track}
                        value={myvalues.stuid}
                        className="form-contorl"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Enter your name:</label>
                        <input
                        placeholder="Enter your name"
                        type="text"
                        name="stuname"
                        onChange={track}
                        value={myvalues.stuname}
                        className="form-contorl"
                        />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Enter DOB</label>
                        <input
                        placeholder="Enter Dob"
                        type="text"
                        name="studob"
                        onChange={track}
                        value={myvalues.studob}
                        className="form-contorl"
                        />
                    </div>
                    <div className="row justify-content-center mt-5">
                    <button className="btn btn-outline-success col-5 me-3"onClick={register}>SUBMIT</button>
                    <button className="btn btn-outline-danger col-5 me-3">CANCEL</button>

                    </div>
                </div>
            </div>
        </div>
        </>
    );
}