import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Badge } from "@material-ui/core";
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
    [theme.breakpoints.up("xl")]: {
      height: "auto",
    },
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      height: "auto",
    },
  },
  badge: {
    width: "30%",
    height: "50%",
    marginBottom: 8,
    padding: 0,
    [theme.breakpoints.up("xl")]: {
      marginBottom: 5,
    },

    [theme.breakpoints.up("md")]: {
      width: "30%",
      height: "50%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      height: "20%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
      margin: 0,
    },

  },
}));

const Tabs = ({ hide }) => {
  const classes = useStyles();
  return (
    <Paper square elevation={0} className={clsx(classes.root, hide)}>
      <Badge
        badgeContent={4}
        color="secondary"
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        className={classes.badge}
      >
        <BadgeTab>
          <NotificationsIcon fontSize="inherit" />
          To Do
        </BadgeTab>
      </Badge>
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
    height: 20%;
  }

  @media (max-width: 1024px) {
    font-size: 12px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 50%;
    height: 20%;
  }
`;

const BadgeTab = styled.button`
  background-color: #626262;
  width: 100%;
  height: 30%;
  color: #eee;
  font-size: 14px;
  padding: 15px;
  margin: 2px;
  margin-bottom: -2px;
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
  
`;

export default Tabs;
