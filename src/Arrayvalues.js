let studentdetails=[
    {
        "stuid":1001,
        "stuname":" YUSUF",
        "studob":"MAY 9"
    },
    {
        "stuid":1002,
        "stuname":"ANNAMALAI",
        "studob":"JUNE 10"
    },
    {
        "stuid":1003,
        "stuname":"TEJA",
        "studob":"AUG 3"
    },
]

export let creation=(studentdetails1)=>
{
    studentdetails.push(studentdetails1);
}

export let listing=()=>
{
    return studentdetails;
}
export let Reading=(index)=>
{
    return studentdetails[index];//studentdetails[1]
}
export let Fetchingvalues=(name)=>
{
    const temp=studentdetails.filter((data)=>
    {
        return data.stuname===name;
    })
    return temp[0];
}
export const altervalues=(newvalues,index)=>
{
    studentdetails[index]=newvalues;//studentdetails[3]=newstudentdetails;
}
export const removing=(ind)=>
{
    const ques=prompt("if you want to delete (yes/no)");

    if(ques==="yes")
    {
        studentdetails=studentdetails.filter((data,pos)=>
        {
            return pos!==ind;
            // 0!==2;
        })
        return studentdetails;
    }
    else if(ques==="no")
    {
        alert(" your value is not deleted in my database")
        return studentdetails;
    }
    else{
        alert("enna kekureno adhu mattu sollu da")
    }

}