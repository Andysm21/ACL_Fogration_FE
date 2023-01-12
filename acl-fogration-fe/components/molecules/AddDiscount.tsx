  import React from "react";
import TextField from "@mui/material/TextField";
import { useTheme, Theme, Chip, Input } from "@mui/material";
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
   import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Checkbox from '@mui/material/Checkbox';

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
  courses : any;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const AddDiscount: React.FC<Props> = ({ handleClose, isOpen ,courses}) => {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

function addDiscount(){
  axios.put("http://localhost:8000/setGeneralPromotions",
  {
    Course_Discount:percentage,
    Course_Discount_Duration:duration,
    courses:value
  }).then((response)=>{
    console.log(response.data)
  }).catch((error)=>{
    console.error(error)
  })
}

  const [percentage, setPercentage] = React.useState("");
    const handlePercentage = (event: React.ChangeEvent<HTMLInputElement>) => {
      setPercentage(event.target.value);
    };

    const [duration, setDuration] = React.useState("");
    const handleDuration = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDuration(event.target.value);
    };
    
    //  const [value, setValue] = React.useState([]);
    // const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   // setValue(event.target.value);
    // };

    const fixedOptions = [];
  const [value, setValue] = React.useState([...fixedOptions,]);


    var status = "";

    // const handleSubmit = () => {
    //   console.log("submit");
    //   const data = {
    //     username,
    //     password,
    //   };
    //   axios.post("http://localhost:8000/createAdmin",{
    //     Admin_Username:username,
    //     Admin_Password:password,
    // }).then(response => {
    //   if(response.data == "1"){
    //     status = "Username field should not be empty";
    //   }
    //   else if(response.data == "2"){
    //     status = "Password field should not be empty";
    //   }
    //   else if(response.data == "3"){
    //     status = "Choose another username.";
    //   }
    //   else if(response.data == "4"){
    //     status = "Created a new Instructor.";
    //   }
    //   console.log(status)
    // })
    //   console.log(data);
    // };


const inputProps = {
    style: {
        text: "white",
       
        
        }};
   

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
        id="responsive-dialog-title">{"New Discount"}</DialogTitle>
        <DialogContent className="bg-bc">
         
            <div className="grid grid-column gap-y-4 w-96 m-2">
              
                
                <input
                className="text-white rounded-md h-16 px-3 border-2 border-gray-300 bg-gray-800"
                    required
                    id="outlined-basic"
                    // label="Username"
                    // variant="outlined"
                   placeholder="Percentage"
                    onChange={handlePercentage}
                />
              
                
                <input
                className="text-white rounded-md h-16 px-3 border-2 border-gray-300 bg-gray-800"
                  required
                  id="outlined-basic"
                  // label="Password"
                  // variant="outlined"
                placeholder="Duration in Days"
                  onChange={handleDuration}
                />
                <Autocomplete 
                value={value}
                onChange={(event, newValue) => {
                setValue([
                 ...fixedOptions,
               ...newValue.filter((option) => fixedOptions.indexOf(option) === -1),
               ]);
               
      }}
                multiple
                id="tags-outlined"
                options={courses.map((option) => option.Course_Title)}
                className="border-2 rounded-md border-gray-300 bg-gray-800"
                // getOptionLabel={(option) => option.title}
              
                filterSelectedOptions
                renderInput={(params) => (
                  
                  <TextField
                    inputProps={inputProps}
                    {...params}
                    
                    placeholder="Courses"
                  />
                )}
              />

                
               
             
                
             
            </div>

          
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
            //   handleSubmit();
            addDiscount();
              handleClose();
              console.log(value);
              console.log(percentage);
              console.log(duration);
            }}
            autoFocus
          >
            Create Discount
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AddDiscount;
