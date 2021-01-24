import React, { useState } from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";

const Searchbar = () => {
  const [icon, setIcon] = useState(true);
  const [value, setValue] = useState("");
  const handleIconClick = () => {
    setIcon(false);
  };
  const handleBlur = () => {
    if (value.trim() === "") {
      setIcon(true);
    } else {
      setIcon(false);
    }
  };
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const InputIcon = () =>
    icon ? <SearchIcon style={{ color: "green" }} /> : null;
  return (
    <InputTextField
      label="Search POs"
      variant="outlined"
      size="small"
      onClick={handleIconClick}
      onBlur={handleBlur}
      value={value}
      onChange={handleChange}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" disablePointerEvents>
            <InputIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Searchbar;

const InputTextField = withStyles(theme=>({
  root: {
    backgroundColor: "#fff",
    width: 400,
    height: 40,
    borderRadius: "50px",
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#000",
    },
    "& label": {
      color: "#000",
      fontSize: "1rem",
      textAlign: "center",
    },
    "& label.Mui-focused": {
      color: "#000",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#000",
        borderRadius: "50px",
        color: "#000",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#000",
        color: "#000",
      },
      "& .MuiOutlinedInput-input": {
        color: "#000",
        borderColor: "#000",
      },
      [theme.breakpoints.up("xl")]:{
        width:600,
        backgroundColor: "#fff",
        height: 50,
        borderRadius: "50px",
      }
    },
  },
}))(TextField);
