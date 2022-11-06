import React from "react";
import AddCourse from "../molecules/AddCourse";

const TableHeader = ({
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
      {/* <div className="">
        <div className="flex items-center justify-between">
          <div className="flex gap-5">
            <p>Total: {count}</p>
            <div className="flex gap-2">
              <p>Limit:</p>
              <select
                name="perPage"
                id="perPage"
                onChange={(e) => {
                  setPerPage(Number(e.target.value));
                }}
                className="rounded px-2"
              >
                <option value="10" selected>
                  10
                </option>
                <option value="20">25</option>
                <option value="30">50</option>
                <option value="40">100</option>
              </select>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <ChevronLeftIcon
                className="w-6 cursor-pointer  hover:text-gray-800"
                onClick={prev}
              />
              Page <b>{page}</b> of <b>{total}</b>
              <ChevronRightIcon
                className="w-6 cursor-pointer hover:text-gray-800"
                onClick={next}
              />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default TableHeader;
