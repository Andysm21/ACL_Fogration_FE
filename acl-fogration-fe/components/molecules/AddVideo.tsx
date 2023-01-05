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
import axios from "axios";
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


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const AddVideo: React.FC<Props> = ({ handleClose, isOpen }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [title, setTitle] = React.useState("");
    const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTitle(event.target.value);
    };

    const [link, setLink] = React.useState("");
    const handleLink = (event: React.ChangeEvent<HTMLInputElement>) => {
      setLink(event.target.value);
    };
    const [description, setDescription] = React.useState("");
    const handleDescription = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDescription(event.target.value);
    };
    var status = '';

    const handleSubmit = () => {
    }

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
        <DialogTitle className="bg-bc text-white"
        id="responsive-dialog-title">{"Add Video"}</DialogTitle>
        <DialogContent className="bg-bc">
          <DialogContentText className="grid gap-y-8 gap-x-3">
            <div className="flex flex-column">
              <FormControl
                variant="standard"
                sx={{ width: "100%" }}
                className="m-2 gap-4 w-full"
              >
                <div className="grid grid-column gap-y-4 w-96 m-2 ">
                <input
                className="text-white rounded-md h-16 px-3 border-2 border-gray-300 bg-gray-800"
                    required
                    id="outlined-basic"
                    placeholder="Title"
                    onChange={handleTitle}
                />

                <input
                className="text-white rounded-md h-16 px-3 border-2 border-gray-300 bg-gray-800"
                  required
                  id="outlined-basic"
                  // label="Password"
                  // variant="outlined"
                  placeholder="Link"
                  onChange={handleLink}
                />
                <input
                className="text-white rounded-md h-16 px-3 border-2 border-gray-300 bg-gray-800"
                  required
                  id="outlined-basic"
                  // label="Password"
                  // variant="outlined"
                  placeholder="Description"
                  onChange={handleDescription}
                />
                </div>
                 
               
                
              </FormControl>
            </div>

          </DialogContentText>
        </DialogContent>
        <DialogActions className="bg-bc">
          <Button 
          className="text-violet-400"
          autoFocus onClick={handleClose}>
            Cancel
          </Button>
          <Button
          className="text-violet-400"
            onClick={() => {
              handleSubmit();
              handleClose();
            }}
            autoFocus
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddVideo;
