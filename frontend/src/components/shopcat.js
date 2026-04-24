import { useEffect, useState } from "react"
import { Link, useSearchParams } from "react-router-dom"

export const Shopcat=()=>{

const[params]=useSearchParams()
const id=params.get("id")

const[catpro,setcatpro]=useState([])

  useEffect(()=>{

proget()

    },[])


    const proget=async()=>{

const savecatdata=await fetch(`https://newbook-fd60.onrender.com/api/cathomepro/${id}`,{
    method:"Get"
})

if(savecatdata){
    const ct= await savecatdata.json()

if(ct.statuscode===1){
    // alert("pro data fetched")
    setcatpro(ct.alldata)
}
else{
    // alert("pro data not fetched")
}

    }
    }

    


return(

<>

            <section class="s-page-title">
                <div class="container">
                    <div class="content">
                        <h1 class="title-page">Shop </h1>
                        <ul class="breadcrumbs-page">
                            <li><a href="index.html" class="h6 link">Home</a></li>
                            <li class="d-flex"><i class="icon icon-caret-right"></i></li>
                            <li>
                                <h6 class="current-page fw-normal">Shop</h6>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* <!-- /Page Title -->
            <!-- Category --> */}
            <div class="flat-spacing pb-0">
                <div class="container">
                    <div dir="ltr" class="swiper tf-swiper" data-preview="5" data-tablet="4" data-mobile-sm="3" data-mobile="2" data-space-lg="40" data-space-md="24" data-space="12" data-pagination="2" data-pagination-sm="3" data-pagination-md="4" data-pagination-lg="5">
                        <div class="swiper-wrapper" >
                            {/* <!-- item 1 --> */}
                            {/* <div class="swiper-slide">
                                <div class="box-image_category style-2 hover-img">
                                    <a href="shop-default.html" class="box-image_image img-style">
                                        <img class="lazyload" src="images/category/cate-shop-1.jpg" data-src="images/category/cate-shop-1.jpg" alt="" />
                                    </a>
                                    <div class="box-image_content">
                                        <a href="shop-default.html" class="tf-btn btn-white animate-btn animate-dark">
                                            <span class="h5 fw-medium">
                                                Women
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div> */}

                        </div>
                        <div class="sw-dot-default tf-sw-pagination"></div>
                    </div>
                </div>
            </div>
            {/* <!-- /Category -->
            <!-- Section Product --> */}
            <div class="flat-spacing-3 pb-0">
                <div class="container">
                    <div class="row" style={{width:"100%"}}>
                        
                        <div class="col-xl-12">
                            <div class="tf-shop-control">
                                <div class="shop-sale-text d-none d-xl-flex">
                                    <input type="checkbox" name="sale" class="tf-check" id="sale" />
                                    <label for="sale" class="label">Show only products on sale</label>
                                </div>
                                <div class="tf-control-filter d-xl-none">
                                    <button type="button" id="filterShop" class="tf-btn-filter">
                                        <span class="icon icon-filter"></span><span class="text">Filter</span>
                                    </button>
                                </div>
                                <ul class="tf-control-layout">
                                    <li class="tf-view-layout-switch sw-layout-2" data-value-layout="tf-col-2">
                                        <i class="icon-grid-2"></i>
                                    </li>
                                    <li class="tf-view-layout-switch sw-layout-3 active d-none d-md-flex" data-value-layout="tf-col-3">
                                        <i class="icon-grid-3"></i>
                                    </li>
                                    <li class="br-line type-vertical"></li>
                                    <li class="tf-view-layout-switch sw-layout-list list-layout" data-value-layout="list">
                                        <i class="icon-list"></i>
                                    </li>
                                </ul>
                                <div class="tf-control-sorting">
                                    <p class="h6 d-none d-lg-block">Sort by:</p>
                                    <div class="tf-dropdown-sort" data-bs-toggle="dropdown">
                                        <div class="btn-select">
                                            <span class="text-sort-value">Best Selling</span>
                                            <span class="icon icon-caret-down"></span>
                                        </div>
                                        <div class="dropdown-menu">
                                            <div class="select-item active remove-all-filters" data-sort-value="best-selling">
                                                <span class="text-value-item">Best Selling</span>
                                            </div>
                                            <div class="select-item" data-sort-value="a-z">
                                                <span class="text-value-item">Alphabetically, A-Z</span>
                                            </div>
                                            <div class="select-item" data-sort-value="z-a">
                                                <span class="text-value-item">Alphabetically, Z-A</span>
                                            </div>
                                            <div class="select-item" data-sort-value="price-low-high">
                                                <span class="text-value-item">Price, low to high</span>
                                            </div>
                                            <div class="select-item" data-sort-value="price-high-low">
                                                <span class="text-value-item">Price, high to low</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
</div>
</div>
</div>
</div>

                   
                                    
                                                    {/* <div class="wrapper-shop tf-grid-layout tf-col-4" id="gridLayout"> */}
                                                        {/* <!-- Product 1 --> */}
                                                        
                                                      

     {/* {

  savepro.map((a, index) =>

                                     <div className="cateimage"style={{width:"300px"}} >
                                        <div class="card-product style-5" key={index}style={{width:"400px",height:"500px"}}   >

                                      <Link to={`/prodetail/?id=${a._id}`}> 
                                            <div class="card-product_wrapper aspect-ratio-0 " style={{width:"300px"}} >
                                                <a href="" class="product-img" style={{height:"500px"}}>
                                                    <img class="img-product lazyload" src={`/uploads/${a.productfile}`} alt="Product" style={{ height: "400px", width: "300px" }} />
                                                     <div style={{textAlign:"center"}}>
                                                       <p>{a.productname}</p>
                                                    <p>${a.productprice}</p>
                                                
                                                   </div>
                                                    
                                                </a>
                                      

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
      catpro.map((a, index) => (
        <div 
          className="col-lg-3 col-md-4 col-6 mb-4"   
          key={index}
        //   data-aos="fade-up"
        >

          <div className="shop-card">

            <Link to={`/prodetail/?id=${a._id}`}>

              <div className="shop-card-img">
                <img
                  src={`${a.productfile}`}
                  alt="product"
                  className="shopimg"
                />
              </div>
               </Link>

              <div class="rate_wrap w-100 mb-12 fs-12">
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
                                        <i class="icon-star text-star"></i>
        
 
         </div>

           
                <p className="shop-title">{a.productname}</p>
                <p className="shop-title"><b>${Number(a.productprice).toLocaleString("en-Us")}</b></p>
            

           

          </div>

        </div>
      ))}

    </div>

  </div>
</div>






                                                                         
                                                                            {/* <!-- /Box Icon -->
                                                                               <!-- Footer --> */}
                                                                           
                     
                                              </>


)


}