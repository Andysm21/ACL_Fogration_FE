import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import InputField from "../../components/atoms/InputField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import NavGuestLogin from "../../components/atoms/NavGuestLogin";
import {useState} from 'react';
import Axios from 'axios';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import { BsGithub } from "react-icons/bs";


function Signup() {
  const [error,setError]=useState('');
  const router = useRouter();
  const [value, setValue] = React.useState<Date | null>();
  const [FirstName,setFirstName]=useState('')
  const [LastName,setLastName]=useState('')
  const [Email,setEmail]=useState('')
  const [Gender,setGender]=useState('')
  const [Username,setUsername]=useState('')
  const [Password,setPassword]=useState('')
  const [Country,setCountry]=useState('')


  const handleChange1 = (newValue: Date | null) => {
    setValue(newValue);
  };
  const handleChangeFN = event => {
    setFirstName(event.target.value);
      };
  const handleChangeLN = event => {
    setLastName(event.target.value);
      };
const handleChangeEM = event => {
  setEmail(event.target.value);
      };
const handleChangeG = event => {
  setGender(event.target.value);
      };
const handleChangeU = event => {
  setUsername(event.target.value);
      };
const handleChangeP = event => {
  setPassword(event.target.value);
      };
const handleChangeC = event => {
  setCountry(event.target.value);
      };
var status='';
 async function signUp(){
   await Axios.post("http://localhost:8000/signUp", {individualUser_UserName:Username, individualUser_Email:Email, individualUser_Password:Password, individualUser_FirstName:FirstName, individualUser_LastName:LastName,individualUser_Gender:Gender, individualUser_Country:Country},

  ).then((response) => {
      if(response.data == "1"){
        localStorage.removeItem("SignUpError")
        localStorage.setItem("SignUpError","User already exists.")
        console.log("User already exists.")
      }
      else if(response.data == "2"){
        localStorage.removeItem("SignUpError")
        localStorage.setItem("SignUpError","Choose another username.")
        
        console.log("Ind User")
      }
      else if(response.data == "3"){
        localStorage.removeItem("SignUpError")
        localStorage.setItem("SignUpError","User already exists.")

        console.log("Corp User")
      }
      else if(response.data == "4"){
        localStorage.removeItem("SignUpError")
        localStorage.setItem("SignUpError","")

        console.log("Create a new user.")
      }
      else if(response.data == "5"){
        localStorage.removeItem("SignUpError")
        localStorage.setItem("SignUpError","Please fill all required fields")

        console.log("Please fill all required fields")
      }
      
  }).catch((error) => console.log(error))



}



  return (
    <div >
      <NavGuestLogin />
      <div className="flex flex-row items-center  justify-evenly w-full h-[725px]  bg-bc ">
        {/* div for the form */}
        <span className="flex flex-col justify-start">
        <h1 className="text-violet-400 text-5xl font-bold">

          We are happy to have you here! 

        </h1>
        <h1 className="text-white text-4xl font-bold">
          Please fill in the form to create your account.
        </h1>
        </span>

        <div className="flex flex-col items-center justify-start rounded-lg bg-black3 py-6 px-4">
          <div className="flex flex-col items-center justify-start gap-2">
            <input
              className="bg-bc rounded-md p-3 w-72 text-white"
              id="username"
              placeholder="Username"
              type="text"
              onChange={handleChangeU}
            />
            <input
              className="bg-bc rounded-md p-3 w-72 text-white"
              id="password"
              placeholder="Password"
              type="password"
              onChange={handleChangeP}
            />
            <input
              className="bg-bc rounded-md p-3 w-72 text-white"
              id="firstName"
              placeholder="First Name"
              type="text"
              onChange={handleChangeFN}
            />
            <input
              className="bg-bc rounded-md p-3 w-72 text-white"
              id="lastName"
              placeholder="Last Name"
              type="text"
              onChange={handleChangeLN}
            />
            <input
              className="bg-bc rounded-md p-3 w-72 text-white"
              id="email"
              placeholder="Email"
              type="email"
              onChange={handleChangeEM}
            />
            <input
              className="bg-bc rounded-md p-3 w-72 text-white"
              id="country"
              placeholder="Country"
              type="text"
              onChange={handleChangeC}
            />

            <div className="flex flex-col py-2 px-2 justify-start items-start">
              {/* adding gender radiobuttons */}
              <FormControl className="flex flex-col items-start justify-start text-white">
                <FormLabel
                  className="text-white"
                  id="demo-radio-buttons-group-label"
                >
                  <span className="text-white">
                  Gender
                  </span>
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="male"
                  name="radio-buttons-group"
                  onChange={handleChangeG}
                >
                  <div>
                    <FormControlLabel
                      value="Male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="Female"
                      control={<Radio />}
                      label="Female"
                    />
                  </div>
                </RadioGroup>
              </FormControl>
            </div>

            {/* adding password input */}
            {/* <InputField id="password" placeholder="Password" type="password" /> */}
            {/* adding login button */}
            <Link href="/guest/login">
              <button
                className="w-72 rounded-lg bg-gradient-to-r to-babyblue from-purple p-2 text-white hover:bg-matisse hover:text-white"
                onClick={signUp}
              >
                Sign up
              </button>
            </Link>
            <div className="text-white">
              By signing up, you agree to our
              <div className="flex flex-col items-center justify-center underline text-violet-400">
                <Link href="/guest/policies">Payment & Refund policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
       <div className="flex items-center bg-bc  bg-cover text-gray-200 flex-col px-6 ">
         
          <div className="border-t border-gray-500 w-11/12">
          </div>
          <div className="flex flex-row  justify-between w-full items-center">
          <h1 className="text-sm ">
             @2022 Fogration Team.All Rights Reserved
          </h1>
           <div className="flex flex-row gap-2 ">
          <Link href="" className="text-gray-300 hover:underline" >About us</Link>
          <Link href="/guest/policies" className="text-gray-300 hover:underline" >Payment</Link>
           <Link href="/guest/policies" className="text-gray-300 hover:underline" >Refund policy</Link>
           <Link href="/guest/policies" className="text-gray-300 hover:underline" >Terms of service</Link>
          </div>

          <Link href="https://github.com/Andysm21/ACL_Fogration_FE/blob/main/README.md">
          <BsGithub size={30}  className="text-white hover:cursor-pointer"/>
          </Link>
          </div>
        </div>
    </div>
  );
}

export default Signup;
