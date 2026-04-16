import { useContext, useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"
import { Usercontext } from "./context"


export const Wishlist=()=>{

    const[userid,setuserid]=useState("")
const[savewish,setsavewish]=useState([])

const [params]=useSearchParams()
const id=params.get("id")


useEffect(()=>{
   const getid=localStorage.getItem("userid")
setuserid(getid)
getsavewish(getid)
},[])




const getsavewish=async(userid)=>{

const wishdata= await fetch(`http://localhost:9000/api/getwishlist/${userid}`,{
method:"Get"

})

if(wishdata){
    const list=await wishdata.json()

    if(list.statuscode===1){
        // alert("wishdata fetched")
        setsavewish(list.alldata)
    }

   else{
    // alert("wishdata not fetched")
   } 
}

}


// for delete
  const delwishproducts=async(id)=>{

          const result = await fetch(`http://localhost:9000/api/dellwishpro/${id}`, {
            method: "DELETE"

        })

       if(result){
const res=await result.json()
if(res.statuscode===1){
    // alert("product deleted")
//  setsavewish((prev)=> prev.filter(item=> item._id !== id))
 getsavewish(userid)

}
else{
    // alert("product not deletd")
}

}
else{
    // alert("deletd error")
}
         
}



return(
<>

        <section class="s-page-title">
            <div class="container">
                <div class="content">
                    <h1 class="title-page">Your Wishlist</h1>
                    <ul class="breadcrumbs-page">
                        <li><a href="index.html" class="h6 link">Home</a></li>
                        <li class="d-flex"><i class="icon icon-caret-right"></i></li>
                        <li>
                            <h6 class="current-page fw-normal">Wishlist</h6>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        {/* <!-- /Page Title -->
        <!-- Wishlist --> */}
        <div class="flat-spacing">
            <div class="container">
                {/* <div class="tf-grid-layout tf-col-2 md-col-3 xl-col-4 wrapper-wishlist">
                    <!-- Product 1 --> */}


      {/* {

  savewish.map((a, index) =>

                                     <div className="cateimage"style={{width:"300px"}} >
                                        <div class="card-product style-5" key={index}style={{width:"300px",height:"500px"}}   >

                                      <Link to={`/prodetail/?id=${a.proid}`}> 
                                            <div class="card-product_wrapper aspect-ratio-0 " style={{width:"300px"}} >
                                                <a href="" class="product-img" style={{height:"500px"}}>
                                                    <img class="img-product lazyload" src={`/uploads/${a.file}`} alt="Product" style={{ height: "400px", width: "300px" }} />
                                                     <div style={{textAlign:"center"}}>
                                                       <p>{a.name}</p>
                                                    <p>${a.price}</p>
                                                  
                                                   </div>
                                                    
                                                </a>
                                       <span class="remove box-icon">
                                <i class="icon icon-trash"></i>
                            </span>

                                          </div>

                                          </Link> 

                                        </div>
                                        </div>
 
)
                                      
}  */}


<div className="shop-products-section">
  <div className="container">

    <div className="row" >

      {
      savewish.map((a, index) => 
        <div 
          className="col-lg-3 col-md-4 col-6 mb-4"   
          key={index}
        //   data-aos="fade-up"

        >

          <div className="shop-card">
           
           

              <div className="wish-card-img">
                 <Link to={`/prodetail/?id=${a.proid}`}>
                <img
                  src={`/uploads/${a.file}`}
                  alt="product"
                  className="wishimg"

                />
                </Link>
              <button className ="removewish box-icon" onClick={()=>delwishproducts(a._id)}>
                                <i class="icon icon-trash"></i>
                            </button>

                
              </div>

              
        

              <div class="rate_wrap w-100 mb-12 fs-12">
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
        
 
         </div>

         
                <p className="shop-title">{a.name}</p>
                <p className="shop-title"><b>${Number(a.price).toLocaleString("en-Us")}</b></p>
            
        
           
          
          </div>

        </div>
      )}

    </div>

  </div>
</div>

              


                    {/* <div class="card-product grid style-2 has-size">
                      
                       <div class="card-product_wrapper">


                        
                     <a href="product-detail.html" class="product-img">


                            
                                <img class="lazyload img-product" src="images/products/product-1.jpg" data-src="images/products/product-1.jpg" alt="Product" style={{height:"300px",width:"400px"}}/>
                                <img class="lazyload img-hover" src="images/products/product-2.jpg" data-src="images/products/product-2.jpg" alt="Product" style={{height:"300px",width:"400px"}}/>
                            </a>
                            <span class="remove box-icon">
                                <i class="icon icon-trash"></i>
                            </span>
                            <ul class="product-action_list">
                                <li>
                                    <a href="#shoppingCart" data-bs-toggle="offcanvas" class="hover-tooltip box-icon">
                                        <span class="icon icon-shopping-cart-simple"></span>
                                        <span class="tooltip">Add to cart</span>
                                    </a>
                                </li>
                                <li class="compare">
                                    <a href="#compare" data-bs-toggle="offcanvas" class="hover-tooltip box-icon ">
                                        <span class="icon icon-compare"></span>
                                        <span class="tooltip">Compare</span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#quickView" data-bs-toggle="modal" class="hover-tooltip box-icon">
                                        <span class="icon icon-view"></span>
                                        <span class="tooltip">Quick view</span>
                                    </a>
                                </li>
                            </ul>
                            <ul class="product-badge_list">
                                <li class="product-badge_item h6 new">New arrival</li>
                            </ul>

                            <div class="variant-box bottom-0 start-0 end-0">
                                <div class="product-size_list type-2">
                                    <a href="#" class="size-item h6">XS</a>
                                    <a href="#" class="size-item h6">S</a>
                                    <a href="#" class="size-item h6">M</a>
                                </div>
                            </div>
                        </div>
                        <div class="card-product_info">
                            <a href="product-detail.html" class="name-product h4 link">Nike Sportswear Tee Shirts</a>
                            <div class="price-wrap">
                                <span class="price-old h6 fw-normal">$99,99</span>
                                <span class="price-new h6">$69,99</span>
                            </div>
                            <ul class="product-color_list">
                                <li class="product-color-item color-swatch hover-tooltip tooltip-bot active">
                                    <span class="tooltip color-filter">Brown</span>
                                    <span class="swatch-value bg-light-brown"></span>
                                    <img src="images/products/product-1.jpg" data-src="images/products/product-1.jpg" alt=""/>
                                </li>
                                <li class="product-color-item color-swatch hover-tooltip tooltip-bot">
                                    <span class="tooltip color-filter">Blue</span>
                                    <span class="swatch-value bg-baby-blue"></span>
                                    <img src="images/products/product-4.jpg" data-src="images/products/product-4.jpg" alt=""/>

                                </li>
                                <li class="product-color-item color-swatch hover-tooltip tooltip-bot">
                                    <span class="tooltip color-filter">Orange</span>
                                    <span class="swatch-value bg-vivid-orange"></span>
                                    <img src="images/products/product-3.jpg" data-src="images/products/product-3.jpg" alt=""/>
                                </li>
                            </ul>
                        </div>
                    </div> */}
                    {/* </div> */}
                    </div>
                    </div>

</>






)


}