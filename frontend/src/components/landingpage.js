import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper,SwiperSlide } from 'swiper/react';
import {Pagination} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Swal from 'sweetalert2'

export const Landingpage=()=>{

// categories

const[savecategories,setsavecategories]=useState([])
useEffect(()=>{

saveget()


},[])

const saveget=async()=>{

const savedata=await fetch("https://newbook-fd60.onrender.com/api/getfile",{
method:"Get"

})

if (savedata) {
            const sv = await savedata.json()

            if (sv.statuscode === 1) {
                // alert("categories data fetched")
                setsavecategories(sv.alldata)

            }
            else {
                // alert("categories data not fetched")
            }

        }


} 



// for fiction home
const [savepro,setsavepro]=useState([])


useEffect(()=>{
getcatproduct()


},[])

const getcatproduct=async()=>{

    const getcatprodata=await fetch("https://newbook-fd60.onrender.com/api/cathomepro",{
meythod:"Get"

})

if(getcatprodata){

    const homepro=await getcatprodata.json()

    if(homepro.statuscode===1){
        // alert("fictionproduct fetched")

   setsavepro(homepro.alldata)
//    setmystery(homepro.mysteryproduct)

    }

    else{
        // alert("fictionproduct not fetched")
    }

}

}

// for mystery home

const [mystery,setmystery]=useState([])
useEffect(()=>{
getmuysteryproduct()


},[])

const getmuysteryproduct=async()=>{

    const getmuysteryprodata=await fetch("https://newbook-fd60.onrender.com/api/muysterypro",{
meythod:"Get"

})

if(getmuysteryprodata){

    const muysterypro=await getmuysteryprodata.json()

    if(muysterypro.statuscode===1){
        // alert("muysterproduct fetched")
   setmystery(muysterypro.alldata)

    }

    else{
        // alert("muystery not fetched")
    }

}

}

// show latest product

const [latestpro,setlatestpro]=useState([])
useEffect(()=>{
getlatestproduct()


},[])

const getlatestproduct=async()=>{

    const getlatestprodata=await fetch("https://newbook-fd60.onrender.com/api/latestpro",{
method:"Get"

})

if(getlatestprodata){

    const latestpro=await getlatestprodata.json()

    if(latestpro.statuscode===1){
        // alert("latestpro fetched")
   setlatestpro(latestpro.alldata)

    }

    else{
        // alert("latestpro not fetched")
    }

}

}



  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);


// bestseller home


const [bestseller,setbestseller]=useState([])
useEffect(()=>{
getbestsellerpro()


},[])

const getbestsellerpro=async()=>{

    const getbestprodata=await fetch("https://newbook-fd60.onrender.com/api/bestpro",{
meythod:"Get"

})

if(getbestprodata){

    const bestsellerpro=await getbestprodata.json()

    if(bestsellerpro.statuscode===1){
        // alert("bestproduct fetched")
   setbestseller(bestsellerpro.alldata)

    }

    else{
        // alert("bestpro not fetched")
    }

}

}

const slides=[

   {
      image: "/images/slider/slider-34.jpg",
      title: "National Security",
       subtitle: "New From The Author",
      desc: "Limited edition complete journeys of the strongest family in history",
      bgClass:"bg1"
    
    },
    {
      image: "/images/slider/slider-35.jpg",
      title: "The British Are Coming",
      subtitle: "New From The Author",
      desc: "Discover powerful stories and thrilling historical adventures",
       bgClass:"bg2"
      
    },
    {
      image: "/images/slider/slider-36.jpg",
      title: "Remarkably Bright Creatures",
      subtitle: "New From The Author",
      desc: "A beautiful story about connection, life and unexpected friendships",
       bgClass:"bg3"
    }

]

const [index,setindex]=useState(0)

useEffect(()=>{
    const interval=setInterval(() => {
        setindex((prev)=>(prev+1)%slides.length)
    },3000);

    return()=>clearInterval(interval)
},[])


useEffect(()=>{

    AOS.init({
        duration:1000,
        once:false
    })
},[])

useEffect(()=>{
    AOS.refresh()
},[index])


// for random product

const [randomproduct,setrandomproduct]=useState([])
useEffect(()=>{
getrandomproduct()

},[])

const getrandomproduct=async()=>{

const getrandomprodata=await fetch("https://newbook-fd60.onrender.com/api/randompro",{
method:"Get"


})

if(getrandomprodata){
    const randompro=await getrandomprodata.json()

    if(randompro.statuscode===1){
        // alert("randompro fetched")
        setrandomproduct(randompro.alldata)
    }

    else{
        // alert("randompro not fetched")
    }
}


}










return(
        <>

        <div className="container">
        <div className="row align-items-stretch gy-4 ">



      {/* LEFT IMAGE */}
      <div className="col-12 col-lg-6 d-flex">
        <img 
        key={index}
         data-aos="zoom-out-down"
          src={slides[index].image} 
          alt="" 
          style={{ width: "100%", height: "500px", borderRadius:"17px", overflow:"hidden"}}
        />
      </div>

      {/* RIGHT TEXT */}

     <div className="col-12 col-lg-6 d-flex">
        <div className={`my-box ${slides[index].bgClass}`}>
      <div key={index} data-aos="fade-up">
        <h4>{slides[index].subtitle}</h4>
        <h1><b>{slides[index].title}</b></h1>
        <p>{slides[index].desc}</p>

        <button style={{
          padding: "10px 22px 12px ",
          background: "black",
          color: "white",
          borderRadius: "20px",
          border: "none",
          width:"140px",
        //  marginLeft:"250px",
        
        }}>
          Shop Now →
        </button>
        </div>
</div>
</div>
     



    </div>
</div>


<div className="flat-spacing no-slider">
  <div className="container">

    <div className="features-row">

      <div className="feature-item">
        <i className="icon-package"></i>
        <h4>30 days return</h4>
        <p>30 day money back guarantee</p>
      </div>

      <div className="feature-item">
        <i className="icon-calender"></i>
        <h4>3 year warranty</h4>
        <p>Manufacturer's defect</p>
      </div>

      <div className="feature-item">
        <i className="icon-boat"></i>
        <h4>Free shipping</h4>
        <p>Free Shipping for orders over $150</p>
      </div>

      <div className="feature-item">
        <i className="icon-headset"></i>
        <h4>Online support</h4>
        <p>24 hours a day, 7 days a week</p>
      </div>

    </div>

  </div>
</div>       
   
       


        <section class="themesFlat">
            <div class="container">
                <div class="sect-title type-4 fadeInUp">
                    <h2 class="s-title fw-normal">Shop by category</h2>
                   
                </div>
                {/* <div dir="ltr" class="swiper tf-swiper fadeInUp" data-preview="6" data-tablet="4" data-mobile-sm="3" data-mobile="2" data-space-lg="48" data-space-md="32" data-space="12" data-pagination="2" data-pagination-sm="3" data-pagination-md="4" data-pagination-lg="6">
                    <div class="swiper-wrapper">
                      
                        <div class="swiper-slide">
                            <a href="shop-default.html" class="widget-collection style-circle hover-img">
                                <div class="collection_image img-style " style={{height:"200px",width:"200px" }}>
                                    <img class="lazyload" src="images/category/cate-47.jpg" data-src="images/category/cate-47.jpg" alt="" />
                                </div>
                                <p class="collection_name h4 link">
                                    Romance <span class="count text-main-2">(24)</span>
                                </p>
                            </a>
                        </div>
  
                    
                    </div>
                    <div class="sw-dot-default tf-sw-pagination"></div>
                </div> */}
     


<div className="row">

  {
  savecategories.map((a, index) => (

    <div className="col-6 col-md-4 col-lg-2 mb-4" key={index}>
      
      <div className="text-center">

        <Link to={`/shopcat/?id=${a._id}`}>

          <div className="category-img">
            <img 
              src={`${a.file}`} 
              alt=""
              className="img-fluid rounded-circle"
            />
          </div>

          <p className="category-name">{a.catname}</p>

        </Link>

      </div>

    </div>

  ))}

</div>


            </div>
        </section>
      
        <div class="flat-spacing">
            <div class="container">
                <div class="banner-cd_v02  fadeInUp">
                    <div class="banner_title">
                        <span class="icon">
                            <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.5196 23.625C15.477 23.639 16.4261 23.4472 17.3029 23.0625C18.2988 22.6469 19.1475 21.9426 19.7396 21.0403C20.3317 20.138 20.6401 19.0791 20.625 18C20.625 14.625 19.875 13.875 18.75 11.625C17.625 9.375 18.75 7.125 18.75 7.125C17.8505 7.35299 17.0564 7.88241 16.5 8.625C16.5 0.75 11.25 0.375 11.25 0.375C11.5633 1.24478 11.6588 2.17809 11.5281 3.09329C11.3973 4.0085 11.0443 4.87774 10.5 5.625C8.625 8.25 6.75 9.75 6 12.75C6 12.75 4.5 12 4.875 10.5C4.875 10.5 3.375 13.125 3.375 17.25C3.375 21.7733 6.99825 23.1 8.78175 23.4788C9.25609 23.5777 9.73947 23.6267 10.224 23.625H14.5196Z" fill="#FEBD55"></path>
                                <path d="M9.31625 23.625C9.31625 23.625 5.44775 22.1745 5.44775 17.8223C5.44775 12.987 8.80325 11.25 8.80325 11.25C8.80325 11.25 7.86575 12.987 8.83288 13.4704C8.83288 13.4704 10.451 8.2005 14.8033 6.75C14.8033 6.75 13.2834 8.34862 14.2505 11.25C15.2176 14.1514 18.494 14.8027 18.5533 18V18.375C18.5913 19.4609 18.304 20.5334 17.7283 21.4549C16.9828 22.6163 16.1221 23.625 14.1519 23.625H9.31625Z" fill="#FC9E20"></path>
                                <path d="M9.75 23.625C8.86229 23.2538 8.10398 22.6287 7.57026 21.8282C7.03654 21.0276 6.75118 20.0872 6.75 19.125C6.75 15.375 8.625 13.875 8.625 13.875C8.625 13.875 8.625 15.375 9.375 15.75C9.375 15.75 10.125 10.5 13.5 9.375C13.5 9.375 12.375 10.125 13.125 12.375C13.875 14.625 17.25 15.375 17.25 19.125V19.4516C17.2633 20.3302 17.025 21.1943 16.5634 21.942C16.2467 22.4679 15.7965 22.9007 15.2585 23.1963C14.7204 23.4919 14.1137 23.6398 13.5 23.625H9.75Z" fill="#E03E3E"></path>
                                <path d="M9.74992 21.75C9.67576 21.75 9.60328 21.728 9.54162 21.6868C9.47997 21.6456 9.43192 21.587 9.40354 21.5185C9.37516 21.45 9.36774 21.3746 9.3822 21.3019C9.39666 21.2291 9.43237 21.1623 9.48479 21.1099L13.9848 16.6099C14.0555 16.5416 14.1502 16.5038 14.2486 16.5046C14.3469 16.5055 14.4409 16.5449 14.5105 16.6144C14.58 16.684 14.6194 16.778 14.6203 16.8763C14.6212 16.9747 14.5834 17.0694 14.515 17.1401L10.015 21.6401C9.94474 21.7105 9.84937 21.75 9.74992 21.75ZM13.1249 22.125C12.9024 22.125 12.6849 22.059 12.4999 21.9354C12.3149 21.8118 12.1707 21.6361 12.0856 21.4305C12.0004 21.225 11.9781 20.9988 12.0215 20.7805C12.0649 20.5623 12.1721 20.3618 12.3294 20.2045C12.4868 20.0472 12.6872 19.94 12.9054 19.8966C13.1237 19.8532 13.3499 19.8755 13.5554 19.9606C13.761 20.0458 13.9367 20.19 14.0603 20.375C14.1839 20.56 14.2499 20.7775 14.2499 21C14.2499 21.2984 14.1314 21.5845 13.9204 21.7955C13.7094 22.0065 13.4233 22.125 13.1249 22.125ZM13.1249 20.625C13.0508 20.625 12.9783 20.647 12.9166 20.6882C12.8549 20.7294 12.8068 20.788 12.7785 20.8565C12.7501 20.925 12.7427 21.0004 12.7571 21.0732C12.7716 21.1459 12.8073 21.2127 12.8598 21.2652C12.9122 21.3176 12.979 21.3533 13.0518 21.3678C13.1245 21.3823 13.1999 21.3748 13.2684 21.3465C13.3369 21.3181 13.3955 21.27 13.4367 21.2083C13.4779 21.1467 13.4999 21.0742 13.4999 21C13.4999 20.9005 13.4604 20.8052 13.3901 20.7348C13.3198 20.6645 13.2244 20.625 13.1249 20.625ZM10.8749 18.375C10.6524 18.375 10.4349 18.309 10.2499 18.1854C10.0649 18.0618 9.9207 17.8861 9.83556 17.6805C9.75041 17.475 9.72813 17.2488 9.77154 17.0305C9.81494 16.8123 9.92209 16.6118 10.0794 16.4545C10.2368 16.2972 10.4372 16.19 10.6554 16.1466C10.8737 16.1032 11.0999 16.1255 11.3054 16.2106C11.511 16.2958 11.6867 16.44 11.8103 16.625C11.9339 16.81 11.9999 17.0275 11.9999 17.25C11.9999 17.5484 11.8814 17.8345 11.6704 18.0455C11.4594 18.2565 11.1733 18.375 10.8749 18.375ZM10.8749 16.875C10.8008 16.875 10.7282 16.897 10.6666 16.9382C10.6049 16.9794 10.5568 17.038 10.5285 17.1065C10.5001 17.175 10.4927 17.2504 10.5071 17.3232C10.5216 17.3959 10.5573 17.4627 10.6098 17.5152C10.6622 17.5676 10.729 17.6033 10.8018 17.6178C10.8745 17.6323 10.9499 17.6248 11.0184 17.5965C11.0869 17.5681 11.1455 17.52 11.1867 17.4583C11.2279 17.3967 11.2499 17.3242 11.2499 17.25C11.2499 17.1505 11.2104 17.0552 11.1401 16.9848C11.0698 16.9145 10.9744 16.875 10.8749 16.875Z" fill="#FBFBFB"></path>
                            </svg>

                        </span>
                        <h4 class="text-primary">
                            Hurry up offer ends in:
                        </h4>
                    </div>

                    <div class="count-down_v02">
                        <div class="js-countdown cd-has-zero" data-timer="25472" data-labels="Days,Hours,Mins,Secs"></div>
                    </div>
                </div>
            </div>
        </div>
 <div>
     
    </div>



<section className="flat-spacing">
  <div className="container">

    <div className="sect-title type-4 fadeInUp d-flex justify-content-between">
      <h2 className="s-title fw-normal">Our Latest Books</h2>

      <Link to={"shoppingpage"} className="tf-btn-line">
        View All Books
      </Link>
    </div>

<div className="product-row">
  {
  latestpro.map((a, index) => (
    <div className="product-item" key={index} data-aos="fade-up">

 <Link to={`/prodetail/?id=${a._id}`}> 
      <img
        src={`${a.productfile}`}
        alt="Product"
        className="product-img"
      />
      </Link>
        <div class="rate_wrap w-100 mb-12 fs-12">
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
        
 
         </div>
             <p className="prothings">{a.productname} </p>
      <p className="prothings"><b>${Number(a.productprice).toLocaleString("en-Us")}</b></p>

   
    </div>
  ))}
</div>
  </div>
</section>

 

  


   
     {/* bestsellers  */}
     <section className="flat-spacing">
  <div className="container">

    <div className="sect-title type-4 fadeInUp d-flex justify-content-between">
      <h2 className="s-title fw-normal"> Bestselllers</h2>

      <Link to={"shoppingpage"} className="tf-btn-line">
        View All Books
      </Link>
    </div>

<div className="product-row">
  {
  bestseller.map((a, index) => (
    <div className="product-item" key={index} data-aos="fade-up">

 <Link to={`/prodetail/?id=${a._id}`}> 
      <img
        src={`/uploads/${a.productfile}`}
        alt="Product"
        className="product-img"
      />
      </Link>
        <div class="rate_wrap w-100 mb-12 fs-12">
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
        
 
         </div>
             <p className="prothings">{a.productname} </p>
      <p className="prothings"><b>${Number(a.productprice).toLocaleString("en-Us")}</b></p>

   
    </div>
  ))}
</div>
  </div>
</section>

     
        <div class="themesFlat">
            <div class="container">
                <div dir="ltr" class="swiper tf-swiper" data-preview="3" data-tablet="2" data-mobile-sm="2" data-mobile="1" data-space-lg="48" data-space-md="24" data-space="12" data-pagination="1" data-pagination-sm="2" data-pagination-md="2" data-pagination-lg="3">
                    <div class="swiper-wrapper"style={{gap:"40px"}}>
                    
                        <div class="swiper-slide"style={{height:"300px",width:"450px" }}>
                            <div class="box-image_V06 hover-img  fadeInLeft" >
                                <div class="box-image_image img-style">
                                    <img class="lazyload" src="images/section/box-image-16.jpg" data-src="images/section/box-image-16.jpg" alt="Book"/>
                                </div>
                                <div class="box-image_content">
                                    <div>
                                        <a href="shop-default.html" class="title link text-display-3 fw-semibold">
                                            Book Your <br/> Summer
                                        </a>
                                        <p class="sub-title h6 fw-bold text-main-6">
                                            Get a voucher for <br/>
                                            any order over $150
                                        </p>
                                    </div>
                                    <a href="shop-default.html" class="tf-btn-line letter-space-0">Discover more</a>
                                </div>
                            </div>
                        </div>
                    
                        <div class="swiper-slide"style={{height:"300px",width:"450px" }}>
                            <div class="box-image_V06 hover-img  fadeInLeft" data-wow-delay="0.1s">
                                <div class="box-image_image img-style">
                                    <img class="lazyload" src="images/section/box-image-17.jpg" data-src="images/section/box-image-17.jpg" alt="Book"/>
                                </div>
                                <div class="box-image_content">
                                    <div>
                                        <p class="sub-title h6 fw-bold text-primary">
                                            SALE upto 50%
                                        </p>
                                        <a href="shop-default.html" class="title link text-display-3 fw-semibold">
                                            Good books <br/> every day
                                        </a>
                                    </div>
                                    <a href="shop-default.html" class="tf-btn-line letter-space-0">Shop now</a>
                                </div>
                            </div>
                        </div>
                        <div class="swiper-slide"style={{height:"300px",width:"450px" }}>
                            <div class="box-image_V06 hover-img  fadeInLeft" data-wow-delay="0.2s">
                                <div class="box-image_image img-style">
                                    <img class="lazyload" src="images/section/box-image-18.jpg" data-src="images/section/box-image-18.jpg" alt="Book"/>
                                </div>
                                <div class="box-image_content">
                                    <div>
                                        <a href="shop-default.html" class="title link text-display-3 fw-semibold">
                                            By readers
                                        </a>
                                        <p class="sub-title h6 fw-bold text-main-6">
                                            The best and most meaningful <br/>
                                            books recommended by readers
                                        </p>
                                    </div>
                                    <a href="shop-default.html" class="tf-btn-line letter-space-0">get a voucher</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="sw-dot-default tf-sw-pagination"></div>
                </div>
            </div>
        </div>

      {/* fiction books   */}
     <section className="flat-spacing">
  <div className="container">

    <div className="sect-title type-4 fadeInUp d-flex justify-content-between">
      <h2 className="s-title fw-normal">Our Best Fiction Books</h2>

      <Link to={"shoppingpage"} className="tf-btn-line">
        View All Books
      </Link>
    </div>

<div className="product-row">
  {
  savepro.map((a, index) => (
    <div className="product-item" key={index} data-aos="fade-up">

 <Link to={`/prodetail/?id=${a._id}`}> 
      <img
        src={`${a.productfile}`}
        alt="Product"
        className="product-img"
      />
      </Link>
        <div class="rate_wrap w-100 mb-12 fs-12">
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
        
 
         </div>
             <p className="prothings">{a.productname} </p>
      <p className="prothings"><b>${Number(a.productprice).toLocaleString("en-Us")}</b></p>

   
    </div>
  ))}
</div>
  </div>
</section>

       
        <section class="themesFlat">
            <div class="container-full-4">
                <div class="tf-grid-layout lg-col-2 gap-16">
                    <div class="box-image_v07 d-flex">
                        <div class="box-image_image">
                            <img class="lazyload ani-zoom" src="images/banner/banner-3.jpg" data-src="images/banner/banner-3.jpg" alt="Image"/>
                        </div>
                        <div class="box-image_content  fadeInUp">
                            <h6 class="promo fw-normal text-primary">SALE OFF 50% on 1 when you buy 2</h6>
                            <h2 class="title fw-normal">
                                <a href="shop-default.html" class="link">I Love You to the Moon and Back</a>
                            </h2>
                            <p class="desc h6">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </p>
                            {/* <a href="shop-default.html"  */}
                            <a class="tf-btn animate-btn bg-primary primary-6">
                                Shop now
                                <i class="icon icon-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                    <div class="banner-product-set style-2 bg-soft-peach">
                        <div class="banner_content  fadeInUp">
                            <p class="product-badge_item h6 sale bg-primary primary-6"> Set Dress SALE OFF 15%</p>
                            <div class="sect-title">
                                <h1 class="set_title text-xxl-nowrap">Frequently Bought Together</h1>
                                <p class="s-subtitle">Up to 50% off Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>

                            
                                 
                                 <ul class="list-ver w-100 bundle-hover-wrap">
                               
                                {
                             randomproduct.map((a,index)=>

                                <li class="w-100" key={index}>
                                    
                                    <div class="card-product product-style_list-mini bundle-hover-item pin1">


                                     
                                        <div class="card-product_wrapper aspect-ratio-0 d-flex justify-content-center">
                                            <Link to={`/prodetail/?id=${a._id}`}> 
                                          <img class="lazyload img-product" src={`/uploads/${a.productfile}`} alt="Product" style={{ height: "200px", width: "200px" }}/>
                                               
                                         </Link> 
                                        </div>
                                        
                                        <div class="card-product_info align-self-auto">
                                            <h5>
                                                {a.productname}
                                                {/* <a href="product-detail.html" class="name-product link fw-semibold">Inspiring Stories for Amazing
                                                    Boys</a> */}
                                            </h5>
                                            <div class="price-wrap">
                                                <span class="price-new h6 fw-semibold text-primary">${Number(a.productprice).toLocaleString("en-US")}</span>
                                                <span class="h6 fw-semibold text-primary primary-6">In Stock</span>
                                            </div>
                                        </div>
                                        {/* <a href="#shoppingCart" data-bs-toggle="offcanvas"  */}
                                        <a class="tf-btn btn-white animate-btn animate-dark type-small fw-semibold" >
                                            Add to cart
                                            <i class="icon icon-arrow-right d-none d-sm-block"></i>
                                        </a>
                                   
                                   </div>
                                </li>
                                 )   
                                             }
                               
                            </ul>

                              
                                            
{/* 
                            <div class="w-100 text-center">
                                <p class="h4 text-black total-price">Total price: <span class="fw-bold">$51.00</span></p>
                                <a href="#shoppingCart" data-bs-toggle="offcanvas" class="tf-btn btn-primary primary-6 w-100">
                                    ADD SET TO CART
                                    <i class="icon icon-shopping-cart-simple"></i>
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
      
      {/* mystery books */}
          <section className="flat-spacing">
  <div className="container">

    <div className="sect-title type-4 fadeInUp d-flex justify-content-between">
      <h2 className="s-title fw-normal">Our Best Mystery Books</h2>

      <Link to={"shoppingpage"} className="tf-btn-line">
        View All Books
      </Link>
    </div>

<div className="product-row">
  {
  mystery.map((a, index) => (
    <div className="product-item" key={index} data-aos="fade-up">

 <Link to={`/prodetail/?id=${a._id}`}> 
      <img
        src={`/uploads/${a.productfile}`}
        alt="Product"
        className="product-img"
      />
      </Link>
        <div class="rate_wrap w-100 mb-12 fs-12">
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
        </div>
             <p className="prothings">{a.productname} </p>
      <p className="prothings"><b>${Number(a.productprice).toLocaleString("en-Us")}</b></p>

   
    </div>
  ))}
</div>
  </div>
</section>

        <section class="themesFlat">
            <div class="container">
                <div class="wg-copy primary-6  fadeInUp">
                    <div class="content wrap-code">
                        <h3 class="text-white">Buy 2 Get 1 Free and Get 35% Off Voucher</h3>
                        <div class="tf-btn btn-white btn-coppy-text animate-btn animate-dark">
                            <h6 class="coppyText fw-semibold">
                                35%OFFVOUCHER
                            </h6>
                            <span class="br-line type-vertical"></span>
                            <h6 class="text-primary">COPY</h6>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     
        <section class="flat-spacing">
            <div class="container">
                <div class="sect-title type-4 align-items-start">
                    <div class="flex-sm-1 fadeInUp">
                        <h2 class="s-title fw-normal">What Our Customers Says!</h2>
                    </div>
                    <div class="group-btn-slider  fadeInUp" data-wow-delay="0.1s">
                        <div class="tf-sw-nav style-2 hv-primary primary-6 type-small nav-prev-swiper">
                            <i class="icon icon-caret-left"></i>
                        </div>
                        <div class="tf-sw-nav style-2 hv-primary primary-6 type-small nav-next-swiper">
                            <i class="icon icon-caret-right"></i>
                        </div>
                    </div>
                </div>
                <div dir="ltr" class="swiper tf-swiper" data-preview="2" data-tablet="2" data-mobile-sm="1" data-mobile="1" data-space-lg="48" data-space-md="32" data-space="12" data-pagination="1" data-pagination-sm="1" data-pagination-md="2" data-pagination-lg="2">
                    
                    <div class="swiper-wrapper">
                
                        <div class="swiper-slide">
                            <div class="testimonial-V02 type-space-3 hover-img  fadeInUp">
                                <div class="tes_product">
                                    <div class="product-image img-style">
                                        <img class="lazyload" src="images/blog/blog-19.jpg" data-src="images/blog/blog-19.jpg" alt="BLOG"/>
                                    </div>
                                </div>
                                <div class="tes_content">
                                    <h4 class="tes_title">Maui - The courage Chihuahua</h4>
                                    <h6 class="prd_price fw-semibold">$14,99</h6>
                                    <p class="tes_text h4">
                                        “ The support from ACIS has been outstanding. Anytime we had a question or needed help, their team responded
                                        quickly and professionally. “
                                    </p>
                                    <div class="tes_author">
                                        <p class="author-name h4">Brooklyn Simmons</p>
                                        <span class="d-flex">
                                            <i class="author-verified icon-check-circle fs-24"></i>
                                        </span>
                                    </div>
                                    <div class="rate_wrap">
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div class="swiper-slide">
                            <div class="testimonial-V02 type-space-3 hover-img  fadeInUp">
                                <div class="tes_product">
                                    <div class="product-image img-style">
                                        <img class="lazyload" src="images/blog/blog-20.jpg" data-src="images/blog/blog-20.jpg" alt="BLOG"/>
                                    </div>
                                </div>
                                <div class="tes_content">
                                    <h4 class="tes_title">The Let Them Theory</h4>
                                    <h6 class="prd_price fw-semibold">$39,99</h6>
                                    <p class="tes_text h4">
                                        “No surprises, just consistent and dependable performance every single time without fail. “
                                    </p>
                                    <div class="tes_author">
                                        <p class="author-name h4">Mas Shin</p>
                                        <span class="d-flex">
                                            <i class="author-verified icon-check-circle fs-24"></i>
                                        </span>
                                    </div>
                                    <div class="rate_wrap">
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <div class="swiper-slide">
                            <div class="testimonial-V02 type-space-3 hover-img  fadeInUp">
                                <div class="tes_product">
                                    <div class="product-image img-style">
                                        <img class="lazyload" src="images/blog/blog-19.jpg" data-src="images/blog/blog-19.jpg" alt="BLOG"/>
                                    </div>
                                </div>
                                <div class="tes_content">
                                    <h4 class="tes_title">Maui - The courage Chihuahua</h4>
                                    <h6 class="prd_price fw-semibold">$14,99</h6>
                                    <p class="tes_text h4">
                                        “ The support from ACIS has been outstanding. Anytime we had a question or needed help, their team responded
                                        quickly and professionally. “
                                    </p>
                                    <div class="tes_author">
                                        <p class="author-name h4">Xil Vo</p>
                                        <span class="d-flex">
                                            <i class="author-verified icon-check-circle fs-24"></i>
                                        </span>
                                    </div>
                                    <div class="rate_wrap">
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
                                    </div>
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