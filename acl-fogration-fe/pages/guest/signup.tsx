import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import InputField from "../../components/atoms/InputField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import NavGuest from "../../components/atoms/NavGuest";
import {Routes, Route, useNavigate} from 'react-router-dom';
import {useState} from 'react';
import Axios from 'axios';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";


function Signup() {
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

function signUp(){
  Axios.post("http://localhost:8000/signUp", {individualUser_UserName:Username, individualUser_Email:Email, individualUser_Password:Password, individualUser_FirstName:FirstName, individualUser_LastName:LastName,individualUser_Gender:Gender, individualUser_Country:Country},

  ).then((response) => {
      
      console.log("Successful Emtry!")
      
  }).catch((error) => console.log(error))



}



  return (
    <div>
      <NavGuest />
      <div className="flex items-center justify-center bg-[url('/images/bgacl.jpeg')] w-screen h-screen bg-cover bg-no-repeat">
        {/* div for the form */}

        <div className="flex flex-col items-center justify-start rounded-lg bg-bc py-6 px-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <input className="bg-black3 rounded-md p-3 w-72" id="username" placeholder="Username" type="text" onChange={handleChangeU}/>
            <input className="bg-black3 rounded-md p-3 w-72" id="password" placeholder="Password" type="password" onChange={handleChangeP}/>
            <input className="bg-black3 rounded-md p-3 w-72" id="firstName" placeholder="First Name" type="text" onChange={handleChangeFN}/>
            <input className="bg-black3 rounded-md p-3 w-72" id="lastName" placeholder="Last Name" type="text" onChange={handleChangeLN}/>
            <input className="bg-black3 rounded-md p-3 w-72" id="email" placeholder="Email" type="email" onChange={handleChangeEM}/>
            <input className="bg-black3 rounded-md p-3 w-72" id="country" placeholder="Country" type="text" onChange={handleChangeC}/>

            <div className="flex flex-col py-2 px-2 justify-start items-start">
              {/* adding gender radiobuttons */}
              <FormControl className="flex flex-col items-start justify-start text-white">
                <FormLabel
                 
                id="demo-radio-buttons-group-label">
                  Gender
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                  onChange={handleChangeG}
                 
                >
                  <div>
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                      
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                  </div>
                </RadioGroup>
              </FormControl>
            </div>

            {/* adding password input */}
            {/* <InputField id="password" placeholder="Password" type="password" /> */}
            {/* adding login button */}
            <Link href="/guest/login">
              <button className="w-72 rounded-lg bg-gradient-to-r to-babyblue from-purple p-2 text-white hover:bg-matisse hover:text-white" onClick={signUp}>
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
