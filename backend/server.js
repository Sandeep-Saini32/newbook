const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const multer=require("multer")
const fs= require("fs")
const { useEffect } = require("react")
const { runInNewContext } = require("vm")
const app = express()

app.use(cors())
app.use(express.json())

app.listen(9000, () => {
    console.log("server running")

})

mongoose.connect("mongodb://127.0.0.1:27017/bookstore")

    .then(() => {
        console.log("connected to mongodb")
    })
    .catch(() => {
        console.log("not connected to mongodb")
    })

    // FOR SIGNUP
const signupSchema = mongoose.Schema({
    email: String,
    pass: String,
    userType:String,
    name:String,Number,
    phone:Number,



})



const signupModel = mongoose.model("signup", signupSchema)

app.post("/api/signup", async (req, res) => {

    const show = await signupModel({
        email: req.body.email,
        pass: req.body.pass,
        userType:"user",
        name:req.body.name,
        phone:req.body.phone,
       
    })

    const sh = await show.save()

    if (sh) {
        res.send({ statuscode: 1 })
    }

    else {
        res.send({ statuscode: 0 })
    }

})

// FOR LOGIN

app.post("/api/loginpage", async (req, res) => {

    const save = await signupModel.findOne({ email:req.body.loginemail })

    const logpass=req.body.loginpass

    if (save.pass===logpass) {
        
        res.send({ statuscode: 1,role:save.userType , id:save._id, email:save.email,name:save.name})
    }

    else {
      
        res.send({ statuscode: 0 })
    }
})





//multer setup
let pic
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/uploads')
    },

    filename:function(req,file,cb){
       pic=Date.now()+file.originalname;
       cb(null,file.fieldname+"-"+pic) 
    }
})

const upload=multer({storage:storage})




//category api and schema
const categoriesschema=mongoose.Schema({
catname:String,
file:String,


})

// for category

const categorymodel=mongoose.model("categories",categoriesschema,"categories")

app.post("/api/addfile",upload.single("pic"),async(req,res)=>{

    if(!req.file){
        pic="default.webp"
    }
else{
    pic=req.file.filename
}
let newrecord=new categorymodel({
catname:req.body.name,
file:pic

})
let result=await newrecord.save()
if(result){
    res.send({statuscode:1})

}
else{
    res.send({statuscode:0})
}
}

)

app.get("/api/getfile",async(req,res)=>{

const savedata=await categorymodel.find()

if(savedata){
    res.send({statuscode:1 ,alldata:savedata})
    console.log(savedata)
}

else{
    res.send({statuscode:0})
}


})


app.delete("/api/dell/:id",async(req,res)=>{

    const idd={_id:req.params.id}
const result=await categorymodel.deleteOne({_id:req.params.id})
console.log(idd)
console.log(result)
if(result.deletedCount===1){
res.send({statuscode:1})

}
else{
    res.send({statuscode:0})
}


})
 

// For update category with fs package


app.put("/api/upcat/:id",upload.single("pic"),async(req,res)=>{
if(!req.file){
    pic=req.body.oldpic
}
else{
    if( pic=req.file.filename){
  fs.unlink("public/uploads/"+req.body.oldpic,(err)=>{
        if(err){
            console.log("failed to unlink",err)
        }
        else{
            console.log("file unlinked")
        }
    })
    }
  
}

const result =await categorymodel.updateOne({_id:req.params.id},
    {$set:{
    catname:req.body.name,
file:pic

}})
 
if(result){
    res.send({statuscode:1})
}
else{
    res.send({statuscode:0})
}

})






// FOR PRODUCT

const productSchema=mongoose.Schema({
 Category:String,
 productname:String,
 productprice:Number,String,
 productdetail:String,
 productfile:String,
Addedon:String


})

const productmodel=mongoose.model("product",productSchema)

app.post("/api/productinfo",
    upload.single("pic"),async(req,res)=>{

let pic
    if(!req.file){
    pic="default.webp"
}
else{
    pic=req.file.filename
}



let newrecord= new productmodel({
     Category:req.body.catid,
productname:req.body.productname,
productprice:req.body.productprice,
productdetail:req.body.productdetail,
productfile:pic,
Addedon:new Date(),



})

let result=await newrecord.save()

if(result){
    res.send({statuscode:1})
}
else{
    res.send({statuscode:0})
}

})

// shopping page
app.get("/api/getdata",async(req,res)=>{

const saveprodata=await productmodel.find()


if(saveprodata){
    res.send({statuscode:1,alldata:saveprodata})
   
}

else{
    res.send({statuscode:0})
}

})

app.delete("/api/prodell/:id",async(req,res)=>{


const result=await productmodel.deleteOne({_id:req.params.id})

console.log(result)

if(result.deletedCount===1){
    res.send({statuscode:1})
}
else{
    res.send({statuscode:0})
}

})



app.put("/api/proupdate/:id",upload.single("pic"),async(req,res)=>{

if(!req.file){
    pic=req.body.oldpic
}

else{
    if(req.body.oldpic){
            pic=req.file.filename
    fs.unlink("public/uploads"+req.body.oldpic,(error)=>{

if(error){
    console.log("propic failde to unlnk",error)
}
        
else{
    console.log("file unlinked")
}

    })
    }
 
}

const result=await productmodel.updateOne({_id:req.params.id},{

$set:{

    // Category:req.body.catid,
productname:req.body.productname,
productprice:req.body.productprice,
productdetail:req.body.productdetail,
productfile:pic

}

    })

if(result.modifiedCount==1){
    res.send({statuscode:1})
}
else{
    res.send({statuscode:0})
}

})



app.get("/api/getproduct/:id",async(req,res)=>{

const getprodata=await productmodel.find({ Category:req.params.id})


if(getprodata){
    res.send({statuscode:1,alldata:getprodata})
    console.log(getprodata)
}

else{
    res.send({statuscode:0})
}

})


// for getting productdetail

app.get("/api/getproductdetail/:id",async(req,res)=>{

const getprodatadetail=await productmodel.findOne({_id:req.params.id})


if(getprodatadetail){
    res.send({statuscode:1,alldata:getprodatadetail})
    console.log(getprodatadetail)
}

else{
    res.send({statuscode:0})
}

})

// for saving cart on productdetailpage

const cartSchema = mongoose.Schema({
    user:String,
    name: String,
    price:Number,
    file:String,
    qnt:Number

})

const cartmodel=mongoose.model("cart",cartSchema)

app.post("/api/cartinfo", async(req,res)=>{

const result=cartmodel({
user:req.body.userid,
name:req.body.name,
price:req.body.price,
file:req.body.file,
qnt:req.body.qnt
})

const resp=result.save()

if(resp){

    res.send({statuscode:1})
    
}
else{

res.send({statuscode:0})

}

})




// for getting savecart on cartpage

app.get("/api/savecart/:id",async(req,res)=>{

const getcart= await cartmodel.find({user:req.params.id})
if(getcart){
res.send({statuscode:1,allcartdata:getcart})
console.log(getcart)
}

else{
    res.send({statuscode:0})
}

})

// app.put("/api/updatecart/:id",async(req,res)=>{

// const id=req.params.id
// const{qnt}=req.body

// await cartmodel.findByIAndUpdate(id,{qnt:qnt}

//     res.send({statuscode:1})
// )

// })


app.put("/api/updatecart/:id", async(req,res)=>{
try{

const id = req.params.id
const { qnt } = req.body

await cartmodel.findByIdAndUpdate(id, { qnt })

res.send({ statuscode:1 })

}catch(err){
console.log(err)
res.send({ statuscode:0 })
}
})


// cart delete
app.delete("/api/dellproducts/:id",async(req,res)=>{

    const proid={_id:req.params.id}
const result=await cartmodel.deleteOne({_id:req.params.id})
console.log(proid)
console.log(result)
if(result.deletedCount===1){
res.send({statuscode:1})

}
else{
    res.send({statuscode:0})
}


})


// for saving checkout

const checkoutSchema= mongoose.Schema({

 user:String,   
firstname:String,
lastname:String,
email:String,
phone:Number,
region:String,
town:String,
street:String,Number,
// state:String,
code:Number,
note:String,
items:[{pname:String, tprice:Number,tqnt:Number}],
finaltotal:Number,
timestamp:{
    type:Date,
    default:Date.now
},
ordernumber:String,
paytype:String

})

const checkoutmodel=mongoose.model("checkout",checkoutSchema)

app.post("/api/checkout/:id",async(req,res)=>{

    console.log(req.body.cartdata)
const result=checkoutmodel({

user:req.body.userid,    
firstname:req.body.firstname,
lastname:req.body.lastname,
email:req.body.email,
phone:req.body.phone,
region:req.body.region,
town:req.body.town,
street:req.body.street,
// state:req.body.state,
code:req.body.code,
note:req.body.note,
items:req.body.cartdata,
finaltotal:req.body.finaltotal,
timestamp:new Date(),
ordernumber:req.body.ordernumber,
paytype:req.body.paytype

})

const resp= await result.save()

if(resp){

    res.send({statuscode:1})
    
}
else{

res.send({statuscode:0})

}

// order save
const userid=req.params.id
const order= new checkoutmodel(req.body)
await order.save()

// cart clear
const cdelete = await cartmodel.deleteMany({user:userid})
res.json({statuscode:1})
console.log(cdelete)
})






// getting savecheckout

app.get("/api/savecheckout/:id",async(req,res)=>{

const getcheck=await checkoutmodel.findOne({user:req.params.id}).sort({
'timestamp':-1})

if(getcheck){
    console.log(getcheck)
    res.send({statuscode:1,allcheckdata:getcheck})
   
}
else{
    res.send({statuscode:0})
}

})

// for getting fiction homepro

app.get("/api/cathomepro",async(req,res)=>{
const gethomeproduct=await productmodel.find({Category:"6960926524d17cb20ae74c68"}).limit(4)

if(gethomeproduct){
    res.send({statuscode:1,alldata:gethomeproduct})
}

else{
    res.send({statuscode:0})
}




})

// for getting mystery homepro

app.get("/api/muysterypro",async(req,res)=>{
const getmuysteryproduct=await productmodel.find({Category:"6960934524d17cb20ae74c71"}).limit(4)


if(getmuysteryproduct){
    res.send({statuscode:1,alldata:getmuysteryproduct})
}

else{
    res.send({statuscode:0})
}



})

// for latest product api
app.get("/api/latestpro",async(req,res)=>{
const result=await productmodel.find().sort({"Addedon":-1}).limit(4)


if(result){
    res.send({statuscode:1,alldata:result})
}

else{
    res.send({statuscode:0})
}


})


// getting user data for admin dashboard
app.get("/api/getuserdata",async(req,res)=>{

const result=await signupModel.find()

if(result){
    console.log(result)
    res.send({statuscode:1,alldata:result})
}
else{
    res.send({statuscode:0})
}


})

// change usertype in admin dashboard
app.put("/api/usertype/:id",async(req,res)=>{

const updateuser= await signupModel.updateOne({_id:req.params.id},

    {
        $set:{userType:req.body.userType}}
)
if (updateuser.modifiedCount===1){

    res.send({statuscode:1})
}
else{
    res.send({statuscode:0})
}

})


// getting user data for admin dashboard
app.get("/api/getorderinfo",async(req,res)=>{

const result=await checkoutmodel.find()

if(result){
    console.log(result)
    res.send({statuscode:1,alldata:result})
}
else{
    res.send({statuscode:0})
}


})



const contactSchema=mongoose.Schema({

    cname:String,
    cemail:String,Number,
    cmessage:String,Number
   

})
const contactmodel=mongoose.model("contact",contactSchema)

app.post("/api/contact",async(req,res)=>{

const result=contactmodel({

    cname:req.body.cname,
    cemail:req.body.cemail,
    cmessage:req.body.cmessage,

})

const cinfo=result.save()

if(cinfo){
    res.send({statuscode:1})
}
else{
    res.send({statuscode:0})
}


})

app.get("/api/getreview",async(req,res)=>{

const answer =await contactmodel.find()

if(answer){
    console.log(answer)
res.send({statuscode:1,alldata:answer})
}
else{
    res.send({statuscode:0})
}

})

// adding wishlist

const wishlistSchema=mongoose.Schema({

    name:String,
    price:Number,
    file:String,
user:String,
proid:String

})

const wishlistmodel=mongoose.model("wishlist",wishlistSchema)

app.post("/api/wishlist",async(req,res)=>{

const result=wishlistmodel({

user:req.body.userid,    
name:req.body.name,
price:req.body.price,
file:req.body.file,
proid:req.body.proid

})

const wishinfo= await result.save()


if(wishinfo){
    res.send({statuscode:1})
}
else{
    res.send({statuscode:0})
}


})



app.get("/api/getwishlist/:id",async(req,res)=>{

    const id=req.params.id
const result= await wishlistmodel.find({user:req.params.id})

if(result){
    console.log(result)
res.send({statuscode:1,alldata:result})

}
else{
    res.send({statuscode:0})
}
})


// for getting best homepro

app.get("/api/bestpro",async(req,res)=>{
const getbestproduct=await productmodel.find({Category:"6999e705e709326bfe10389f"})


if(getbestproduct){
    res.send({statuscode:1,alldata:getbestproduct})
}

else{
    res.send({statuscode:0})
}



})

// for random product

app.get("/api/randompro",async(req,res)=>{

// const getrandompro=await productmodel.find().limit(2)
const count=await productmodel.countDocuments()
const random= Math.floor(Math.random()*count)

 const getrandompro=await productmodel.find().skip(random).limit(2)

 if(getrandompro){
    res.send({statuscode:1,alldata:getrandompro})
}

else{
    res.send({statuscode:0})

}

})


app.get("/api/cathomepro/:id",async(req,res)=>{
const gethomeproduct=await productmodel.find({Category:req.params.id})


if(gethomeproduct){
    res.send({statuscode:1,alldata:gethomeproduct})
}

else{
    res.send({statuscode:0})
}
})

// wish delete
app.delete("/api/dellwishpro/:id",async(req,res)=>{

    const proid={_id:req.params.id}
const result=await wishlistmodel.deleteOne({_id:req.params.id})
console.log(proid)
console.log(result)
if(result.deletedCount===1){
res.send({statuscode:1})

}
else{
    res.send({statuscode:0})
}


})