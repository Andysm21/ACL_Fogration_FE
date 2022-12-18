import React, { useEffect, useState } from "react";
import Image from "next/image";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import InputField from "../../components/atoms/InputField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import NavGuestLogin from "../../components/atoms/NavGuestLogin";
import GuestCourses from "../../components/molecules/GuestCourses";
// import { useNavigate } from "react-router-dom";

import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import Axios  from "axios";

function Login() {
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
        router.push("/instructor")

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
    setError(localStorage.getItem("SignUpError"))
  })

  return (
    <div>
      <NavGuestLogin />
      <div className="flex items-center justify-center bg-[url('/images/bgacl.jpeg')] w-screen h-screen bg-cover bg-no-repeat">
        {/* div for the form */}

        <div className="  flex flex-col items-center justify-start rounded-lg bg-bc py-6 px-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <input
              className="bg-black3 rounded-md p-3 w-72 text-white"
              id="username"
              placeholder="Username"
              type="text"
              onChange={handleChangeU}
            />
            <input
              className="bg-black3 rounded-md p-3 w-72 text-white"
              id="password"
              placeholder="Password"
              type="password"
              onChange={handleChangeP}
            />

            {/* adding password input */}
            {/* <InputField id="password" placeholder="Password" type="password" /> */}
            {/* adding login button */}
              <button className="w-72 rounded-lg bg-gradient-to-r to-babyblue from-purple p-2 text-white hover:bg-matisse hover:text-white" onClick={handleLogin}>
                Login
              </button>
            <div className="flex flex-col items-center justify-center underline text-violet-400 ">
              <Link
                href="/guest/enterEmail"
                onClick={() => {
                  console.info("I'm a button.");
                }}
              >
                Forgot password?
              </Link>
            </div>
            <div className="w-72 rounded-lg  p-2 text-red-700  hover:text-red-700" >{error}</div>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default Login;
