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


import {
  useMediaQuery,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@mui/material";
import { useRouter } from "next/router";
import axios from "axios";

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

const ApproveRequest: React.FC<Props> = ({ handleClose, isOpen }) => {
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
const router = useRouter();

  const [price, setPrice] = React.useState("");
  const handlePrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(event.target.value);
  };

  const [description, setDescription] = React.useState("");
  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = () => {
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

function Approve(){
  axios.post("http://localhost:8000/grantAccess",{
    userId:Number(localStorage.getItem("ReqUserID")),
    Course_ID:(localStorage.getItem("ReqCourseTitle")),
  }
 ).then((response) => {
  console.log(response.data)
  // router.push("admin/corporateRequests");
 }).catch((error) => console.log(error))

}
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
        <DialogTitle 
        className="bg-bc text-white"
        id="responsive-dialog-title">{"Approve request"}
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
      <FormLabel 
      className="text-white" 
      id="demo-row-radio-buttons-group-label">
        <div className="text-white">
                                              Are you sure of confirming the corporate request? The corporate user will have access to the course {"Embedded Systems"} {/*course?course.Course_Title*/}
        </div>
        </FormLabel>
    </FormControl>
                    </div>

                  
              </FormControl>
            </div>
            {/* <div className="items flex w-full items-end justify-center m-2 "></div> */}
          </DialogContentText>
        </DialogContent>
        <DialogActions className="bg-bc">

          <Button  
          className="text-violet-400"
          autoFocus onClick={handleClose}>
            <div className="text-violet-400">
            Cancel
            </div>
          </Button>
          <Button
          className="text-violet-400"
            onClick={() => {
              Approve();
              handleSubmit();
              handleClose();
            }}
            autoFocus
          >
            <div className="text-violet-400">
            Approve
            </div>
          </Button>

        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ApproveRequest;