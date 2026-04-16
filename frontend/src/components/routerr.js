import { Routes,Route } from "react-router-dom"
import { Landingpage } from "./landingpage"
import { Register } from "./register"
import { Login } from "./login"
import { Categories } from "./categories"
import { Product } from "./product"
import { Shoppingpage } from "./shoppingpage"
import { Prodetail } from "./prodetail"
import { Cart } from "./cart"
import { Ufooter } from "./ufooter"
import { Checkout } from "./checkout"
import { Invoice } from "./invoice"
import { Wishlist } from "./wishlist"
import { Customerdata, Userdata } from "./customerdata"
import { Userorder } from "./userorder"
import { Contact } from "./contact"
import { Usercontact } from "./usercontact"
import { About } from "./about"
import { Faq } from "./faq"

import { Aheader } from "./adminheader"
import { Admindash } from "./admindash"
import { Shopcat } from "./shopcat"




export const Routerr=()=>{


return(
    <>
    <Routes>

<Route path="/" element={<Landingpage/>} />
<Route path="/signup" element={<Register/>} />
<Route path="/login" element={<Login/>} />
<Route path="/categories" element={<Categories/>}></Route>
<Route path="/product" element={<Product/>}></Route>
<Route path="/shoppingpage" element={<Shoppingpage/>}></Route>
<Route path="/prodetail" element={<Prodetail/>}></Route>
<Route path="/cart" element={<Cart/>}></Route>
<Route path="/ufooter" element={<Ufooter/>}></Route>
<Route path="/checkout" element={<Checkout/>}></Route>
<Route path="/invoice" element={<Invoice/>}></Route>
<Route path="/wishlist" element={<Wishlist/>}></Route>
<Route path="/customerdata" element={<Customerdata/>}></Route>
<Route path="/userorder" element={<Userorder/>}></Route>
  <Route path="/contact" element={<Contact/>}></Route> 
 <Route path="/usercontact" element={<Usercontact/>}></Route>  
 <Route path="/about" element={<About/>}></Route>  
 <Route path="/faq" element={<Faq/>}></Route>  

 <Route path="/adminheader" element={<Aheader/>}></Route>  
 <Route path="/admindash" element={<Admindash/>}></Route>  
  <Route path="/shopcat" element={<Shopcat/>}></Route>


</Routes>
    </>
)


}