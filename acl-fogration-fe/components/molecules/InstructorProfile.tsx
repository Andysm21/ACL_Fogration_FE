import { RiProjector2Line } from "react-icons/ri";
import { GiOldMicrophone } from "react-icons/gi";
import { HiVideoCamera } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { Button, Link, ratingClasses, TextField } from "@mui/material";
import { instructor } from "../../interfaces";
import { CgProfile } from "react-icons/cg";
import { CountrySelector } from "./Selector";
import React, { useEffect, useState } from "react";
import { SelectMenuOption } from "../atoms/types";
import {COUNTRIES} from '../atoms/countries';
import axios from 'axios';




const InstructorProfile: React.FC<{ instructor }> = ({ instructor }) => {
  const [username, setUsername] = React.useState(instructor.Instructor_username);
  const Insrating = React.useState(instructor.Instructor_Ratings);
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

  const [email, setEmail] = React.useState(instructor.Instructor_Email);
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
  setEmail(event.target.value);
};

  const [biography, setbiography] = React.useState(instructor.Instructor_Biography);
  const handlebiography = (event: React.ChangeEvent<HTMLInputElement>) => {
  setbiography(event.target.value);
};

  const [FirstName, setFirstName] = React.useState(instructor.Instructor_FirstName);
  const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
  setFirstName(event.target.value);
};

  const [LastName, setLastName] = React.useState(instructor.Instructor_LastName);
  const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
  setLastName(event.target.value);
};

  const [Gender, setGender] = React.useState(instructor.Instructor_Gender);
  const handleGender = (event: React.ChangeEvent<HTMLInputElement>) => {
  setGender(event.target.value);
};

//const [ID, setId ]= useState("");
const handleSubmit = () => {
  axios.put('http://localhost:8000/editProfile', {Instructor_ID: Number(localStorage.getItem("user_id")), Instructor_username: username, Instructor_Email: email,
  Instructor_Biography: biography,Instructor_FirstName: FirstName, 
  Instructor_LastName: LastName, Instructor_Gender: Gender, Instructor_Country: country})

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
      status = "Instructor got updated.";
    }
  }).catch((error) => console.log(error))
  //console.log(data);
};

const handleSubmitUserEmail = () => {
  axios.put('http://localhost:8000/editProfileUserEmail', {Instructor_ID: Number(localStorage.getItem("user_id")), Instructor_username: username, Instructor_Email: email})

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
      status = "Instructor got updated.";
    }
    console.log(status);
  }).catch((error) => console.log(error))
  //console.log(data);
};
  function changePassword(){
    if(password1===password){ 
    axios.post("http://localhost:8000/changePassword",{
      ID:instructor.Instructor_ID,
      Password: password,
      type: 1
    }
   ).then((response) => {
     console.log(response)
   }).catch((error) => console.log(error))
  }
}
// useEffect(()=>{
//   //localStorage.removeItem("Type")
//     // localStorage.setItem("ID","1")
//   // setId(localStorage.getItem("ID"));
// });
// console.log(ID);
  const [country, setCountry] = useState('DE');

  var status = '';

  //SALMA WILL CONTINUE THIS LATER



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
  const average = () =>{
    let avg = 0;
   // console.log(instructor.ID);
   // console.log(instructor.Instructor_Ratings);
    try{
      for(let i = 0;i< instructor.Instructor_Ratings.length ;i++){
        avg += instructor.Instructor_Ratings[i];
      }
      avg = avg/(instructor.Instructor_Ratings.length);
    }
    finally{
      return avg;
    }
  
  };
  const myRef = React.createRef<HTMLDivElement>();
  const [isOpen, setIsOpen] = useState(false);
  // Default this to a country's code to preselect it
  
  return (
    <div
      //instructor.Instructor_Ratings
      key={instructor.Instructor_ID}
      className=" border-2 border-bc flex flex-col bg-black2 w-75% shadow-lg text-white "
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-center justify-center">
          <CgProfile size={100} />
          <div className="font-bold text-2xl">
            {instructor.Instructor_FirstName} {instructor.Instructor_LastName}{" "}
          </div>
          <div className="font-light text-md">Instructor</div>

          {<div className="flex flex-row  ">{stars(average())}</div>}
        </div>
        <div className="flex flex-row ">
          <div className="bg-black3 rounded-md m-6 flex flex-col p-2 justify-between w-1/2">
            <div className="text-white font-bold text-l">
              Instructor Information
            </div>
            <div className="flex flex-row justify-between">
              <div className="bg-black3 rounded-md flex flex-col gap-4 ">
                {/* <div className="text-white text-l">Username</div>
          <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l border-2 w-52  border-white rounded-md "
          defaultValue= {instructor.Instructor_username} onChange = {handleUsername}/>  */}
                <div className="text-l"> First Name </div>
                <input
                  className="enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
                  defaultValue={instructor.Instructor_FirstName}
                  onChange={handleFirstName}
                />
                <div className="text-l">Last Name </div>
                <input
                  className="enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
                  defaultValue={instructor.Instructor_LastName}
                  onChange={handleLastName}
                />
                {/* <div className="text-l">Email </div>
           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
          defaultValue= {instructor.Instructor_Email} onChange = {handleEmail}/>  */}

                <div className="text-l">Gender </div>
                <input
                  className="enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
                  defaultValue={instructor.Instructor_Gender}
                  onChange={handleGender}
                />

              <div className="text-l">Owed money</div>
              <input
                readOnly
                className=" bg-black3  text-white p-1 text-l  border-2 w-52  border-gray-600 rounded-md"
                value={157}
              />

                <div className="text-l">Country </div>
                <div className="text-black w-52">
                  <CountrySelector
                    id={"countries"}
                    ref={myRef}
                    open={isOpen}
                    onToggle={() => setIsOpen(!isOpen)}
                    onChange={(val) => setCountry(val)}
                    selectedValue={
                      COUNTRIES.find(
                        (option) => option.value === country
                      ) as SelectMenuOption
                    }
                  />{" "}
                </div>
              </div>
              {/* biography */}
              <div className="flex flex-col gap-2">
                <div>Biography</div>
                <input
                  type="text"
                  className="enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52 h-72  border-white rounded-md"
                  defaultValue={instructor.Instructor_Biography}
                  onChange={handlebiography}
                />
                {/* <TextField
                    required
                    id="outlined-basic"
                   
                    variant="outlined"
                    defaultValue={instructor.Instructor_Biography}
                  /> */}
              </div>
            </div>
            {/* onClick = {handleSubmit} */}
            <button
              className="bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded "
              onClick={handleSubmit}
            >
              Update
            </button>
          </div>

          <div className="w-1/2">
            <div className="bg-black3 rounded-md m-6 flex flex-col p-2 gap-2 ">
              <div className="text-white font-bold text-l">
                Account Information
              </div>

              <div className="text-l">Username</div>
              <input
                className="enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
                defaultValue={instructor.Instructor_username}
                onChange={handleUsername}
              />
              <div className="text-l">Email</div>
              <input
                className="enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
                defaultValue={instructor.Instructor_Email}
                onChange={handleEmail}
              />
              <button
                className="bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded "
                onClick={handleSubmitUserEmail}
              >
                Update
              </button>
            </div>
            <div className="bg-black3 rounded-md m-6 flex flex-col p-2 gap-2">
              <div className="text-white font-bold text-l">Update password</div>

              <div className="text-l">Old password </div>
              <input
                readOnly
                className=" bg-black3  text-white p-1 text-l  border-2 w-52  border-gray-600 rounded-md"
                value={instructor.Instructor_Password}
              />
              <div className="text-l">New password </div>
              <input
                type="password"
                className="enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
                defaultValue=""
                onChange={handleChangeP}
              />
              <div className="text-l">Re-enter new password </div>
              <input
                type="password"
                className="enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
                defaultValue=""
                onChange={handleChangeP1}
              />

              <button
                className="bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded "
                onClick={changePassword}
              >
                Update
              </button>
            </div>
          </div>
        </div>

        <div className="bg-black3 rounded-md m-6 flex flex-col p-2 gap-1">
          <div className="text-white font-bold text-l">Reviews</div>

          <div className="flex flex-row gap-2">
            {instructor.Instructor_Reviews?.map((review, index) => (
              <div
                key={index}
                className="flex bg-gradient-to-l from-gray-700 to-black2 text-white p-6 rounded-md w-52"
              >
                {review}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorProfile;
