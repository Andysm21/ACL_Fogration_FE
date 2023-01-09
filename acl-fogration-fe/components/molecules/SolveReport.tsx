import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useTheme, Theme, FormControlLabel, Radio, RadioGroup, FormLabel } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Autocomplete from "@mui/material/Autocomplete";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from 'axios';

import {
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";

interface Props {
  handleClose: () => void;
  isOpen: boolean;
}

const facilities = [
  { label: "Camera", id: 1 },
  { label: "Projector", id: 2 },
  { label: "Microphone", id: 3 },
  { label: "TV", id: 4 },
];

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const SolveReport: React.FC<Props> = ({ handleClose, isOpen }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [title, setTitle] = React.useState("");
  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const [subtitles, setSubtitles] = React.useState("");
  const handleSubtitles = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSubtitles(event.target.value);
  };

  const [price, setPrice] = React.useState("");
  const handlePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const [description, setDescription] = React.useState("");
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
    axios.put("http://localhost:8000/markProblem", {Problem_ID: localStorage.getItem("Problem_ID"), Problem_Status: Type}).then((response) => {
   
   console.log(response.data)
 }).catch((error) => console.log(error))

    console.log("submit");
    const data = {
      title,
      subtitles,
      price,
      description,
    };
    console.log(data);
  };

//   const [menu, setMenu] = React.useState(false);
//   const handleMenu = () => {
//     setMenu(!menu);
//     };

const [Type,setType]= React.useState("");
const handleChangeType = (event) => {
  setType(event.target.value);
};

  return (
    <div className="">
      <Dialog
        fullScreen={fullScreen}
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        className=""
      >
        <DialogTitle className="bg-bc text-white" id="responsive-dialog-title">
          {"Solve report"}
        </DialogTitle>
        <DialogContent className="bg-bc">
          <DialogContentText className="grid gap-y-8 gap-x-3">
            <div className="items flex w-full items-end justify-center m-2 ">
              <FormControl
                variant="standard"
                sx={{ width: "100%" }}
                className="m-2 gap-4 w-full"
              >
                <div className="flex flex-col items-start justify-start text-white">

                  <FormControl>
                    <div className="flex flex-col items-start justify-start text-white">

           <textarea readOnly className = " bg-black3  text-white p-1 text-l  border-2 w-72 h-72 border-gray-600 rounded-md"
                value= { localStorage.getItem("Problem_Description")}
                />
                </div>
                        <div className="text-white my-2">

                    <FormLabel
                      id="demo-row-radio-buttons-group-label"
                    >
                        <div className="text-white flex">
                      Report solved?
                      </div>
                    </FormLabel>
                    
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      onChange={handleChangeType}
                    >
                      <FormControlLabel
                        value="pending"
                        control={<Radio />}
                        label="Pending"
                      />
                      <FormControlLabel
                        value="solved"
                        control={<Radio />}
                        label="Solved"
                      />
                    </RadioGroup>
                </div>

                  </FormControl>
                      </div>


                
              </FormControl>
            </div>
            {/* <div className="items flex w-full items-end justify-center m-2 "></div> */}
          </DialogContentText>
        </DialogContent>
        <DialogActions className="bg-bc">
          <Button className="text-violet-400" autoFocus onClick={handleClose}>
            <div className="text-violet-400">Cancel</div>
          </Button>
          <Button
            className="text-violet-400"
            onClick={() => {
              handleSubmit();
              handleClose();
            }}
            autoFocus
          >
            <div className="text-violet-400">Confirm</div>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SolveReport;
