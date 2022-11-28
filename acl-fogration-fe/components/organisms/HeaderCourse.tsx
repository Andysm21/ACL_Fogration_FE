import React from "react";
import AddCourse from "../molecules/AddCourse";

const HeaderCourse = ({
  page,
  total,
  next,
  prev,
  perPage,
  setPerPage,
  count,
}: any) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      <div>
        <button
          className=" rounded-md border border-black px-4 py-2 text-black  hover:bg-white hover:text-darkgrey"
          onClick={handleClickOpen}
        >
          Create a course
        </button>

        <AddCourse isOpen={open} handleClose={handleClose} />
      </div>
          </div>
  );
};

export default HeaderCourse;
