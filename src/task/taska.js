let Biscuitsdetails=[
    {
        "bisno":1,
        "bisname":"Milk bikis",
        "bismrp":"rs:10",
        "bisquantity":15,
    },
    {
        "bisno":2,
        "bisname":"Oreo",
        "bismrp":"rs:10",
        "bisquantity":6,
    },
    {
        "bisno":3,
        "bisname":"parleji",
        "bismrp":"rs:3",
        "bisquantity":10,
    }
]
export let creation=(Biscuitsdetails1)=>
{
 Biscuitsdetails.push(Biscuitsdetails1);
}
export let list=()=>
{
    return Biscuitsdetails
}
export let Reading1=(index)=>
{
    return Biscuitsdetails[index];
}
export let Fetchingvalues1=(name)=>
{
    const temp=Biscuitsdetails.filter((data)=>
    {
        return data.bisname===name;
    })
    return temp[0];
}
export const altervalues1=(newvalues,index)=>
{
    Biscuitsdetails[index]=newvalues;//biscuitdetails[3]=newbiscuitdetails;
}
export const removing1=(ind)=>
{
    const ques=prompt(" if you want delete your value yes/no")
    if(ques==="yes")
    {
        Biscuitsdetails=Biscuitsdetails.filter((data,pos)=>
        {
            return pos!==ind;
        })
        return Biscuitsdetails;
    }
    else if(ques==="no")
    {
        alert("your value is deleted")
        return Biscuitsdetails;
    }
    else {
        alert("Do what is given")
    }
}