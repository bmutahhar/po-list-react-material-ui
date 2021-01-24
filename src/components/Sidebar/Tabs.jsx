import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import FolderIcon from "@material-ui/icons/Folder";
import StarIcon from "@material-ui/icons/Star";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    borderRight: "1px solid #38414a",
    height: 50,
    width: "100%",
    [theme.breakpoints.up("xl")]:{
      height:"auto",
    },
    [theme.breakpoints.down("sm")]:{
      flexDirection:"column",
      justifyContent: "space-evenly",
      alignItems: "center",
      height:"auto",
    },
   

  },
}));

const Tabs = ({ hide }) => {
  const classes = useStyles();
  return (
    <Paper square elevation={0} className={clsx(classes.root, hide)}>
      {/* <Badge
        badgeContent={4}
        color="secondary"
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      > */}
        <Tab>
          <NotificationsIcon fontSize="inherit" />
          To Do
        </Tab>
      {/* </Badge> */}
      <Tab>
        <FolderIcon fontSize="inherit" />
        Folders
      </Tab>
      <Tab>
        <StarIcon fontSize="inherit" />
        Favourites
      </Tab>
    </Paper>
  );
};

const Tab = styled.button`
  width: 30%;
  height: 50%;
  background-color: #626262;
  color: #eee;
  padding: 15px;
  margin: 2px;
  margin-bottom: -2px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 5px;
  border-top-right-radius: 40px 30px;
  &:active {
    background-color: #38414a;
    outline: none;
    border: none;
  }
  &:focus {
    background-color: #38414a;
    outline: none;
  }
  @media (max-width: 768px) {
    width: 80%;
    height:20%;
 
  }

  @media (max-width: 1024px) {
    font-size: 12px;
  }

 
`;

export default Tabs;
