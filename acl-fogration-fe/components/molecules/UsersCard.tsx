import { Button, Link } from "@mui/material";
import { CgProfile } from "react-icons/cg";


const UsersCard: React.FC<{ accounts }> = ({ accounts }) => {
  if (accounts.length === 0) {
    return <div className="text-center text-xl text-black1 "> No users</div>;
  }

  return (
    <div className="grid grid-cols-2 place-items-center bg-bc gap-4">
      {accounts.map((person) => (
        <div
          key={person.User_Name}
          className=" border-2 m-2 border-bc flex  w-full flex-col rounded-lg bg-black2 items-start gap-8 justify-start p-4 text-center text-white shadow-lg"
        >
          <div className="flex flex-row gap-2">
            <CgProfile size={80} />
            <div className="flex flex-col items-center justify-center ">
              <div className="font-bold text-2xl">{person.User_Name} </div>
              <div className="font-light text-md">{person.User_Role} </div>
            </div>
          </div>
          <div className="text-l"> Address: {person.User_Address}</div>
          <div className="text-l"> City: {person.User_City}</div>
          <div className="text-l">Country: {person.User_Country}</div>
          <div className="flex flex-row gap-2">
            <Link href="viewuser">
              <button className="bg-gradient-to-r px-4 py-2 rounded-md from-purple to-babyblue text-white hover:font-bold">
                More Details
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersCard;
