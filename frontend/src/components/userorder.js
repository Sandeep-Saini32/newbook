import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export const Userorder=()=>{

const [orderinfo,setorderinfo]=useState([])

useEffect(()=>{

gett()


},[])

const gett=async()=>{

const result=await fetch("https://newbook-fd60.onrender.com0/api/getorderinfo",{

method:"Get"

})

if(result){
    const res=await result.json()

    if(res.statuscode===1){
        // alert("userorder fetched")
        setorderinfo(res.alldata)
    }
    else{
        // alert("userorder not fetched")
    }
}
else{
    // alert("userorder error")
}

}



return(
<>


<div className="admin">

      <section class="s-page-title">
                <div class="container">
                    <div class="content">
                        <h1 class="title-page">Orders placed by Customers</h1>
                        <ul class="breadcrumbs-page">

                            <Link to={"/admindash"}>
                             <li><a href="index.html" class="h6 link">Dashboard</a></li>
                            </Link>
                           
                            <li class="d-flex"><i class="icon icon-caret-right"></i></li>
                            <li>
                             <Link to="usercustmores"> <h6 class="current-page fw-normal">Customees</h6></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

 <div className="container">
<div className="table-responsive">
    <table className="table table-bordered table-striped table-hover">
    
    <thead className="table-dark">
    <tr style={{color:"white"}}>
           <th><h4>S.No.</h4></th>
        <th><h4>Orderid</h4></th>
       <th><h4>Products</h4></th>
        <th><h4>Quantity</h4></th>
       <th><h4>Total Amount</h4></th>
       <th className="d-none d-md-table-cell"><h4>cust.Name</h4></th>
       <th className="d-none d-md-table-cell"><h4>cust.Email</h4></th>
       <th className="d-none d-md-table-cell"><h4>cust.Phone no.</h4></th>
       <th><h4>Payment type</h4></th>
   
     
    </tr>
</thead>

<tbody>
{
    orderinfo.map((a,index)=>

         <tr key={index}> 
         <td>{index+1}</td>

<td>
   
    {a.ordernumber}
</td>




<td>
 
 {a.items.map((item,i)=>(
<div key={i}>
    {item.pname}
</div>

 ))}
</td>

<td>
  {a.items.map((item,i)=>(
<div key={item._id}>
    {item.tqnt}
</div>

 ))}
</td>


<td>
    <b>
${Number(a.finaltotal).toLocaleString("en-Us")}
    </b>
</td>

<td className="d-none d-md-table-cell">
  {a.firstname}
</td>

<td className="d-none d-md-table-cell">
    {a.email}
</td>

<td className="d-none d-md-table-cell">
    {a.phone}
</td>

<td>
    <b>
    {a.paytype}
    </b>
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