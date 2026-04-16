
import { useState } from "react"

export const Contact=()=>{

const [cname,setcname]=useState("")
const [cemail,setcemail]=useState("")
const [cmessage,setcmessage]=useState("")

const added =async()=>{
const cdata={cname,cemail,cmessage}

const result=await fetch("http://localhost:9000/api/contact",{

method:"post",
body:JSON.stringify(cdata),
headers:{

    "content-type":"application/json;charset=UTF-8"
}


})

if(result.ok){
    const reviewdata=await result.json()

    if(reviewdata.statuscode===1){
        alert("user review stored")
    }

    else{
        alert("review not stored")
    }
}
else{
    alert("review error")
}

}

return(
<>

    <section class="s-page-title">
            <div class="container">
                <div class="content">
                    <h1 class="title-page">Contact Us</h1>
                    <ul class="breadcrumbs-page">
                        <li><a href="index.html" class="h6 link">Home</a></li>
                        <li class="d-flex"><i class="icon icon-caret-right"></i></li>
                        <li>
                            <h6 class="current-page fw-normal">Contact Us</h6>
                        </li>
                    </ul>
                </div>
            </div>
        </section>

 <section class="s-contact-us flat-spacing">
            {/* <!-- Map --> */}
            <div class="wg-map d-flex">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7880.148272329334!2d151.20657421407668!3d-33.858885268389294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae682c546039%3A0x16da940d587922a1!2sCircular%20Quay!5e0!3m2!1sen!2s!4v1745205798630!5m2!1sen!2s" 
                style={{width:"100%", height:"461px",border:"0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            {/* <!-- /Map --> */}

            <div class="container">
                <div class="row">
                    <div class="col-xxl-5 offset-xxl-1 col-lg-6">
                        <div class="left-col mb-lg-0">
                            <h3 class="title fw-normal">Visit Our Store</h3>
                            <ul class="store-info-list">
                                <li>
                                    <p class="h6 text-black fw-medium">Address:</p>
                                    <a href="https://www.google.com/maps?q=8500+Lorem+Street+Chicago,+IL+55030+Dolor+sit+amet" target="_blank" class="link text-main">
                                        8500 Lorem Street Chicago, IL 55030 Dolor sit amet
                                    </a>
                                </li>
                                <li>
                                    <p class="h6 text-black fw-medium">Email:</p>
                                    <a href="mailto:themesflat@support.com" class="link text-main">themesflat@support.com</a>
                                </li>
                                <li>
                                    <p class="h6 text-black fw-medium">Phone:</p>
                                    <a href="tel:+88001234567" class="link text-main">+8(800) 123 4567</a>
                                </li>
                                <li>
                                    <p class="h6 text-black fw-medium">Opening Hour:</p>
                                    <p class="text-main">
                                       Mon - Fri: 8am to 4.30pm GST <br/>
                                        Sat: 9am to 3pm GST <br/>
                                        Sun: Close
                                    </p>
                                </li>
                            </ul>
                            
                            <ul class="tf-social-icon">
                                <li>
                                    <a href="https://www.facebook.com/" target="_blank" class="social-facebook">
                                        <span class="icon"><i class="icon-fb"></i></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/" target="_blank" class="social-instagram">
                                        <span class="icon"><i class="icon-instagram-logo"></i></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://x.com/" target="_blank" class="social-x">
                                        <span class="icon"><i class="icon-x"></i></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.tiktok.com/" target="_blank" class="social-tiktok">
                                        <span class="icon"><i class="icon-tiktok"></i></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-xl-5 col-lg-6">
                        <div class="right-col">
                            <h3 class="title fw-normal">Get In Touch</h3>
                            <p class="sub-title text-main-4">
                                Our one-to-one support is a big part of Vemus company. Contact us by phone or email to get help from our qualified
                                team.
                            </p>
                            <form class="form-contact style-border">
                                <div class="form-content">
                                    <div class="cols tf-grid-layout sm-col-2">
                                        <fieldset>
                                            <input id="name" type="text" placeholder="Name *" onChange={(e)=>setcname(e.target.value)} required=""/>
                                        </fieldset>
                                        <fieldset>
                                            <input id="email" type="email" placeholder="Email *" onChange={(e)=>setcemail(e.target.value)} required=""/>
                                        </fieldset>
                                    </div>
                                    <textarea id="desc" placeholder="Message" style={{height: "229px"}}onChange={(e)=>setcmessage(e.target.value)} required=""></textarea>
                                </div>
                                <div class="form_message text-center"></div>
                                <button type="submit" class="tf-btn btn-fill animate-btn w-100" onClick={added}>
                                    SEND
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </section>



</>
   
)



}
