import React from "react";
import AddAdmin from "../molecules/AddAdmin";
import AddInstructor from "../molecules/AddInstructor";
import AddTrainee from "../molecules/AddTrainee";



const HeaderUser = ({
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
  const [open3, setOpen3] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

    const handleClickOpen3 = () => {
    setOpen3(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

    const handleClose3 = () => {
    setOpen3(false);
  };

  return (
    <div className="flex w-full items-center justify-between bg-gray-200 py-2  px-4">
      <div className="flex items-center">
        <div className="">
          <input
            type="text"
            className=" focus:shadow-outline-blue focus:border-blue-300 box-content w-[100%] rounded-md bg-white py-2 px-4 text-gray-700 placeholder-gray-500 transition duration-150 ease-in-out focus:outline-none"
            placeholder="Search"
          />
        </div>
      </div>
      <div className="flex flex-row gap-1">
        <button
          className=" rounded-md border border-black px-4 py-2 text-black  hover:bg-white hover:text-darkgrey"
          onClick={handleClickOpen}
        >
          Add Admin
        </button>
        <AddAdmin isOpen={open} handleClose={handleClose} />

        <button
          className=" rounded-md border border-black px-4 py-2 text-black  hover:bg-white hover:text-darkgrey"
          onClick={handleClickOpen2}
        >
          Add Instructor
        </button>
        <AddInstructor isOpen={open2} handleClose={handleClose2} />

        <button
          className=" rounded-md border border-black px-4 py-2 text-black  hover:bg-white hover:text-darkgrey"
          onClick={handleClickOpen3}
        >
          Add Trainee
        </button>
        <AddTrainee isOpen={open3} handleClose={handleClose3} />
        <div>
        </div>
      </div>
    </div>
  );
};

export default HeaderUser;
