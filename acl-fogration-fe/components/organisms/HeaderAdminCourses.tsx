import React from "react";
import AddAdmin from "../molecules/AddAdmin";
import AddInstructor from "../molecules/AddInstructor";
import AddTrainee from "../molecules/AddTrainee";
import SearchIcon from "@mui/icons-material/Search";
import AddDiscount from "../molecules/AddDiscount";



const HeaderAdminCourses:React.FC<{courses}> =  ({ courses }) => {
  const [open, setOpen] = React.useState(false);



  const handleClickOpen = () => {
    setOpen(true);
  };

  
  const handleClose = () => {
    setOpen(false);
  };

 

      const [search, setSearch] = React.useState("");
      const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
      };

      const handleSubmit = () => {
    console.log("submit");
    const data = {
      search
    };
    localStorage.setItem("Search",data.search)
    console.log(data);
  };

  return (
    <div className="flex w-full items-center justify-between bg-black2 py-2 px-4">
      <div className="flex items-center">
        <div className="">
          <input
            type="text"
          className=" focus:shadow-outline-blue focus:border-blue-300 box-content w-[100%] rounded-md bg-white py-2 px-4 text-gray-700 placeholder-gray-500 transition duration-150 ease-in-out focus:outline-none"
                  placeholder="Search"
            onChange={handleSearch}
          />
        </div>
        <div onClick={handleSubmit}>
          <SearchIcon />
        </div>
        </div>
      
       <div>
        <button className=" rounded-md border border-white px-4 py-2 text-white  hover:bg-white hover:text-darkgrey"
            onClick={handleClickOpen}> Create Discount</button>
        <AddDiscount isOpen={open} handleClose={handleClose} courses={courses}/>
       </div>
       

    </div>
  );
};

export default HeaderAdminCourses;
