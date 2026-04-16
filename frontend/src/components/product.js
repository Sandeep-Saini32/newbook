import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'

export const Product = () => {

    //    const[productfile,setproductfile]=useState("")

    const [savecategories, setsavecategories] = useState([])

    const [productname, setproductname] = useState("")
    const [productprice, setproductprice] = useState("")
    const [productdetail, setproductdetail] = useState("")
    const [productfile, setproductfile] = useState("")
    const [catid, setcatid] = useState("")
    

// const[homeoption,sethomeoption]=useState("")


    // for edit
    const[oldpic,setoldpic]=useState("")
    const[id,setid]=useState("")


    useEffect(() => {
        gett()
    }, [])

    const gett = async () => {
        const savedata = await fetch("http://localhost:9000/api/getfile", {
            method: "Get"

        })

        if (savedata) {
            const sv = await savedata.json()

            if (sv.statuscode === 1) {
                // alert("data fetched")
                setsavecategories(sv.alldata)
                proget()

            }
            else {
                // alert("data not fetched")
            }

        }

    }


    const productadd = async (e) => {
        e.preventDefault()


const productdata= new FormData()
productdata.append("catid",catid)

productdata.append("productname",productname)
productdata.append("productprice",productprice)
productdata.append("productdetail",productdetail)
productdata.append("pic",productfile)

// productdata.append("homeoption",homeoption)


const result=await fetch("http://localhost:9000/api/productinfo",{
method:"Post",
body:productdata


})


        if (result.ok) {
            const res = await result.json()
            if (res.statuscode === 1) {
                // alert("product data stored")
Swal.fire({
  title: 'product',
  text: 'Your product is added',
  icon: 'success',
  confirmButtonText: 'Okay'
})
  
setproductname("")
setproductprice("")
setproductdetail("")
setproductfile("")
setcatid('')


                console.log(productdata)
                proget()
            }
            else {
                alert("product data not stored")
            }
        }
        else {
            alert("product error")
        }

    }




    // for showing product
   
   const [savepro,setsavepro]=useState({})
   
    useEffect(()=>{

proget()

    },[])


    const proget=async()=>{

const savedata=await fetch("http://localhost:9000/api/getdata",{
    method:"Get"
})

if(savedata){
    const sv= await savedata.json()

if(sv.statuscode===1){
    // alert("pro data fetched")
    setsavepro(sv.alldata)
    // proget()
}
else{
    // alert("pro data not fetched")
}

    }
    }

// for delete
//     const prodell=async(id)=>{

//    const result = await fetch(`http://localhost:9000/api/prodell/${id}`, {
//             method: "Delete"

//         })

//        if(result){
//      const prores=await result.json()
// if(prores.statuscode===1){
//     // alert("pro deleted")
// Swal.fire({
//   title: "Are you sure?",
//   text: "You won't be able to revert this!",
//   icon: "warning",
//   showCancelButton: true,
//   confirmButtonColor: "#3085d6",
//   cancelButtonColor: "#d33",
//   confirmButtonText: "Yes, delete it!"
// })

// .then((result) => {
//   if (result.isConfirmed) Swal.fire({
//     title: "Deleted!",
//     text: "Your file has been deleted.",
//     icon: "success"
//   });
// });
    
// proget()

// }
// else{
//     alert("pro not deletd")
// }

// }
// else{
//     alert("deletd error")
// }
         
// }

const prodell = async (id) => {

  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  })
  .then(async (result) => {

    if (result.isConfirmed) {
      try {
        const response = await fetch(`http://localhost:9000/api/prodell/${id}`, {
          method: "DELETE"
        });

        if (response.ok) {
          const prores = await response.json();

          if (prores.statuscode === 1) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            });

            proget();
           }
            else {
            Swal.fire("Error", "Product not deleted", "error");
          }

        }
        // main 
       

      } 
      catch (error) {
        Swal.fire("Error", "Something went wrong", "error");
      }
    } else {
      Swal.fire({
        title: "Cancelled",
        text: "Your product is safe 🙂",
        icon: "info"
      });
    }

  });
};



// for edit
       
const proedit=(data)=>{
   
    
    // setcatid(data.savecategories)
setproductname(data.productname)
setproductprice(data. productprice)
setproductdetail(data. productdetail)
setproductfile(data.productfile)
setid(data._id)
setoldpic(data.productfile)

}

const proup=async(e)=>{
    e.preventDefault()


const formdata=new FormData()

formdata.append("oldpic",oldpic)

// formdata.append("savecategories",savecategories)
formdata.append("productname",productname)
formdata.append("productprice",productprice)
formdata.append("productdetail",productdetail)
formdata.append("pic",productfile)
// formdata.append("homeoption",homeoption)

const result=await fetch(`http://localhost:9000/api/proupdate/${id}`,{
method:"PUT",
body:formdata
})

if(result.ok){
    const res=await result.json()

    if(res.statuscode===1){
        // alert("pro data updated")
Swal.fire({
  title: 'product',
  text: 'Your productdata is updated',
  icon: 'success',
  confirmButtonText: 'Okay'
})

setproductname("")
setproductprice("")
setproductdetail("")
setproductfile("")
setcatid('')

        proget()
    }

else{
    // alert(" prodata not updated")
}

}
else{
    // alert("pro update error")
}

}




    
return (
        <>

            <section class="s-page-title">
                <div class="container">
                    <div class="content">
                        <h1 class="title-page">Products</h1>
                        <ul class="breadcrumbs-page">
                            <li><Link to="/"class="h6 link">Home</Link></li>
                            <li class="d-flex"><i class="icon icon-caret-right"></i></li>
                            <li>
                                <h6 class="current-page fw-normal"><Link to="/categories">Categories</Link>  </h6>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="flat-spacing">
                <div class="container">
                    <div class="s-log">
                        <div class="col-left">
                            <h1 class="heading">Add Products</h1>
                            <form class="form-login" style={{width:"50%"}}>
                                <div class="list-ver">
                                    <select onChange={(e)=>setcatid(e.target.value)}>
                                        <option value={''}>category name</option>



                                        {
                                            savecategories.map((a) =>
                                                <option value={a._id} >{a.catname}</option>

                                            )


                                        }</select>


                                


                                    <input type="text" value={productname} onChange={(e) => setproductname(e.target.value)} placeholder="Enter product name *" />
                                    <input type="text" value={productprice} onChange={(e) => setproductprice(e.target.value)} placeholder="Enter product price *" />
                                    <input type="text" value={productdetail} onChange={(e) => setproductdetail(e.target.value)} placeholder="Enter product details *" />

                                      {/* <select>
                                       
                            

                                     <option>Bestsellers</option>
                                     <option>Best Fiction books</option>
                                     <option>Best literary books</option>


                                      </select> */}

                                    <fieldset class="password-wrapper mb-8">


                                        <input class="password-field" type="file" onChange={(e) => setproductfile(e.target.files[0])} />
                                        <span class="toggle-pass icon-show-password"></span>
                                    </fieldset>

                            {/* <span><h5>Show products on Homepage</h5> 
                             < select value={homeoption} onChange={(e)=>sethomeoption(e.target.value)}>
                             <option value="">select option</option>
                                       <option value="Bestseller">Bestsellers</option>
                                     <option value="Best fiction books">Best Fiction books</option>
                                     <option value="Best literary books" >Best literary books</option>


                                      </select>
                                      </span> */}
                                    
                                </div>

                                <button type="submit" class="tf-btn animate-btn w-100" onClick={productadd}>
                                    add products
                                </button>

                                 <button type="button" class="tf-btn animate-btn w-100" onClick={proup}>
                                Update
                                </button>
                            </form>
                        </div>
                        <div class="col-right">
                            <h1 class="heading">Product Managment</h1>
                            <p class="h6 text-sub">
                               Use this section to manange your inventory efficiently.You can add new products,edit product details,update prices,
                               and manage categories.<br/>changes made here you will reflect immediately on the customer-facing store. 
                            </p>
                            <h6 class="fw-semibold mb-16">This panel allows adminstators to manage store products</h6>
                            
                        </div>
                    </div>
                </div>
            </section>



      {
        savepro.length>0?<>

 <section class="flat-spacing pt-0">
                <div class="container">
                    <div class="sect-title type-4">
                        <h2 class="s-title fw-normal">All Books</h2>

                        {/* <a href="shop-default.html" class="tf-btn-line">
                            View All Books
                        </a> */}
                    </div>
                    {/* <div dir="ltr" class="swiper tf-swiper  " >
                        <div class="swiper-wrapper">

                            <div class="" style={{ display:"flex",gap:"30px",flexWrap:"wrap",justifyContent:"center" }} >
                                
                            { savepro.map((a, index) =>
                                        <div class="card-product style-5" key={index} >
                                            <div class="card-product_wrapper aspect-ratio-0 d-flex">
                                                <a href="" class="product-img">
                                                    <img class="img-product lazyload" src={`/uploads/${a.productfile}`} alt="Product" style={{ height: "200px", width: "200px" }} />
                                                <div style={{textAlign:"center"}}>
                                                    <p>{a.productname}</p>
                                                    <p>${Number(a.productprice).toLocaleString("en-US")}</p>
                                                    <p>{a.productdetail}</p>
                                                      <p>{a.sethomeoption}</p>
                                                   
                                                    </div>

                           
                                                 
                                                </a>


                                                <div class="product-action_bot">
                                                    <button href="" class="tf-btn animate-btn type-small-4" onClick={()=>{proedit(a)}}>
                                                        edit

                                                    </button>
                                                    <button href=""  class="tf-btn animate-btn type-small-4"onClick={()=>{prodell(a._id)}}>
                                                        delete

                                                    </button>
                                                </div>

                                            </div>

                                        </div>)
                                  
                                
                                }
                            </div>


                        </div>
                    </div> */}



<div className="shop-products-section">
  <div className="container">

    <div className="row" >

      {
      savepro.map((a, index) => (
        <div 
          className="col-lg-3 col-md-4 col-6 mb-4"   
          key={index}
        //   data-aos="fade-up"
        >

          <div className="shop-card">

       

              <div className="shop-card-img">
                     <Link to={`/prodetail/?id=${a._id}`}>
                <img
                  src={`/uploads/${a.productfile}`}
                  alt="product"
                  className="shopimg"
                />
                 </Link>
                {/* <div class="product-action_bot"> */}
                                                    <button href="" class="tf-btn animate-btn type-small-4" onClick={()=>{proedit(a)}}>
                                                        edit

                                                    </button>
                                                    <button href=""  class="tf-btn animate-btn type-small-4"onClick={()=>{prodell(a._id)}}>
                                                        delete

                                                    </button>
                                                </div>




              {/* </div> */}
                <p className="shop-title">{a.productname}</p>
                <p className="shop-title"><b>${Number(a.productprice).toLocaleString("en-Us")}</b></p>
            

           

          </div>

        </div>
      ))}

    </div>

  </div>
</div>





                
                
                </div>
</section>

        </>:<><p>no product found</p></>
      }


       
        </>


    )



}