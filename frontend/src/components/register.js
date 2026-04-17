import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'

export const Register=()=>{

   const naviagte=useNavigate() 

const [email,setemail]=useState("")
const [pass ,setpass]=useState("")
const [name,setname]=useState("")
const [phone ,setphone]=useState("")


const add=async(e)=>{
    e.preventDefault()



const data={email,pass,name,phone}

const show=await fetch("https://newbook-fd60.onrender.com/api/signup",{

    method:"post",
    body:JSON.stringify(data),
    headers:{
        "content-type":"application/json;charset=utf-8"
    }
})

if(show.ok){
    const sh=await show.json()
    if(sh.statuscode===1){
  Swal.fire({
  title: 'Registration',
  text: 'Your Registration has been done',
  icon: 'success',
  confirmButtonText: 'Okay'
})
  naviagte("/login")

    }
    else{
        alert("data not stored")
    }

}
else{
    alert("error")
}

}





return(
    <>
    
     <section class="s-page-title">
            <div class="container">
                <div class="content">
                    <h1 class="title-page">Registeration</h1>
                    <ul class="breadcrumbs-page">
                        <li><Link to="/">Home</Link></li>
                        <li class="d-flex"><i class="icon icon-caret-right"></i></li>
                        <li>
                            <h6 class="current-page fw-normal">Login</h6>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
      
        <section class="flat-spacing">
            <div class="container">
                <div class="s-log">
                    <div class="col-left">
                        <h1 class="heading">Register</h1>
                        <form class="form-login"onSubmit={add}>
                            <div class="list-ver">
                                <fieldset>
                                    <input type="text"onChange={(e)=>setname(e.target.value)} placeholder="Enter your Name *" required=""/>
                                </fieldset>
                               
                                <fieldset>
                                    <input type="text"onChange={(e)=>setemail(e.target.value)} placeholder="Enter your Email address *" required=""/>
                                </fieldset>
                                <fieldset class="password-wrapper">
                                    <input class="password-field"  type="password"onChange={(e)=>setpass(e.target.value)} placeholder="Password *" required=""/>
                                    <span class="toggle-pass icon-show-password"></span>
                                </fieldset>
                                <fieldset class="password-wrapper">
                                    <input class="password-field" type="password" placeholder="Confirm Password *" required=""/>
                                    <span class="toggle-pass icon-show-password"></span>
                                </fieldset>

                                 <fieldset>
                                    <input type="number"onChange={(e)=>setphone(e.target.value)} placeholder="Enter your Phone no. *" required=""/>
                                </fieldset>
                            
                            </div>
                           
                            <button type="submit" class="tf-btn animate-btn w-100" >
                                Register
                            </button>
                        </form>
                    </div>
                    <div class="col-right">
                        <h1 class="heading">Have An Account</h1>
                        <p class="h6 text-sub">
                            Welcome back, log in to your account to enhance your shopping experience, receive coupons, and the best discount codes.
                        </p>
                        <a href="login" class="btn_log tf-btn animate-btn">
                            Login
                        </a>
                    </div>
                </div>
            </div>
        </section>
    
    </>
)
}