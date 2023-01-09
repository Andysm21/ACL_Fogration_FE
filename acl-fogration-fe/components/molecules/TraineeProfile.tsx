import { RiProjector2Line } from "react-icons/ri";
import { GiOldMicrophone } from "react-icons/gi";
import { HiVideoCamera } from "react-icons/hi";
import { AiFillStar, AiOutlineFilePdf } from "react-icons/ai";
import { Button, Link, ratingClasses, TextField } from "@mui/material";
import { user } from "../../interfaces";
import { CgProfile } from "react-icons/cg";
import { CountrySelector } from "./Selector";
import React, { ChangeEvent, useState } from "react";
import { SelectMenuOption } from "../atoms/types";
import {COUNTRIES} from '../atoms/countries';
import axios from "axios";


const TraineeProfile: React.FC<{ user }> = ({ user }) => {




  const [username, setUsername] = React.useState(user.user_username);

  const stars = (rating: number) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(
        <div>
          <AiFillStar />
        </div>
      );
    }
    return stars;
  };
  var status = '';

  const myRef = React.createRef<HTMLDivElement>();
  const [isOpen, setIsOpen] = useState(false);
  // Default this to a country's code to preselect it
  const [country, setCountry] = useState('DE');
  // console.log(user)
  const [password1,setPassword1]=useState('')
  const [password,setPassword]=useState('')

  const handleChangeP1 = event => {
  setPassword1(event.target.value);
  };
  const handleChangeP = event => {
  setPassword(event.target.value);
  };

  
      const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
      };
      
        const [email, setEmail] = React.useState(user.User_Email);
        const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setId(localStorage.getItem("user_id"))
        setEmail(event.target.value);
      };
      

      
        const [FirstName, setFirstName] = React.useState(user.User_FirstName);
        const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
        console.log(FirstName)
        setId(localStorage.getItem("user_id"))
        console.log( "ID IS "+ID)
      };
      
        const [LastName, setLastName] = React.useState(user.User_LastName);
        const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
        setId(localStorage.getItem("user_id"))
        console.log(LastName)
      };
      
        const [Gender, setGender] = React.useState(user.User_Gender);
        const handleGender = (event: React.ChangeEvent<HTMLInputElement>) => {
        setGender(event.target.value);
        setId(localStorage.getItem("user_id"))
      };
      
      const [ID, setId ]= useState("");


      const handleSubmit = () => {
        setId(localStorage.getItem("user_id"))

        if(localStorage.getItem("isCorp")=="false"){
        axios.put('http://localhost:8000/editProfileUserInd', {ID: Number(localStorage.getItem("user_id")), username: username,
        FirstName: FirstName, 
        LastName: LastName, Gender: Gender, Country: country})
      
        .then((response) => {
          console.log("HELLO")
          if(response.data == "1"){
            status = "Username field should not be empty";
          }
          else if(response.data == "2"){
            status = "Choose another username, its already in use";
          }
          else if(response.data == "3"){
            status = "Email already in use";
          }
          else if(response.data == "4"){
            status = "Individual user got updated.";
          }
          console.log(status)
        }).catch((error) => console.log(error))
        //console.log(data);
      }
      else{
        console.log(localStorage.getItem("user_id"))
        axios.put('http://localhost:8000/editProfileUserC', {ID: Number(localStorage.getItem("user_id")),
        FirstName: FirstName, 
        LastName: LastName, Gender: Gender, Country: country})
      
        .then((response) => {
          console.log("inside C")
          console.log(response.data)
          // if(response.data == "1"){
          //   status = "Username field should not be empty";
          // }
          // else if(response.data == "2"){
          //   status = "Choose another username, its already in use";
          // }
          // else if(response.data == "3"){
          //   status = "Email already in use";
          // }
          // else if(response.data == "4"){
            status = "Corporate user got updated.";
          // }
          console.log(status)
        }).catch((error) => console.log(error))
        //console.log(data);
      }
      };
      
      const handleSubmitUserEmail = () => {
        setId(localStorage.getItem("user_id"))

        if(localStorage.getItem("isCorp")=="false"){

        axios.put('http://localhost:8000/editProfileEmailUserInd', {ID: Number(localStorage.getItem("user_id")), username: username, Email: email})
      
        .then((response) => {

          if(response.data == "1"){
            status = "Username field should not be empty";
          }
          else if(response.data == "2"){
            status = "Choose another username, its already in use";
          }
          else if(response.data == "3"){
            status = "Email already in use";
          }
          else if(response.data == "4"){
            status = "Individual got updated.";
          }
          console.log(status);
        }).catch((error) => console.log(error))
        //console.log(data);
      }
      else{

        axios.put('http://localhost:8000/editProfileEmailUserC', {ID: Number(localStorage.getItem("user_id")), username: username, Email: email})
      
        .then((response) => {
          if(response.data == "1"){
            status = "Username field should not be empty";
          }
          else if(response.data == "2"){
            status = "Choose another username, its already in use";
          }
          else if(response.data == "3"){
            status = "Email already in use";
          }
          else if(response.data == "4"){
            status = "Individual got updated.";
          }
          console.log(status);
        }).catch((error) => console.log(error))
        //console.log(data);
      }
      };




      
var Type;
  function changePassword(){
    if(localStorage.getItem("Type")=="Corp")
    {
      Type=3
    }
    else if (localStorage.getItem("Type")=="User")
    {
      Type=2;
    }
    console.log(password1)
    console.log(password)
    if(password1===password){ 
    axios.post("http://localhost:8000/changePassword",{
      ID:user.User_ID,
      Password: password,
      type: Type
    }
   ).then((response) => {
     console.log(response)
   }).catch((error) => console.log(error))
  }
}

  const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

let User_Balance = 10;

  const handleTopUp = () => {
    User_Balance = User_Balance + randomInt(1, 10);
    // localStorage.setItem("user.User_Balance", user.User_Balance);
    console.log(User_Balance);

  };


  return (
    <div

      key={user.User_ID}
      className=" border-2 border-bc flex flex-col bg-black2 w-75% shadow-lg text-white "
    >
      <div className="flex flex-col gap-2 my-2">
        <div className="flex flex-col items-center justify-center">
          <CgProfile size={100} />
            <div className=" text-2xl">{user.User_FirstName} {user.User_LastName} </div>
            <div className="font-light text-md">Trainee</div>
            {user.User_isCorporate && <div className="font-light text-md"> {user.User_Corporate}</div> }
        </div>
        <div className="flex flex-row ">
          <div className="bg-black3 rounded-md m-6 flex flex-col p-2 justify-between w-1/2 gap-5">
          <div className="text-white font-bold text-l">User Information</div>
            <div className="bg-black3 rounded-md flex flex-col gap-4 " >
           {/* <div className="text-white text-l">Username</div>
          <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l border-2 w-60  border-white rounded-md "
          defaultValue= {user.User_UserName} />
          */}
           <div className="text-l"> First Name </div>
           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-60  border-white rounded-md"
          defaultValue= {user.User_FirstName} 
         onChange={handleFirstName}/> 
          <div className="text-l">Last Name </div>
           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-60  border-white rounded-md"
          defaultValue= {user.User_LastName}   onChange={handleLastName}
         /> 
         
          <div className="text-l">Gender </div>
           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-60  border-white rounded-md"
          defaultValue= {user.User_Gender}  onChange={handleGender}
         /> 
        <div className="text-l">Country of birth </div>
        <div className="text-black w-44">
          <CountrySelector
          id={'countries'}
          ref={myRef}
          open={isOpen}
          onToggle={() => setIsOpen(!isOpen)}
          onChange={val => setCountry(val)}
          selectedValue={COUNTRIES.find(option => option.value === country) as SelectMenuOption} 
        /> </div>

          </div>
           <button className="bg-gradient-to-r from-purple to-babyblue text-white  py-2 px-4 rounded border border-violet-400" onClick={handleSubmit}>
                  Update
                </button>
          
          </div>
          
          <div className="w-1/2">
            <div className="bg-black3 rounded-md m-6 flex flex-col p-2 gap-2 ">
          <div className="text-white font-bold text-l">Account Information</div>
        
          <div className="text-l">Username</div>
           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-60  border-white rounded-md"
          defaultValue= {user.User_UserName} onChange={handleUsername}
         /> 
         <div className="text-l">Email</div>
           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-60  border-white rounded-md"
          defaultValue={user.User_Email } onChange={handleEmail}
         /> 
          <button className="bg-gradient-to-r from-purple to-babyblue text-white  py-2 px-4 rounded border border-violet-400" onClick={handleSubmitUserEmail}>
                  Update
                </button>

        </div>


          
         <div className="bg-black3 rounded-md m-6 flex flex-col p-2 gap-2">
          <div className="text-white font-bold text-l">Update password</div>
        
          <div className="text-l">Old password </div>
           <input readOnly className = " bg-black3  text-white p-1 text-l  border-2 w-60  border-gray-600 rounded-md"
          value= {user.User_Password} 
         /> 
         <div className="text-l">New password </div>
           <input type="password"  className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-60  border-white rounded-md"
          defaultValue= ''  
         onChange={handleChangeP1}/> 
         <div className="text-l">Re-enter new password </div>
           <input  type="password"  className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-60  border-white rounded-md"
          defaultValue= ''
        onChange={handleChangeP} /> 
          <button className="bg-gradient-to-r from-purple to-babyblue text-white  py-2 px-4 rounded border border-violet-400"onClick={changePassword}>
                  Update
                </button>
        </div>

        
        </div>
        
        </div>

      

        

       {/* hena 7oty ay 7aga 3aiza tezawediha odam heya m3 kol eli fo2 zy el reviews fel user */}

        <div className="bg-black3 rounded-md m-6 flex flex-col py-2 gap-1">
          <div className="text-white  text-l mx-3">Certificates</div>

          <div className="flex flex-row">
            <AiOutlineFilePdf size={100} className=" text-violet-400" />
            <AiOutlineFilePdf size={100} className=" text-violet-400" />
            <AiOutlineFilePdf size={100} className=" text-violet-400" />
            <AiOutlineFilePdf size={100} className=" text-violet-400" />
            <AiOutlineFilePdf size={100} className=" text-violet-400" />


          </div>
          
        </div>

      </div>
      
    </div>
  );
};

export default TraineeProfile;
