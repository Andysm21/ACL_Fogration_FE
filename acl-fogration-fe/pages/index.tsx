
// import React from "react";
// import type { GetServerSideProps, NextPage } from "next";
// import Head from "next/head";
// import Layout from "../components/templates/Layout";
// import Nav from "../components/atoms/Nav";

// const home: NextPage = () => {
//   return (
//     <div className="flex flex-col bg-[url('/images/bgacl.jpeg')] w-full h-screen bg-cover">
//       <Head>
//         <title>Fogration</title>
//         <meta name="description" content="Generated by create next app" />
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//      <Nav links={[]} />

   

//         <div className="flex flex-col justify-start items-start bg-white opacity-50  h-[calc(100vh-64px)] w-1/2">
//           <h1 className="text-2xl font-bold text-lachmara">
//             Welcome to Fogration
//           </h1>
//         </div>
//     </div>
//   );
// };

// export default home;




import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NavGuestLogin from "../components/atoms/NavGuestLogin";
import {FaRegNewspaper} from "react-icons/fa"
// import { useNavigate } from "react-router-dom";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Axios  from "axios";
import { BsGithub, BsPersonFill } from "react-icons/bs";
import Link from "next/link";

function Home() {
const router = useRouter();

  // let navigate = useNavigate(); 

  // const router = useRouter();
  const [value, setValue] = React.useState<Date | null>();
  const [error,setError] = useState("")
  const [Username,setUsername]=useState('')
  const [Password,setPassword]=useState('')
  const handleChange1 = (newValue: Date | null) => {
    setValue(newValue);
  };
  const handleChangeU = event => {
    setUsername(event.target.value);
    console.log(Username)
        };
  const handleChangeP = event => {
    setPassword(event.target.value);
    console.log(Password)
        };

   function handleLogin(){
     Axios.post("http://localhost:8000/login", {Uname:Username,Pass:Password},
 
   ).then((response) => {
    localStorage.setItem("Search","");
    localStorage.setItem("Subject","")
    localStorage.setItem("Rating","")
    localStorage.setItem("MaxPrice","")
    localStorage.setItem("MinPrice","")
    console.log(response.data)
    var data = (response.data).split(":")
    var id = data[1]
    var type=data[0]
       if(type == 1){
        localStorage.removeItem("user_id")
        localStorage.setItem("user_id",id)
        localStorage.removeItem("Type")
        localStorage.setItem("Type","Admin")
        localStorage.removeItem("isCorp")
        localStorage.setItem("isCorp", "false")
        
        console.log(localStorage.getItem("Type"))
        console.log(localStorage.getItem("user_id"))
        router.push("/admin")
       }
       else if(type == "2"){
        localStorage.removeItem("user_id")
        localStorage.setItem("user_id",id)
        localStorage.removeItem("Type")
        localStorage.setItem("Type","Instructor")
        localStorage.removeItem("isCorp")
        localStorage.setItem("isCorp", "false")
        console.log(localStorage.getItem("Type"))
        console.log(localStorage.getItem("user_id"))

        Axios.post("http://localhost:8000/InstContractStatus", {id:Number(localStorage.getItem("user_id"))},
        ).then((response) => {
          console.log("THIS IS THE AGREEMENT")
          var Agreement=response.data.Instructor_Agreement; 
          console.log(Agreement);
          if(Agreement==true){          
            router.push("/instructor")
           }
           else if(Agreement==false){
             router.push("/instructor/contracts")
           }
        })
       }
       else if(type == "3"){
        localStorage.removeItem("user_id")
        localStorage.setItem("user_id",id)
        localStorage.removeItem("isCorp")
        localStorage.setItem("isCorp", "false")
        localStorage.removeItem("Type")
        localStorage.setItem("Type","User")

        console.log(localStorage.getItem("Type"))
        console.log(localStorage.getItem("user_id"))
        console.log(localStorage.getItem("isCorp"))
        router.push("/user")

       }
       else if(type == "4"){
        localStorage.removeItem("user_id")
        localStorage.setItem("user_id",id)
        console.log("ID IS "+id)
        localStorage.removeItem("Type")
        localStorage.setItem("isCorp", "true")
        localStorage.removeItem("Type")
        localStorage.setItem("Type","Corp")

        console.log(localStorage.getItem("Type"))
        console.log(localStorage.getItem("user_id"))
        console.log(localStorage.getItem("isCorp"))
        router.push("/user")

        }
        else if(type =="5"){
        console.log("WRONG")
        }

       
   }).catch((error) => console.log(error))
 
  //  console.log(1)
 
 
 }
 

  useEffect(()=>{
    // setError(localStorage.getItem("SignUpError"))
  },[])
  return (
    <div>
      <NavGuestLogin />
      <div className="flex items-center justify-between px-60  bg-bc w-screen h-screen bg-cover bg-no-repeat">
      
        </div>
        <div className="bg-gray-300 flex flex-row justify-evenly p-4 ">
          <div className="bg-black3 flex justify-center items-center flex-col rounded-lg w-72">
            <FaRegNewspaper size={100} className="text-white m-10"/>
            <h1 className="text-white text-2xl p-2"> 1000+ Courses </h1>
          </div>
          <div className="bg-black3 flex justify-center items-center flex-col rounded-lg w-72">
              <BsPersonFill size={100} className="text-white m-10"/>       
              <h1 className="text-white text-2xl p-2"> 100+ Instructors </h1>

          </div>
          <div className="bg-black3 flex justify-center items-center flex-col rounded-lg w-72">
            ljlj
          </div>
          
        </div>
        <div className="flex items-center justify-center  bg-bc w-screen  bg-cover text-gray-200 p-2 flex-col">
          <div className="flex flex-row gap-4">
          <Link href="" className="text-gray-300 hover:underline" >About us</Link>
          <Link href="" className="text-gray-300 hover:underline" >FAQ</Link>
           <Link href="" className="text-gray-300 hover:underline" >Privacy policy</Link>
           <Link href="" className="text-gray-300 hover:underline" >Terms of service</Link>


          </div>
          <div className="border-t border-gray-500 w-11/12">
          </div>
          <div className="flex flex-row  justify-between w-full items-center p-2">
          <h1 className="text-sm">
             @2022 Fogration Development Team.All Rights Reserved
          </h1>
          <BsGithub size={30} className="text-white"/>
          </div>
        </div>
       
    </div>
  
  );
}

export default Home;

