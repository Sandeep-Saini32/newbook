import { useContext, useEffect, useState } from "react"
import { Link, useLocation, useSearchParams } from "react-router-dom"
import { Usercontext } from "./context"

export const Checkout=()=>{


    // for getting products in checkout
  
    const location=useLocation()
   const {finaltotal,discount}=location.state||{}



    
   const[savecart,setsavecart]=useState([])
   const[ordernumber,setordernumber]=useState("")

const [params]=useSearchParams()

const id=params.get("id")

const {userid}=useContext(Usercontext)

useEffect(()=>{
    cartget()
    orderid()
},[])



const cartget=async()=>{

    const savecart= await fetch(`http://localhost:9000/api/savecart/${id}`,{

method:"GET"

  })

if(savecart){

const sct=await savecart.json()

if(sct.statuscode===1){
    alert("savecart fetched")
    setsavecart(sct.allcartdata)

}

else{
    alert("savecart  not fetched")
}

}

else{
    alert("savecart error")
}


}

// for adding details in checkout & saving in invoice

const[firstname,setfirstname]=useState("")
const[lastname,setlastname]=useState("")
const[email,setemail]=useState("")
const[phone,setphone]=useState("")

const[region,setregion]=useState("")

const[town,settown]=useState("")
const[street,setstreet]=useState("")



const[code,setcode]=useState("")
const[note,setnote]=useState("")

const[paytype,setpaytype]=useState("")


const checkadded=async()=>{


    const items=savecart.map(item=>({

pname:item.name,
tprice:item.price,
tqnt:item.qnt

}))


 const checkdata= {userid,firstname,lastname,email,phone,
                 region,town,street,code,note,cartdata:items,finaltotal,ordernumber,paytype}


                //  alert(savecart.productname)
const result=await fetch(`http://localhost:9000/api/checkout/${id}`,{
method:"Post",
body:JSON.stringify(checkdata),

headers:{
    "content-type":"application/json;charset=UTF-8"
}

})


if(result.ok){
const res=await result.json()

if(res.statuscode===1){
    alert("checkout data stored")
 }
else{
    alert("checkout daTa not stored")
}
}
else{
    alert("checkout error")
}


}


const orderid=()=>{

 let a=   Math.random()*10000

 a=Math.floor(a)

 setordernumber("OID#"+a)

}

// const payment=async()=>{
//     const res=await fetch("/checkout",{
// method:"Post",
// headers:{
//     "Content-Type":"application/json;charset=UTF-8"
// },
// body:JSON.stringify({
//     userid:userid
// })

//     })
//   const data=await res.json()
  
//  if(data.statuscode===1){
//     alert("order placed successfully")
//  } 


// }



return(

<>

 <section class="s-page-title">
            <div class="container">
                <div class="content">
                    <h1 class="title-page">Checkout</h1>
                    <ul class="breadcrumbs-page">
                        <li><Link to="/">Home</Link></li>
                        <li class="d-flex"><i class="icon icon-caret-right"></i></li>
                        <li>
                           <h6 class="current-page fw-normal">Checkout </h6>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        {/* <!-- /Page Title -->
        <!-- Check Out --> */}
        <section class="flat-spacing">
            <div class="container">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="tf-page-checkout mb-lg-0">
                            <div class="wrap-coupon">
                                <h5 class="mb-12">Have a coupon? <span class="text-primary">Enter your code</span></h5>
                                <form>
                                    <div class="ip-discount-code mb-0">
                                        <input type="text" placeholder="Enter your code" required=""/>
                                        <button class="tf-btn animate-btn" type="submit">
                                            Apply Code
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <form class="tf-checkout-cart-main">
                                <div class="box-ip-checkout estimate-shipping">
                                    <h2 class="title type-semibold">Infomation</h2>
                                    <div class="form_content">
                                        <div class="cols tf-grid-layout sm-col-2">
                                            <fieldset>
                                                <input type="text" name="first-name_infor" placeholder="First name" onChange={(e)=>setfirstname(e.target.value)} required=""/>
                                            </fieldset>
                                            <fieldset>
                                                <input type="text" name="last-name_infor" placeholder="Last name"  onChange={(e)=>setlastname(e.target.value)}required=""/>
                                            </fieldset>
                                        </div>
                                        <div class="cols tf-grid-layout sm-col-2">
                                            <fieldset>
                                                <input type="email" name="email_infor" placeholder="Email address" onChange={(e)=>setemail(e.target.value)} required=""/>
                                            </fieldset>
                                            <fieldset>
                                                <input type="number" name="phone_infor" placeholder="Phone number"  onChange={(e)=>setphone(e.target.value)}required=""/>
                                            </fieldset>
                                        </div>
                                        <fieldset>
                                            <div class="tf-select"  onChange={(e)=>setregion(e.target.value)}>
                                                <select class="w-100" id="shipping-country-form" name="address[country]" data-default="">
                                                    <option selected="" disabled="" value=""> Choose country / Region</option>
                                                    <option value="Australia" data-provinces='[["Australian Capital Territory","Australian Capital Territory"],["New South Wales","New South Wales"],["Northern Territory","Northern Territory"],["Queensland","Queensland"],["South Australia","South Australia"],["Tasmania","Tasmania"],["Victoria","Victoria"],["Western Australia","Western Australia"]]'>
                                                        Australia</option>
                                                    <option value="Austria" data-provinces='[]'>Austria</option>
                                                    <option value="Belgium" data-provinces='[]'>Belgium</option>
                                                    <option value="Canada" data-provinces='[["Ontario","Ontario"],["Quebec","Quebec"]]'>Canada
                                                    </option>
                                                    <option value="Czech Republic" data-provinces='[]'>Czechia</option>
                                                    <option value="Denmark" data-provinces='[]'>Denmark</option>
                                                    <option value="Finland" data-provinces='[]'>Finland</option>
                                                    <option value="France" data-provinces='[]'>France</option>
                                                    <option value="Germany" data-provinces='[]'>Germany</option>
                                                    <option value="United States" data-provinces='[["Alabama","Alabama"],["California","California"],["Florida","Florida"]]'>
                                                        United States</option>
                                                    <option value="United Kingdom" data-provinces='[["England","England"],["Scotland","Scotland"],["Wales","Wales"],["Northern Ireland","Northern Ireland"]]'>
                                                        United Kingdom</option>
                                                    <option value="India" data-provinces='[]'>India</option>
                                                    <option value="Japan" data-provinces='[]'>Japan</option>
                                                    <option value="Mexico" data-provinces='[]'>Mexico</option>
                                                    <option value="South Korea" data-provinces='[]'>South Korea</option>
                                                    <option value="Spain" data-provinces='[]'>Spain</option>
                                                    <option value="Italy" data-provinces='[]'>Italy</option>
                                                    <option value="Vietnam" data-provinces='[["Ha Noi","Ha Noi"],["Da Nang","Da Nang"],["Ho Chi Minh","Ho Chi Minh"]]'>
                                                        Vietnam</option>
                                                </select>
                                            </div>
                                        </fieldset>
                                        <div class="cols tf-grid-layout sm-col-2">
                                            <fieldset>
                                                <input type="text" name="city_infor" placeholder="Town/City" onChange={(e)=>settown(e.target.value)} required=""/>
                                            </fieldset>
                                            <fieldset>
                                                <input type="text" name="street_infor" placeholder="Street" onChange={(e)=>setstreet(e.target.value)} required=""/>
                                            </fieldset>
                                        </div>
                                        <div class="cols tf-grid-layout sm-col-2">
                                           
                                            <fieldset>
                                                <input type="number" name="number_card" placeholder="Postal code" onChange={(e)=>setcode(e.target.value)} required=""/>
                                            </fieldset>
                                        </div>
                                        <textarea placeholder="Note about your order" style={{height: "180px;"}}  onChange={(e)=>setnote(e.target.value)}></textarea>
                                    </div>
                                </div>
                                <div class="box-ip-payment">
                                    <h2 class="title type-semibold">Choose Payment Option</h2>
                                    <div class="payment-method-box" id="payment-method-box">
                                        {/* <div class="payment_accordion">
                                            <label for="direct" class="payment_check checkbox-wrap " data-bs-toggle="collapse" data-bs-target="#direct-bank" aria-controls="direct-bank">
                                                <input type="radio" name="payment-method" class="tf-check-rounded style-2" id="direct" checked=""/>
                                                <span class="pay-title">Direct bank transfer</span>
                                            </label>
                                            <div id="direct-bank" class=" collapse show" data-bs-parent="#payment-method-box">
                                                <p class="payment_body h6">
                                                    Make your payment directly into our bank account. Please use your Order ID as the payment
                                                    reference.
                                                    Your order will not be shipped until the funds have cleared in our account.
                                                </p>
                                            </div>
                                        </div> */}
                                        <div class="payment_accordion">
                                            <label for="credit-card" class="payment_check checkbox-wrap" data-bs-toggle="collapse" data-bs-target="#credit-card-payment" aria-controls="credit-card-payment">
                                                <input type="radio" name="payment-method"value={"Credit Card"} class="tf-check-rounded style-2" id="credit-card" onChange={(e)=>setpaytype(e.target.value)}/>
                                                <span class="pay-title">Credit card</span>
                                            </label>
                                            {/* <div id="credit-card-payment" class="collapse" data-bs-parent="#payment-method-box">
                                                <div class="payment_body form_content">
                                                    <fieldset>
                                                        <input type="text" placeholder="Name on card"/>
                                                    </fieldset>
                                                    <fieldset class="ip-card">
                                                        <input type="number" placeholder="Card numbers"/>
                                                        <div class="card-logo">
                                                            <img src="images/payment/visa-pay.svg" alt="Payment Logo"/>
                                                            <img src="images/payment/master-pay.svg" alt="Payment Logo"/>
                                                            <img src="images/payment/amex-pay.svg" alt="Payment Logo"/>
                                                        </div>
                                                    </fieldset>
                                                    <div class="cols tf-grid-layout sm-col-2">
                                                        <fieldset>
                                                            <input type="date"/>
                                                        </fieldset>
                                                        <fieldset>
                                                            <input type="number" placeholder="Postal code"/>
                                                        </fieldset>
                                                    </div>
                                                    <div class="checkbox-wrap">
                                                        <input id="save" type="checkbox" class="tf-check style-2"/>
                                                        <label for="save" class="h6">Save card details</label>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                        <div class="payment_accordion">
                                            <label for="cash-on" class="payment_check checkbox-wrap" data-bs-toggle="collapse" data-bs-target="#cash-on-payment" aria-controls="cash-on-payment">
                                                <input type="radio" name="payment-method" value={"COD"} class="tf-check-rounded style-2" id="cash-on"onChange={(e)=>setpaytype(e.target.value)}/>
                                                <span class="pay-title">Cash On Delivery</span>
                                            </label>
                                            <div id="cash-on-payment" class="collapse" data-bs-parent="#payment-method-box"></div>
                                        </div>
                                        <div class="payment_accordion">
                                            <label for="paypal" class="payment_check checkbox-wrap" data-bs-toggle="collapse" data-bs-target="#paypal-payment" aria-controls="paypal-payment">
                                                <input type="radio" name="payment-method" value={"Paypal"}class="tf-check-rounded style-2" id="paypal"onChange={(e)=>setpaytype(e.target.value)}/>
                                                <span class="pay-title">Paypal</span>
                                            </label>
                                            <div id="paypal-payment" class="collapse" data-bs-parent="#payment-method-box"></div>
                                        </div>
                                    </div>
                                    <p class="h6 mb-20">
                                        Your personal data will be used to process your order, support your experience throughout this website, and
                                        for
                                        other purposes described in our privacy policy.
                                    </p>
                                    <div class="checkbox-wrap">
                                        <input id="agree" type="checkbox" class="tf-check style-2"/>
                                        <label for="agree" class="h6">I have read and agree to the website <span class="text-primary">terms and
                                                conditions *</span></label>
                                    </div>
                                </div>
                                <div class="box-ip-shipping">
                                    <h2 class="title type-semibold">Shipping Method</h2>
                                    <label for="freeship" class="check-ship mb-12">
                                        <input type="radio" id="freeship" class="tf-check-rounded style-2 line-black" name="checkshipping" checked=""/>
                                        <span class="text h6">
                                            <span class="">Free shipping (Estimate in 01/05 - 05/05/2025)</span>
                                            <span class="price">$00.00</span>
                                        </span>
                                    </label>
                                    <label for="express" class="check-ship">
                                        <input type="radio" id="express" class="tf-check-rounded style-2 line-black" name="checkshipping"/>
                                        <span class="text h6">
                                            <span class="">Express shipping (Estimate in 01/05 - 05/05/2025)</span>
                                            <span class="price fw-medium">$5.00</span>
                                        </span>
                                    </label>
                                </div>
                                <div class="button_submit">
                                  
                                  <Link to={`/invoice/?id=${id}`}>
                                    <button type="submit" class="tf-btn animate-btn w-100" onClick={checkadded}  > 
                                        Payment
                                     </button>
                                      </Link>
                                 
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="fl-sidebar-cart sticky-top">
                            <div class="box-your-order">
                                <h2 class="title type-semibold">Your Order</h2>


                            {


savecart.map((a,index)=>
                                
                                 <ul class="list-order-product" key={index}>


                                    <li class="order-item">
                                        <a href="product-detail.html" class="img-prd">
                                           
                                            <img class="lazyload" src={`/uploads/${a.file}`} alt={a.name} style={{height:"100px", width:"100px"}} />
                                        </a>
                                        <div class="infor-prd">
                                            <h6 class="prd_name">
                                                <a href="product-detail.html" class="link">
                                                  <p>{a.name}</p>
                                                </a>
                                            </h6>
                                          
                                        </div>
                                        <p class="price-prd h6">
                                           <p>${Number(a.price * a.qnt).toLocaleString("en-Us")}</p>

                                          
                                        </p>
                                    </li>

                                </ul>


)}
                                <ul class="list-total">
                                    <li class="total-item h6">
                                        <span class="fw-bold text-black">Discounts</span>
                                        <span>${discount}</span>
                                    </li>
                                    <li class="total-item h6">
                                        <span class="fw-bold text-black">Shipping</span>
                                        <span>Free</span>
                                    </li>
                                </ul>
                                <div class="last-total h5 fw-medium text-black">
                                    <span>Total</span>
                                    <span>${Number(finaltotal).toLocaleString("en-Us")}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


</>



)

}