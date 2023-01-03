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

const TraineeWallet: React.FC<{ user }> = ({ user }) => {




  const [username, setUsername] = React.useState(user.user_username);
  
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
  var status = '';

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

  function changeBalance(){
//     if(password1===password){ 
//     axios.post("http://localhost:8000/changePassword",{
//       ID:instructor.Instructor_ID,
//       Password: password,
//       type: 1
//     }
//    ).then((response) => {
//      console.log(response)
//    }).catch((error) => console.log(error))
//   }
}

  function changeBalanceRandom(){
//     if(password1===password){ 
//     axios.post("http://localhost:8000/changePassword",{
//       ID:instructor.Instructor_ID,
//       Password: password,
//       type: 1
//     }
//    ).then((response) => {
//      console.log(response)
//    }).catch((error) => console.log(error))
//   }
}

const [balance,setBalance]=useState('')
const handleBalance = event => {
  setBalance(event.target.value);
    };
  
  return (
    <div
      key={user.User_ID}
      className=" border-2 border-bc flex flex-col-2 bg-black2 w-75% h-screen shadow-lg text-white "
    >
          <div className="bg-black3 rounded-md m-6 flex flex-col p-2 gap-2 h-[70%] w-1/2">
          <div className="text-white font-bold text-l py-2">Top up using a voucher code</div>
        
          <div className="text-l">Current balance (€)</div>
           <input readOnly className = " bg-black3  text-white p-1 text-l  border-2 w-52  border-gray-600 rounded-md"
          value= {User_Balance}
         />
         
           {/* Need to save the new user balance after every time and to update it on the page */}
         
         <div className="grid grid-cols-1 gap-2">
         <div className="text-l gap-2">Voucher code
         </div>

           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
           
        //  onChange={handleBalance}
         /> 
          
                </div>
<div className="py-18">
                <div className="py-2">How does it work?</div>
                <div className="py-2 bg-black2 h-full flex items-center">Fill in the given code and you will get a random top-up from 1 to 10, as simple as that!</div>
                <div className="py-2 my-6 flex flex-col">
                    <button className="bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded  " onClick={changeBalanceRandom}>
                  Top-up
                </button>
                </div>
</div>

        </div>

        <div className="bg-black3 rounded-md m-6 flex flex-col p-2 gap-2 h-[70%] w-1/2">
          <div className="text-white font-bold text-l py-1.5">Top up using a credit card</div>
        
          <div className="text-l">Current balance (€)</div>
           <input readOnly className = " bg-black3  text-white p-1 text-l  border-2 w-52  border-gray-600 rounded-md"
          value= {User_Balance}
         />
         
           {/* Need to save the new user balance after every time and to update it on the page */}
         
         <div className="grid grid-cols-1 gap-2">
         <div className="text-l gap-2 font-bold">Credit card information
         </div>

         <div className="text-l gap-2">Card holder name
         </div>

           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
        //  onChange={handleBalance}
         /> 

         <div className="text-l gap-2">Expiry date
         </div>

           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
        //  onChange={handleBalance}
         /> 

         <div className="text-l gap-2">CVV
         </div>

           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
        //  onChange={handleBalance}
         /> 

         <div className="text-l gap-2">Required amount (€)
         </div>

           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
         onChange={handleBalance}
         /> 

         
          <button className="bg-gradient-to-r from-purple to-babyblue text-white font-bold py-2 px-4 rounded  " onClick={changeBalance}>
                  Top-up
                </button>
                </div>

        </div>
    </div>

    
  );
};

export default TraineeWallet;
