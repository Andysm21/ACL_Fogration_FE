import React from "react";
import TextField from "@mui/material/TextField";
import { useTheme, Theme } from "@mui/material";
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

const AddCourse: React.FC<Props> = ({ handleClose, isOpen }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [location, setLocation] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setLocation(event.target.value);
  };

  const [type, setType] = React.useState("");
  const handleChange1 = (event: SelectChangeEvent) => {
    setType(event.target.value);
  };

  const [status, setStatus] = React.useState("");
  const handleChange2 = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };

  const [facility, setFacility] = React.useState("");
  const facilityChange = (
    event: React.SyntheticEvent,
    value: any | Array<any>
  ) => {
    setFacility(value.map((val: any) => val.label));
  };

  const [floor, setFloor] = React.useState("");
  const floorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFloor(event.target.value);
  };

  const [capacity, setCapacity] = React.useState("");
  const capacityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCapacity(event.target.value);
  };

  const handleSubmit = () => {
    console.log("submit");
    const data = {
      facility,
      type,
      status,
      floor,
      location,
      capacity,
    };
    console.log(data);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{"New course"}</DialogTitle>
        <DialogContent className="">
          <DialogContentText className="grid gap-y-8 gap-x-3">
            <div className="items flex w-full items-end justify-center m-2 ">
              <FormControl
                variant="standard"
                sx={{ width: "100%" }}
                className="m-2 gap-4 w-full"
              >
                <div className="w-96 m-2 ">
                <TextField
                  required
                  id="outlined-basic"
                  label="Title"
                  variant="outlined"
                />

                <TextField
                  required
                  id="outlined-basic"
                  label="Subtitles"
                  variant="outlined"
                />

                <TextField
                  required
                  id="outlined-basic"
                  label="Price"
                  variant="outlined"
                />
                </div>
                
                  <TextField
                    required
                    id="outlined-basic"
                    label="Description"
                    variant="outlined"
                  />
                
              </FormControl>
            </div>
            {/* <div className="items flex w-full items-end justify-center m-2 "></div> */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              handleSubmit();
              handleClose();
            }}
            autoFocus
          >
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddCourse;
