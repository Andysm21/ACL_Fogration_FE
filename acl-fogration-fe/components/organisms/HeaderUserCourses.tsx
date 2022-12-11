import React, { useState } from "react";
import AddCourse from "../molecules/AddCourse";
import Filter from "../molecules/Filter";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


const HeaderUserCourses = ({
  page,
  total,
  next,
  prev,
  perPage,
  setPerPage,
  count,
}: any) => {
  const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    const handleClickOpen2 = () => {
      setOpen2(true);
    };

    const handleClose2 = () => {
      setOpen2(false);
    };

  const[filterDiv , setFilterDiv] = useState(false) ;
  const handleFilterDiv = () => {
          setFilterDiv(!filterDiv);
        }

  return (
    <div className="flex flex-row w-full items-center justify-between bg-black2 py-2  px-4">
      <div className="flex items-center">
        <div className="flex flex-row gap-4">
          <input
            type="text"
            className=" focus:shadow-outline-blue focus:border-blue-300 box-content w-[100%] rounded-md bg-white py-2 px-4 text-gray-700 placeholder-gray-500 transition duration-150 ease-in-out focus:outline-none"
            placeholder="Search"
            
          />
          


          <button
            className="flex flex-row rounded-md border border-white px-4 py-2 text-white  hover:bg-white hover:text-darkgrey"
            onClick={handleClickOpen2}
          >
            <ArrowDropDownIcon/>
            Filter
          </button>

          <Filter isOpen={open2} handleClose={handleClose2} />
        </div>
      </div>

    </div>
  );
};

export default HeaderUserCourses;
