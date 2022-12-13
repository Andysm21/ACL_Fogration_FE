import React from "react";
import Image from "next/image";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import InputField from "../../components/atoms/InputField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import NavGuest from "../../components/atoms/NavGuest";
import GuestCourses from "../../components/molecules/GuestCourses";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
function password_reset() {
  const router = useRouter();
  const [value, setValue] = React.useState<Date | null>();

  const handleChange1 = (newValue: Date | null) => {
    setValue(newValue);
  };
  return (
    <div>
      <NavGuest/>
      <div className="flex items-center justify-center bg-[url('/images/bgacl.jpeg')] w-screen h-screen bg-cover bg-no-repeat">
        {/* div for the form */}

        <div className="  flex flex-col items-center justify-start rounded-lg bg-bc py-6 px-4">
          <div className="flex flex-col items-center justify-center gap-2">
            <input
              className="bg-black3 rounded-md p-3 w-72 text-white"
              id="password"
              placeholder="New Password"
              type="password"

            />
            <input
              className="bg-black3 rounded-md p-3 w-72 text-white"
              id="password2"
              placeholder="Verify Password"
              type="password"
            />

            {/* adding password input */}
            {/* <InputField id="password" placeholder="Password" type="password" /> */}
            {/* adding login button */}
            <Link href="/guest/login">
              <button className="w-72 rounded-lg bg-gradient-to-r to-babyblue from-purple p-2 text-white hover:bg-matisse hover:text-white">
                Submit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default password_reset;
