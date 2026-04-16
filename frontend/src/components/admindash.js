import { useEffect, useState } from "react"

import { Chart as ChartJs, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title, PointElement, LineElement } from "chart.js"
import { Bar, Pie, Line } from 'react-chartjs-2'


ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    ArcElement,
    PointElement,
    Tooltip,
    Legend,
    Title

);


export const Admindash = () => {


const [prolength,setprolength]=useState(0)


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
    setprolength(sv.alldata.length)
}
else{
    // alert("pro data not fetched")
}

    }
    }

  const[orderlength,setorderlength]=useState(0) 
  

 useEffect(()=>{

gett()


},[])

const gett=async()=>{

const result=await fetch("http://localhost:9000/api/getorderinfo",{

method:"Get"

})

if(result){
    const res=await result.json()

    if(res.statuscode===1){
        // alert("userorder fetched")
        setorderlength(res.alldata.length)
    }
    else{
        // alert("userorder not fetched")
    }
}
else{
    // alert("userorder error")
}

}

const[userlength,setuserlength]=useState(0)

const[adminlength,setadminlength]=useState(0)


useEffect(()=>{

userget()


},[])

const userget=async()=>{

const result=await fetch("http://localhost:9000/api/getuserdata",{

method:"Get"

})

if(result){
    const res=await result.json()

    if(res.statuscode===1){
        // alert("userdata fetched")
        
        setuserlength(res.alldata.filter(user=>user.userType==="user").length)
         setadminlength(res.alldata.filter(user=>user.userType==="admin").length)
         
   
     
    }


    else{
        // alert("userdata not fetched")
    }
}
else{
    // alert("userdata error")
}

}


const [orders, setOrders] = useState([]);


// const[codlength,setcodlength]=useState(0)



useEffect(() => {
  fetch("http://localhost:9000/api/getorderinfo")
.then(res => res.json())
    .then(data => setOrders(data.alldata));
    


    
}, []);

 const paypallength= orders.filter(order=>order.paytype==="Paypal").length
 const creditlength= orders.filter(order=>order.paytype==="Credit Card").length
 const codlength= orders.filter(order=>order.paytype==="COD").length

// admin user bar chart

const revenue = orders.reduce((sum, order) => sum + Number(order.finaltotal), 0);



    const bardata = {
        labels: ["UserData"],
        datasets: [
            {
                label: "Users",
                data: [userlength],
                backgroundColor:

                    "rgba(13,110,253,0.7)"
                ,
                barThickness: 50
            },
            {
                label: "Admin",
                data: [adminlength],
                backgroundColor: "red",
                barThickness: 50
            }
        ]
    }


      const piedata = {
        labels: ["Orders", "Cash On Delivery","By Paypal" ,"By Credit Card"],
        datasets: [
            {
                label: "TotalOrder",
                data: [orderlength,codlength,paypallength,creditlength],
                backgroundColor: [
                    'rgb(255, 99, 132)',
                    'rgb(54, 162, 235)',
                    'rgb(255, 205, 86)',
                    'rgb(63, 235, 66)'
                    
                ],
            }
        ]
    }



 
const monthlyRevenue = {};

orders.forEach(order => {
  const date = new Date(order.timestamp); 
  const month = date.toLocaleString("default", { month: "short" }); 
                                    // langauage
  if (!monthlyRevenue[month]) {
    monthlyRevenue[month] = 0;
  }

  monthlyRevenue[month] += Number(order.finaltotal);
});


const lineLabels = Object.keys(monthlyRevenue);
const lineValues = Object.values(monthlyRevenue);

const linedata = {
  labels: lineLabels,
  datasets: [
    {
      label: "Monthly Revenue",
      data: lineValues,
      fill: true,
      borderColor: "rgb(75,192,192)",
      backgroundColor: "rgba(75,192,192,0.2)",
      tension: 0.3,
      pointRadius: 5
    }
  ]
};

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                categoryPercentage: 0.6,
                barPercentage: 0.5,
            },
        },
    };



    return (
        <>

            <div className="container-fluid">

                <h1>Dashboard</h1>


                <div className="container-fluid" >

                    <div className="row boxrow gap-1 p-3">
                        <div className="col-3 box">
                          <div className="databox">
                            <h4>Total books</h4>
                        
                            <div className="boxlogo">
                            <i class="fa-solid fa-book" style={{color: "rgb(255, 255, 255)"}}></i>
                            </div>
                            
                            </div>   
                               <p>{prolength}</p>
                               
                            
                        </div>

                        <div className="col-3 box">
                            <div className="databox">
                            <h4>Orders</h4>
                        
                            <div className="boxlogo">
                            <i class="fa-solid fa-bag-shopping" style={{color: "rgb(255, 255, 255)"}}></i>
                            </div>
                           
                            </div>  
                          <p>{orderlength}</p>
                        </div>

                        <div className="col-3 box">
                             <div className="databox">
                            <h4>Custmors</h4>
                          
                            <div className="boxlogo">
                            <i class="fa-solid fa-user" style={{color: "rgb(255, 255, 255)"}}></i>
                            </div>
                           
                            </div> 
                              <p>{userlength}</p> 
                       
                        </div>

                        <div className="col-3 box">
                              <div className="databox">
                            <h4>Revenue</h4>
                        
                          <div className="boxlogo">
                            <i class="fa-solid fa-chart-line" style={{color: "rgb(255, 255, 255)"}}></i>
                            </div>
                         </div>  
                           <p>${revenue.toLocaleString("en-US")}</p>
                        
                        </div>
                    </div>

                </div>


                <div className="container-fluid pt-5  ">
                    <div className="row justify-content-center graphrow  pt-4 p-3 ">

                        <div className="col-xl-3 graphbox">
                       <div className="chart"style={{ width: "400px", height: "500px" }}>
                           <Bar data={bardata}  options={options}  />
                        </div> 
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-12 graphbox">
                           
                            {/* <p>{paypallength}</p>
                            <p>{creditlength}</p>
                            <p>{codlength}</p> */}

                         <div className="" style={{ width: "400px", height: "400px" }}>
                                <h1>Orders</h1>
                                <Pie data={piedata} options={options} />
                            </div>

                        </div>

                        <div className="col-xl-3 graphbox">
                            <p>graph 3</p>
                          <Line data={linedata} options={options}/> 
                        </div>


                    </div>
                </div>








            </div>

        </>

    )

}