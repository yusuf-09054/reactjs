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
