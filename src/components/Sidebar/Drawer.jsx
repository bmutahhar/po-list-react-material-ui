import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import FormatListNumberedRoundedIcon from "@material-ui/icons/FormatListNumberedRounded";
import DashboardOutlinedIcon from "@material-ui/icons/DashboardOutlined";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import HelpIcon from "@material-ui/icons/Help";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import AppsIcon from "@material-ui/icons/Apps";

import Tabs from "./Tabs";
import { Paper } from "@material-ui/core";
const drawerWidth = "100%";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: drawerWidth,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    position: "relative",
  },
  drawerOpen: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    backgroundColor: "#38414a",
    color: "#eee",
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  iconsOpen: {
    color: "#eee",
    fontSize: "18px",
    [theme.breakpoints.down("md")]: {
      fontSize: "18px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "14px",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "32px",
    },
  },
  iconsClose: {
    color: "#365c70",
    fontSize: "24px",
  },
  selected: {
    color: "#5cd660",
  },
  selectedClosed: {
    transform: "scale(1.4,1.4)",
  },
  nested: {
    paddingLeft: theme.spacing(9),
  },
  tools: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#38414a",
    marginTop: 5,
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
  toolsIcons: {
    color: "#eee",
    fontSize: "20px",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      fontSize: "16px",
    },
  },
}));

const ToolsAndUserName = ({ display }) => {
  const classes = useStyles();
  return (
    <Paper square elevation={0} className={clsx(classes.hide, display)}>
      <IconButton classes={{ label: classes.toolsIcons }}>
        <AppsIcon />
        Tools
      </IconButton>
      <IconButton classes={{ label: classes.toolsIcons }}>
        <AccountCircleOutlinedIcon />
        Username
      </IconButton>
    </Paper>
  );
};

export default function MiniDrawer({
  open,
  handleDrawerOpen,
  handleDrawerClose,
}) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openAdmin, setOpenAdmin] = useState(false);
  const [openHelp, setOpenHelp] = useState(false);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const handleAdminClick = () => {
    setOpenAdmin(!openAdmin);
  };
  const handleHelpClick = () => {
    setOpenHelp(!openHelp);
  };

  const drawer = (
    <>
      <Tabs
        hide={{
          [classes.hide]: !open,
        }}
      />
      <Divider />
      <ToolsAndUserName
        display={{
          [classes.tools]: open,
        }}
      />
      <List>
        <ListItem
          button
          onClick={(event) => {
            handleDrawerOpen();
            handleListItemClick(event, 0);
          }}
          selected={selectedIndex === 0}
        >
          <ListItemIcon>
            <DashboardOutlinedIcon
              className={{
                [classes.iconsOpen]: open,
                [classes.iconsClose]: !open,
                [classes.selectedClosed]: !open && selectedIndex === 0,
                [classes.selected]: selectedIndex === 0,
              }}
            />
          </ListItemIcon>
          <ListItemText
            primary="Dashboard"
            classes={{
              primary: clsx(classes.iconsOpen, {
                [classes.selected]: selectedIndex === 0,
              }),
            }}
          />
        </ListItem>
        <ListItem
          button
          onClick={(event) => {
            handleDrawerOpen();
            handleListItemClick(event, 1);
          }}
          selected={selectedIndex === 1}
        >
          <ListItemIcon>
            <FormatListNumberedRoundedIcon
              className={{
                [classes.iconsOpen]: open,
                [classes.iconsClose]: !open,
                [classes.selectedClosed]: !open && selectedIndex === 1,
                [classes.selected]: selectedIndex === 1,
              }}
            />
          </ListItemIcon>
          <ListItemText
            primary="PO List"
            classes={{
              primary: clsx(classes.iconsOpen, {
                [classes.selected]: selectedIndex === 1,
              }),
            }}
          />
        </ListItem>
        <ListItem
          button
          onClick={(event) => {
            handleDrawerOpen();
            handleListItemClick(event, 2);
          }}
          selected={selectedIndex === 2}
        >
          <ListItemIcon>
            <FormatListNumberedRoundedIcon
              className={{
                [classes.iconsOpen]: open,
                [classes.iconsClose]: !open,
                [classes.selectedClosed]: !open && selectedIndex === 2,
                [classes.selected]: selectedIndex === 2,
              }}
            />
          </ListItemIcon>
          <ListItemText
            primary="My Tasks"
            classes={{
              primary: clsx(classes.iconsOpen, {
                [classes.selected]: selectedIndex === 2,
              }),
            }}
          />
        </ListItem>
        <ListItem
          button
          onClick={(event) => {
            handleDrawerOpen();
            handleListItemClick(event, 3);
          }}
          selected={selectedIndex === 3}
        >
          <ListItemIcon>
            <CreateOutlinedIcon
              className={{
                [classes.iconsOpen]: open,
                [classes.iconsClose]: !open,
                [classes.selectedClosed]: !open && selectedIndex === 3,
                [classes.selected]: selectedIndex === 3,
              }}
            />
          </ListItemIcon>
          <ListItemText
            primary="Create a PO"
            classes={{
              primary: clsx(classes.iconsOpen, {
                [classes.selected]: selectedIndex === 3,
              }),
            }}
          />
        </ListItem>
        <ListItem
          button
          onClick={(event) => {
            handleDrawerOpen();
            handleListItemClick(event, 4);
            handleAdminClick();
          }}
          selected={selectedIndex === 4}
        >
          <ListItemIcon>
            <SettingsOutlinedIcon
              className={{
                [classes.iconsOpen]: open,
                [classes.iconsClose]: !open,
                [classes.selectedClosed]: !open && selectedIndex === 4,
                [classes.selected]: selectedIndex === 4,
              }}
            />
          </ListItemIcon>
          <ListItemText
            primary="Admin"
            classes={{
              primary: clsx(classes.iconsOpen, {
                [classes.selected]: selectedIndex === 4,
              }),
            }}
          />
          <IconButton onClick={handleAdminClick} className={classes.iconsOpen}>
            {openAdmin ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </ListItem>
        <Collapse in={openAdmin} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="PO" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="SPIR" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem
          button
          onClick={(event) => {
            handleDrawerOpen();
            handleListItemClick(event, 5);
            handleHelpClick();
          }}
          selected={selectedIndex === 5}
        >
          <ListItemIcon>
            <HelpIcon
              className={{
                [classes.iconsOpen]: open,
                [classes.iconsClose]: !open,
                [classes.selectedClosed]: !open && selectedIndex === 5,
                [classes.selected]: selectedIndex === 5,
              }}
            />
          </ListItemIcon>
          <ListItemText
            primary="Help"
            classes={{
              primary: clsx(classes.iconsOpen, {
                [classes.selected]: selectedIndex === 5,
              }),
            }}
          />
          <IconButton onClick={handleHelpClick} className={classes.iconsOpen}>
            {openHelp ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </ListItem>
        <Collapse in={openHelp} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Documentation" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Tutorials" />
            </ListItem>
            <ListItem button className={classes.nested}>
              <ListItemText primary="Release notes" />
            </ListItem>
          </List>
        </Collapse>
        <Divider />
        <ListItem
          button
          onClick={() => {
            handleDrawerClose();
            setOpenAdmin(false);
            setOpenHelp(false);
          }}
        >
          <ListItemIcon>
            <CloseIcon
              className={{ [classes.iconsOpen]: open, [classes.hide]: !open }}
            />
          </ListItemIcon>
          <ListItemText
            primary="Close"
            classes={{ primary: classes.iconsOpen }}
          />
        </ListItem>
      </List>
    </>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx(classes.drawer, {
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        {drawer}
      </Drawer>
    </div>
  );
}
