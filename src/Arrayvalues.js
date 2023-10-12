let studentdetails=[
    {
        "stuid":1001,
        "stuname":"YUSUF",
        "studob":"MAY 9"
    },
    {
        "stuid":1002,
        "stuname":"YOGI",
        "studob":"JAN 1"
    },
    {
        "stuid":1003,
        "stuname":"TEJA",
        "studob":"AUG 4"
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
export let reading=(index)=>
{
    return studentdetails[index];//studentdetails[1]
}