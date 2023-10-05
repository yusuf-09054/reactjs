import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import { useState } from "react";


export let Operator=()=>
{
    const[userinput,setuserinput]=useState("nothing");//summer,winter,spring

    const[output,setoutput]=useState("");//display the output

    const[change,setchange]=useState({backgroundcolor:"black"});
    const input=(temp)=>
    {
        setuserinput(temp.target.value);

    }

    const ternaryoperator=()=>
    {
        (userinput==="summer")?
        setchange({color:"yellow",textshadow:"5px 6px 10px"}):
        (userinput==="winter")?
        setchange({color:"skyblue",textshadow:"6px 7px 11px"}):
        (userinput==="spring")?
        setchange({color:"red",textshadow:"6px 7px 11px"}):

        setchange({backgroundcolor:"black"})

        setoutput(userinput);
    }

    return(
        <>
        <div className="row justify-content-center col-5">
            <input className="form-control" onChange={input}/>
            <button className="btn btn-outline-warning" onClick={ternaryoperator}>click me to show your fav seasons</button>
            <b style={change}>
                {output}
            </b>
        </div>
        </>
    );
}