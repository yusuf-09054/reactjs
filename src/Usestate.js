import"bootstrap/dist/css/bootstrap.min.css"
import"bootstrap-icons/font/bootstrap-icons.css"

import {useState} from 'react';
export let Hook1=()=>
{
    const[flowername,setFlowername]=useState("");

    const output=()=>
    {
        alert(" my favoriate flower name is : "+flowername);
    }
    const input=(temp)=>
    {
        setFlowername(temp.target.value);
    }
    return(
        <>  
            <div className="row justify-content-center">
                <input 
                className='form-control' 
                placeholder='place tell us your flower name' 
                onChange={input}/>
                <button className='btn btn-outline-center' onClick={output}>Click On</button>
            </div>
        </>
    );
}


export let Hook11=()=>
{
    const[no,setNo]=useState(0);
   
    return(
        <>
        <div className="row justify-content-center">
                <button className='btn btn-outline-center' 
                onClick={()=>
                {
                    setNo(no+1);
                }}>Addition</button>

                <button className='btn btn-outline-center' onClick={()=>
                {
                    setNo(no-1);
                }}>Subtraction</button>
                <span style={{textAlign:'center'}}>
                    How much time click your addition button{no}
                </span>
            </div>
        </>
    );
}