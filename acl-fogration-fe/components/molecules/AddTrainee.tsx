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

const AddTrainee: React.FC<Props> = ({ handleClose, isOpen }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

    const [username, setUsername] = React.useState("");
    const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
      setUsername(event.target.value);
    };

    const [password, setPassword] = React.useState("");
    const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    };

  const handleSubmit = () => {
    console.log("submit");
    const data = {
      username,
      password
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
        <DialogTitle id="responsive-dialog-title">{"New Trainee"}</DialogTitle>
        <DialogContent className="">
          <DialogContentText className="grid gap-y-8 gap-x-3">
            <div className="items flex w-full items-end justify-center m-2 ">
              <FormControl
                variant="standard"
                sx={{ width: "100%" }}
                className="m-2 gap-4 w-full"
              >
                <div className="grid grid-column gap-y-4 w-96 m-2 ">
                <TextField
                  required
                  id="outlined-basic"
                  label="Username"
                    variant="outlined"
                    onChange={handleUsername}
                />

                <TextField
                  required
                  id="outlined-basic"
                  label="Password"
                    variant="outlined"
                    onChange={handlePassword}
                />
                </div>
                
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

export default AddTrainee;