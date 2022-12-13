import React from "react";
import TextField from "@mui/material/TextField";
import { useTheme, Theme } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";


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

const Filter: React.FC<Props> = ({ handleClose, isOpen }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [subject, setSubject] = React.useState("");
  const handleSubject = (event: React.ChangeEvent<HTMLInputElement>) => 
  { 
    setSubject(event.target.value);
  };

  const [rating, setRating] = React.useState("");
  const handleRating = (event: React.ChangeEvent<HTMLInputElement>) =>
  {
    setRating(event.target.value);
  };

  const [minPrice, setMinPrice] = React.useState("");
  const handleMinPrice = (event: React.ChangeEvent<HTMLInputElement>) =>
  {
    setMinPrice(event.target.value);
  };

  const [maxPrice, setMaxPrice] = React.useState("");
  const handleMaxPrice = (event: React.ChangeEvent<HTMLInputElement>) =>
  {
    setMaxPrice(event.target.value);
  };

  const handleSubmit = () => {
    console.log("submit");
    const data = {
      subject,
      rating,
      maxPrice,
      minPrice
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
        <DialogTitle id="responsive-dialog-title">{"Filter"}</DialogTitle>
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
                    id="outlined-basic"
                    label="Subject"
                    variant="outlined"
                    onChange={handleSubject}
                  />

                  <TextField
                    id="outlined-basic"
                    label="Rating (1 - 5)"
                    variant="outlined"
                    onChange={handleRating}
                  />
                  <div className="flex flex-row gap-2">

                                        <TextField
                      id="outlined-basic"
                      label="Min Price"
                      variant="outlined"
                      onChange={handleMinPrice}
                    />

                    <TextField
                      id="outlined-basic"
                      label="Max Price"
                      variant="outlined"
                      onChange={handleMaxPrice}
                    />

                    

                  </div>

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
            Filter
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Filter;
