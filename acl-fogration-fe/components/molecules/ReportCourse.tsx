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

const ReportCourse: React.FC<Props> = ({ handleClose, isOpen }) => {
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
    axios.post('http://localhost:8000/reportProblem',
    {ID: localStorage.getItem('user_id'), CourseID: localStorage.getItem('CourseID'), User_Type: localStorage.getItem('Type'),
    Problem_Type: Type, Problem_Description: description})
    .then((response) => {
      
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
          {"New report"}
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
                  {/* {menu?
                    <div className="flex flex-col items-start justify-start text-white">
                        <button onClick={handleMenu}>
                            true
                        </button>
                    </div> : <div className="flex flex-col items-start justify-start text-white">
                        <button 
                        className="w-96 border-2 shadow-lg rounded-md"
                        onClick={handleMenu}>
                            Choose a type
                        </button>
                    </div>} */}

                  <FormControl>
                    <FormLabel
                      className="text-white"
                      id="demo-row-radio-buttons-group-label"
                    >
                      Report type
                    </FormLabel>
                    <RadioGroup
                      row
                      aria-labelledby="demo-row-radio-buttons-group-label"
                      name="row-radio-buttons-group"
                      onChange={handleChangeType}
                    >
                      <FormControlLabel
                        value="technical"
                        control={<Radio />}
                        label="Technical"
                      />
                      <FormControlLabel
                        value="financial"
                        control={<Radio />}
                        label="Financial"
                      />
                      <FormControlLabel
                        value="other"
                        control={<Radio />}
                        label="Other"
                      />
                    </RadioGroup>
                  </FormControl>
                </div>

                <div className="flex flex-col items-start justify-start text-white">
                  <textarea
                    placeholder="Description"
                    className="rounded-md p-3 w-full h-72 text-white border-2 border-gray-300 bg-gray-800"
                    onChange={handleDescription}
                  />
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
            <div className="text-violet-400">Report</div>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ReportCourse;
