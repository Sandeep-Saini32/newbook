import { useContext, useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Usercontext } from "./context"
import Swal from "sweetalert2"

export const Invoice = () => {


    const [savecheckout, setcheckout] = useState([])

    const [firstname, setfirstname] = useState("")
    const[lastname,setlastname]=useState("")
    const[email,setemail]=useState("")
    const[phone,setphone]=useState("")

    const[region,setregion]=useState("")

    const[town,settown]=useState("")
    const[street,setstreet]=useState("")
    const[code,setcode]=useState("")
    const[note,setnote]=useState("")

    const[pname,setpname]=useState("")

    const [params] = useSearchParams()
const[ordernumber,setordernumber]=useState("")
const[finaltotal,setfinaltotal]=useState("")
const[Date,setdate]=useState("")
   
const id = params.get("id")

    // const {userid} =useContext(Usercontext)

    useEffect(() => {
        savecheckget()
    }, [])

    const savecheckget = async () => {

        const savecheck = await fetch(`https://newbook-fd60.onrender.com/api/savecheckout/${id}`, {

            method: "Get"


        })

        if (savecheck) {
            const check = await savecheck.json()
            
            if (check.statuscode === 1) {
               Swal.fire({
                 title: 'order',
                 text: 'Your Order is Confirmed',
                 icon: 'success',
                 confirmButtonText: 'Okay'
               })
                
                
                setfirstname(check.allcheckdata.firstname)
                setemail(check.allcheckdata.email)
                setlastname(check.allcheckdata.lastname)
                setphone(check.allcheckdata.phone)
                setregion(check.allcheckdata.region)
                settown(check.allcheckdata.town)
                setstreet(check.allcheckdata.street)
                setcode(check.allcheckdata.code)
                setnote(check.allcheckdata.note)

                setpname(check.allcheckdata.pname)
                setordernumber(check.allcheckdata.ordernumber)
                 
                setfinaltotal(check.allcheckdata.finaltotal)
                setdate(check.allcheckdata.timestamp)

            }
            else {
                // alert("savecheckdata not fetched")
            }

        }
        else {
            // alert("savecheckdata  error")
        }

    }



    // useEffect(()=>{

    // if(id){

    //     fetch(`https://newbook-fd60.onrender.com/api/savecheckout/${id}`)
    //     .then(res=> res.json())
    // .then(result=>{
    //     if(result.statuscode===1)
    //         setcheckout(result.data)
    // })

    // }


    // },[id])

    return (
        <>



            <div class="wrapper-invoice p-0">
                <div class="s-invoice">
                    <div class="container">
                        <p class="heading h1 text-black fw-medium text-center">Ochaka. Invoice</p>
                        <div class="wg-invoice">
                            <div class="invoice-head">
                                <h2 class="invoice_number"> {ordernumber}</h2>
                                {/* <a href="#"  */}
                                < a  class="invoice_download-btn tf-btn style-line">
                                    Download
                                    <i class="icon icon-download"></i>
                                </a>
                            </div>


                            <div class="invoice-info">
                                <div class="invoice-info_item invoice-info_date">
                                    <h5 class="invoice_label fw-semibold">Invoice date:</h5>
                                    <p class="invoice_value h6 ">
                                        {Date && Date.split("T",)[0]+"  "+Date.split("T")[1].split(".")[0]}
                                         {/* {Date && Date.replace("T"," ").split(" ,")[0]} */}
                                    
                                    {/* {new Date(Date).toLocalString("en-IN",{
                                        day:"2-digit",
                                        month:"2-digit",
                                        year:"numeric",
                                        minute:"2-digit",
                                        hour12:true,
                                         })}
                                     */}
                                    
                                    </p>

                                </div>
                                
                                <div class="invoice-info_item">
                                    <h5 class="invoice_label fw-semibold">Supplier:</h5>
                                    <p class="invoice_value h6">
                                        <span class="fw-medium text-black">

                                            Themesflat LLC
                                        </span>
                                        8500 Lorem Street Chicago, IL 55030 Dolor sit amet
                                    </p>
                                </div>
                                <div class="invoice-info_item">
                                    <h5 class="invoice_label fw-semibold">Consumer Address:</h5>
                                    <p class="invoice_value h6">
                                        <span class="fw-medium text-black">
                                            {firstname}
                                           {lastname}
                                        <br/> {email}
                                         <br/>{street},
                                         <br/>  {town},
                                           {region},
                                           {code}
                                         
                                         <br/>Note:  {note}
                                        </span>
                                        {/* 2972 Westheimer Rd. Santa Ana, Illinois 85486 */}
                                    </p>
                                </div>
                            </div>
                            <div class="overflow-auto">
                                <table class="invoice-table">
                                    <tbody>
                                        <tr>
                                            
                                            <th>Total</th>
                                        </tr>
                                    </tbody>
                                    {/* <tbody> */}
                                   
                                    <tr>
                                        <td class="h6 invoice__desc fw-semibold">Total Due</td>
                                        {/* <td></td>
                                        <td></td> */}
                                        <td class="h6 invoice__amount fw-semibold text-primary">${Number(finaltotal).toLocaleString("en-Us")}</td>
                                    </tr>

                                    
                                    {/* </tbody> */}

                                </table>
                            </div>

                            <ul class="invoice-social">
                                <li>
                                    <a href="index.html" class="invoice_link link h6">
                                        <i class="icon icon-global"></i>
                                        www.ochaka.com
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+88001234567" class="invoice_link link h6">
                                        <i class="icon icon-phone"></i>
                                        +8(800) 123 4567
                                    </a>
                                </li>
                                <li>
                                    <a href="mailto:themesflat@support.com" class="invoice_link link h6">
                                        <i class="icon icon-envelope-simple"></i>
                                        themesflat@support.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
              </div>

       

        </>

    )


}