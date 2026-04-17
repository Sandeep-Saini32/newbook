

import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export const Customerdata=()=>{


const [data,setdata]=useState([])

useEffect(()=>{

gett()


},[])

const gett=async()=>{

const result=await fetch("https://newbook-fd60.onrender.com0/api/getuserdata",{

method:"Get"

})

if(result){
    const res=await result.json()

    if(res.statuscode===1){
        // alert("userdata fetched")
        setdata(res.alldata)
    }
    else{
        alert("userdat not fetched")
    }
}
else{alert("userdata error")
}

}


// for change userType
const changeusertype=async(id,currenttype)=>{


const newtype=currenttype==="admin"?"user":"admin"
const  result=await fetch(`https://newbook-fd60.onrender.com0/api/usertype/${id}`,{
method:"Put",
body:JSON.stringify({userType:newtype}),
headers:{
    "content-type":"application/json;charset=UTF-8"
}


})

if(result.ok){

    const res=await result.json()

    if(res.statuscode===1){
        alert("usertype updated")
        gett()
    }

    else{
        alert("usertype not changed")
    }
}
else{
    alert("usertype error")
}



}



return(

<>

<div className="admin">

     <section class="s-page-title">
                <div class="container">
                    <div class="content">
                        <h1 class="title-page">Customres & Admin information</h1>
                        <ul class="breadcrumbs-page">
                            <li><a href="index.html" class="h6 link">Home</a></li>
                            <li class="d-flex"><i class="icon icon-caret-right"></i></li>
                            <li>
                             <Link to="userorder"> <h6 class="current-page fw-normal">Orders</h6></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>


 <div className="container">
 <div className="table-responsive">

<table className="table table-bordered table-striped table-hover">

    <thead className="table-dark">
    <tr>
           <th><h4>S.No.</h4></th>
        <th><h4>Name</h4></th>
        <th><h4>Email</h4></th>
        <th><h4>Phone</h4></th>
        <th><h4>User type</h4></th>
        <th><h4>Change User type</h4></th>
     
    </tr>
</thead>

<tbody>
{
    data.map((a,index)=>

         <tr key={index}> 
         <td>{index+1}</td>

<td>
   
    {a.name}


</td>

<td>
 
    {a.email}
</td>

<td>
   {a.phone}
    

</td>

<td>
    {a.userType}
</td>

<td>

<button onClick={()=>changeusertype(a._id,a.userType)}>Changeusertype</button>

</td>

</tr> 
    
    )
}
</tbody>

</table>
</div>

</div>
</div> 


</>
    
)


}