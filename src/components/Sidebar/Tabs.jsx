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
    justifyContent: "space-evenly",
    borderRight: "1px solid #38414a",
    height: 50,
    padding: "0px 5px 0px 5px",
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
    width: "32%",
    height: "50%",
    marginBottom: 8,
    marginRight:2,
    borderRadius: "5px",
    padding: 0,
    [theme.breakpoints.up("xl")]: {
      marginBottom: 3,
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
  padding: 15px 25px 15px 20px;
  margin: 2px;
  margin-bottom: -1px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid black;
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

  @media (min-width:1920px){
    font-size: 20px;
  }

  @media (max-width: 1280px) and (min-width: 1024px) {
    font-size: 12px;
  }

  @media (max-width: 960px) and (min-width: 768px) {
    width: 50%;
    height: 20%;
  }

  @media (max-width: 768px) {
    width: 50%;
    height: 20%;
  }

  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;

const BadgeTab = styled.button`
  background-color: #626262;
  width: 100%;
  height: 30%;
  color: #eee;
  font-size: 14px;
  padding: 15px 25px 15px 20px;
  margin: 2px;
  margin-bottom: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border: 1px solid black;
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
  @media (min-width:1920px){
    font-size: 20px;
  }

  @media (max-width: 1280px) and (min-width: 1024px) {
    font-size: 12px;
  }

  @media (max-width: 1024px) {
    font-size: 12px;
  }
`;

export default Tabs;
