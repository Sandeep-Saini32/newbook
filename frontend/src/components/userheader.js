
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'

export const Uheader=()=>{

const navigate=useNavigate()    
  const name=localStorage.getItem("realname")
  const [state,setstate]=useState(false)


  useEffect(()=>{
    getdata()
  })
  const getdata=()=>{
    if(name){
        setstate(false)

    }
    else{
        setstate(true)
    }
  }



//   const logout=()=>{
//     alert("logout")
//     localStorage.clear()
//     setstate(true)
// navigate("/login")
//   }

 const logout = () => {
  Swal.fire({
    title: "Are you sure?",
    text: "You want to logout!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Logout"
  }).then((result) => {

    if (result.isConfirmed) {
      // ✅ User clicked logout
      Swal.fire({
        title: "Logged out!",
        text: "You have been logged out.",
        icon: "success"
      }).then(() => {
        localStorage.clear();
        setstate(true);
        setstate("");
        navigate("/login");
      });

    } else {
 
      console.log("Logout cancelled");
    }

  });
};




    return(
        <>
          <div class="tf-topbar_slide bg-dark-olive-2">
            <div class="topbar-top tf-btn-swiper-main">
                <div class="container">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-sm-1 d-none d-sm-block">
                            <div class="text-white link-black d-flex justify-content-end nav-prev-swiper">
                                <i class="icon icon-caret-left"></i>
                            </div>
                        </div>
                        <div class="col-lg-4 col-sm-7 col-12">
                            <div dir="ltr" class="swiper tf-swiper" data-auto="true" data-loop="true" data-delay="2500">
                                <div class="swiper-wrapper">
                                  
                                    <div class="swiper-slide">
                                        <h6 class="text-white fw-normal text-center">Shopping day, 15% off all products</h6>
                                    </div>
                                    
                                    <div class="swiper-slide">
                                        <h6 class="text-white fw-normal text-center">Free shipping on orders of $50 or more</h6>
                                    </div>
                                  
                                    <div class="swiper-slide">
                                        <h6 class="text-white fw-normal text-center">Pick up in store: Ready in an hour</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-1 d-none d-sm-block">
                            <div class="text-white link-black d-flex nav-next-swiper">
                                <i class="icon icon-caret-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="tf-topbar type-space-3 line-bt sp-has_line_bt">
            <div class="container">
                <div class="row">
                    <div class="col-xl-3 col-lg-4 d-none d-lg-block">
                        <ul class="topbar-left topbar-option-list justify-content-start">
                          <Link to="faq">
                            <li class="h6">
                                <a href="faq.html" class="link">Help & FAQs</a>
                            </li>
                          </Link>
                            {/* <li class="br-line bg-line opacity-100"></li>
                            <Link to="about">
                            <li class="h6">
                                <a href="about-us.html" class="link track">About us</a>
                            </li>
                            </Link>
                            <li class="br-line bg-line opacity-100 d-none d-xxl-block"></li> */}
                         {/* <Link to="faq">
                            <li class="h6 d-none d-xxl-block">
                                <a href="faq.html" class="link track">FAQs</a>
                            </li>
                         </Link> */}
                        </ul>
                    </div>
                    <div class="col-xl-6 col-lg-8">
                        <div class="topbar-center justify-content-start justify-content-sm-center justify-content-lg-end justify-content-xl-center">
                            <h6 class="text-up fw-normal text-line-clamp-1">
                                Ochaka treasure trove of human knowledge
                            </h6>
                            <Link to={"shoppingpage"}>
                            <div class="group-btn text-nowrap">
                                <a href="shop-default.html" class="tf-btn-line">View All Books</a>
                            </div>
                            </Link>
                        </div>
                    </div>

 <div class="col-xl-3 col-md-4 col-3 ">
                     
                        <ul class="nav-icon-list">
                            <li class="d-none d-lg-flex gap-3">
                                   <p>Welcome </p>
                                    
                                     {
                                        state==true?
                                        <> </>
                                        :<>
                                         <h6> {name}</h6>


                                   <button onClick={logout}><i class= "fa-solid fa-arrow-right-from-bracket" style={{color: "black" ,fontSize:"22px"}}></i></button>
                                        </>
                                     }
                                 
                            
                            </li>
                         
                        </ul>
                        
                    </div>
                    

                    {/* 
                     */}
                </div>
            </div>
        </div>
    
        <header class="tf-header header-fix mb-12">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-4 col-3 d-xl-none">
                        <a href="#mobileMenu" data-bs-toggle="offcanvas" class="btn-mobile-menu">
                            <span></span>
                        </a>
                    </div>
                    <div class=" col-xl-5 d-none d-xl-block">
                        <nav class="box-navigation">
                            <ul class="box-nav-menu justify-content-start">
                                <li class="menu-item">
                                    <Link to="/" class="item-link">
                                        Home
                                    </Link>
                        
                                </li>
                                <li class="menu-item">
                                    <Link to="shoppingpage" class="item-link">
                                        Shop
                                    </Link>
                                </li>

                                
                                <li class="menu-item">
                                    <Link to="about" class="item-link">
                                    About us
                                    </Link>
                                   
                                </li>
                                <li class="menu-item position-relative">
                                    <a  class="item-link">
                                        Account<i class="icon icon-caret-down"></i>
                                    </a>
                                    <div class="sub-menu">
                                        <ul class="sub-menu_list">
                                      <li>
                                                 <Link to="login"class="sub-menu_link">Login</Link>
                                            </li>
                                            <li>
                                                <Link to="signup"class="sub-menu_link">Registration</Link>
                                            </li>

                                         
                                            
                                         
                                           
                                         
                                        </ul>
                                    </div>
                                </li>
                              <Link to="contact">
                                <li class="menu-item position-relative">
                                    <a href="javascript:void(0)" class="item-link">
                                        Contact us
                                    </a>
                                    
                                </li>
                              </Link>
                            </ul>
                        </nav>
                    </div>
                    <div class="col-xl-2 col-md-4 col-6">
                        <div class="d-flex justify-content-center">
                            <Link to="/" class="logo-site">
                                <img src="images/logo/logo.svg" alt="Product"/>
                            </Link>
                        </div>
                    </div>
                    <div class="col-xl-5 col-md-4 col-3">
                        <ul class="nav-icon-list">
                            <li class="d-none d-lg-flex">
                                <Link class="nav-icon-item link" to="/login">
                                    <i class="icon icon-user"></i>
                                </Link>
                            </li>
                              <li class="d-none d-md-flex">
                                <a class="nav-icon-item link" >
                                    {/* href="#search" data-bs-toggle="modal"> */}
                                    <i class="icon icon-magnifying-glass"></i>
                                </a>
                            </li>
                           <Link to="/wishlist">
                            <li class="d-none d-sm-flex">
                                <a class="nav-icon-item link" href="">
                                    <i class="icon icon-heart"></i>
                                </a>
                            </li>
                        
                           </Link>
                            <li class="shop-cart" >
                            <Link  class="nav-icon-item link" to="/cart"> 
                              
                                    <i class="icon icon-shopping-cart-simple"></i>
                                
                                <span class="count">24</span>
                               </Link>
                            </li>
                            
                           
                        </ul>
                    </div>
                </div>
            </div>
        </header>

           <div class="offcanvas offcanvas-start canvas-mb" id="mobileMenu">
        <span class="icon-close-popup" data-bs-dismiss="offcanvas">
            <i class="icon-close"></i>
        </span>
        <div class="canvas-header" style={{height:"100px"}}>
            <p class="text-logo-mb">Ochaka.</p>
            <Link  class="tf-btn type-small style-2">
                
              {
                state==true?<>

              <Link to="/login">Login</Link>
                </>:<>
                  <button onClick={logout}>Logout</button>
                
                </>
              
              }  
                <i class="icon icon-user"></i>
            </Link>
            </div>
             <div class="col-xl-3 col-md-4 col-3"  >
<ul class="nav-icon-list" style={{justifyContent:"start", paddingLeft:"180px", paddingBottom:"5px"}} >
                            <li class=" d-lg-flex gap-2 " >
                             
                                   <p style={{}}>Welcome </p>
                                    
                                     {
                                        state==true?
                                        <> </>
                                        :<>
                                         <h6  style={{}} > {name}</h6>
                                     
 
                                  
                                        </>
                                     }
                                 
                            
                            </li>
                         
                        </ul>
          
                    </div>

                    

            <span class="br-line"></span>

                     
                        
              



                 

        <div className="canvas-body">
            <div className="mb-content-top">
                <ul className="nav-ul-mb" >
                  <li><b><Link to={"/"}>Home</Link> </b></li> 
                  <li><b><Link to={"shoppingpage"}>Shop</Link></b></li>  
              <li><b><Link to={"about"}>About Us</Link></b></li>  
               {/* <li class="menu-item position-relative">
                                    <a href="javascript:void(0)" class="item-link">
                                        Account<i class="icon icon-caret-down"></i>
                                    </a>
                                    <div class="sub-menu">
                                        <ul class="sub-menu_list">
                                           
                                            <li>
                                                 <Link to="login"class="sub-menu_link">Login</Link>
                                            </li>
                                            <li>
                                                <Link to="signup"class="sub-menu_link">Registration</Link>
                                            </li>
                                           
                                         
                                        </ul>
                                    </div>
                                </li> */}


                  <li><b><Link to={"contact"}>Contact us</Link></b></li>
                   
                   
                </ul>
            </div>



            
            <div class="group-btn">

                  <Link to="/wishlist">
                <a href="wishlist.html" class="tf-btn type-small style-2">
                    Wishlist
                    <i class="icon icon-heart"></i>
                </a>
                </Link>
                
                <div data-bs-dismiss="offcanvas">
                    {/* <a href="#search" data-bs-toggle="modal" */}
                    <a class="tf-btn type-small style-2">
                        Search
                        <i class="icon icon-magnifying-glass"></i>
                    </a>
                </div>
            </div>
            <div class="flow-us-wrap">
                <h5 class="title">Follow us on</h5>
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
            <div class="payment-wrap">
                <h5 class="title">Payment:</h5>
                <ul class="payment-method-list">
                    <li><img src="images/payment/visa.png" alt="Payment"/></li>
                    <li><img src="images/payment/master-card.png" alt="Payment"/></li>
                    <li><img src="images/payment/amex.png" alt="Payment"/></li>
                    <li><img src="images/payment/discover.png" alt="Payment"/></li>
                    <li><img src="images/payment/paypal.png" alt="Payment"/></li>
                </ul>
            </div>
        </div>
        <div class="canvas-footer">
            <div class="tf-currencies">
                <select class="tf-dropdown-select style-default type-currencies">
                    <option selected="" data-thumbnail="images/country/us.png">USD</option>
                    <option data-thumbnail="images/country/vie.png">VND</option>
                </select>
            </div>
            <span class="br-line"></span>
            <div class="tf-languages">
                <select class="tf-dropdown-select style-default type-languages">
                    <option>English</option>
                    <option>العربية</option>
                    <option>简体中文</option>
                    <option>اردو</option>
                </select>
            </div>
        </div>
    </div>
        </>
    )
}