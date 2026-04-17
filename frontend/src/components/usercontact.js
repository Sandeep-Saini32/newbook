import { useEffect, useState } from "react"

export const Usercontact=()=>{


const[review,setreview]=useState([])

useEffect (()=>{

reviewget()


})

const reviewget=async()=>{

const answer=await fetch("https://newbook-fd60.onrender.com0/api/getreview",{

method:"Get",

})

if(answer){

    const ans=await answer.json()

    if(ans.statuscode===1){
        // alert("review fetched")
        setreview(ans.alldata)
    }

    else{
        alert("review not fetched")
    }

}
else{
    alert("review error")
}


}

return(
<>
<h1>Custmore Reviews</h1>

<div>

<table>
{

review.map((a,index)=>

<tr key={index}>

<td>
    <h3>name</h3>
{a.cname}</td>

<td>
    <h3>email</h3>
    email:{a.cemail}</td>

<td>
    <h3>Message</h3>
    {a.cmessage}</td>

</tr>

)}

</table>


</div>

</>



)



}