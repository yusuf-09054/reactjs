export const Updatepage=(replacing)=>
{
    const[pos,setPos]=useState(replacing.who);
    const[myvalues,setMyvalues]=useState({
        "stuid":replacing.studentdet.stuid,
        "stuname":replacing.studentdet.stuname,
        "studob":replacing.studentdet.studob,
    })
    const track=(datas)=>
    {
        const{name,value}=datas.target
        setMyvalues((getting)=>
        {
          return{
           ...getting,
           [name]:value
          }
        })
    }
    const updating=()=>
    {
        altervalues(myvalues,pos);
        alert(" your values is updated successfully");
        alert(JSON.stringify(myvalues));
    }
    return(
        <>
        <div className="container text-center">
            <div className="row justify-content-center">
            <h1 className="text-center">REGISTRATION FORM</h1>
                <div className="col-lg-8 col-md-10 col-sm-12">
                    <div className="form-group mt-2">
                        <label className="form-label">Enter your register no:</label>
                        <input
                        placeholder="Enter your regno"
                        type="number"
                        name="stuid"
                        onChange={track}
                        value={myvalues.stuid}
                        className="form-contorl"
                        />
                    </div>
                    <div className="form-group mt-2">
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
                    <div className="form-group mt-2">
                        <label className="form-label">Enter your DOB:</label>
                        <input
                        placeholder="Enter your DOB"
                        type="text"
                        name="studob"
                        onChange={track}
                        value={myvalues.studob}
                        className="form-contorl"
                        />
                    </div>
                    <div className="row justify-content-center mt-5">
                    <button className="btn btn-outline-success col-5 me-3"onClick={register}>UPDATE</button>
                    <button className="btn btn-outline-danger col-5 me-3">CANCEL</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}