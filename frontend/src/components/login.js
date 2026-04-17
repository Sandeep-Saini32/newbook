import { useContext, useState } from "react"
import { Usercontext } from "./context"
import { Link, useNavigate} from "react-router-dom"
import Swal from "sweetalert2"
export const Login=()=>{

const [loginemail,setloginemail]=useState("")
const [loginpass,setloginpass]=useState("")

const navigate=useNavigate()

const{setusertype,setid}=useContext(Usercontext)

const check=async(e)=>{
    e.preventDefault()

const logindata={loginemail,loginpass}

const save=await fetch("https://newbook-fd60.onrender.com/api/loginpage",{
method:"post",
body:JSON.stringify(logindata),
headers:{
    "content-type":"application/json;charset=UTF-8"
}

})

if(save.ok){
    const sv= await save.json()
if(sv.statuscode===1){
 
    localStorage.setItem("realname",sv.name)
Swal.fire({
  title: 'Login successfully',
  text: `Welcome ${sv.name}`,
  icon: 'success',
  confirmButtonText: 'Okay'
})


localStorage.setItem("adminemail",sv.email)
    setusertype(sv.role)
    setid(sv.id)

    if(sv.role=="admin"){
        navigate("/admindash")
    }
    else{
        navigate("/")
    }

  localStorage.setItem("userid", sv.id)
setusertype(sv.role)
  setid(sv.id)

  localStorage.setItem("role",sv.role)



}
else{
    // alert("incorect info")

    Swal.fire({
  title: 'Error',
  text: 'please enter correct details',
  icon: 'error',
  confirmButtonText: 'Okay'
})
}

}

else{
    // alert("error")
    Swal.fire({
  title: 'Error',
  text: 'Wrong info',
  icon: 'error',
  confirmButtonText: 'Okay'
})

}

}




return(
<>

                 <section class="s-page-title">
            <div class="container">
                <div class="content">
                    <h1 class="title-page">Login</h1>
                    <ul class="breadcrumbs-page">
                        <li><Link to="/" class="h6 link">Home</Link></li>
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
                        <h1 class="heading">Login</h1>
                        <form class="form-login" onSubmit={check}>
                            <div class="list-ver">
                               
                                    <input type="text" onChange={(e)=>setloginemail(e.target.value)} placeholder="Enter your email address *" required=""/>
                            
                                <fieldset class="password-wrapper mb-8">
                                    <input class="password-field" type="password" onChange={(e)=>setloginpass(e.target.value)} placeholder="Password *" required=""/>
                                    <span class="toggle-pass icon-show-password"></span>
                                </fieldset>
                                <div class="check-bottom">
                                    <div class="checkbox-wrap">
                                        <input id="remember" type="checkbox" class="tf-check"/>
                                        <label for="remember" class="h6">Keep me signed in</label>
                                    </div>
                                    <h6>
                                        <a href="#" class="link">
                                            Forgot your password?
                                        </a>
                                    </h6>
                                </div>
                            </div>
                           
                            <button  type="submit" class="tf-btn animate-btn w-100" >
                                Login
                            </button>
                        </form>
                    </div>
                    <div class="col-right">
                        <h1 class="heading">New Customer</h1>
                        <p class="h6 text-sub">
                            For customers who register a new account, we are offering you a $50 shopping voucher and a 30% discount code. Happy
                            shopping!
                        </p>
                        <div class="get-discout-wrap">
                            <h6 class="fw-semibold mb-16">Sign up and get your discount code</h6>
                            <div class="box-discount style-2">
                                <div class="discount-top">
                                    <div class="discount-off">
                                        <p class="h6">Discount</p>
                                        <h6 class="sale-off h6 fw-bold">30% OFF</h6>
                                    </div>
                                    <div class="discount-from">
                                        <p class="h6">
                                            For all orders <br class="d-sm-none"/> form $150
                                        </p>
                                    </div>
                                </div>
                                <div class="discount-bot">
                                    <h6 class="text-nowrap fw-bold">Code: ********</h6>
                                    <a href="signup" class="tf-btn animate-btn w-100 fw-bold">
                                        Register
                                    </a>
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