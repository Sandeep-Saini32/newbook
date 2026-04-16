import { Link } from "react-router-dom"

export const About=()=>{

return(

<>
        <section class="page-title-image" >
            <div class="page_image overflow-hidden"  >
                <img class="lazyload ani-zoom" src="images/products/book/banner-1.jpg" alt="Banner" style={{height:"100vh"}}/>
            </div>
            <div class="page_content">
                <div class="container">
                    <div class="content">
                        <h1 class="heading fw-bold">
                        YOUR ONE STOP DESTINATION <br class="d-none d-sm-block"/>
                            FOR KNOWLEDGE,STORIES  <br class="d-none d-sm-block"/>
                            AND INSPIRATION
                        </h1>
                
                                   <Link to={"shoppingpage"} class="tf-btn animate-btn">
                            Our shop
                            
                            <i class="icon icon-caret-right"></i>
                                </Link>
                      
                      
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- /Page Title -->
        <!-- Hero Section --> */}
        <section class="s-intro flat-spacing">
            <div class="container">
                <p class="brand-name">Ochaka. Store</p>
                <div class="box-intro">
                    <h4 class="slogan fw-normal">BOOKS FOR EVERY MIMD AND EVERY MOOD</h4>
                    <p class="intro-text">
                    <p>
We offer a wide range of books including novels, academic, and self-development titles.  
Our mission is to inspire readers and make knowledge accessible to everyone.  
We carefully select high-quality books that educate, entertain, and motivate every reader.  
Discover your next favorite book and enjoy a meaningful reading experience with us today.
</p>
                    </p>
                </div>
            </div>
        </section>
        {/* <!-- /Hero Section -->
        <!-- About --> */}
        <section class="s-about">
            <div class="container">
                <div class="tf-grid-layout tf-col-2 md-col-3 xl-col-4">
                    <div class="item_2 image d-none d-md-block">
                        <img class="lazyload" src="images/products/book/about-2.jpg" />
                    </div>
                    <div class="wd-2-cols">
                        <div class="content-blog text-md-start">
                            <div class="d-md-inline-flex">
                                <div class="wg-curve-text">
                                    <span class="icon">
                                        <svg width="32" height="32" viewbox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M25.0001 8V21C25.0001 21.2652 24.8947 21.5196 24.7072 21.7071C24.5196 21.8946 24.2653 22 24.0001 22C23.7349 22 23.4805 21.8946 23.293 21.7071C23.1054 21.5196 23.0001 21.2652 23.0001 21V10.4137L8.70757 24.7075C8.51993 24.8951 8.26543 25.0006 8.00007 25.0006C7.7347 25.0006 7.48021 24.8951 7.29257 24.7075C7.10493 24.5199 6.99951 24.2654 6.99951 24C6.99951 23.7346 7.10493 23.4801 7.29257 23.2925L21.5863 9H11.0001C10.7349 9 10.4805 8.89464 10.293 8.70711C10.1054 8.51957 10.0001 8.26522 10.0001 8C10.0001 7.73478 10.1054 7.48043 10.293 7.29289C10.4805 7.10536 10.7349 7 11.0001 7H24.0001C24.2653 7 24.5196 7.10536 24.7072 7.29289C24.8947 7.48043 25.0001 7.73478 25.0001 8Z" fill="black"></path>
                                        </svg>

                                    </span>
                                    <div class="text-rotate" data-text="READ • LEARN • GROW • REPEAT •">
                                        <div class="circle">
                                            <div class="text" id="circularText"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="box-intro">
                                <h4 class="slogan fw-normal">BRINGING BOOKS CLOSER TO EVERY READER</h4>
                                <p class="intro-text">
                                   We aim to make quality books accessible to everyone, offering a wide range of genres that inspire learning, creativity, and personal growth for readers of all ages.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="item_1 image">
                        <img class="lazyload" src="images/products/book/about-1.jpg" />
                    </div>
                    <div class="d-md-none d-xl-block">
                        <img class="lazyload d-md-none" src="images/products/book/about-2.jpg" />
                    </div>
                    <div class="item_3 image">
                        <img class="lazyload" src="images/products/book/about-4.jpg"/>
                    </div>
                    <div class="item_4 image">
                        <img class="lazyload" src="images/products/book/about-3.jpg"/>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- /About -->
        <!-- Brand Story --> */}
        <section class="flat-spacing">
            <div class="container">
                <div class="sect-title text-center">
                    <h1 class="s-title mb-8">Brand Story</h1>
                    <p class="s-subtitle h6">A place where every book opens a new world of learning and imagination</p>
                </div>
                <div class="box-intro has-mb text-center">
                    <h4 class="slogan fw-normal"> YOUR ONE STOP DESTINATION 
                            FOR KNOWLEDGE,STORIES  
                            AND INSPIRATION</h4>
                    <p class="intro-text">
                      We provide a carefully curated collection of books across genres, helping readers discover knowledge, explore new 
                       <br class="d-none d-xxl-block"/>
                      ideas, and enjoy meaningful reading experiences every single day.                
                        
                        
                       
                    </p>
                </div>
                {/* <div dir="ltr" class="swiper tf-swiper" data-preview="3" data-tablet="2" data-mobile-sm="2" data-mobile="1" data-space-lg="48" data-space-md="15" data-space="10" data-pagination="1" data-pagination-sm="1" data-pagination-md="2" data-pagination-lg="3">
                    <div class="swiper-wrapper"> */}
                        {/* <!-- item 1 --> */}
                        {/* <div class="swiper-slide"> */}
                        <div className="row">
                         <div class="col-12 col-sm-6 col-md-4">
                            <div class="wg-icon-image hover-img">
                                <div class="image img-style">
                                    <img class="lazyload" src="images/products/book/about-6.jpg"style={{height:"650px"}}/>
                                </div>
                                <div class="box-icon">
                                    <span class="icon">
                                       <img src="images/products/book/icon-2.png" width="60" />
                                    </span>
                                    <div class="content">
                                        <h3 class="caption fw-normal">Wide Range of Books</h3>
                                        <p class="sub-text">Explore novels, academic, and self development books easily</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        {/* </div> */}
                        {/* <!-- item 2 --> */}
                        {/* <div class="swiper-slide"> */}
                         <div class="col-12 col-sm-6 col-md-4">
                            <div class="wg-icon-image hover-img">
                                <div class="image img-style">
                                    <img class="lazyload" src="images/products/book/about-7.jpg" style={{height:"650px"}}/>
                                </div>
                                <div class="box-icon">
                                    <span class="icon">
                                       
                                         <img src="images/products/book/icon-1.png" width="60" />
                                    </span>
                                    <div class="content">
                                        <h3 class="caption fw-normal">Quality Reading Experience</h3>
                                        <p class="sub-text">Carefully selected books to ensure best reading experience</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                        {/* </div> */}
                        {/* <!-- item 3 --> */}
                        {/* <div class="swiper-slide"> */}
                         <div class="col-12 col-sm-6 col-md-4">
                            <div class="wg-icon-image hover-img">
                                <div class="image img-style">
                                    <img class="lazyload" src="images/products/book/about-8.jpg" />
                                </div>
                                <div class="box-icon">
                                    <span class="icon">
                                   
                                       <img src="images/products/book/icon-3.png" width="60" />
                                    </span>
                                    <div class="content">
                                        <h3 class="caption fw-normal">Inspiring Knowledge Growth</h3>
                                        <p class="sub-text">Books that help you learn, grow, and succeed</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                            </div>
                        {/* </div> */}
                    {/* </div> */}
                    <div class="sw-dot-default tf-sw-pagination"></div>
                {/* </div> */}
            </div>
        </section>
        {/* <!-- /Brand Story -->
        <!-- Customer Review --> */}
        <section class="flat-spacing pt-0">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 offset-lg-2">
                        <div class="flat-spacing pt-0">
                            <span class="br-line d-flex"></span>
                        </div>
                        <div class="sect-title text-center">
                            <h1 class="s-title mb-8">Customer Reviews</h1>
                            <p class="s-subtitle h6">Hear from our readers about their experience, satisfaction, and love for our books</p>
                        </div>
                        <div class="slider-thumb-wrap">
                            <div dir="ltr" class="swiper tf-swiper slider-content-thumb">
                                <div class="swiper-wrapper">
                                    {/* <!-- item 1 --> */}
                                    <div class="swiper-slide">
                                        <div class="testimonial-V05">
                                            <div class="tes_icon">
                                                <i class="icon icon-block-quote"></i>
                                            </div>
                                            <div class="tes_author">
                                                <p class="author-name h4">Emily Jhonson</p>
                                                <i class="author-verified icon-check-circle"></i>
                                            </div>
                                            <div class="rate_wrap">
                                                <i class="icon-star text-star"></i>
                                                <i class="icon-star text-star"></i>
                                                <i class="icon-star text-star"></i>
                                                <i class="icon-star text-star"></i>
                                                <i class="icon-star text-star"></i>
                                            </div>
                                            <p class="tes_text h4">
                                                “I found an amazing collection of books here, covering a wide range of genres and interests.
The quality is excellent and the overall experience was smooth and satisfying.
I would highly recommend this bookstore to anyone who loves reading. “
                                            </p>
                                        </div>
                                    </div>
                                    {/* <!-- item 2 --> */}
                                    <div class="swiper-slide">
                                        <div class="testimonial-V05">
                                            <div class="tes_icon">
                                                <i class="icon icon-block-quote"></i>
                                            </div>
                                            <div class="tes_author">
                                                <p class="author-name h4">Mas Shin</p>
                                                <i class="author-verified icon-check-circle"></i>
                                            </div>
                                            <div class="rate_wrap">
                                                <i class="icon-star text-star"></i>
                                                <i class="icon-star text-star"></i>
                                                <i class="icon-star text-star"></i>
                                                <i class="icon-star text-star"></i>
                                                <i class="icon-star text-star"></i>
                                            </div>
                                            <p class="tes_text h4">
                                                “Our experience with ACIS has been excellent. Their support team is always quick to respond and very
                                                professional. They handle all questions and issues with great care and efficiency, making them a
                                                reliable partner we truly appreciate.“
                                            </p>
                                        </div>
                                    </div>
                                    {/* <!-- item 3 --> */}
                                    <div class="swiper-slide">
                                        <div class="testimonial-V05">
                                            <div class="tes_icon">
                                                <i class="icon icon-block-quote"></i>
                                            </div>
                                            <div class="tes_author">
                                                <p class="author-name h4">Sil Vox</p>
                                                <i class="author-verified icon-check-circle"></i>
                                            </div>
                                            <div class="rate_wrap">
                                                <i class="icon-star text-star"></i>
                                                <i class="icon-star text-star"></i>
                                                <i class="icon-star text-star"></i>
                                                <i class="icon-star text-star"></i>
                                                <i class="icon-star text-star"></i>
                                            </div>
                                            <p class="tes_text h4">
                                                “ACIS consistently provides fast, professional support whenever we need it. Their team is
                                                knowledgeable
                                                and always ready to help with any issue, big or small. We really appreciate their reliable
                                                partnership.“
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="slider-btn-thumbs">
                                {/* <!-- Btn 1 --> */}
                                <div class="btn-thumbs active">
                                    <img src="images/avatar/avatar-1.jpg" alt="Avatar"/>
                                </div>
                                {/* <!-- Btn 2 --> */}
                                <div class="btn-thumbs">
                                    <img src="images/avatar/avatar-2.jpg" alt="Avatar"/>
                                </div>
                                {/* <!-- Btn 3 --> */}
                                <div class="btn-thumbs">
                                    <img src="images/avatar/avatar-3.jpg" alt="Avatar"/>
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