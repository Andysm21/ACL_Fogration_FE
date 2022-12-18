import { RiProjector2Line } from "react-icons/ri";
import { GiOldMicrophone } from "react-icons/gi";
import { HiVideoCamera } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { Button, Link, ratingClasses, TextField } from "@mui/material";
import { user } from "../../interfaces";
import { CgProfile } from "react-icons/cg";
import { CountrySelector } from "./Selector";
import React, { useState } from "react";
import { SelectMenuOption } from "../atoms/types";
import {COUNTRIES} from '../atoms/countries';
import axios from "axios";


// var person = {
//   User_ID: NaN,
//   User_UserName : " ",
//   User_FirstName:" ",
//   User_LastName:" ",
//   User_Email:"",
//   User_Password:"",
//   User_Country: "",
//   User_Gender: "",
//   User_Courses: [],
//   User_Corporate:"",
//   User_isCorporate: false,
// }

const TraineeProfile: React.FC<{ user }> = ({ user }) => {




//   const [username, setUsername] = React.useState(user.user_username);
  
// const [password1,setPassword1]=useState('')
// const [password,setPassword]=useState('')
// const handleChangeP1 = event => {
//   setPassword1(event.target.value);
//     };
// const handleChangeP = event => {
//    setPassword(event.target.value);
//     };

//   const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
//   setUsername(event.target.value);
// };

//   const [email, setEmail] = React.useState(user.User_Email);
//   const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
//   setEmail(event.target.value);
// };

//   const [biography, setbiography] = React.useState(user.User_Biography);
//   const handlebiography = (event: React.ChangeEvent<HTMLInputElement>) => {
//   setbiography(event.target.value);
// };

//   const [FirstName, setFirstName] = React.useState(user.User_FirstName);
//   const handleFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
//   setFirstName(event.target.value);
// };

//   const [LastName, setLastName] = React.useState(user.User_LastName);
//   const handleLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
//   setLastName(event.target.value);
// };

//   const [Gender, setGender] = React.useState(user.User_Gender);
//   const handleGender = (event: React.ChangeEvent<HTMLInputElement>) => {
//   setGender(event.target.value);
// };

// const [ID, setId ]= useState("");

//   function changePassword(){
//     if(password1===password){ 
//     axios.post("http://localhost:8000/changePassword",{
//       ID:user.User_ID,
//       Password: password,
//       type: 1
//     }
//    ).then((response) => {
//      console.log(response)
//    }).catch((error) => console.log(error))
//   }
// }
// useEffect(()=>{
//   //localStorage.removeItem("Type")
//     localStorage.setItem("ID","1")
//   setId(localStorage.getItem("ID"));
// });
// console.log(ID);
//   const [country, setCountry] = useState('DE');

//   var status = '';

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
  // const average = ([]) =>{
  //   let avg = 0;
  //   for(let i = 0;i< person.User_Ratings.length ;i++){
  //     avg += person.User_Ratings[i];
  //   }
  //   avg = avg/(person.User_Ratings.length);
  //   return avg;
  // };
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
  return (
    <div

      key={user.User_ID}
      className=" border-2 border-bc flex flex-col bg-black2 w-75% shadow-lg text-white "
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-center justify-center">
          <CgProfile size={100} />
            <div className="font-bold text-2xl">{user.User_FirstName} {user.User_LastName} </div>
            <div className="font-light text-md">Trainee</div>
            {user.User_isCorporate && <div className="font-light text-md"> {user.User_Corporate}</div> }
        </div>
        <div className="flex flex-row ">
          <div className="bg-black3 rounded-md m-6 flex flex-col p-2 justify-between w-1/2 gap-5">
          <div className="text-white font-bold text-l">User Information</div>
            <div className="bg-black3 rounded-md flex flex-col gap-4 " >
           {/* <div className="text-white text-l">Username</div>
          <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l border-2 w-52  border-white rounded-md "
          defaultValue= {user.User_UserName} />
          */}
           <div className="text-l"> First Name </div>
           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
          defaultValue= {user.User_FirstName} 
         /> 
          <div className="text-l">Last Name </div>
           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
          defaultValue= {user.User_LastName} 
         /> 
         
          <div className="text-l">Gender </div>
           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
          defaultValue= {user.User_Gender}
         /> 
        <div className="text-l">Country of birth </div>
        <div className="text-black w-52">
          <CountrySelector
          id={'countries'}
          ref={myRef}
          open={isOpen}
          onToggle={() => setIsOpen(!isOpen)}
          onChange={val => setCountry(val)}
          selectedValue={COUNTRIES.find(option => option.value === country) as SelectMenuOption} 
        /> </div>

          </div>
           <button className="bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded ">
                  Update
                </button>
          
          </div>
          
          <div className="w-1/2">
            <div className="bg-black3 rounded-md m-6 flex flex-col p-2 gap-2 ">
          <div className="text-white font-bold text-l">Account Information</div>
        
          <div className="text-l">Username</div>
           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
          defaultValue= {user.User_UserName}  
         /> 
         <div className="text-l">Email</div>
           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
          defaultValue= {user.User_Email }  
         /> 
          <button className="bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded ">
                  Update
                </button>

        </div>


          
         <div className="bg-black3 rounded-md m-6 flex flex-col p-2 gap-2">
          <div className="text-white font-bold text-l">Update password</div>
        
          <div className="text-l">Old password </div>
           <input readOnly className = " bg-black3  text-white p-1 text-l  border-2 w-52  border-gray-600 rounded-md"
          value= {user.User_Password}  
         /> 
         <div className="text-l">New password </div>
           <input type="password"  className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
          defaultValue= ''  
         onChange={handleChangeP1}/> 
         {/* <div className="text-l">Re-enter new password </div>
           <input  type="password"  className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
          defaultValue= ''
        onChange={handleChangeP} />  */}
          <button className="bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded "onClick={changePassword}>
                  Update
                </button>
        </div>
        </div>
        </div>

       {/* hena 7oty ay 7aga 3aiza tezawediha odam heya m3 kol eli fo2 zy el reviews fel user */}

      </div>
    </div>
  );
};

export default TraineeProfile;
