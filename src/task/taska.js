let Biscuitsdetails=[
    {
        "productcount":101,
    "productcategory":"Biscuit",
    "productbrand":"Britania",
    "productname":"Milk Bikis",
    "productprice":30,
    "productoffer":0,
    },
    {
        "productcount":102,
    "productcategory":"Chocolate",
    "productbrand":"Cadbury",
    "productname":"Dairy Milk",
    "productprice":80,
    "productoffer":0,  
 },
    {
        "productcount":103,
        "productcategory":"Juice",
        "productbrand":"AVT",
        "productname":"Mazaa",
        "productprice":40,
        "productoffer":0,
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
        return data.productname===name;
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