import logo from './logo.svg';
import './App.css';
import { Uheader } from './components/userheader';
import { Landingpage } from './components/landingpage';
import { Routerr } from './components/routerr';
import { Usercontext } from './components/context';
import { useEffect, useState } from 'react';
import { Aheader } from './components/adminheader';
import { Ufooter } from './components/ufooter';



function App() {

  const [usertype,setusertype]=useState("")
  const [userid,setid]=useState(null)

useEffect(()=>{
  const role=localStorage.getItem("role")

  if(role){
    setusertype(role)
  }
},[])

//   useEffect(()=>{
// console.log(usertype," usertypr is ")
// console.log(userid," userid is ")
//   },[])
  return (
  <>

  



  <Usercontext.Provider value={{usertype,setusertype,setid,userid}}>

    {usertype=="admin"?<Aheader/>:
  <Uheader/>}
  
    <Routerr/>
   
  </Usercontext.Provider>
<Ufooter/>


  </>
  );
}

export default App;
