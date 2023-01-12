import { Button, Link } from "@mui/material";
import { useEffect, useState } from "react";
import { CgProfile } from "react-icons/cg";


const UsersCard: React.FC<{ users }> = ({ users }) => {
  const [type,setType] = useState("");
  useEffect(()=>{
    // localStorage.setItem("Type","CorporateUser")
    setType(localStorage.getItem("Type"));
  })
  const detailsLink = ()=>{
    if(type=="Instructor"){
      return "instructor"
      }
  else{
      return "user"
  }
  }
  
  if (users.length === 0) {
    return <div className="text-center text-xl text-black1 "> No users</div>;
  }

  return (
    <div className="bg-bc h-screen">
    <div className="grid grid-cols-2 text-white  bg-bc gap-4">
      {users.map((person) => (
        <div
          key={person.User_Name}
className="flex gap-4 flex-row-1 bg-black3 justify-between mx-6 my-4 rounded-lg py-3 px-4 h-20"
        >

              <div className="texl-l">Name: {person.User_Name} </div>
              <div className="text-l">Role: {person.User_Role} </div>
          <div className="text-l">Country: {person.User_Country}</div>
          <div className="text-l"> City: {person.User_City}</div>
          <div className="text-l"> Address: {person.User_Address}</div>
          <div className="flex flex-row gap-2">
            <Link href={detailsLink()}>
              <button                 className="bg-gradient-to-r from-purple to-babyblue text-white py-3 px-4 rounded w-36 border border-violet-400">
                More Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default UsersCard;
