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
    <div className="flex h-screen w-full items-center justify-center bg-black bg-cover bg-no-repeat">
      {/* div for the form */}
      <div className="  flex flex-col items-center  justify-start rounded-lg bg-white py-6 px-4">
        {/* adding benya logo  */}
        {/* <div className="mb-8 p-2">
          <Image
            src="/images/logo-dark.png"
            width={170}
            height={100}
            alt="benya logo"
            className=""
          />
        </div> */}
        {/* adding form */}

        <form className="flex flex-col items-start justify-start">
          <InputField id="firstName" placeholder="First Name" type="text" />
          <InputField id="lastName" placeholder="Last Name" type="text" />
          <InputField id="email" placeholder="Email" type="email" />
          <div className="w-full flex justify-start items-start">
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date of Birth"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          {/* adding gender radiobuttons */}
          <FormControl className="felx ">
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>

          {/* adding password input */}
          {/* <InputField id="password" placeholder="Password" type="password" /> */}
          {/* adding login button */}
          <Link href="/">
            <button className="w-72 rounded-lg bg-lachmara p-2 text-white hover:bg-matisse hover:text-white">
              Sign up
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
