import { RiProjector2Line } from "react-icons/ri";
import { GiOldMicrophone } from "react-icons/gi";
import { HiVideoCamera } from "react-icons/hi";
import { AiFillStar } from "react-icons/ai";
import { Button, Link, ratingClasses, TextField } from "@mui/material";
import { user } from "../../interfaces";
import { CgProfile } from "react-icons/cg";
import { CountrySelector } from "./Selector";
import React, { useState, useEffect} from "react";
import { SelectMenuOption } from "../atoms/types";
import {COUNTRIES} from '../atoms/countries';
import axios from "axios";


const TraineeWallet: React.FC<{ user }> = ({ user }) => {
  const [username, setUsername] = React.useState(user.user_username);
  const myRef = React.createRef<HTMLDivElement>();
  const handleSubmit = () => {};
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(0);
  function getBalance(){
    axios.post("http://localhost:8000/balance", {
        ID : localStorage.getItem("user_id")
      }).then((res)=>{
         setBalance(res.data)
        console.log(balance);
      }).catch((error) => console.log(error))
  }
  function changeBalance(){
    axios.post("http://localhost:8000/topUpWallet", {
      User_ID : localStorage.getItem("user_id"),
      amount:amount
    }).then((res)=>{
      getBalance()
      console.log(balance);
    }).catch((error) => console.log(error))
  }
  
  function changeBalanceRandom(){
    var random = randomInt(1,10)
    axios.post("http://localhost:8000/topUpWallet", {
      User_ID : localStorage.getItem("user_id"),
      amount:random
    }).then((res)=>{
      getBalance()
      console.log(balance);
    }).catch((error) => console.log(error))
  }     
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

let User_Balance = balance;
useEffect(() => {
  getBalance();
  handleSubmit();
  
}, []);

const handleBalance = event => {
  setAmount(event.target.value);
  
    };

const [topupStyle,setTopupStyle] = useState("bg-gray-400 text-white py-2 px-4 rounded") ;
const [cardHolder,setCardHolder] = useState("");
const [enableTopUp,setEnableTopUp] = useState(true);
const [expiryDate,setExpiryDate] = useState("");
const [cardNumber,setCardNumber] = useState("");

const [cvv,setCvv] = useState("");
const handleExpiryDate = event =>{
  setExpiryDate(event.target.value);
   if(cardHolder.length > -1 && expiryDate.length > 0 && cardNumber.length > 0 && cvv.length > 0){
    setTopupStyle("bg-gradient-to-r from-purple to-babyblue text-white py-2 px-4 rounded border border-violet-400");
    setEnableTopUp(false);
  }  
}
const handleCardNumber = event =>{
  setCardNumber(event.target.value);
   if(cardHolder.length > -1 && expiryDate.length > 0 && cardNumber.length > 0 && cvv.length > 0){
    setTopupStyle("bg-gradient-to-r from-purple to-babyblue text-white py-2 px-4 rounded border border-violet-400");
    setEnableTopUp(false);
  }  
}
const handleCvv = event =>{
  setCvv(event.target.value);
   if(cardHolder.length > 0 && expiryDate.length > 0 && cardNumber.length > 0 && cvv.length > 0){
    setTopupStyle("bg-gradient-to-r from-purple to-babyblue text-white py-2 px-4 rounded border border-violet-400");
    setEnableTopUp(false);
  }  
}

const handleCardHolder = event => {
  setCardHolder(event.target.value);
    if(cardHolder.length > 0 && expiryDate.length > 0 && cardNumber.length > 0 && cvv.length > 0){
    setTopupStyle("bg-gradient-to-r from-purple to-babyblue text-white py-2 px-4 rounded border border-violet-400");
    setEnableTopUp(false);
  }  
};

const [topupStyle2,setTopupStyle2] = useState("bg-gray-400 text-white py-2 px-4 rounded") ;
const [voucherCode,setVoucherCode] = useState("");
const [enableTopUp2,setEnableTopUp2] = useState(true);
const handleVoucherCode = event => {
  setVoucherCode(event.target.value);
  if(voucherCode.length > -1){
    setTopupStyle2("bg-gradient-to-r from-purple to-babyblue text-white py-2 px-4 rounded border border-violet-400");
    setEnableTopUp2(false);
  }    
};




// function handleEnableTopUp () {
//   if(cardHolder == ""){
//     setEnableTopUp(true);
//     setTopupStyle("bg-gray-400 text-white py-2 px-4 rounded");
//   }
//   else{
//     setEnableTopUp(false);
//     setTopupStyle("bg-gradient-to-r from-purple to-babyblue text-white py-2 px-4 rounded border border-violet-400");
//   }
// }
  return (
    <div
      key={user.User_ID}
      className=" border-2 border-bc flex flex-col-2 bg-black2 w-75% h-screen shadow-lg text-white "
    >
          <div className="bg-black3 rounded-md m-6 flex flex-col p-2 gap-2 h-[83%] w-1/2">
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
           
          onChange={handleVoucherCode}
         /> 
          
                </div>
            <div className="py-18">
                {/* <div className="py-2">How does it work?</div> */}
                <div className="py-2 bg-black2 p-2 rounded-md flex flex-col items-start"> <div className="py-2 text-xl">How does it work?</div>Fill in the given code and you will get a random top-up from 1 to 10, as simple as that!</div>
                <div className="py-2 my-6 flex flex-col">
                  <button className={topupStyle2} onClick={changeBalanceRandom} disabled={enableTopUp2}>
                  Top-up
                </button>
                </div>
        </div>

        </div>

        <div className="bg-black3 rounded-md m-6 flex flex-col p-2 gap-2 h-[83%] w-1/2">
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
            onChange={handleCardHolder}
         /> 

       <div className="text-l gap-2">Card Number
         </div>

           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
          onChange={handleCardNumber}
         />
         <div className="text-l gap-2">Expiry date
         </div>

           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
          onChange={handleExpiryDate}
         /> 

         <div className="text-l gap-2">CVV
         </div>

           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
          onChange={handleCvv}
         /> 

         <div className="text-l gap-2">Required amount (€)
         </div>

           <input className = "enabled:hover:border-bc bg-black3  text-white p-1 text-l  border-2 w-52  border-white rounded-md"
         onChange={handleBalance}
         /> 
          <button className={topupStyle} onClick={changeBalance} disabled={enableTopUp}>
                  Top-up
                </button>
          </div>

        </div>
    </div>

    
  );
};

export default TraineeWallet;
