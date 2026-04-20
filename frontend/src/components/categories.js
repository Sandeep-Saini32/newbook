import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Swal from 'sweetalert2'

export const Categories = () => {

    const [name, setcategoryname] = useState("")
    const [file, setfile] = useState("")
    const [id, setid] = useState("")
    const [oldpic, setoldpic] = useState("")

    const [savecategories, setsavecategories] = useState([""])

  
    useEffect(() => {
        gett()

    }, [])
    const added = async (e) => {
        e.preventDefault()

        const formdata = new FormData()

        formdata.append("name", name)

    formdata.append("pic", file)

        const result = await fetch("https://newbook-fd60.onrender.com/api/addfile", {
            method: "Post",
            body: formdata


        })


        if (result.ok) {
            const res = await result.json()
            if (res.statuscode === 1) {
                // alert("category added")
Swal.fire({
  title: 'Category',
  text: 'Your category is added',
  icon: 'success',
  confirmButtonText: 'okay'
})
setcategoryname("")


                gett()
            }
            else {
                // alert("category not added")
            }
        }

        else {
            // alert("error occured")
        }


    }

    const gett = async () => {
        const savedata = await fetch("https://newbook-fd60.onrender.com/api/getfile", {
            method: "Get"

        })

        if (savedata) {
            const sv = await savedata.json()

            if (sv.statuscode === 1) {
                // alert("data fetched")
                setsavecategories(sv.alldata)

            }
            else {
                // alert("data not fetched")
            }

        }



    }


//     const dell=async(id)=>{

//           const result = await fetch(`https://newbook-fd60.onrender.com/api/dell/${id}`, {
//             method: "Delete"


//         })

//        if(result){
// const res=await result.json()
// if(res.statuscode===1){
//     // alert("category deleted")
// Swal.fire({
//   title: "Are you sure?",
//   text: "You won't be able to delete this!",
//   icon: "warning",
//   showCancelButton: true,
//   confirmButtonColor: "#3085d6",
//   cancelButtonColor: "#d33",
//   confirmButtonText: "Yes, delete it!"
// }).then((result) => {
//   if (result.isConfirmed) Swal.fire({
//     title: "Deleted!",
//     text: "Your file has been deleted.",
//     icon: "success"
//   });
// });

//     gett()  

// }
// else{
//     // alert("category not deletd")
// }

// }
// else{
//     // alert("deletd error")
// }
         
// }

const dell = async (id) => {

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
        const response = await fetch(`https://newbook-fd60.onrender.com/api/dell/${id}`, {
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

            gett();
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
        text: "Your product is safe ",
        icon: "info"
      });
    }

  });
};



const edit=(data)=>{
setoldpic(data.file)
setcategoryname(data.catname)
setid(data._id)


}

const up=async(e)=>{
        e.preventDefault()

        const formdata = new FormData()

    formdata.append("oldpic", oldpic)

        formdata.append("name", name)

    formdata.append("pic", file)


const result=await fetch(`https://newbook-fd60.onrender.com/api/upcat/${id}`,{
method:"Put",
body:formdata,

})
if(result.ok){
    const res=await result.json()
    if(res.statuscode==1){
        // alert("data updated")\
        Swal.fire({
  title: 'Category',
  text: 'Your category is updated',
  icon: 'success',
  confirmButtonText: 'Okay'
})

setcategoryname("")



        gett()
    }
    else{
        alert("data not updated")
    }
}
else{
    alert("updated error")
}

}




    return (
        <>

      

            <section class="s-page-title">
                <div class="container">
                    <div class="content">
                        <h1 class="title-page">Add Categories</h1>
                        <ul class="breadcrumbs-page">
                            <li><a href="index.html" class="h6 link">Home</a></li>
                            <li class="d-flex"><i class="icon icon-caret-right"></i></li>
                            <li>
                             <Link to="/product"> <h6 class="current-page fw-normal">Products</h6></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section class="flat-spacing">
                <div class="container">
                    <div class="s-log">
                        <div class="col-left">
                            <h1 class="heading">Add Categories</h1>
                            <div class="form-login" >
                                <div class="list-ver">

                                    <input type="text" placeholder="Enter Category Name *" required="" value={name} onChange={(e) => setcategoryname(e.target.value)} />
                                   
                                    <fieldset class="password-wrapper mb-8">
                                        <input class="password-field" type="file" placeholder="Password *" required="" onChange={(e) => setfile(e.target.files[0])} />

                                    </fieldset>

                                </div>


                                <button type="button" class="tf-btn animate-btn w-100" onClick={added} >
                                    Add
                                </button>
                                 <button type="button" class="tf-btn animate-btn w-100" onClick={up} >
                                    Update
                                </button>


                            </div>
                        </div>
                        <div class="col-right">
                            <h1 class="heading">Category Managment</h1>
                            <p class="h6 text-sub">
                                Use this section to create,update,and manage update product categories.Categories help organize products and 
                                improve the shopping experience for users.
                            </p>
                            <div class="get-discout-wrap">
                                <h6 class="fw-semibold mb-16">Add & Manage Categories</h6>
                              
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="flat-spacing pt-0">
                <div class="container">
                    <div class="sect-title type-4">
                        <h2 class="s-title fw-normal">All Categories</h2>

{/*                       
                        <a href="shop-default.html" class="tf-btn-line">
                            View All Books
                        </a> */}
                    
                    </div>
                  
                                
                                
                                {

                                
                                    savecategories.length>=1?<>
                                    
                                    {/* { savecategories.map((a, index) =>
                                        <div class="card-product style-5" key={index} >
                                            <div class="card-product_wrapper aspect-ratio-0 d-flex">
                                                <a href="" class="product-img">
                                                    <img class="img-product lazyload" src={`/uploads/${a.file}`} alt="Product" style={{ height: "300px", width: "200px" }} />
                                                   <div style={{textAlign:"center"}}>
                                                     <p>{a.catname}  </p>
                                                     </div>
                                                    
                                                    
                                                </a>


                                                <div class="product-action_bot">
                                                    <a href="#shoppingCart"  class="tf-btn animate-btn type-small-4" onClick={()=>{edit(a)}}>
                                                        Edit

                                                    </a>

                                                    <a   class="tf-btn animate-btn type-small-4"onClick={()=>{dell(a._id)}}>
                                                        Delete

                                                    </a>

                                                    
                                                </div>

                                            </div>

                                        </div>)} */}

                                      
                                     <div className="shop-products-section">
  <div className="container">

    <div className="row" >

      {
      savecategories.map((a, index) => (
        <div 
          className="col-lg-3 col-md-4 col-6 mb-4"   
          key={index}
        //   data-aos="fade-up"
        >

          <div className="shop-card">

       

              <div className="shop-card-img">
                   <Link to={`/shopcat/?id=${a._id}`}>
                <img
                  src={`${a.file}`}
                  alt="product"
                  className="shopimg"
                />
                 </Link>
                {/* <div class="product-action_bot"> */}
                                                    <button href="" class="tf-btn animate-btn type-small-4" onClick={()=>{edit(a)}}>
                                                        edit

                                                    </button>
                                                    <button href=""  class="tf-btn animate-btn type-small-4"onClick={()=>{dell(a._id)}}>
                                                        delete

                                                    </button>
                                                </div>




              {/* </div> */}
              
                <p className="shop-title"><b>{a.catname}</b></p>
              
            

           

          </div>

        </div>
      ))}

    </div>

  </div>
</div>


                                        





                                        </>:<><p>Add categories</p></>
                                  
                                
                                }
                           
                   
                </div>





            </section>


            {
                // savecategories.map((a,index)=>




                // )


            }





        </>


    )


}