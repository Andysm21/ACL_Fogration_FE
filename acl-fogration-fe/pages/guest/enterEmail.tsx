import React,{useEffect,useState} from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import NavGuest from "../../components/atoms/NavGuest";
import axios from 'axios'

function enterEmail() {
  const router = useRouter();
  const [value, setValue] = React.useState<Date | null>();

  const handleChange1 = (newValue: Date | null) => {
    setValue(newValue);
  };

  const[email,setEmail]= React.useState("")
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setEmail(event.target.value);
  };

  
  function handleSubmit (){
    axios.post("http://localhost:8000/forgotPassword",{Email:email}).then((response)=>{
      console.log(response.data)
    })

  }
  return (
    <div>
      <NavGuest />
      <div className="flex items-center justify-center bg-[url('/images/bgacl.jpeg')] w-screen h-screen bg-cover bg-no-repeat">
        {/* div for the form */}

        <div className="  flex flex-col items-center justify-start rounded-lg bg-bc py-6 px-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <input
              className="bg-black3 rounded-md p-3 w-72 text-white"
              id="email"
              placeholder="Enter your email"
              type="text"
              onChange ={handleEmail}
            />


            {/* adding password input */}
            {/* <InputField id="password" placeholder="Password" type="password" /> */}
            {/* adding login button */}
            <Link href="/guest/login">
              <button className="w-72 rounded-lg bg-gradient-to-r to-babyblue from-purple p-2 text-white hover:bg-matisse hover:text-white" onClick ={handleSubmit}>

                Send email
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default enterEmail;
