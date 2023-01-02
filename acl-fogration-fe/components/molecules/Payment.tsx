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

const Payment: React.FC<Props> = ({ handleClose, isOpen }) => {
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
    var status = '';

    const handleSubmit = () => {
      console.log("submit");
      const data = {
        username,
        password,
      };
      axios.post('http://localhost:8000/createAdmin',{
        Admin_Username:username,
        Admin_Password:password,
    }).then(response => {
      if(response.data == "1"){
        status = "Username field should not be empty";
      }
      else if(response.data == "2"){
        status = "Password field should not be empty";
      }
      else if(response.data == "3"){
        status = "Choose another username.";
      }
      else if(response.data == "4"){
        status = "Created a new Instructor.";
      }
      console.log(status)
    })
      console.log(data);
    };

  return (
    <div>
      <Dialog
        // className="bg-white"
        fullScreen={fullScreen}
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle className="bg-bc text-white"
        id="responsive-dialog-title">{"Pay for a course"}</DialogTitle>
        <DialogContent className="bg-bc">
          <DialogContentText className="grid gap-y-8 gap-x-3">
            <div className="flex flex-column">
              <FormControl
                variant="standard"
                sx={{ width: "100%" }}
                className="m-2 gap-4 w-full"
              >
                <div className="grid grid-column gap-y-4 w-96 m-2 ">

            <div className="text-l text-white">Course price (€)
           <input readOnly className = " h-12 bg-black3  text-white p-1 text-l  border-2  w-full  border-gray-600 rounded-md"
        //   value= {discount(course?.Course_Discount,viewPrice(course?.Course_Price))}
        value={10}
         />
         </div>

         <div className="text-l text-white">Current balance (€)
           <input readOnly className = "h-12 bg-black3  text-white p-1 text-l  border-2 w-full  border-gray-600 rounded-md"
        //   value= {user.User_Balance}
        value={15}
         />
         </div>

         <div className="text-l text-white">New balance (€)
           <input readOnly className = "h-12 bg-black3  text-white p-1 text-l  border-2 w-full  border-gray-600 rounded-md"
        //   value= {user.User_Balance - discount(course?.Course_Discount,viewPrice(course?.Course_Price))}
        value={15-10}
         />
         </div>
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
            Pay
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Payment;
