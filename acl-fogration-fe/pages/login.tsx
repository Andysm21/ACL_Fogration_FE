import React from "react";
import Image from "next/image";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useRouter } from "next/router";
import TextField from "@mui/material/TextField";
import Link from "next/link";
import InputField from "../components/atoms/InputField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import NavGuestLogin from "../components/atoms/NavGuestLogin";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
function Login() {
  const router = useRouter();
  const [value, setValue] = React.useState<Date | null>();

  const handleChange1 = (newValue: Date | null) => {
    setValue(newValue);
  };
  return (
    <div>
      <NavGuestLogin />
      <div className="flex items-center justify-center bg-[url('/images/bgacl.jpeg')] w-screen h-screen bg-cover bg-no-repeat">
        {/* div for the form */}

        <div className="  flex flex-col items-center  justify-start rounded-lg bg-white py-6 px-4">
          <div className="flex flex-col items-start justify-start">
            <InputField id="username" placeholder="Username" type="text" />
            <InputField id="password" placeholder="Password" type="password" />
            
            {/* adding password input */}
            {/* <InputField id="password" placeholder="Password" type="password" /> */}
            {/* adding login button */}
            <Link href="/">
              <button className="w-72 rounded-lg bg-lachmara p-2 text-white hover:bg-matisse hover:text-white">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
